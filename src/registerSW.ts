// Enregistrement du service worker — n'opère qu'en production (HTTPS ou localhost)
// et seulement si le navigateur supporte l'API.

export function registerServiceWorker() {
  if (typeof window === "undefined") return;
  if (!("serviceWorker" in navigator)) return;
  if (import.meta.env.DEV) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js", { scope: "./" })
      .then((reg) => {
        // Vérifier les mises à jour toutes les heures
        setInterval(() => reg.update(), 60 * 60 * 1000);

        reg.addEventListener("updatefound", () => {
          const sw = reg.installing;
          if (!sw) return;
          sw.addEventListener("statechange", () => {
            if (sw.state === "installed" && navigator.serviceWorker.controller) {
              // Nouvelle version disponible — l'activer immédiatement
              sw.postMessage("SKIP_WAITING");
            }
          });
        });
      })
      .catch((err) => {
        console.warn("[SW] échec d'enregistrement :", err);
      });

    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });
  });
}
