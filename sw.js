// Minimal service worker: makes the app installable; always fetches fresh files from the network.
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {});
