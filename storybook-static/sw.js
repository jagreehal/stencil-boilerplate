/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/stencil-app.js",
    "revision": "be0bc8885927ad246cac6951614f2d2c"
  },
  {
    "url": "build/stencil-app/etoebujy.es5.js",
    "revision": "af7095fcfcda9c27fe93a51f9f91632f"
  },
  {
    "url": "build/stencil-app/etoebujy.js",
    "revision": "12da3f10150963de5426dc429c04fbab"
  },
  {
    "url": "build/stencil-app/etoebujy.sc.es5.js",
    "revision": "9794cbedb211142e6b0b3bcd2a3af59b"
  },
  {
    "url": "build/stencil-app/etoebujy.sc.js",
    "revision": "65ed1797c8a4163314585ddb537515d9"
  },
  {
    "url": "build/stencil-app/stencil-app.cubrlw8l.js",
    "revision": "0ae6d12d6f25a3c7d199acb3042dd2c9"
  },
  {
    "url": "build/stencil-app/stencil-app.ofuaidp1.js",
    "revision": "a1f51a203a7560cefe48f10efbfe3fe3"
  },
  {
    "url": "index.html",
    "revision": "125ffaef30e398b0296b3f357b6dea36"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
