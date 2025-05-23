// Middleware global para CORS en todas las rutas de la API
//
// Si necesitas permitir más de un origen (por ejemplo, varios sitios),
// puedes modificar la lógica para que Access-Control-Allow-Origin acepte dinámicamente
// el valor adecuado según el origen de la petición. Ejemplo:
//
// const allowedOrigins = [
//   'https://fiesta.alfonso.ar',
//   'https://otro-sitio.com',
// ];
// const origin = request.headers.get('origin');
// if (origin && allowedOrigins.includes(origin)) {
//   response.headers.set('Access-Control-Allow-Origin', origin);
// } else {
//   response.headers.set('Access-Control-Allow-Origin', 'https://fiesta.alfonso.ar');
// }
//
// Así puedes agregar/quitar orígenes fácilmente.
//
// Más información: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', 'https://fiesta.alfonso.ar');
  response.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Allow-Credentials', 'true');

  // Manejo de preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: response.headers,
    });
  }

  return response;
}

export const config = {
  matcher: ['/api/:path*'],
};
