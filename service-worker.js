const CACHE_NAME = "diario-treino-v16";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-192-maskable.png",
  "./icons/icon-512.png",
  "./icons/icon-512-maskable.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key.startsWith("diario-treino-") && key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Cache-first: mantém o app disponível offline; aumente a versão ao publicar mudanças.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response && response.ok) {
            return caches.open(CACHE_NAME)
              .then((cache) => cache.put(event.request, response.clone()))
              .then(() => response)
              .catch(() => response);
          }
          return response;
        })
        .catch(() => new Response("Offline e recurso não disponível no cache.", {
          status: 503,
          headers: { "Content-Type": "text/plain; charset=utf-8" }
        }));
    })
  );
});
