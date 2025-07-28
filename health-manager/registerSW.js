if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/health-manager/sw.js", {
      scope: "/health-manager/",
    });
  });
}
