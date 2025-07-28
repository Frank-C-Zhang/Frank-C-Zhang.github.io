if (!self.define) {
  let e,
    s = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[t]) return;
    let o = {};
    const l = (e) => i(e, t),
      u = { module: { uri: t }, exports: o, require: l };
    s[t] = Promise.all(n.map((e) => u[e] || l(e))).then((e) => (r(...e), o));
  };
}
define(["./workbox-5ffe50d4"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "assets/index-DCcZzsck.css", revision: null },
        { url: "assets/index-DcqP9Wuv.js", revision: null },
        { url: "assets/index-DEmRjhou.css", revision: null },
        { url: "assets/index-wiO48ZDf.js", revision: null },
        { url: "assets/setting_icon-Zxx495j2.jpg", revision: null },
        { url: "icon.png", revision: "428f32731740dad3aa38356a42e1b130" },
        { url: "index.html", revision: "a760b61ffdac2541e534d628b0628209" },
        { url: "registerSW.js", revision: "c6db0cb80576207e4f8655c9e18cbad9" },
        { url: "vite.svg", revision: "8e3a10e157f75ada21ab742c022d5430" },
        {
          url: "manifest.webmanifest",
          revision: "1fea05253cecb8e003b05f36e117fdb7",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    );
});
