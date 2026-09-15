import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const staticPaths = [
  '/',
  '/dog/',
  '/cat/',
  '/guides/',
  '/about/',
  '/privacy/',
  '/contact/',
  '/editorial-policy/',
  '/tools/',
  '/tools/routine/',
  '/tools/feeding/',
];

export const GET: APIRoute = async ({ site }) => {
  const guides = await getCollection('guides');
  const urls = [
    ...staticPaths,
    ...guides.map((guide) => `/guides/${guide.data.slug}/`),
  ];
  const origin = site?.toString().replace(/\/$/, '') ?? 'https://pet.emfls.com';
  const body = urls.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
