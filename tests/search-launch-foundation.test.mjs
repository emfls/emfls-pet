import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const verificationFilename = 'navere4a2be9a6dea6acc28cccd1fb834c95a.html';
const verificationBody = `naver-site-verification: ${verificationFilename}`;
const verificationFunction = fileURLToPath(new URL(`functions/${verificationFilename}.js`, root));

test('Naver ownership verification is served at the exact .html URL', async () => {
  const { onRequest } = await import(pathToFileURL(verificationFunction));
  const response = await onRequest({
    request: new Request(`https://pet.emfls.com/${verificationFilename}`),
  });

  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type') ?? '', /^text\/html(?:;|$)/);
  assert.equal(await response.text(), verificationBody);
});

test('Naver verification responds to crawler HEAD and refuses unsupported methods', async () => {
  const { onRequest } = await import(pathToFileURL(verificationFunction));
  const head = await onRequest({
    request: new Request(`https://pet.emfls.com/${verificationFilename}`, { method: 'HEAD' }),
  });
  const post = await onRequest({
    request: new Request(`https://pet.emfls.com/${verificationFilename}`, { method: 'POST' }),
  });

  assert.equal(head.status, 200);
  assert.equal(await head.text(), '');
  assert.equal(post.status, 405);
  assert.equal(post.headers.get('allow'), 'GET, HEAD');
});

test('Pages Functions are invoked only for the exact Naver verification route', async () => {
  const routes = JSON.parse(await readFile(new URL('public/_routes.json', root), 'utf8'));

  assert.deepEqual(routes, {
    version: 1,
    include: [`/${verificationFilename}`],
    exclude: [],
  });
});

test('IndexNow key file has a matching 256-bit hexadecimal public key value', async () => {
  const files = await readdir(new URL('public/', root));
  const keyFiles = files.filter((file) => /^[a-f0-9]{64}\.txt$/.test(file));

  assert.equal(keyFiles.length, 1, 'exactly one 64-character hexadecimal IndexNow key file exists');
  assert.equal(await readFile(new URL(`public/${keyFiles[0]}`, root), 'utf8'), keyFiles[0].slice(0, -4));
});
