import html2canvas from 'html2canvas'; // Importa la biblioteca

export default async function downloadQrCode(filename: string) {
  const containerToCapture = document.getElementById('qr-code');
  // const containerToCapture = document.querySelector('div.inline-block'); // Alternativa si prefieres la clase

  if (!containerToCapture) {
    alert('QR code container element not found');
    return;
  }

  try {
    // 2. Usa html2canvas para generar un canvas a partir del div
    // Puedes pasar opciones para ajustar la calidad, como 'scale'
    const canvas = await html2canvas(containerToCapture, {
      scale: 2, // Escala la captura (ej: 2 para doble resolución) - mejora la calidad
      useCORS: true, // Necesario si hay imágenes de otros dominios dentro del div
      backgroundColor: null, // O '#ffffff' si quieres fondo blanco en vez de transparente
      logging: false, // Desactiva los logs de html2canvas en la consola
    });

    // 3. Convierte el canvas a una imagen PNG
    // Usamos toDataURL directamente del canvas generado por html2canvas
    const imgURI = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'); // Fuerza la descarga

    // 4. Crea el enlace y simula el clic para descargar
    const a = document.createElement('a');
    a.setAttribute('download', `${filename} - QR.png`); // nombre
    a.setAttribute('href', imgURI);
    document.body.appendChild(a); // Necesario para compatibilidad
    a.click();
    document.body.removeChild(a); // Limpia el enlace del DOM
  } catch (error) {
    console.error('Error generating QR code image with html2canvas:', error);
    alert('Could not generate image from the QR code container.');
  }
}
