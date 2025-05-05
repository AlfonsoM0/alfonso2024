/**
 * Convierte un objeto JavaScript en una representación de cadena formateada
 * adecuada para incrustar en HTML, utilizando <br> para saltos de línea
 * y &nbsp; para la indentación.
 *
 * @param obj El objeto a convertir.
 * @param initialIndent Nivel de indentación inicial (usado internamente para recursión).
 * @returns Una cadena formateada en HTML que representa el objeto.
 */
export default function objectToHtmlString(obj: object, indent = 2): string {
  // Usamos JSON.stringify para una serialización inicial y formateo básico
  // El segundo argumento (null) es para el replacer, no lo necesitamos aquí.
  // El tercer argumento indent especifica el número de espacios para la indentación.
  const jsonString = JSON.stringify(obj, null, indent);

  // Dividir el string JSON en líneas
  const lines = jsonString.split('\n');

  // Procesar cada línea para reemplazar espacios de indentación con &nbsp;
  // y añadir <br> al final de cada línea (excepto la última)
  const htmlLines = lines.map((line, index) => {
    // Calcular la indentación contando los espacios al principio
    const leadingSpaces = line.match(/^ */)?.[0].length || 0;
    const indentHtml = '&nbsp;'.repeat(leadingSpaces);
    // Reemplazar los espacios iniciales con &nbsp; y quitar los espacios originales
    const content = line.trimStart();
    // Añadir <br> si no es la última línea
    const lineBreak = index < lines.length - 1 ? '<br>' : '';
    return `${indentHtml}${content}${lineBreak}`;
  });
  // Unir las líneas procesadas en un solo string HTML
  return htmlLines.join('');
}
