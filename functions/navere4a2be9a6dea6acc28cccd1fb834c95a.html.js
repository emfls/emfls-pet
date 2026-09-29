const verificationBody = 'naver-site-verification: navere4a2be9a6dea6acc28cccd1fb834c95a.html';
const headers = { 'content-type': 'text/html; charset=utf-8' };

export function onRequest({ request }) {
  if (request.method === 'GET') {
    return new Response(verificationBody, { status: 200, headers });
  }

  if (request.method === 'HEAD') {
    return new Response(null, { status: 200, headers });
  }

  return new Response('Method Not Allowed', {
    status: 405,
    headers: { ...headers, allow: 'GET, HEAD' },
  });
}
