// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
(function(modules, entry, mainEntry, parcelRequireName, globalName) {
    /* eslint-disable no-undef */ var globalObject = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
    /* eslint-enable no-undef */ // Save the require from previous bundle to this closure if any
    var previousRequire = typeof globalObject[parcelRequireName] === "function" && globalObject[parcelRequireName];
    var cache = previousRequire.cache || {};
    // Do not use `require` to prevent Webpack from trying to bundle this call
    var nodeRequire = typeof module !== "undefined" && typeof module.require === "function" && module.require.bind(module);
    function newRequire(name, jumped) {
        if (!cache[name]) {
            if (!modules[name]) {
                // if we cannot find the module within our internal map or
                // cache jump to the current global require ie. the last bundle
                // that was added to the page.
                var currentRequire = typeof globalObject[parcelRequireName] === "function" && globalObject[parcelRequireName];
                if (!jumped && currentRequire) return currentRequire(name, true);
                // If there are other bundles on this page the require from the
                // previous one is saved to 'previousRequire'. Repeat this as
                // many times as there are bundles until the module is found or
                // we exhaust the require chain.
                if (previousRequire) return previousRequire(name, true);
                // Try the node require function if it exists.
                if (nodeRequire && typeof name === "string") return nodeRequire(name);
                var err = new Error("Cannot find module '" + name + "'");
                err.code = "MODULE_NOT_FOUND";
                throw err;
            }
            localRequire.resolve = resolve;
            localRequire.cache = {};
            var module1 = cache[name] = new newRequire.Module(name);
            modules[name][0].call(module1.exports, localRequire, module1, module1.exports, this);
        }
        return cache[name].exports;
        function localRequire(x) {
            var res = localRequire.resolve(x);
            return res === false ? {} : newRequire(res);
        }
        function resolve(x) {
            var id = modules[name][1][x];
            return id != null ? id : x;
        }
    }
    function Module(moduleName) {
        this.id = moduleName;
        this.bundle = newRequire;
        this.exports = {};
    }
    newRequire.isParcelRequire = true;
    newRequire.Module = Module;
    newRequire.modules = modules;
    newRequire.cache = cache;
    newRequire.parent = previousRequire;
    newRequire.register = function(id, exports1) {
        modules[id] = [
            function(require, module1) {
                module1.exports = exports1;
            },
            {}
        ];
    };
    Object.defineProperty(newRequire, "root", {
        get: function() {
            return globalObject[parcelRequireName];
        }
    });
    globalObject[parcelRequireName] = newRequire;
    for(var i = 0; i < entry.length; i++)newRequire(entry[i]);
    if (mainEntry) {
        // Expose entry point to Node, AMD or browser globals
        // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
        var mainExports = newRequire(mainEntry);
        // CommonJS
        if (typeof exports === "object" && typeof module !== "undefined") module.exports = mainExports;
        else if (typeof define === "function" && define.amd) define(function() {
            return mainExports;
        });
        else if (globalName) this[globalName] = mainExports;
    }
})({
    "jQVXF": [
        function(require, module1, exports1) {
            var global1 = arguments[3];
            var HMR_HOST = null;
            var HMR_PORT = null;
            var HMR_SECURE = false;
            var HMR_ENV_HASH = "d6ea1d42532a7575";
            module1.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
            "use strict";
            /* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
            var OldModule = module1.bundle.Module;
            function Module(moduleName) {
                OldModule.call(this, moduleName);
                this.hot = {
                    data: module1.bundle.hotData,
                    _acceptCallbacks: [],
                    _disposeCallbacks: [],
                    accept: function(fn) {
                        this._acceptCallbacks.push(fn || function() {});
                    },
                    dispose: function(fn) {
                        this._disposeCallbacks.push(fn);
                    }
                };
                module1.bundle.hotData = undefined;
            }
            module1.bundle.Module = Module;
            var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
            function getHostname() {
                return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
            }
            function getPort() {
                return HMR_PORT || location.port;
            } // eslint-disable-next-line no-redeclare
            var parent = module1.bundle.parent;
            if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
                var hostname = getHostname();
                var port = getPort();
                var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
                var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
                var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
                // eval may also be disabled via CSP, so do a quick check.
                var supportsSourceURL = false;
                try {
                    (0, eval)('throw new Error("test"); //# sourceURL=test.js');
                } catch (err) {
                    supportsSourceURL = err.stack.includes("test.js");
                } // $FlowFixMe
                ws.onmessage = async function(event1) {
                    checkedAssets = {} /*: {|[string]: boolean|} */ ;
                    acceptedAssets = {} /*: {|[string]: boolean|} */ ;
                    assetsToAccept = [];
                    var data = JSON.parse(event1.data);
                    if (data.type === "update") {
                        // Remove error overlay if there is one
                        if (typeof document !== "undefined") removeErrorOverlay();
                        let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
                        let handled = assets.every((asset)=>{
                            return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module1.bundle.root, asset.id, asset.depsByBundle);
                        });
                        if (handled) {
                            console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                            if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                            await hmrApplyUpdates(assets);
                            for(var i = 0; i < assetsToAccept.length; i++){
                                var id = assetsToAccept[i][1];
                                if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                            }
                        } else fullReload();
                    }
                    if (data.type === "error") {
                        // Log parcel errors to console
                        for (let ansiDiagnostic of data.diagnostics.ansi){
                            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
                        }
                        if (typeof document !== "undefined") {
                            // Render the fancy html overlay
                            removeErrorOverlay();
                            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                            document.body.appendChild(overlay);
                        }
                    }
                };
                ws.onerror = function(e) {
                    console.error(e.message);
                };
                ws.onclose = function() {
                    console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
                };
            }
            function removeErrorOverlay() {
                var overlay = document.getElementById(OVERLAY_ID);
                if (overlay) {
                    overlay.remove();
                    console.log("[parcel] ✨ Error resolved");
                }
            }
            function createErrorOverlay(diagnostics) {
                var overlay = document.createElement("div");
                overlay.id = OVERLAY_ID;
                let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
                for (let diagnostic of diagnostics){
                    let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
                        return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
                    }, "") : diagnostic.stack;
                    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
                }
                errorHTML += "</div>";
                overlay.innerHTML = errorHTML;
                return overlay;
            }
            function fullReload() {
                if ("reload" in location) location.reload();
                else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
            }
            function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
                var modules = bundle.modules;
                if (!modules) return [];
                var parents = [];
                var k, d, dep;
                for(k in modules)for(d in modules[k][1]){
                    dep = modules[k][1][d];
                    if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
                        bundle,
                        k
                    ]);
                }
                if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
                return parents;
            }
            function updateLink(link) {
                var newLink = link.cloneNode();
                newLink.onload = function() {
                    if (link.parentNode !== null) link.parentNode.removeChild(link);
                };
                newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
                link.parentNode.insertBefore(newLink, link.nextSibling);
            }
            var cssTimeout = null;
            function reloadCSS() {
                if (cssTimeout) return;
                cssTimeout = setTimeout(function() {
                    var links = document.querySelectorAll('link[rel="stylesheet"]');
                    for(var i = 0; i < links.length; i++){
                        // $FlowFixMe[incompatible-type]
                        var href = links[i].getAttribute("href");
                        var hostname = getHostname();
                        var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
                        var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
                        if (!absolute) updateLink(links[i]);
                    }
                    cssTimeout = null;
                }, 50);
            }
            function hmrDownload(asset) {
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url + "?t=" + Date.now();
                        if (asset.outputFormat === "esmodule") script.type = "module";
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") {
                        // Worker scripts
                        if (asset.outputFormat === "esmodule") return __parcel__require__(asset.url + "?t=" + Date.now());
                        else return new Promise((resolve, reject)=>{
                            try {
                                importScripts(asset.url + "?t=" + Date.now());
                                resolve();
                            } catch (err) {
                                reject(err);
                            }
                        });
                    }
                }
            }
            async function hmrApplyUpdates(assets) {
                global1.parcelHotUpdate = Object.create(null);
                let scriptsToRemove;
                try {
                    // If sourceURL comments aren't supported in eval, we need to load
                    // the update from the dev server over HTTP so that stack traces
                    // are correct in errors/logs. This is much slower than eval, so
                    // we only do it if needed (currently just Safari).
                    // https://bugs.webkit.org/show_bug.cgi?id=137297
                    // This path is also taken if a CSP disallows eval.
                    if (!supportsSourceURL) {
                        let promises = assets.map((asset)=>{
                            var _hmrDownload;
                            return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                                // Web extension bugfix for Chromium
                                // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                                if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                                    if (typeof ServiceWorkerGlobalScope != "undefined" && global1 instanceof ServiceWorkerGlobalScope) {
                                        extCtx.runtime.reload();
                                        return;
                                    }
                                    asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                                    return hmrDownload(asset);
                                }
                                throw err;
                            });
                        });
                        scriptsToRemove = await Promise.all(promises);
                    }
                    assets.forEach(function(asset) {
                        hmrApply(module1.bundle.root, asset);
                    });
                } finally{
                    delete global1.parcelHotUpdate;
                    if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
                        if (script) {
                            var _document$head2;
                            (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
                        }
                    });
                }
            }
            function hmrApply(bundle, asset) {
                var modules = bundle.modules;
                if (!modules) return;
                if (asset.type === "css") reloadCSS();
                else if (asset.type === "js") {
                    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
                    if (deps) {
                        if (modules[asset.id]) {
                            // Remove dependencies that are removed and will become orphaned.
                            // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                            let oldDeps = modules[asset.id][1];
                            for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                                let id = oldDeps[dep];
                                let parents = getParents(module1.bundle.root, id);
                                if (parents.length === 1) hmrDelete(module1.bundle.root, id);
                            }
                        }
                        if (supportsSourceURL) // support for source maps is better with eval.
                        (0, eval)(asset.output);
                        // $FlowFixMe
                        let fn = global1.parcelHotUpdate[asset.id];
                        modules[asset.id] = [
                            fn,
                            deps
                        ];
                    } else if (bundle.parent) hmrApply(bundle.parent, asset);
                }
            }
            function hmrDelete(bundle, id) {
                let modules = bundle.modules;
                if (!modules) return;
                if (modules[id]) {
                    // Collect dependencies that will become orphaned when this module is deleted.
                    let deps = modules[id][1];
                    let orphans = [];
                    for(let dep in deps){
                        let parents = getParents(module1.bundle.root, deps[dep]);
                        if (parents.length === 1) orphans.push(deps[dep]);
                    } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
                    delete modules[id];
                    delete bundle.cache[id]; // Now delete the orphans.
                    orphans.forEach((id)=>{
                        hmrDelete(module1.bundle.root, id);
                    });
                } else if (bundle.parent) hmrDelete(bundle.parent, id);
            }
            function hmrAcceptCheck(bundle, id, depsByBundle) {
                if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
                // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
                let parents = getParents(module1.bundle.root, id);
                let accepted = false;
                while(parents.length > 0){
                    let v = parents.shift();
                    let a = hmrAcceptCheckOne(v[0], v[1], null);
                    if (a) accepted = true;
                    else {
                        // Otherwise, queue the parents in the next level upward.
                        let p = getParents(module1.bundle.root, v[1]);
                        if (p.length === 0) {
                            // If there are no parents, then we've reached an entry without accepting. Reload.
                            accepted = false;
                            break;
                        }
                        parents.push(...p);
                    }
                }
                return accepted;
            }
            function hmrAcceptCheckOne(bundle, id, depsByBundle) {
                var modules = bundle.modules;
                if (!modules) return;
                if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
                    // If we reached the root bundle without finding where the asset should go,
                    // there's nothing to do. Mark as "accepted" so we don't reload the page.
                    if (!bundle.parent) return true;
                    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
                }
                if (checkedAssets[id]) return true;
                checkedAssets[id] = true;
                var cached = bundle.cache[id];
                assetsToAccept.push([
                    bundle,
                    id
                ]);
                if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
            }
            function hmrAcceptRun(bundle, id) {
                var cached = bundle.cache[id];
                bundle.hotData = {};
                if (cached && cached.hot) cached.hot.data = bundle.hotData;
                if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
                    cb(bundle.hotData);
                });
                delete bundle.cache[id];
                bundle(id);
                cached = bundle.cache[id];
                if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
                    var assetsToAlsoAccept = cb(function() {
                        return getParents(module1.bundle.root, id);
                    });
                    if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
                });
                acceptedAssets[id] = true;
            }
        },
        {}
    ],
    "1SICI": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            var _swiper = require("swiper");
            var _swiperDefault = parcelHelpers.interopDefault(_swiper);
            var _swiperBundleMinCss = require("swiper/swiper-bundle.min.css");
            var _aos = require("aos");
            var _aosDefault = parcelHelpers.interopDefault(_aos);
            var _aosCss = require("aos/dist/aos.css"); // You can also use <link> for styles
            const slide_two = document.querySelector(".swiper-slide-two");
            const swiper = new _swiperDefault.default(".swiper", {
                modules: [
                    _swiper.Pagination,
                    _swiper.Autoplay
                ],
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true
                }
            });
            const topic_nav = document.querySelector(".topics-nav ul");
            const main_topics = document.querySelectorAll(".main_topics");
            topic_nav.addEventListener("click", function(e) {
                let chd = this.querySelectorAll(".li_nav");
                for (let f of chd){
                    for (let b of main_topics)if (e.target.textContent == f.textContent) {
                        let currentIdex = Array.from(f.parentNode.children).indexOf(f);
                        f.addEventListener("click", (e)=>{
                            for (let afv of chd)if (afv.classList.contains("li_nav_active")) afv.classList.remove("li_nav_active");
                            f.classList.add("li_nav_active");
                            for (let gfd of b.children){
                                gfd.classList.add("non-visible");
                                gfd.classList.remove("visible");
                                b.children[currentIdex].classList.add("visible");
                            }
                        });
                    }
                }
            });
            // ..
            (0, _aosDefault.default).init({
                // Global settings:
                disable: false,
                startEvent: "DOMContentLoaded",
                initClassName: "aos-init",
                animatedClassName: "aos-animate",
                useClassNames: false,
                disableMutationObserver: false,
                debounceDelay: 50,
                throttleDelay: 99,
                // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
                offset: 120,
                delay: 0,
                duration: 1000,
                easing: "ease",
                once: false,
                mirror: false,
                anchorPlacement: "top-bottom"
            });
        },
        {
            "swiper": "cCbRx",
            "swiper/swiper-bundle.min.css": "girFM",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3",
            "aos": "eRzTM",
            "aos/dist/aos.css": "iYkXi"
        }
    ],
    "cCbRx": [
        function(require, module1, exports1) {
            /**
 * Swiper 8.4.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 21, 2022
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            parcelHelpers.export(exports1, "Swiper", ()=>_coreJsDefault.default);
            parcelHelpers.export(exports1, "default", ()=>_coreJsDefault.default);
            parcelHelpers.export(exports1, "Virtual", ()=>_virtualJsDefault.default);
            parcelHelpers.export(exports1, "Keyboard", ()=>_keyboardJsDefault.default);
            parcelHelpers.export(exports1, "Mousewheel", ()=>_mousewheelJsDefault.default);
            parcelHelpers.export(exports1, "Navigation", ()=>_navigationJsDefault.default);
            parcelHelpers.export(exports1, "Pagination", ()=>_paginationJsDefault.default);
            parcelHelpers.export(exports1, "Scrollbar", ()=>_scrollbarJsDefault.default);
            parcelHelpers.export(exports1, "Parallax", ()=>_parallaxJsDefault.default);
            parcelHelpers.export(exports1, "Zoom", ()=>_zoomJsDefault.default);
            parcelHelpers.export(exports1, "Lazy", ()=>_lazyJsDefault.default);
            parcelHelpers.export(exports1, "Controller", ()=>_controllerJsDefault.default);
            parcelHelpers.export(exports1, "A11y", ()=>_a11YJsDefault.default);
            parcelHelpers.export(exports1, "History", ()=>_historyJsDefault.default);
            parcelHelpers.export(exports1, "HashNavigation", ()=>_hashNavigationJsDefault.default);
            parcelHelpers.export(exports1, "Autoplay", ()=>_autoplayJsDefault.default);
            parcelHelpers.export(exports1, "Thumbs", ()=>_thumbsJsDefault.default);
            parcelHelpers.export(exports1, "FreeMode", ()=>_freeModeJsDefault.default);
            parcelHelpers.export(exports1, "Grid", ()=>_gridJsDefault.default);
            parcelHelpers.export(exports1, "Manipulation", ()=>_manipulationJsDefault.default);
            parcelHelpers.export(exports1, "EffectFade", ()=>_effectFadeJsDefault.default);
            parcelHelpers.export(exports1, "EffectCube", ()=>_effectCubeJsDefault.default);
            parcelHelpers.export(exports1, "EffectFlip", ()=>_effectFlipJsDefault.default);
            parcelHelpers.export(exports1, "EffectCoverflow", ()=>_effectCoverflowJsDefault.default);
            parcelHelpers.export(exports1, "EffectCreative", ()=>_effectCreativeJsDefault.default);
            parcelHelpers.export(exports1, "EffectCards", ()=>_effectCardsJsDefault.default);
            var _coreJs = require("./core/core.js");
            var _coreJsDefault = parcelHelpers.interopDefault(_coreJs);
            var _virtualJs = require("./modules/virtual/virtual.js");
            var _virtualJsDefault = parcelHelpers.interopDefault(_virtualJs);
            var _keyboardJs = require("./modules/keyboard/keyboard.js");
            var _keyboardJsDefault = parcelHelpers.interopDefault(_keyboardJs);
            var _mousewheelJs = require("./modules/mousewheel/mousewheel.js");
            var _mousewheelJsDefault = parcelHelpers.interopDefault(_mousewheelJs);
            var _navigationJs = require("./modules/navigation/navigation.js");
            var _navigationJsDefault = parcelHelpers.interopDefault(_navigationJs);
            var _paginationJs = require("./modules/pagination/pagination.js");
            var _paginationJsDefault = parcelHelpers.interopDefault(_paginationJs);
            var _scrollbarJs = require("./modules/scrollbar/scrollbar.js");
            var _scrollbarJsDefault = parcelHelpers.interopDefault(_scrollbarJs);
            var _parallaxJs = require("./modules/parallax/parallax.js");
            var _parallaxJsDefault = parcelHelpers.interopDefault(_parallaxJs);
            var _zoomJs = require("./modules/zoom/zoom.js");
            var _zoomJsDefault = parcelHelpers.interopDefault(_zoomJs);
            var _lazyJs = require("./modules/lazy/lazy.js");
            var _lazyJsDefault = parcelHelpers.interopDefault(_lazyJs);
            var _controllerJs = require("./modules/controller/controller.js");
            var _controllerJsDefault = parcelHelpers.interopDefault(_controllerJs);
            var _a11YJs = require("./modules/a11y/a11y.js");
            var _a11YJsDefault = parcelHelpers.interopDefault(_a11YJs);
            var _historyJs = require("./modules/history/history.js");
            var _historyJsDefault = parcelHelpers.interopDefault(_historyJs);
            var _hashNavigationJs = require("./modules/hash-navigation/hash-navigation.js");
            var _hashNavigationJsDefault = parcelHelpers.interopDefault(_hashNavigationJs);
            var _autoplayJs = require("./modules/autoplay/autoplay.js");
            var _autoplayJsDefault = parcelHelpers.interopDefault(_autoplayJs);
            var _thumbsJs = require("./modules/thumbs/thumbs.js");
            var _thumbsJsDefault = parcelHelpers.interopDefault(_thumbsJs);
            var _freeModeJs = require("./modules/free-mode/free-mode.js");
            var _freeModeJsDefault = parcelHelpers.interopDefault(_freeModeJs);
            var _gridJs = require("./modules/grid/grid.js");
            var _gridJsDefault = parcelHelpers.interopDefault(_gridJs);
            var _manipulationJs = require("./modules/manipulation/manipulation.js");
            var _manipulationJsDefault = parcelHelpers.interopDefault(_manipulationJs);
            var _effectFadeJs = require("./modules/effect-fade/effect-fade.js");
            var _effectFadeJsDefault = parcelHelpers.interopDefault(_effectFadeJs);
            var _effectCubeJs = require("./modules/effect-cube/effect-cube.js");
            var _effectCubeJsDefault = parcelHelpers.interopDefault(_effectCubeJs);
            var _effectFlipJs = require("./modules/effect-flip/effect-flip.js");
            var _effectFlipJsDefault = parcelHelpers.interopDefault(_effectFlipJs);
            var _effectCoverflowJs = require("./modules/effect-coverflow/effect-coverflow.js");
            var _effectCoverflowJsDefault = parcelHelpers.interopDefault(_effectCoverflowJs);
            var _effectCreativeJs = require("./modules/effect-creative/effect-creative.js");
            var _effectCreativeJsDefault = parcelHelpers.interopDefault(_effectCreativeJs);
            var _effectCardsJs = require("./modules/effect-cards/effect-cards.js");
            var _effectCardsJsDefault = parcelHelpers.interopDefault(_effectCardsJs);
        },
        {
            "./core/core.js": "jvZQa",
            "./modules/virtual/virtual.js": "13JV9",
            "./modules/keyboard/keyboard.js": "82wTs",
            "./modules/mousewheel/mousewheel.js": "dP6Ui",
            "./modules/navigation/navigation.js": "lGdRo",
            "./modules/pagination/pagination.js": "40Lys",
            "./modules/scrollbar/scrollbar.js": "bfOsF",
            "./modules/parallax/parallax.js": "aEM3Y",
            "./modules/zoom/zoom.js": "5YHxH",
            "./modules/lazy/lazy.js": "kPhLF",
            "./modules/controller/controller.js": "hcdrq",
            "./modules/a11y/a11y.js": "lDTl7",
            "./modules/history/history.js": "7pifE",
            "./modules/hash-navigation/hash-navigation.js": "6TTnC",
            "./modules/autoplay/autoplay.js": "1YoHq",
            "./modules/thumbs/thumbs.js": "e0dJV",
            "./modules/free-mode/free-mode.js": "4NFQW",
            "./modules/grid/grid.js": "gE5KG",
            "./modules/manipulation/manipulation.js": "ga5Sr",
            "./modules/effect-fade/effect-fade.js": "fBGpM",
            "./modules/effect-cube/effect-cube.js": "hV6iY",
            "./modules/effect-flip/effect-flip.js": "dI6Dz",
            "./modules/effect-coverflow/effect-coverflow.js": "9UFNU",
            "./modules/effect-creative/effect-creative.js": "6uSvC",
            "./modules/effect-cards/effect-cards.js": "9saRD",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "jvZQa": [
        function(require, module1, exports1) {
            /* eslint no-param-reassign: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _ssrWindow = require("ssr-window");
            var _domJs = require("../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            var _utilsJs = require("../shared/utils.js");
            var _getSupportJs = require("../shared/get-support.js");
            var _getDeviceJs = require("../shared/get-device.js");
            var _getBrowserJs = require("../shared/get-browser.js");
            var _resizeJs = require("./modules/resize/resize.js");
            var _resizeJsDefault = parcelHelpers.interopDefault(_resizeJs);
            var _observerJs = require("./modules/observer/observer.js");
            var _observerJsDefault = parcelHelpers.interopDefault(_observerJs);
            var _eventsEmitterJs = require("./events-emitter.js");
            var _eventsEmitterJsDefault = parcelHelpers.interopDefault(_eventsEmitterJs);
            var _indexJs = require("./update/index.js");
            var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
            var _indexJs1 = require("./translate/index.js");
            var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
            var _indexJs2 = require("./transition/index.js");
            var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
            var _indexJs3 = require("./slide/index.js");
            var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
            var _indexJs4 = require("./loop/index.js");
            var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
            var _indexJs5 = require("./grab-cursor/index.js");
            var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
            var _indexJs6 = require("./events/index.js");
            var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
            var _indexJs7 = require("./breakpoints/index.js");
            var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
            var _indexJs8 = require("./classes/index.js");
            var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs8);
            var _indexJs9 = require("./images/index.js");
            var _indexJsDefault9 = parcelHelpers.interopDefault(_indexJs9);
            var _indexJs10 = require("./check-overflow/index.js");
            var _indexJsDefault10 = parcelHelpers.interopDefault(_indexJs10);
            var _defaultsJs = require("./defaults.js");
            var _defaultsJsDefault = parcelHelpers.interopDefault(_defaultsJs);
            var _moduleExtendParamsJs = require("./moduleExtendParams.js");
            var _moduleExtendParamsJsDefault = parcelHelpers.interopDefault(_moduleExtendParamsJs);
            const prototypes = {
                eventsEmitter: _eventsEmitterJsDefault.default,
                update: _indexJsDefault.default,
                translate: _indexJsDefault1.default,
                transition: _indexJsDefault2.default,
                slide: _indexJsDefault3.default,
                loop: _indexJsDefault4.default,
                grabCursor: _indexJsDefault5.default,
                events: _indexJsDefault6.default,
                breakpoints: _indexJsDefault7.default,
                checkOverflow: _indexJsDefault10.default,
                classes: _indexJsDefault8.default,
                images: _indexJsDefault9.default
            };
            const extendedDefaults = {};
            class Swiper {
                constructor(...args){
                    let el;
                    let params;
                    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0];
                    else [el, params] = args;
                    if (!params) params = {};
                    params = (0, _utilsJs.extend)({}, params);
                    if (el && !params.el) params.el = el;
                    if (params.el && (0, _domJsDefault.default)(params.el).length > 1) {
                        const swipers = [];
                        (0, _domJsDefault.default)(params.el).each((containerEl)=>{
                            const newParams = (0, _utilsJs.extend)({}, params, {
                                el: containerEl
                            });
                            swipers.push(new Swiper(newParams));
                        }); // eslint-disable-next-line no-constructor-return
                        return swipers;
                    } // Swiper Instance
                    const swiper = this;
                    swiper.__swiper__ = true;
                    swiper.support = (0, _getSupportJs.getSupport)();
                    swiper.device = (0, _getDeviceJs.getDevice)({
                        userAgent: params.userAgent
                    });
                    swiper.browser = (0, _getBrowserJs.getBrowser)();
                    swiper.eventsListeners = {};
                    swiper.eventsAnyListeners = [];
                    swiper.modules = [
                        ...swiper.__modules__
                    ];
                    if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                    const allModulesParams = {};
                    swiper.modules.forEach((mod)=>{
                        mod({
                            swiper,
                            extendParams: (0, _moduleExtendParamsJsDefault.default)(params, allModulesParams),
                            on: swiper.on.bind(swiper),
                            once: swiper.once.bind(swiper),
                            off: swiper.off.bind(swiper),
                            emit: swiper.emit.bind(swiper)
                        });
                    }); // Extend defaults with modules params
                    const swiperParams = (0, _utilsJs.extend)({}, _defaultsJsDefault.default, allModulesParams); // Extend defaults with passed params
                    swiper.params = (0, _utilsJs.extend)({}, swiperParams, extendedDefaults, params);
                    swiper.originalParams = (0, _utilsJs.extend)({}, swiper.params);
                    swiper.passedParams = (0, _utilsJs.extend)({}, params); // add event listeners
                    if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName)=>{
                        swiper.on(eventName, swiper.params.on[eventName]);
                    });
                    if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                    // Save Dom lib
                    swiper.$ = _domJsDefault.default; // Extend Swiper
                    Object.assign(swiper, {
                        enabled: swiper.params.enabled,
                        el,
                        // Classes
                        classNames: [],
                        // Slides
                        slides: (0, _domJsDefault.default)(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        // isDirection
                        isHorizontal () {
                            return swiper.params.direction === "horizontal";
                        },
                        isVertical () {
                            return swiper.params.direction === "vertical";
                        },
                        // Indexes
                        activeIndex: 0,
                        realIndex: 0,
                        //
                        isBeginning: true,
                        isEnd: false,
                        // Props
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: false,
                        // Locks
                        allowSlideNext: swiper.params.allowSlideNext,
                        allowSlidePrev: swiper.params.allowSlidePrev,
                        // Touch Events
                        touchEvents: function touchEvents() {
                            const touch = [
                                "touchstart",
                                "touchmove",
                                "touchend",
                                "touchcancel"
                            ];
                            const desktop = [
                                "pointerdown",
                                "pointermove",
                                "pointerup"
                            ];
                            swiper.touchEventsTouch = {
                                start: touch[0],
                                move: touch[1],
                                end: touch[2],
                                cancel: touch[3]
                            };
                            swiper.touchEventsDesktop = {
                                start: desktop[0],
                                move: desktop[1],
                                end: desktop[2]
                            };
                            return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                        }(),
                        touchEventsData: {
                            isTouched: undefined,
                            isMoved: undefined,
                            allowTouchCallbacks: undefined,
                            touchStartTime: undefined,
                            isScrolling: undefined,
                            currentTranslate: undefined,
                            startTranslate: undefined,
                            allowThresholdMove: undefined,
                            // Form elements to match
                            focusableElements: swiper.params.focusableElements,
                            // Last click time
                            lastClickTime: (0, _utilsJs.now)(),
                            clickTimeout: undefined,
                            // Velocities
                            velocities: [],
                            allowMomentumBounce: undefined,
                            isTouchEvent: undefined,
                            startMoving: undefined
                        },
                        // Clicks
                        allowClick: true,
                        // Touches
                        allowTouchMove: swiper.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        // Images
                        imagesToLoad: [],
                        imagesLoaded: 0
                    });
                    swiper.emit("_swiper"); // Init
                    if (swiper.params.init) swiper.init();
                    // Return app instance
                    // eslint-disable-next-line no-constructor-return
                    return swiper;
                }
                enable() {
                    const swiper = this;
                    if (swiper.enabled) return;
                    swiper.enabled = true;
                    if (swiper.params.grabCursor) swiper.setGrabCursor();
                    swiper.emit("enable");
                }
                disable() {
                    const swiper = this;
                    if (!swiper.enabled) return;
                    swiper.enabled = false;
                    if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                    swiper.emit("disable");
                }
                setProgress(progress, speed) {
                    const swiper = this;
                    progress = Math.min(Math.max(progress, 0), 1);
                    const min = swiper.minTranslate();
                    const max = swiper.maxTranslate();
                    const current = (max - min) * progress + min;
                    swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                emitContainerClasses() {
                    const swiper = this;
                    if (!swiper.params._emitClasses || !swiper.el) return;
                    const cls = swiper.el.className.split(" ").filter((className)=>{
                        return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
                    });
                    swiper.emit("_containerClasses", cls.join(" "));
                }
                getSlideClasses(slideEl) {
                    const swiper = this;
                    if (swiper.destroyed) return "";
                    return slideEl.className.split(" ").filter((className)=>{
                        return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
                    }).join(" ");
                }
                emitSlidesClasses() {
                    const swiper = this;
                    if (!swiper.params._emitClasses || !swiper.el) return;
                    const updates = [];
                    swiper.slides.each((slideEl)=>{
                        const classNames = swiper.getSlideClasses(slideEl);
                        updates.push({
                            slideEl,
                            classNames
                        });
                        swiper.emit("_slideClass", slideEl, classNames);
                    });
                    swiper.emit("_slideClasses", updates);
                }
                slidesPerViewDynamic(view = "current", exact = false) {
                    const swiper = this;
                    const { params , slides , slidesGrid , slidesSizesGrid , size: swiperSize , activeIndex  } = swiper;
                    let spv = 1;
                    if (params.centeredSlides) {
                        let slideSize = slides[activeIndex].swiperSlideSize;
                        let breakLoop;
                        for(let i = activeIndex + 1; i < slides.length; i += 1)if (slides[i] && !breakLoop) {
                            slideSize += slides[i].swiperSlideSize;
                            spv += 1;
                            if (slideSize > swiperSize) breakLoop = true;
                        }
                        for(let i1 = activeIndex - 1; i1 >= 0; i1 -= 1)if (slides[i1] && !breakLoop) {
                            slideSize += slides[i1].swiperSlideSize;
                            spv += 1;
                            if (slideSize > swiperSize) breakLoop = true;
                        }
                    } else {
                        // eslint-disable-next-line
                        if (view === "current") for(let i2 = activeIndex + 1; i2 < slides.length; i2 += 1){
                            const slideInView = exact ? slidesGrid[i2] + slidesSizesGrid[i2] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i2] - slidesGrid[activeIndex] < swiperSize;
                            if (slideInView) spv += 1;
                        }
                        else for(let i3 = activeIndex - 1; i3 >= 0; i3 -= 1){
                            const slideInView1 = slidesGrid[activeIndex] - slidesGrid[i3] < swiperSize;
                            if (slideInView1) spv += 1;
                        }
                    }
                    return spv;
                }
                update() {
                    const swiper = this;
                    if (!swiper || swiper.destroyed) return;
                    const { snapGrid , params  } = swiper; // Breakpoints
                    if (params.breakpoints) swiper.setBreakpoint();
                    swiper.updateSize();
                    swiper.updateSlides();
                    swiper.updateProgress();
                    swiper.updateSlidesClasses();
                    function setTranslate() {
                        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                        swiper.setTranslate(newTranslate);
                        swiper.updateActiveIndex();
                        swiper.updateSlidesClasses();
                    }
                    let translated;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                        setTranslate();
                        if (swiper.params.autoHeight) swiper.updateAutoHeight();
                    } else {
                        if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
                        else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                        if (!translated) setTranslate();
                    }
                    if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                    swiper.emit("update");
                }
                changeDirection(newDirection, needUpdate = true) {
                    const swiper = this;
                    const currentDirection = swiper.params.direction;
                    if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                    if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                    swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
                    swiper.emitContainerClasses();
                    swiper.params.direction = newDirection;
                    swiper.slides.each((slideEl)=>{
                        if (newDirection === "vertical") slideEl.style.width = "";
                        else slideEl.style.height = "";
                    });
                    swiper.emit("changeDirection");
                    if (needUpdate) swiper.update();
                    return swiper;
                }
                changeLanguageDirection(direction) {
                    const swiper = this;
                    if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                    swiper.rtl = direction === "rtl";
                    swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                    if (swiper.rtl) {
                        swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
                        swiper.el.dir = "rtl";
                    } else {
                        swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
                        swiper.el.dir = "ltr";
                    }
                    swiper.update();
                }
                mount(el) {
                    const swiper = this;
                    if (swiper.mounted) return true; // Find el
                    const $el = (0, _domJsDefault.default)(el || swiper.params.el);
                    el = $el[0];
                    if (!el) return false;
                    el.swiper = swiper;
                    const getWrapperSelector = ()=>{
                        return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                    };
                    const getWrapper = ()=>{
                        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                            const res = (0, _domJsDefault.default)(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items
                            res.children = (options)=>$el.children(options);
                            return res;
                        }
                        if (!$el.children) return (0, _domJsDefault.default)($el).children(getWrapperSelector());
                        return $el.children(getWrapperSelector());
                    }; // Find Wrapper
                    let $wrapperEl = getWrapper();
                    if ($wrapperEl.length === 0 && swiper.params.createElements) {
                        const document1 = (0, _ssrWindow.getDocument)();
                        const wrapper = document1.createElement("div");
                        $wrapperEl = (0, _domJsDefault.default)(wrapper);
                        wrapper.className = swiper.params.wrapperClass;
                        $el.append(wrapper);
                        $el.children(`.${swiper.params.slideClass}`).each((slideEl)=>{
                            $wrapperEl.append(slideEl);
                        });
                    }
                    Object.assign(swiper, {
                        $el,
                        el,
                        $wrapperEl,
                        wrapperEl: $wrapperEl[0],
                        mounted: true,
                        // RTL
                        rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
                        rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
                        wrongRTL: $wrapperEl.css("display") === "-webkit-box"
                    });
                    return true;
                }
                init(el) {
                    const swiper = this;
                    if (swiper.initialized) return swiper;
                    const mounted = swiper.mount(el);
                    if (mounted === false) return swiper;
                    swiper.emit("beforeInit"); // Set breakpoint
                    if (swiper.params.breakpoints) swiper.setBreakpoint();
                    // Add Classes
                    swiper.addClasses(); // Create loop
                    if (swiper.params.loop) swiper.loopCreate();
                    // Update size
                    swiper.updateSize(); // Update slides
                    swiper.updateSlides();
                    if (swiper.params.watchOverflow) swiper.checkOverflow();
                    // Set Grab Cursor
                    if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                    if (swiper.params.preloadImages) swiper.preloadImages();
                    // Slide To Initial Slide
                    if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
                    else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                    // Attach events
                    swiper.attachEvents(); // Init Flag
                    swiper.initialized = true; // Emit
                    swiper.emit("init");
                    swiper.emit("afterInit");
                    return swiper;
                }
                destroy(deleteInstance = true, cleanStyles = true) {
                    const swiper = this;
                    const { params , $el , $wrapperEl , slides  } = swiper;
                    if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                    swiper.emit("beforeDestroy"); // Init Flag
                    swiper.initialized = false; // Detach events
                    swiper.detachEvents(); // Destroy loop
                    if (params.loop) swiper.loopDestroy();
                    // Cleanup styles
                    if (cleanStyles) {
                        swiper.removeClasses();
                        $el.removeAttr("style");
                        $wrapperEl.removeAttr("style");
                        if (slides && slides.length) slides.removeClass([
                            params.slideVisibleClass,
                            params.slideActiveClass,
                            params.slideNextClass,
                            params.slidePrevClass
                        ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
                    }
                    swiper.emit("destroy"); // Detach emitter events
                    Object.keys(swiper.eventsListeners).forEach((eventName)=>{
                        swiper.off(eventName);
                    });
                    if (deleteInstance !== false) {
                        swiper.$el[0].swiper = null;
                        (0, _utilsJs.deleteProps)(swiper);
                    }
                    swiper.destroyed = true;
                    return null;
                }
                static extendDefaults(newDefaults) {
                    (0, _utilsJs.extend)(extendedDefaults, newDefaults);
                }
                static get extendedDefaults() {
                    return extendedDefaults;
                }
                static get defaults() {
                    return _defaultsJsDefault.default;
                }
                static installModule(mod) {
                    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
                    const modules = Swiper.prototype.__modules__;
                    if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
                }
                static use(module1) {
                    if (Array.isArray(module1)) {
                        module1.forEach((m)=>Swiper.installModule(m));
                        return Swiper;
                    }
                    Swiper.installModule(module1);
                    return Swiper;
                }
            }
            Object.keys(prototypes).forEach((prototypeGroup)=>{
                Object.keys(prototypes[prototypeGroup]).forEach((protoMethod)=>{
                    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
                });
            });
            Swiper.use([
                _resizeJsDefault.default,
                _observerJsDefault.default
            ]);
            exports1.default = Swiper;
        },
        {
            "ssr-window": "3lyfI",
            "../shared/dom.js": "7pW5q",
            "../shared/utils.js": "dbikn",
            "../shared/get-support.js": "dU80s",
            "../shared/get-device.js": "fHzNz",
            "../shared/get-browser.js": "2AwWY",
            "./modules/resize/resize.js": "awiu0",
            "./modules/observer/observer.js": "Fvg8a",
            "./events-emitter.js": "970nW",
            "./update/index.js": "5pXU1",
            "./translate/index.js": "82UFa",
            "./transition/index.js": "8Knou",
            "./slide/index.js": "5VZY1",
            "./loop/index.js": "6S1wN",
            "./grab-cursor/index.js": "6y5ez",
            "./events/index.js": "jPWSg",
            "./breakpoints/index.js": "6sZHb",
            "./classes/index.js": "dJ7YF",
            "./images/index.js": "4xpbQ",
            "./check-overflow/index.js": "cCZBR",
            "./defaults.js": "jwKb5",
            "./moduleExtendParams.js": "2G6E7",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "3lyfI": [
        function(require, module1, exports1) {
            /**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */ /* eslint-disable no-param-reassign */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            parcelHelpers.export(exports1, "extend", ()=>extend);
            parcelHelpers.export(exports1, "getDocument", ()=>getDocument);
            parcelHelpers.export(exports1, "getWindow", ()=>getWindow);
            parcelHelpers.export(exports1, "ssrDocument", ()=>ssrDocument);
            parcelHelpers.export(exports1, "ssrWindow", ()=>ssrWindow);
            function isObject(obj) {
                return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
            }
            function extend(target = {}, src = {}) {
                Object.keys(src).forEach((key)=>{
                    if (typeof target[key] === "undefined") target[key] = src[key];
                    else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
                });
            }
            const ssrDocument = {
                body: {},
                addEventListener () {},
                removeEventListener () {},
                activeElement: {
                    blur () {},
                    nodeName: ""
                },
                querySelector () {
                    return null;
                },
                querySelectorAll () {
                    return [];
                },
                getElementById () {
                    return null;
                },
                createEvent () {
                    return {
                        initEvent () {}
                    };
                },
                createElement () {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute () {},
                        getElementsByTagName () {
                            return [];
                        }
                    };
                },
                createElementNS () {
                    return {};
                },
                importNode () {
                    return null;
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };
            function getDocument() {
                const doc = typeof document !== "undefined" ? document : {};
                extend(doc, ssrDocument);
                return doc;
            }
            const ssrWindow = {
                document: ssrDocument,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState () {},
                    pushState () {},
                    go () {},
                    back () {}
                },
                CustomEvent: function CustomEvent1() {
                    return this;
                },
                addEventListener () {},
                removeEventListener () {},
                getComputedStyle () {
                    return {
                        getPropertyValue () {
                            return "";
                        }
                    };
                },
                Image () {},
                Date () {},
                screen: {},
                setTimeout () {},
                clearTimeout () {},
                matchMedia () {
                    return {};
                },
                requestAnimationFrame (callback) {
                    if (typeof setTimeout === "undefined") {
                        callback();
                        return null;
                    }
                    return setTimeout(callback, 0);
                },
                cancelAnimationFrame (id) {
                    if (typeof setTimeout === "undefined") return;
                    clearTimeout(id);
                }
            };
            function getWindow() {
                const win = typeof window !== "undefined" ? window : {};
                extend(win, ssrWindow);
                return win;
            }
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "gkKU3": [
        function(require, module1, exports1) {
            exports1.interopDefault = function(a) {
                return a && a.__esModule ? a : {
                    default: a
                };
            };
            exports1.defineInteropFlag = function(a) {
                Object.defineProperty(a, "__esModule", {
                    value: true
                });
            };
            exports1.exportAll = function(source, dest) {
                Object.keys(source).forEach(function(key) {
                    if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
                    Object.defineProperty(dest, key, {
                        enumerable: true,
                        get: function() {
                            return source[key];
                        }
                    });
                });
                return dest;
            };
            exports1.export = function(dest, destName, get) {
                Object.defineProperty(dest, destName, {
                    enumerable: true,
                    get: get
                });
            };
        },
        {}
    ],
    "7pW5q": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _dom7 = require("dom7");
            const Methods = {
                addClass: _dom7.addClass,
                removeClass: _dom7.removeClass,
                hasClass: _dom7.hasClass,
                toggleClass: _dom7.toggleClass,
                attr: _dom7.attr,
                removeAttr: _dom7.removeAttr,
                transform: _dom7.transform,
                transition: _dom7.transition,
                on: _dom7.on,
                off: _dom7.off,
                trigger: _dom7.trigger,
                transitionEnd: _dom7.transitionEnd,
                outerWidth: _dom7.outerWidth,
                outerHeight: _dom7.outerHeight,
                styles: _dom7.styles,
                offset: _dom7.offset,
                css: _dom7.css,
                each: _dom7.each,
                html: _dom7.html,
                text: _dom7.text,
                is: _dom7.is,
                index: _dom7.index,
                eq: _dom7.eq,
                append: _dom7.append,
                prepend: _dom7.prepend,
                next: _dom7.next,
                nextAll: _dom7.nextAll,
                prev: _dom7.prev,
                prevAll: _dom7.prevAll,
                parent: _dom7.parent,
                parents: _dom7.parents,
                closest: _dom7.closest,
                find: _dom7.find,
                children: _dom7.children,
                filter: _dom7.filter,
                remove: _dom7.remove
            };
            Object.keys(Methods).forEach((methodName)=>{
                Object.defineProperty(_dom7.$.fn, methodName, {
                    value: Methods[methodName],
                    writable: true
                });
            });
            exports1.default = _dom7.$;
        },
        {
            "dom7": "fDQYr",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "fDQYr": [
        function(require, module1, exports1) {
            /**
 * Dom7 4.0.4
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2022, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: January 11, 2022
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            parcelHelpers.export(exports1, "$", ()=>$);
            parcelHelpers.export(exports1, "add", ()=>add);
            parcelHelpers.export(exports1, "addClass", ()=>addClass);
            parcelHelpers.export(exports1, "animate", ()=>animate);
            parcelHelpers.export(exports1, "animationEnd", ()=>animationEnd);
            parcelHelpers.export(exports1, "append", ()=>append);
            parcelHelpers.export(exports1, "appendTo", ()=>appendTo);
            parcelHelpers.export(exports1, "attr", ()=>attr);
            parcelHelpers.export(exports1, "blur", ()=>blur);
            parcelHelpers.export(exports1, "change", ()=>change);
            parcelHelpers.export(exports1, "children", ()=>children);
            parcelHelpers.export(exports1, "click", ()=>click);
            parcelHelpers.export(exports1, "closest", ()=>closest);
            parcelHelpers.export(exports1, "css", ()=>css);
            parcelHelpers.export(exports1, "data", ()=>data);
            parcelHelpers.export(exports1, "dataset", ()=>dataset);
            parcelHelpers.export(exports1, "detach", ()=>detach);
            parcelHelpers.export(exports1, "each", ()=>each);
            parcelHelpers.export(exports1, "empty", ()=>empty);
            parcelHelpers.export(exports1, "eq", ()=>eq);
            parcelHelpers.export(exports1, "filter", ()=>filter);
            parcelHelpers.export(exports1, "find", ()=>find);
            parcelHelpers.export(exports1, "focus", ()=>focus);
            parcelHelpers.export(exports1, "focusin", ()=>focusin);
            parcelHelpers.export(exports1, "focusout", ()=>focusout);
            parcelHelpers.export(exports1, "hasClass", ()=>hasClass);
            parcelHelpers.export(exports1, "height", ()=>height);
            parcelHelpers.export(exports1, "hide", ()=>hide);
            parcelHelpers.export(exports1, "html", ()=>html);
            parcelHelpers.export(exports1, "index", ()=>index);
            parcelHelpers.export(exports1, "insertAfter", ()=>insertAfter);
            parcelHelpers.export(exports1, "insertBefore", ()=>insertBefore);
            parcelHelpers.export(exports1, "is", ()=>is);
            parcelHelpers.export(exports1, "keydown", ()=>keydown);
            parcelHelpers.export(exports1, "keypress", ()=>keypress);
            parcelHelpers.export(exports1, "keyup", ()=>keyup);
            parcelHelpers.export(exports1, "mousedown", ()=>mousedown);
            parcelHelpers.export(exports1, "mouseenter", ()=>mouseenter);
            parcelHelpers.export(exports1, "mouseleave", ()=>mouseleave);
            parcelHelpers.export(exports1, "mousemove", ()=>mousemove);
            parcelHelpers.export(exports1, "mouseout", ()=>mouseout);
            parcelHelpers.export(exports1, "mouseover", ()=>mouseover);
            parcelHelpers.export(exports1, "mouseup", ()=>mouseup);
            parcelHelpers.export(exports1, "next", ()=>next);
            parcelHelpers.export(exports1, "nextAll", ()=>nextAll);
            parcelHelpers.export(exports1, "off", ()=>off);
            parcelHelpers.export(exports1, "offset", ()=>offset);
            parcelHelpers.export(exports1, "on", ()=>on);
            parcelHelpers.export(exports1, "once", ()=>once);
            parcelHelpers.export(exports1, "outerHeight", ()=>outerHeight);
            parcelHelpers.export(exports1, "outerWidth", ()=>outerWidth);
            parcelHelpers.export(exports1, "parent", ()=>parent);
            parcelHelpers.export(exports1, "parents", ()=>parents);
            parcelHelpers.export(exports1, "prepend", ()=>prepend);
            parcelHelpers.export(exports1, "prependTo", ()=>prependTo);
            parcelHelpers.export(exports1, "prev", ()=>prev);
            parcelHelpers.export(exports1, "prevAll", ()=>prevAll);
            parcelHelpers.export(exports1, "prop", ()=>prop);
            parcelHelpers.export(exports1, "remove", ()=>remove);
            parcelHelpers.export(exports1, "removeAttr", ()=>removeAttr);
            parcelHelpers.export(exports1, "removeClass", ()=>removeClass);
            parcelHelpers.export(exports1, "removeData", ()=>removeData);
            parcelHelpers.export(exports1, "resize", ()=>resize);
            parcelHelpers.export(exports1, "scroll", ()=>scroll);
            parcelHelpers.export(exports1, "scrollLeft", ()=>scrollLeft);
            parcelHelpers.export(exports1, "scrollTo", ()=>scrollTo);
            parcelHelpers.export(exports1, "scrollTop", ()=>scrollTop);
            parcelHelpers.export(exports1, "show", ()=>show);
            parcelHelpers.export(exports1, "siblings", ()=>siblings);
            parcelHelpers.export(exports1, "stop", ()=>stop);
            parcelHelpers.export(exports1, "styles", ()=>styles);
            parcelHelpers.export(exports1, "submit", ()=>submit);
            parcelHelpers.export(exports1, "text", ()=>text);
            parcelHelpers.export(exports1, "toggleClass", ()=>toggleClass);
            parcelHelpers.export(exports1, "touchend", ()=>touchend);
            parcelHelpers.export(exports1, "touchmove", ()=>touchmove);
            parcelHelpers.export(exports1, "touchstart", ()=>touchstart);
            parcelHelpers.export(exports1, "transform", ()=>transform);
            parcelHelpers.export(exports1, "transition", ()=>transition);
            parcelHelpers.export(exports1, "transitionEnd", ()=>transitionEnd);
            parcelHelpers.export(exports1, "trigger", ()=>trigger);
            parcelHelpers.export(exports1, "val", ()=>val);
            parcelHelpers.export(exports1, "value", ()=>value);
            parcelHelpers.export(exports1, "width", ()=>width);
            var _ssrWindow = require("ssr-window");
            /* eslint-disable no-proto */ function makeReactive(obj) {
                const proto = obj.__proto__;
                Object.defineProperty(obj, "__proto__", {
                    get () {
                        return proto;
                    },
                    set (value) {
                        proto.__proto__ = value;
                    }
                });
            }
            class Dom7 extends Array {
                constructor(items){
                    if (typeof items === "number") super(items);
                    else {
                        super(...items || []);
                        makeReactive(this);
                    }
                }
            }
            function arrayFlat(arr = []) {
                const res = [];
                arr.forEach((el)=>{
                    if (Array.isArray(el)) res.push(...arrayFlat(el));
                    else res.push(el);
                });
                return res;
            }
            function arrayFilter(arr, callback) {
                return Array.prototype.filter.call(arr, callback);
            }
            function arrayUnique(arr) {
                const uniqueArray = [];
                for(let i = 0; i < arr.length; i += 1)if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
                return uniqueArray;
            }
            function toCamelCase(string) {
                return string.toLowerCase().replace(/-(.)/g, (match, group)=>group.toUpperCase());
            }
            // eslint-disable-next-line
            function qsa(selector, context) {
                if (typeof selector !== "string") return [
                    selector
                ];
                const a = [];
                const res = context.querySelectorAll(selector);
                for(let i = 0; i < res.length; i += 1)a.push(res[i]);
                return a;
            }
            function $(selector, context) {
                const window1 = (0, _ssrWindow.getWindow)();
                const document1 = (0, _ssrWindow.getDocument)();
                let arr = [];
                if (!context && selector instanceof Dom7) return selector;
                if (!selector) return new Dom7(arr);
                if (typeof selector === "string") {
                    const html = selector.trim();
                    if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                        let toCreate = "div";
                        if (html.indexOf("<li") === 0) toCreate = "ul";
                        if (html.indexOf("<tr") === 0) toCreate = "tbody";
                        if (html.indexOf("<td") === 0 || html.indexOf("<th") === 0) toCreate = "tr";
                        if (html.indexOf("<tbody") === 0) toCreate = "table";
                        if (html.indexOf("<option") === 0) toCreate = "select";
                        const tempParent = document1.createElement(toCreate);
                        tempParent.innerHTML = html;
                        for(let i = 0; i < tempParent.childNodes.length; i += 1)arr.push(tempParent.childNodes[i]);
                    } else arr = qsa(selector.trim(), context || document1);
                // arr = qsa(selector, document);
                } else if (selector.nodeType || selector === window1 || selector === document1) arr.push(selector);
                else if (Array.isArray(selector)) {
                    if (selector instanceof Dom7) return selector;
                    arr = selector;
                }
                return new Dom7(arrayUnique(arr));
            }
            $.fn = Dom7.prototype;
            // eslint-disable-next-line
            function addClass(...classes) {
                const classNames = arrayFlat(classes.map((c)=>c.split(" ")));
                this.forEach((el)=>{
                    el.classList.add(...classNames);
                });
                return this;
            }
            function removeClass(...classes) {
                const classNames = arrayFlat(classes.map((c)=>c.split(" ")));
                this.forEach((el)=>{
                    el.classList.remove(...classNames);
                });
                return this;
            }
            function toggleClass(...classes) {
                const classNames = arrayFlat(classes.map((c)=>c.split(" ")));
                this.forEach((el)=>{
                    classNames.forEach((className)=>{
                        el.classList.toggle(className);
                    });
                });
            }
            function hasClass(...classes) {
                const classNames = arrayFlat(classes.map((c)=>c.split(" ")));
                return arrayFilter(this, (el)=>{
                    return classNames.filter((className)=>el.classList.contains(className)).length > 0;
                }).length > 0;
            }
            function attr(attrs, value) {
                if (arguments.length === 1 && typeof attrs === "string") {
                    // Get attr
                    if (this[0]) return this[0].getAttribute(attrs);
                    return undefined;
                } // Set attrs
                for(let i = 0; i < this.length; i += 1){
                    if (arguments.length === 2) this[i].setAttribute(attrs, value);
                    else for(const attrName in attrs){
                        this[i][attrName] = attrs[attrName];
                        this[i].setAttribute(attrName, attrs[attrName]);
                    }
                }
                return this;
            }
            function removeAttr(attr) {
                for(let i = 0; i < this.length; i += 1)this[i].removeAttribute(attr);
                return this;
            }
            function prop(props, value) {
                if (arguments.length === 1 && typeof props === "string") {
                    // Get prop
                    if (this[0]) return this[0][props];
                } else {
                    // Set props
                    for(let i = 0; i < this.length; i += 1){
                        if (arguments.length === 2) this[i][props] = value;
                        else for(const propName in props)this[i][propName] = props[propName];
                    }
                    return this;
                }
                return this;
            }
            function data(key, value) {
                let el;
                if (typeof value === "undefined") {
                    el = this[0];
                    if (!el) return undefined; // Get value
                    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) return el.dom7ElementDataStorage[key];
                    const dataKey = el.getAttribute(`data-${key}`);
                    if (dataKey) return dataKey;
                    return undefined;
                } // Set value
                for(let i = 0; i < this.length; i += 1){
                    el = this[i];
                    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
                    el.dom7ElementDataStorage[key] = value;
                }
                return this;
            }
            function removeData(key) {
                for(let i = 0; i < this.length; i += 1){
                    const el = this[i];
                    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
                        el.dom7ElementDataStorage[key] = null;
                        delete el.dom7ElementDataStorage[key];
                    }
                }
            }
            function dataset() {
                const el = this[0];
                if (!el) return undefined;
                const dataset = {}; // eslint-disable-line
                if (el.dataset) for(const dataKey in el.dataset)dataset[dataKey] = el.dataset[dataKey];
                else for(let i = 0; i < el.attributes.length; i += 1){
                    const attr = el.attributes[i];
                    if (attr.name.indexOf("data-") >= 0) dataset[toCamelCase(attr.name.split("data-")[1])] = attr.value;
                }
                for(const key in dataset){
                    if (dataset[key] === "false") dataset[key] = false;
                    else if (dataset[key] === "true") dataset[key] = true;
                    else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
                }
                return dataset;
            }
            function val(value) {
                if (typeof value === "undefined") {
                    // get value
                    const el = this[0];
                    if (!el) return undefined;
                    if (el.multiple && el.nodeName.toLowerCase() === "select") {
                        const values = [];
                        for(let i = 0; i < el.selectedOptions.length; i += 1)values.push(el.selectedOptions[i].value);
                        return values;
                    }
                    return el.value;
                } // set value
                for(let i1 = 0; i1 < this.length; i1 += 1){
                    const el1 = this[i1];
                    if (Array.isArray(value) && el1.multiple && el1.nodeName.toLowerCase() === "select") for(let j = 0; j < el1.options.length; j += 1)el1.options[j].selected = value.indexOf(el1.options[j].value) >= 0;
                    else el1.value = value;
                }
                return this;
            }
            function value(value) {
                return this.val(value);
            }
            function transform(transform) {
                for(let i = 0; i < this.length; i += 1)this[i].style.transform = transform;
                return this;
            }
            function transition(duration) {
                for(let i = 0; i < this.length; i += 1)this[i].style.transitionDuration = typeof duration !== "string" ? `${duration}ms` : duration;
                return this;
            }
            function on(...args) {
                let [eventType, targetSelector, listener, capture] = args;
                if (typeof args[1] === "function") {
                    [eventType, listener, capture] = args;
                    targetSelector = undefined;
                }
                if (!capture) capture = false;
                function handleLiveEvent(e) {
                    const target = e.target;
                    if (!target) return;
                    const eventData = e.target.dom7EventData || [];
                    if (eventData.indexOf(e) < 0) eventData.unshift(e);
                    if ($(target).is(targetSelector)) listener.apply(target, eventData);
                    else {
                        const parents = $(target).parents(); // eslint-disable-line
                        for(let k = 0; k < parents.length; k += 1)if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                    }
                }
                function handleEvent(e) {
                    const eventData = e && e.target ? e.target.dom7EventData || [] : [];
                    if (eventData.indexOf(e) < 0) eventData.unshift(e);
                    listener.apply(this, eventData);
                }
                const events = eventType.split(" ");
                let j;
                for(let i = 0; i < this.length; i += 1){
                    const el = this[i];
                    if (!targetSelector) for(j = 0; j < events.length; j += 1){
                        const event1 = events[j];
                        if (!el.dom7Listeners) el.dom7Listeners = {};
                        if (!el.dom7Listeners[event1]) el.dom7Listeners[event1] = [];
                        el.dom7Listeners[event1].push({
                            listener,
                            proxyListener: handleEvent
                        });
                        el.addEventListener(event1, handleEvent, capture);
                    }
                    else for(j = 0; j < events.length; j += 1){
                        const event11 = events[j];
                        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                        if (!el.dom7LiveListeners[event11]) el.dom7LiveListeners[event11] = [];
                        el.dom7LiveListeners[event11].push({
                            listener,
                            proxyListener: handleLiveEvent
                        });
                        el.addEventListener(event11, handleLiveEvent, capture);
                    }
                }
                return this;
            }
            function off(...args) {
                let [eventType, targetSelector, listener, capture] = args;
                if (typeof args[1] === "function") {
                    [eventType, listener, capture] = args;
                    targetSelector = undefined;
                }
                if (!capture) capture = false;
                const events = eventType.split(" ");
                for(let i = 0; i < events.length; i += 1){
                    const event1 = events[i];
                    for(let j = 0; j < this.length; j += 1){
                        const el = this[j];
                        let handlers;
                        if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event1];
                        else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event1];
                        if (handlers && handlers.length) for(let k = handlers.length - 1; k >= 0; k -= 1){
                            const handler = handlers[k];
                            if (listener && handler.listener === listener) {
                                el.removeEventListener(event1, handler.proxyListener, capture);
                                handlers.splice(k, 1);
                            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                                el.removeEventListener(event1, handler.proxyListener, capture);
                                handlers.splice(k, 1);
                            } else if (!listener) {
                                el.removeEventListener(event1, handler.proxyListener, capture);
                                handlers.splice(k, 1);
                            }
                        }
                    }
                }
                return this;
            }
            function once(...args) {
                const dom = this;
                let [eventName, targetSelector, listener, capture] = args;
                if (typeof args[1] === "function") {
                    [eventName, listener, capture] = args;
                    targetSelector = undefined;
                }
                function onceHandler(...eventArgs) {
                    listener.apply(this, eventArgs);
                    dom.off(eventName, targetSelector, onceHandler, capture);
                    if (onceHandler.dom7proxy) delete onceHandler.dom7proxy;
                }
                onceHandler.dom7proxy = listener;
                return dom.on(eventName, targetSelector, onceHandler, capture);
            }
            function trigger(...args) {
                const window1 = (0, _ssrWindow.getWindow)();
                const events = args[0].split(" ");
                const eventData = args[1];
                for(let i = 0; i < events.length; i += 1){
                    const event1 = events[i];
                    for(let j = 0; j < this.length; j += 1){
                        const el = this[j];
                        if (window1.CustomEvent) {
                            const evt = new window1.CustomEvent(event1, {
                                detail: eventData,
                                bubbles: true,
                                cancelable: true
                            });
                            el.dom7EventData = args.filter((data, dataIndex)=>dataIndex > 0);
                            el.dispatchEvent(evt);
                            el.dom7EventData = [];
                            delete el.dom7EventData;
                        }
                    }
                }
                return this;
            }
            function transitionEnd(callback) {
                const dom = this;
                function fireCallBack(e) {
                    if (e.target !== this) return;
                    callback.call(this, e);
                    dom.off("transitionend", fireCallBack);
                }
                if (callback) dom.on("transitionend", fireCallBack);
                return this;
            }
            function animationEnd(callback) {
                const dom = this;
                function fireCallBack(e) {
                    if (e.target !== this) return;
                    callback.call(this, e);
                    dom.off("animationend", fireCallBack);
                }
                if (callback) dom.on("animationend", fireCallBack);
                return this;
            }
            function width() {
                const window1 = (0, _ssrWindow.getWindow)();
                if (this[0] === window1) return window1.innerWidth;
                if (this.length > 0) return parseFloat(this.css("width"));
                return null;
            }
            function outerWidth(includeMargins) {
                if (this.length > 0) {
                    if (includeMargins) {
                        const styles = this.styles();
                        return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
                    }
                    return this[0].offsetWidth;
                }
                return null;
            }
            function height() {
                const window1 = (0, _ssrWindow.getWindow)();
                if (this[0] === window1) return window1.innerHeight;
                if (this.length > 0) return parseFloat(this.css("height"));
                return null;
            }
            function outerHeight(includeMargins) {
                if (this.length > 0) {
                    if (includeMargins) {
                        const styles = this.styles();
                        return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
                    }
                    return this[0].offsetHeight;
                }
                return null;
            }
            function offset() {
                if (this.length > 0) {
                    const window1 = (0, _ssrWindow.getWindow)();
                    const document1 = (0, _ssrWindow.getDocument)();
                    const el = this[0];
                    const box = el.getBoundingClientRect();
                    const body = document1.body;
                    const clientTop = el.clientTop || body.clientTop || 0;
                    const clientLeft = el.clientLeft || body.clientLeft || 0;
                    const scrollTop = el === window1 ? window1.scrollY : el.scrollTop;
                    const scrollLeft = el === window1 ? window1.scrollX : el.scrollLeft;
                    return {
                        top: box.top + scrollTop - clientTop,
                        left: box.left + scrollLeft - clientLeft
                    };
                }
                return null;
            }
            function hide() {
                for(let i = 0; i < this.length; i += 1)this[i].style.display = "none";
                return this;
            }
            function show() {
                const window1 = (0, _ssrWindow.getWindow)();
                for(let i = 0; i < this.length; i += 1){
                    const el = this[i];
                    if (el.style.display === "none") el.style.display = "";
                    if (window1.getComputedStyle(el, null).getPropertyValue("display") === "none") el.style.display = "block";
                }
                return this;
            }
            function styles() {
                const window1 = (0, _ssrWindow.getWindow)();
                if (this[0]) return window1.getComputedStyle(this[0], null);
                return {};
            }
            function css(props, value) {
                const window1 = (0, _ssrWindow.getWindow)();
                let i;
                if (arguments.length === 1) {
                    if (typeof props === "string") {
                        // .css('width')
                        if (this[0]) return window1.getComputedStyle(this[0], null).getPropertyValue(props);
                    } else {
                        // .css({ width: '100px' })
                        for(i = 0; i < this.length; i += 1)for(const prop in props)this[i].style[prop] = props[prop];
                        return this;
                    }
                }
                if (arguments.length === 2 && typeof props === "string") {
                    // .css('width', '100px')
                    for(i = 0; i < this.length; i += 1)this[i].style[props] = value;
                    return this;
                }
                return this;
            }
            function each(callback) {
                if (!callback) return this;
                this.forEach((el, index)=>{
                    callback.apply(el, [
                        el,
                        index
                    ]);
                });
                return this;
            }
            function filter(callback) {
                const result = arrayFilter(this, callback);
                return $(result);
            }
            function html(html) {
                if (typeof html === "undefined") return this[0] ? this[0].innerHTML : null;
                for(let i = 0; i < this.length; i += 1)this[i].innerHTML = html;
                return this;
            }
            function text(text) {
                if (typeof text === "undefined") return this[0] ? this[0].textContent.trim() : null;
                for(let i = 0; i < this.length; i += 1)this[i].textContent = text;
                return this;
            }
            function is(selector) {
                const window1 = (0, _ssrWindow.getWindow)();
                const document1 = (0, _ssrWindow.getDocument)();
                const el = this[0];
                let compareWith;
                let i;
                if (!el || typeof selector === "undefined") return false;
                if (typeof selector === "string") {
                    if (el.matches) return el.matches(selector);
                    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                    compareWith = $(selector);
                    for(i = 0; i < compareWith.length; i += 1){
                        if (compareWith[i] === el) return true;
                    }
                    return false;
                }
                if (selector === document1) return el === document1;
                if (selector === window1) return el === window1;
                if (selector.nodeType || selector instanceof Dom7) {
                    compareWith = selector.nodeType ? [
                        selector
                    ] : selector;
                    for(i = 0; i < compareWith.length; i += 1){
                        if (compareWith[i] === el) return true;
                    }
                    return false;
                }
                return false;
            }
            function index() {
                let child = this[0];
                let i;
                if (child) {
                    i = 0; // eslint-disable-next-line
                    while((child = child.previousSibling) !== null)if (child.nodeType === 1) i += 1;
                    return i;
                }
                return undefined;
            }
            function eq(index) {
                if (typeof index === "undefined") return this;
                const length = this.length;
                if (index > length - 1) return $([]);
                if (index < 0) {
                    const returnIndex = length + index;
                    if (returnIndex < 0) return $([]);
                    return $([
                        this[returnIndex]
                    ]);
                }
                return $([
                    this[index]
                ]);
            }
            function append(...els) {
                let newChild;
                const document1 = (0, _ssrWindow.getDocument)();
                for(let k = 0; k < els.length; k += 1){
                    newChild = els[k];
                    for(let i = 0; i < this.length; i += 1){
                        if (typeof newChild === "string") {
                            const tempDiv = document1.createElement("div");
                            tempDiv.innerHTML = newChild;
                            while(tempDiv.firstChild)this[i].appendChild(tempDiv.firstChild);
                        } else if (newChild instanceof Dom7) for(let j = 0; j < newChild.length; j += 1)this[i].appendChild(newChild[j]);
                        else this[i].appendChild(newChild);
                    }
                }
                return this;
            }
            function appendTo(parent) {
                $(parent).append(this);
                return this;
            }
            function prepend(newChild) {
                const document1 = (0, _ssrWindow.getDocument)();
                let i;
                let j;
                for(i = 0; i < this.length; i += 1){
                    if (typeof newChild === "string") {
                        const tempDiv = document1.createElement("div");
                        tempDiv.innerHTML = newChild;
                        for(j = tempDiv.childNodes.length - 1; j >= 0; j -= 1)this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                    } else if (newChild instanceof Dom7) for(j = 0; j < newChild.length; j += 1)this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                    else this[i].insertBefore(newChild, this[i].childNodes[0]);
                }
                return this;
            }
            function prependTo(parent) {
                $(parent).prepend(this);
                return this;
            }
            function insertBefore(selector) {
                const before = $(selector);
                for(let i = 0; i < this.length; i += 1){
                    if (before.length === 1) before[0].parentNode.insertBefore(this[i], before[0]);
                    else if (before.length > 1) for(let j = 0; j < before.length; j += 1)before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
                }
            }
            function insertAfter(selector) {
                const after = $(selector);
                for(let i = 0; i < this.length; i += 1){
                    if (after.length === 1) after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
                    else if (after.length > 1) for(let j = 0; j < after.length; j += 1)after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
                }
            }
            function next(selector) {
                if (this.length > 0) {
                    if (selector) {
                        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return $([
                            this[0].nextElementSibling
                        ]);
                        return $([]);
                    }
                    if (this[0].nextElementSibling) return $([
                        this[0].nextElementSibling
                    ]);
                    return $([]);
                }
                return $([]);
            }
            function nextAll(selector) {
                const nextEls = [];
                let el = this[0];
                if (!el) return $([]);
                while(el.nextElementSibling){
                    const next = el.nextElementSibling; // eslint-disable-line
                    if (selector) {
                        if ($(next).is(selector)) nextEls.push(next);
                    } else nextEls.push(next);
                    el = next;
                }
                return $(nextEls);
            }
            function prev(selector) {
                if (this.length > 0) {
                    const el = this[0];
                    if (selector) {
                        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) return $([
                            el.previousElementSibling
                        ]);
                        return $([]);
                    }
                    if (el.previousElementSibling) return $([
                        el.previousElementSibling
                    ]);
                    return $([]);
                }
                return $([]);
            }
            function prevAll(selector) {
                const prevEls = [];
                let el = this[0];
                if (!el) return $([]);
                while(el.previousElementSibling){
                    const prev = el.previousElementSibling; // eslint-disable-line
                    if (selector) {
                        if ($(prev).is(selector)) prevEls.push(prev);
                    } else prevEls.push(prev);
                    el = prev;
                }
                return $(prevEls);
            }
            function siblings(selector) {
                return this.nextAll(selector).add(this.prevAll(selector));
            }
            function parent(selector) {
                const parents = []; // eslint-disable-line
                for(let i = 0; i < this.length; i += 1)if (this[i].parentNode !== null) {
                    if (selector) {
                        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
                    } else parents.push(this[i].parentNode);
                }
                return $(parents);
            }
            function parents(selector) {
                const parents = []; // eslint-disable-line
                for(let i = 0; i < this.length; i += 1){
                    let parent = this[i].parentNode; // eslint-disable-line
                    while(parent){
                        if (selector) {
                            if ($(parent).is(selector)) parents.push(parent);
                        } else parents.push(parent);
                        parent = parent.parentNode;
                    }
                }
                return $(parents);
            }
            function closest(selector) {
                let closest = this; // eslint-disable-line
                if (typeof selector === "undefined") return $([]);
                if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
                return closest;
            }
            function find(selector) {
                const foundElements = [];
                for(let i = 0; i < this.length; i += 1){
                    const found = this[i].querySelectorAll(selector);
                    for(let j = 0; j < found.length; j += 1)foundElements.push(found[j]);
                }
                return $(foundElements);
            }
            function children(selector) {
                const children = []; // eslint-disable-line
                for(let i = 0; i < this.length; i += 1){
                    const childNodes = this[i].children;
                    for(let j = 0; j < childNodes.length; j += 1)if (!selector || $(childNodes[j]).is(selector)) children.push(childNodes[j]);
                }
                return $(children);
            }
            function remove() {
                for(let i = 0; i < this.length; i += 1)if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
                return this;
            }
            function detach() {
                return this.remove();
            }
            function add(...els) {
                const dom = this;
                let i;
                let j;
                for(i = 0; i < els.length; i += 1){
                    const toAdd = $(els[i]);
                    for(j = 0; j < toAdd.length; j += 1)dom.push(toAdd[j]);
                }
                return dom;
            }
            function empty() {
                for(let i = 0; i < this.length; i += 1){
                    const el = this[i];
                    if (el.nodeType === 1) {
                        for(let j = 0; j < el.childNodes.length; j += 1)if (el.childNodes[j].parentNode) el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
                        el.textContent = "";
                    }
                }
                return this;
            }
            // eslint-disable-next-line
            function scrollTo(...args) {
                const window1 = (0, _ssrWindow.getWindow)();
                let [left, top, duration, easing, callback] = args;
                if (args.length === 4 && typeof easing === "function") {
                    callback = easing;
                    [left, top, duration, callback, easing] = args;
                }
                if (typeof easing === "undefined") easing = "swing";
                return this.each(function animate() {
                    const el = this;
                    let currentTop;
                    let currentLeft;
                    let maxTop;
                    let maxLeft;
                    let newTop;
                    let newLeft;
                    let scrollTop; // eslint-disable-line
                    let scrollLeft; // eslint-disable-line
                    let animateTop = top > 0 || top === 0;
                    let animateLeft = left > 0 || left === 0;
                    if (typeof easing === "undefined") easing = "swing";
                    if (animateTop) {
                        currentTop = el.scrollTop;
                        if (!duration) el.scrollTop = top;
                    }
                    if (animateLeft) {
                        currentLeft = el.scrollLeft;
                        if (!duration) el.scrollLeft = left;
                    }
                    if (!duration) return;
                    if (animateTop) {
                        maxTop = el.scrollHeight - el.offsetHeight;
                        newTop = Math.max(Math.min(top, maxTop), 0);
                    }
                    if (animateLeft) {
                        maxLeft = el.scrollWidth - el.offsetWidth;
                        newLeft = Math.max(Math.min(left, maxLeft), 0);
                    }
                    let startTime = null;
                    if (animateTop && newTop === currentTop) animateTop = false;
                    if (animateLeft && newLeft === currentLeft) animateLeft = false;
                    function render(time = new Date().getTime()) {
                        if (startTime === null) startTime = time;
                        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                        const easeProgress = easing === "linear" ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
                        let done;
                        if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
                        if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);
                        if (animateTop && newTop > currentTop && scrollTop >= newTop) {
                            el.scrollTop = newTop;
                            done = true;
                        }
                        if (animateTop && newTop < currentTop && scrollTop <= newTop) {
                            el.scrollTop = newTop;
                            done = true;
                        }
                        if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
                            el.scrollLeft = newLeft;
                            done = true;
                        }
                        if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
                            el.scrollLeft = newLeft;
                            done = true;
                        }
                        if (done) {
                            if (callback) callback();
                            return;
                        }
                        if (animateTop) el.scrollTop = scrollTop;
                        if (animateLeft) el.scrollLeft = scrollLeft;
                        window1.requestAnimationFrame(render);
                    }
                    window1.requestAnimationFrame(render);
                });
            } // scrollTop(top, duration, easing, callback) {
            function scrollTop(...args) {
                let [top, duration, easing, callback] = args;
                if (args.length === 3 && typeof easing === "function") [top, duration, callback, easing] = args;
                const dom = this;
                if (typeof top === "undefined") {
                    if (dom.length > 0) return dom[0].scrollTop;
                    return null;
                }
                return dom.scrollTo(undefined, top, duration, easing, callback);
            }
            function scrollLeft(...args) {
                let [left, duration, easing, callback] = args;
                if (args.length === 3 && typeof easing === "function") [left, duration, callback, easing] = args;
                const dom = this;
                if (typeof left === "undefined") {
                    if (dom.length > 0) return dom[0].scrollLeft;
                    return null;
                }
                return dom.scrollTo(left, undefined, duration, easing, callback);
            }
            // eslint-disable-next-line
            function animate(initialProps, initialParams) {
                const window1 = (0, _ssrWindow.getWindow)();
                const els = this;
                const a = {
                    props: Object.assign({}, initialProps),
                    params: Object.assign({
                        duration: 300,
                        easing: "swing" // or 'linear'
                    }, initialParams),
                    elements: els,
                    animating: false,
                    que: [],
                    easingProgress (easing, progress) {
                        if (easing === "swing") return 0.5 - Math.cos(progress * Math.PI) / 2;
                        if (typeof easing === "function") return easing(progress);
                        return progress;
                    },
                    stop () {
                        if (a.frameId) window1.cancelAnimationFrame(a.frameId);
                        a.animating = false;
                        a.elements.each((el)=>{
                            const element = el;
                            delete element.dom7AnimateInstance;
                        });
                        a.que = [];
                    },
                    done (complete) {
                        a.animating = false;
                        a.elements.each((el)=>{
                            const element = el;
                            delete element.dom7AnimateInstance;
                        });
                        if (complete) complete(els);
                        if (a.que.length > 0) {
                            const que = a.que.shift();
                            a.animate(que[0], que[1]);
                        }
                    },
                    animate (props, params) {
                        if (a.animating) {
                            a.que.push([
                                props,
                                params
                            ]);
                            return a;
                        }
                        const elements = []; // Define & Cache Initials & Units
                        a.elements.each((el, index)=>{
                            let initialFullValue;
                            let initialValue;
                            let unit;
                            let finalValue;
                            let finalFullValue;
                            if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
                            elements[index] = {
                                container: el
                            };
                            Object.keys(props).forEach((prop)=>{
                                initialFullValue = window1.getComputedStyle(el, null).getPropertyValue(prop).replace(",", ".");
                                initialValue = parseFloat(initialFullValue);
                                unit = initialFullValue.replace(initialValue, "");
                                finalValue = parseFloat(props[prop]);
                                finalFullValue = props[prop] + unit;
                                elements[index][prop] = {
                                    initialFullValue,
                                    initialValue,
                                    unit,
                                    finalValue,
                                    finalFullValue,
                                    currentValue: initialValue
                                };
                            });
                        });
                        let startTime = null;
                        let time;
                        let elementsDone = 0;
                        let propsDone = 0;
                        let done;
                        let began = false;
                        a.animating = true;
                        function render() {
                            time = new Date().getTime();
                            let progress;
                            let easeProgress; // let el;
                            if (!began) {
                                began = true;
                                if (params.begin) params.begin(els);
                            }
                            if (startTime === null) startTime = time;
                            if (params.progress) params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
                            elements.forEach((element)=>{
                                const el = element;
                                if (done || el.done) return;
                                Object.keys(props).forEach((prop)=>{
                                    if (done || el.done) return;
                                    progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
                                    easeProgress = a.easingProgress(params.easing, progress);
                                    const { initialValue , finalValue , unit  } = el[prop];
                                    el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
                                    const currentValue = el[prop].currentValue;
                                    if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
                                        el.container.style[prop] = finalValue + unit;
                                        propsDone += 1;
                                        if (propsDone === Object.keys(props).length) {
                                            el.done = true;
                                            elementsDone += 1;
                                        }
                                        if (elementsDone === elements.length) done = true;
                                    }
                                    if (done) {
                                        a.done(params.complete);
                                        return;
                                    }
                                    el.container.style[prop] = currentValue + unit;
                                });
                            });
                            if (done) return; // Then call
                            a.frameId = window1.requestAnimationFrame(render);
                        }
                        a.frameId = window1.requestAnimationFrame(render);
                        return a;
                    }
                };
                if (a.elements.length === 0) return els;
                let animateInstance;
                for(let i = 0; i < a.elements.length; i += 1)if (a.elements[i].dom7AnimateInstance) animateInstance = a.elements[i].dom7AnimateInstance;
                else a.elements[i].dom7AnimateInstance = a;
                if (!animateInstance) animateInstance = a;
                if (initialProps === "stop") animateInstance.stop();
                else animateInstance.animate(a.props, a.params);
                return els;
            }
            function stop() {
                const els = this;
                for(let i = 0; i < els.length; i += 1)if (els[i].dom7AnimateInstance) els[i].dom7AnimateInstance.stop();
            }
            const noTrigger = "resize scroll".split(" ");
            function shortcut(name) {
                function eventHandler(...args) {
                    if (typeof args[0] === "undefined") {
                        for(let i = 0; i < this.length; i += 1)if (noTrigger.indexOf(name) < 0) {
                            if (name in this[i]) this[i][name]();
                            else $(this[i]).trigger(name);
                        }
                        return this;
                    }
                    return this.on(name, ...args);
                }
                return eventHandler;
            }
            const click = shortcut("click");
            const blur = shortcut("blur");
            const focus = shortcut("focus");
            const focusin = shortcut("focusin");
            const focusout = shortcut("focusout");
            const keyup = shortcut("keyup");
            const keydown = shortcut("keydown");
            const keypress = shortcut("keypress");
            const submit = shortcut("submit");
            const change = shortcut("change");
            const mousedown = shortcut("mousedown");
            const mousemove = shortcut("mousemove");
            const mouseup = shortcut("mouseup");
            const mouseenter = shortcut("mouseenter");
            const mouseleave = shortcut("mouseleave");
            const mouseout = shortcut("mouseout");
            const mouseover = shortcut("mouseover");
            const touchstart = shortcut("touchstart");
            const touchend = shortcut("touchend");
            const touchmove = shortcut("touchmove");
            const resize = shortcut("resize");
            const scroll = shortcut("scroll");
            exports1.default = $;
        },
        {
            "ssr-window": "3lyfI",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "dbikn": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            parcelHelpers.export(exports1, "animateCSSModeScroll", ()=>animateCSSModeScroll);
            parcelHelpers.export(exports1, "deleteProps", ()=>deleteProps);
            parcelHelpers.export(exports1, "nextTick", ()=>nextTick);
            parcelHelpers.export(exports1, "now", ()=>now);
            parcelHelpers.export(exports1, "getTranslate", ()=>getTranslate);
            parcelHelpers.export(exports1, "isObject", ()=>isObject);
            parcelHelpers.export(exports1, "extend", ()=>extend);
            parcelHelpers.export(exports1, "getComputedStyle", ()=>getComputedStyle1);
            parcelHelpers.export(exports1, "setCSSProperty", ()=>setCSSProperty);
            var _ssrWindow = require("ssr-window");
            function deleteProps(obj) {
                const object = obj;
                Object.keys(object).forEach((key)=>{
                    try {
                        object[key] = null;
                    } catch (e) {}
                    try {
                        delete object[key];
                    } catch (e1) {}
                });
            }
            function nextTick(callback, delay = 0) {
                return setTimeout(callback, delay);
            }
            function now() {
                return Date.now();
            }
            function getComputedStyle1(el) {
                const window1 = (0, _ssrWindow.getWindow)();
                let style;
                if (window1.getComputedStyle) style = window1.getComputedStyle(el, null);
                if (!style && el.currentStyle) style = el.currentStyle;
                if (!style) style = el.style;
                return style;
            }
            function getTranslate(el, axis = "x") {
                const window1 = (0, _ssrWindow.getWindow)();
                let matrix;
                let curTransform;
                let transformMatrix;
                const curStyle = getComputedStyle1(el, null);
                if (window1.WebKitCSSMatrix) {
                    curTransform = curStyle.transform || curStyle.webkitTransform;
                    if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a)=>a.replace(",", ".")).join(", ");
                    // Some old versions of Webkit choke when 'none' is passed; pass
                    // empty string instead in this case
                    transformMatrix = new window1.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
                } else {
                    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                    matrix = transformMatrix.toString().split(",");
                }
                if (axis === "x") {
                    // Latest Chrome and webkits Fix
                    if (window1.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
                    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
                    else curTransform = parseFloat(matrix[4]);
                }
                if (axis === "y") {
                    // Latest Chrome and webkits Fix
                    if (window1.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
                    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
                    else curTransform = parseFloat(matrix[5]);
                }
                return curTransform || 0;
            }
            function isObject(o) {
                return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
            }
            function isNode(node) {
                // eslint-disable-next-line
                if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
                return node && (node.nodeType === 1 || node.nodeType === 11);
            }
            function extend(...args) {
                const to = Object(args[0]);
                const noExtend = [
                    "__proto__",
                    "constructor",
                    "prototype"
                ];
                for(let i = 1; i < args.length; i += 1){
                    const nextSource = args[i];
                    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
                        const keysArray = Object.keys(Object(nextSource)).filter((key)=>noExtend.indexOf(key) < 0);
                        for(let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1){
                            const nextKey = keysArray[nextIndex];
                            const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                            if (desc !== undefined && desc.enumerable) {
                                if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                                    if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                                    else extend(to[nextKey], nextSource[nextKey]);
                                } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                                    to[nextKey] = {};
                                    if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                                    else extend(to[nextKey], nextSource[nextKey]);
                                } else to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
                return to;
            }
            function setCSSProperty(el, varName, varValue) {
                el.style.setProperty(varName, varValue);
            }
            function animateCSSModeScroll({ swiper , targetPosition , side  }) {
                const window1 = (0, _ssrWindow.getWindow)();
                const startPosition = -swiper.translate;
                let startTime = null;
                let time;
                const duration = swiper.params.speed;
                swiper.wrapperEl.style.scrollSnapType = "none";
                window1.cancelAnimationFrame(swiper.cssModeFrameID);
                const dir = targetPosition > startPosition ? "next" : "prev";
                const isOutOfBound = (current, target)=>{
                    return dir === "next" && current >= target || dir === "prev" && current <= target;
                };
                const animate = ()=>{
                    time = new Date().getTime();
                    if (startTime === null) startTime = time;
                    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
                    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                    if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                    swiper.wrapperEl.scrollTo({
                        [side]: currentPosition
                    });
                    if (isOutOfBound(currentPosition, targetPosition)) {
                        swiper.wrapperEl.style.overflow = "hidden";
                        swiper.wrapperEl.style.scrollSnapType = "";
                        setTimeout(()=>{
                            swiper.wrapperEl.style.overflow = "";
                            swiper.wrapperEl.scrollTo({
                                [side]: currentPosition
                            });
                        });
                        window1.cancelAnimationFrame(swiper.cssModeFrameID);
                        return;
                    }
                    swiper.cssModeFrameID = window1.requestAnimationFrame(animate);
                };
                animate();
            }
        },
        {
            "ssr-window": "3lyfI",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "dU80s": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            parcelHelpers.export(exports1, "getSupport", ()=>getSupport);
            var _ssrWindow = require("ssr-window");
            let support;
            function calcSupport() {
                const window1 = (0, _ssrWindow.getWindow)();
                const document1 = (0, _ssrWindow.getDocument)();
                return {
                    smoothScroll: document1.documentElement && "scrollBehavior" in document1.documentElement.style,
                    touch: !!("ontouchstart" in window1 || window1.DocumentTouch && document1 instanceof window1.DocumentTouch),
                    passiveListener: function checkPassiveListener() {
                        let supportsPassive = false;
                        try {
                            const opts = Object.defineProperty({}, "passive", {
                                // eslint-disable-next-line
                                get () {
                                    supportsPassive = true;
                                }
                            });
                            window1.addEventListener("testPassiveListener", null, opts);
                        } catch (e) {}
                        return supportsPassive;
                    }(),
                    gestures: function checkGestures() {
                        return "ongesturestart" in window1;
                    }()
                };
            }
            function getSupport() {
                if (!support) support = calcSupport();
                return support;
            }
        },
        {
            "ssr-window": "3lyfI",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "fHzNz": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            parcelHelpers.export(exports1, "getDevice", ()=>getDevice);
            var _ssrWindow = require("ssr-window");
            var _getSupportJs = require("./get-support.js");
            let deviceCached;
            function calcDevice({ userAgent  } = {}) {
                const support = (0, _getSupportJs.getSupport)();
                const window1 = (0, _ssrWindow.getWindow)();
                const platform = window1.navigator.platform;
                const ua = userAgent || window1.navigator.userAgent;
                const device = {
                    ios: false,
                    android: false
                };
                const screenWidth = window1.screen.width;
                const screenHeight = window1.screen.height;
                const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
                let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
                const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
                const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                const windows = platform === "Win32";
                let macos = platform === "MacIntel"; // iPadOs 13 fix
                const iPadScreens = [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810"
                ];
                if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                    ipad = ua.match(/(Version)\/([\d.]+)/);
                    if (!ipad) ipad = [
                        0,
                        1,
                        "13_0_0"
                    ];
                    macos = false;
                } // Android
                if (android && !windows) {
                    device.os = "android";
                    device.android = true;
                }
                if (ipad || iphone || ipod) {
                    device.os = "ios";
                    device.ios = true;
                } // Export object
                return device;
            }
            function getDevice(overrides = {}) {
                if (!deviceCached) deviceCached = calcDevice(overrides);
                return deviceCached;
            }
        },
        {
            "ssr-window": "3lyfI",
            "./get-support.js": "dU80s",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "2AwWY": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            parcelHelpers.export(exports1, "getBrowser", ()=>getBrowser);
            var _ssrWindow = require("ssr-window");
            let browser1;
            function calcBrowser() {
                const window1 = (0, _ssrWindow.getWindow)();
                function isSafari() {
                    const ua = window1.navigator.userAgent.toLowerCase();
                    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
                }
                return {
                    isSafari: isSafari(),
                    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window1.navigator.userAgent)
                };
            }
            function getBrowser() {
                if (!browser1) browser1 = calcBrowser();
                return browser1;
            }
        },
        {
            "ssr-window": "3lyfI",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "awiu0": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _ssrWindow = require("ssr-window");
            function Resize({ swiper , on , emit  }) {
                const window1 = (0, _ssrWindow.getWindow)();
                let observer = null;
                let animationFrame = null;
                const resizeHandler = ()=>{
                    if (!swiper || swiper.destroyed || !swiper.initialized) return;
                    emit("beforeResize");
                    emit("resize");
                };
                const createObserver = ()=>{
                    if (!swiper || swiper.destroyed || !swiper.initialized) return;
                    observer = new ResizeObserver((entries)=>{
                        animationFrame = window1.requestAnimationFrame(()=>{
                            const { width , height  } = swiper;
                            let newWidth = width;
                            let newHeight = height;
                            entries.forEach(({ contentBoxSize , contentRect , target  })=>{
                                if (target && target !== swiper.el) return;
                                newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                                newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                            });
                            if (newWidth !== width || newHeight !== height) resizeHandler();
                        });
                    });
                    observer.observe(swiper.el);
                };
                const removeObserver = ()=>{
                    if (animationFrame) window1.cancelAnimationFrame(animationFrame);
                    if (observer && observer.unobserve && swiper.el) {
                        observer.unobserve(swiper.el);
                        observer = null;
                    }
                };
                const orientationChangeHandler = ()=>{
                    if (!swiper || swiper.destroyed || !swiper.initialized) return;
                    emit("orientationchange");
                };
                on("init", ()=>{
                    if (swiper.params.resizeObserver && typeof window1.ResizeObserver !== "undefined") {
                        createObserver();
                        return;
                    }
                    window1.addEventListener("resize", resizeHandler);
                    window1.addEventListener("orientationchange", orientationChangeHandler);
                });
                on("destroy", ()=>{
                    removeObserver();
                    window1.removeEventListener("resize", resizeHandler);
                    window1.removeEventListener("orientationchange", orientationChangeHandler);
                });
            }
            exports1.default = Resize;
        },
        {
            "ssr-window": "3lyfI",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "Fvg8a": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _ssrWindow = require("ssr-window");
            function Observer({ swiper , extendParams , on , emit  }) {
                const observers = [];
                const window1 = (0, _ssrWindow.getWindow)();
                const attach = (target, options = {})=>{
                    const ObserverFunc = window1.MutationObserver || window1.WebkitMutationObserver;
                    const observer = new ObserverFunc((mutations)=>{
                        // The observerUpdate event should only be triggered
                        // once despite the number of mutations.  Additional
                        // triggers are redundant and are very costly
                        if (mutations.length === 1) {
                            emit("observerUpdate", mutations[0]);
                            return;
                        }
                        const observerUpdate = function observerUpdate() {
                            emit("observerUpdate", mutations[0]);
                        };
                        if (window1.requestAnimationFrame) window1.requestAnimationFrame(observerUpdate);
                        else window1.setTimeout(observerUpdate, 0);
                    });
                    observer.observe(target, {
                        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                        childList: typeof options.childList === "undefined" ? true : options.childList,
                        characterData: typeof options.characterData === "undefined" ? true : options.characterData
                    });
                    observers.push(observer);
                };
                const init = ()=>{
                    if (!swiper.params.observer) return;
                    if (swiper.params.observeParents) {
                        const containerParents = swiper.$el.parents();
                        for(let i = 0; i < containerParents.length; i += 1)attach(containerParents[i]);
                    } // Observe container
                    attach(swiper.$el[0], {
                        childList: swiper.params.observeSlideChildren
                    }); // Observe wrapper
                    attach(swiper.$wrapperEl[0], {
                        attributes: false
                    });
                };
                const destroy = ()=>{
                    observers.forEach((observer)=>{
                        observer.disconnect();
                    });
                    observers.splice(0, observers.length);
                };
                extendParams({
                    observer: false,
                    observeParents: false,
                    observeSlideChildren: false
                });
                on("init", init);
                on("destroy", destroy);
            }
            exports1.default = Observer;
        },
        {
            "ssr-window": "3lyfI",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "970nW": [
        function(require, module1, exports1) {
            /* eslint-disable no-underscore-dangle */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            exports1.default = {
                on (events, handler, priority) {
                    const self1 = this;
                    if (!self1.eventsListeners || self1.destroyed) return self1;
                    if (typeof handler !== "function") return self1;
                    const method = priority ? "unshift" : "push";
                    events.split(" ").forEach((event1)=>{
                        if (!self1.eventsListeners[event1]) self1.eventsListeners[event1] = [];
                        self1.eventsListeners[event1][method](handler);
                    });
                    return self1;
                },
                once (events, handler, priority) {
                    const self1 = this;
                    if (!self1.eventsListeners || self1.destroyed) return self1;
                    if (typeof handler !== "function") return self1;
                    function onceHandler(...args) {
                        self1.off(events, onceHandler);
                        if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                        handler.apply(self1, args);
                    }
                    onceHandler.__emitterProxy = handler;
                    return self1.on(events, onceHandler, priority);
                },
                onAny (handler, priority) {
                    const self1 = this;
                    if (!self1.eventsListeners || self1.destroyed) return self1;
                    if (typeof handler !== "function") return self1;
                    const method = priority ? "unshift" : "push";
                    if (self1.eventsAnyListeners.indexOf(handler) < 0) self1.eventsAnyListeners[method](handler);
                    return self1;
                },
                offAny (handler) {
                    const self1 = this;
                    if (!self1.eventsListeners || self1.destroyed) return self1;
                    if (!self1.eventsAnyListeners) return self1;
                    const index = self1.eventsAnyListeners.indexOf(handler);
                    if (index >= 0) self1.eventsAnyListeners.splice(index, 1);
                    return self1;
                },
                off (events, handler) {
                    const self1 = this;
                    if (!self1.eventsListeners || self1.destroyed) return self1;
                    if (!self1.eventsListeners) return self1;
                    events.split(" ").forEach((event1)=>{
                        if (typeof handler === "undefined") self1.eventsListeners[event1] = [];
                        else if (self1.eventsListeners[event1]) self1.eventsListeners[event1].forEach((eventHandler, index)=>{
                            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self1.eventsListeners[event1].splice(index, 1);
                        });
                    });
                    return self1;
                },
                emit (...args) {
                    const self1 = this;
                    if (!self1.eventsListeners || self1.destroyed) return self1;
                    if (!self1.eventsListeners) return self1;
                    let events;
                    let data;
                    let context;
                    if (typeof args[0] === "string" || Array.isArray(args[0])) {
                        events = args[0];
                        data = args.slice(1, args.length);
                        context = self1;
                    } else {
                        events = args[0].events;
                        data = args[0].data;
                        context = args[0].context || self1;
                    }
                    data.unshift(context);
                    const eventsArray = Array.isArray(events) ? events : events.split(" ");
                    eventsArray.forEach((event1)=>{
                        if (self1.eventsAnyListeners && self1.eventsAnyListeners.length) self1.eventsAnyListeners.forEach((eventHandler)=>{
                            eventHandler.apply(context, [
                                event1,
                                ...data
                            ]);
                        });
                        if (self1.eventsListeners && self1.eventsListeners[event1]) self1.eventsListeners[event1].forEach((eventHandler)=>{
                            eventHandler.apply(context, data);
                        });
                    });
                    return self1;
                }
            };
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "5pXU1": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _updateSizeJs = require("./updateSize.js");
            var _updateSizeJsDefault = parcelHelpers.interopDefault(_updateSizeJs);
            var _updateSlidesJs = require("./updateSlides.js");
            var _updateSlidesJsDefault = parcelHelpers.interopDefault(_updateSlidesJs);
            var _updateAutoHeightJs = require("./updateAutoHeight.js");
            var _updateAutoHeightJsDefault = parcelHelpers.interopDefault(_updateAutoHeightJs);
            var _updateSlidesOffsetJs = require("./updateSlidesOffset.js");
            var _updateSlidesOffsetJsDefault = parcelHelpers.interopDefault(_updateSlidesOffsetJs);
            var _updateSlidesProgressJs = require("./updateSlidesProgress.js");
            var _updateSlidesProgressJsDefault = parcelHelpers.interopDefault(_updateSlidesProgressJs);
            var _updateProgressJs = require("./updateProgress.js");
            var _updateProgressJsDefault = parcelHelpers.interopDefault(_updateProgressJs);
            var _updateSlidesClassesJs = require("./updateSlidesClasses.js");
            var _updateSlidesClassesJsDefault = parcelHelpers.interopDefault(_updateSlidesClassesJs);
            var _updateActiveIndexJs = require("./updateActiveIndex.js");
            var _updateActiveIndexJsDefault = parcelHelpers.interopDefault(_updateActiveIndexJs);
            var _updateClickedSlideJs = require("./updateClickedSlide.js");
            var _updateClickedSlideJsDefault = parcelHelpers.interopDefault(_updateClickedSlideJs);
            exports1.default = {
                updateSize: _updateSizeJsDefault.default,
                updateSlides: _updateSlidesJsDefault.default,
                updateAutoHeight: _updateAutoHeightJsDefault.default,
                updateSlidesOffset: _updateSlidesOffsetJsDefault.default,
                updateSlidesProgress: _updateSlidesProgressJsDefault.default,
                updateProgress: _updateProgressJsDefault.default,
                updateSlidesClasses: _updateSlidesClassesJsDefault.default,
                updateActiveIndex: _updateActiveIndexJsDefault.default,
                updateClickedSlide: _updateClickedSlideJsDefault.default
            };
        },
        {
            "./updateSize.js": "bsa2K",
            "./updateSlides.js": "eZm9z",
            "./updateAutoHeight.js": "7KfeT",
            "./updateSlidesOffset.js": "6FBIR",
            "./updateSlidesProgress.js": "f3Dkt",
            "./updateProgress.js": "2zH9x",
            "./updateSlidesClasses.js": "28hyn",
            "./updateActiveIndex.js": "8xZJ6",
            "./updateClickedSlide.js": "e8k92",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "bsa2K": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function updateSize() {
                const swiper = this;
                let width;
                let height;
                const $el = swiper.$el;
                if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width;
                else width = $el[0].clientWidth;
                if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height;
                else height = $el[0].clientHeight;
                if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
                // Subtract paddings
                width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
                height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
                if (Number.isNaN(width)) width = 0;
                if (Number.isNaN(height)) height = 0;
                Object.assign(swiper, {
                    width,
                    height,
                    size: swiper.isHorizontal() ? width : height
                });
            }
            exports1.default = updateSize;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "eZm9z": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _utilsJs = require("../../shared/utils.js");
            function updateSlides() {
                const swiper = this;
                function getDirectionLabel(property) {
                    if (swiper.isHorizontal()) return property;
                    // prettier-ignore
                    return ({
                        "width": "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        "marginRight": "marginBottom"
                    })[property];
                }
                function getDirectionPropertyValue(node, label) {
                    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
                }
                const params = swiper.params;
                const { $wrapperEl , size: swiperSize , rtlTranslate: rtl , wrongRTL  } = swiper;
                const isVirtual = swiper.virtual && params.virtual.enabled;
                const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
                const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
                const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
                let snapGrid = [];
                const slidesGrid = [];
                const slidesSizesGrid = [];
                let offsetBefore = params.slidesOffsetBefore;
                if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
                let offsetAfter = params.slidesOffsetAfter;
                if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
                const previousSnapGridLength = swiper.snapGrid.length;
                const previousSlidesGridLength = swiper.slidesGrid.length;
                let spaceBetween = params.spaceBetween;
                let slidePosition = -offsetBefore;
                let prevSlideSize = 0;
                let index = 0;
                if (typeof swiperSize === "undefined") return;
                if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
                swiper.virtualSize = -spaceBetween; // reset margins
                if (rtl) slides.css({
                    marginLeft: "",
                    marginBottom: "",
                    marginTop: ""
                });
                else slides.css({
                    marginRight: "",
                    marginBottom: "",
                    marginTop: ""
                }); // reset cssMode offsets
                if (params.centeredSlides && params.cssMode) {
                    (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, "--swiper-centered-offset-before", "");
                    (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, "--swiper-centered-offset-after", "");
                }
                const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
                if (gridEnabled) swiper.grid.initSlides(slidesLength);
                // Calc slides
                let slideSize;
                const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key)=>{
                    return typeof params.breakpoints[key].slidesPerView !== "undefined";
                }).length > 0;
                for(let i = 0; i < slidesLength; i += 1){
                    slideSize = 0;
                    const slide = slides.eq(i);
                    if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                    if (slide.css("display") === "none") continue; // eslint-disable-line
                    if (params.slidesPerView === "auto") {
                        if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                        const slideStyles = getComputedStyle(slide[0]);
                        const currentTransform = slide[0].style.transform;
                        const currentWebKitTransform = slide[0].style.webkitTransform;
                        if (currentTransform) slide[0].style.transform = "none";
                        if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
                        if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                        else {
                            // eslint-disable-next-line
                            const width = getDirectionPropertyValue(slideStyles, "width");
                            const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                            const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                            const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                            const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                            const boxSizing = slideStyles.getPropertyValue("box-sizing");
                            if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight;
                            else {
                                const { clientWidth , offsetWidth  } = slide[0];
                                slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                            }
                        }
                        if (currentTransform) slide[0].style.transform = currentTransform;
                        if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                        if (params.roundLengths) slideSize = Math.floor(slideSize);
                    } else {
                        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                        if (params.roundLengths) slideSize = Math.floor(slideSize);
                        if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                    }
                    if (slides[i]) slides[i].swiperSlideSize = slideSize;
                    slidesSizesGrid.push(slideSize);
                    if (params.centeredSlides) {
                        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                        if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                        if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                        if (Math.abs(slidePosition) < 0.001) slidePosition = 0;
                        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                        slidesGrid.push(slidePosition);
                    } else {
                        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                        slidesGrid.push(slidePosition);
                        slidePosition = slidePosition + slideSize + spaceBetween;
                    }
                    swiper.virtualSize += slideSize + spaceBetween;
                    prevSlideSize = slideSize;
                    index += 1;
                }
                swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
                if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) $wrapperEl.css({
                    width: `${swiper.virtualSize + params.spaceBetween}px`
                });
                if (params.setWrapperSize) $wrapperEl.css({
                    [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
                });
                if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
                // Remove last grid elements depending on width
                if (!params.centeredSlides) {
                    const newSlidesGrid = [];
                    for(let i1 = 0; i1 < snapGrid.length; i1 += 1){
                        let slidesGridItem = snapGrid[i1];
                        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                        if (snapGrid[i1] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                    }
                    snapGrid = newSlidesGrid;
                    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
                }
                if (snapGrid.length === 0) snapGrid = [
                    0
                ];
                if (params.spaceBetween !== 0) {
                    const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                    slides.filter((_, slideIndex)=>{
                        if (!params.cssMode) return true;
                        if (slideIndex === slides.length - 1) return false;
                        return true;
                    }).css({
                        [key]: `${spaceBetween}px`
                    });
                }
                if (params.centeredSlides && params.centeredSlidesBounds) {
                    let allSlidesSize = 0;
                    slidesSizesGrid.forEach((slideSizeValue)=>{
                        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                    });
                    allSlidesSize -= params.spaceBetween;
                    const maxSnap = allSlidesSize - swiperSize;
                    snapGrid = snapGrid.map((snap)=>{
                        if (snap < 0) return -offsetBefore;
                        if (snap > maxSnap) return maxSnap + offsetAfter;
                        return snap;
                    });
                }
                if (params.centerInsufficientSlides) {
                    let allSlidesSize1 = 0;
                    slidesSizesGrid.forEach((slideSizeValue)=>{
                        allSlidesSize1 += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                    });
                    allSlidesSize1 -= params.spaceBetween;
                    if (allSlidesSize1 < swiperSize) {
                        const allSlidesOffset = (swiperSize - allSlidesSize1) / 2;
                        snapGrid.forEach((snap, snapIndex)=>{
                            snapGrid[snapIndex] = snap - allSlidesOffset;
                        });
                        slidesGrid.forEach((snap, snapIndex)=>{
                            slidesGrid[snapIndex] = snap + allSlidesOffset;
                        });
                    }
                }
                Object.assign(swiper, {
                    slides,
                    snapGrid,
                    slidesGrid,
                    slidesSizesGrid
                });
                if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                    (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                    (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                    const addToSnapGrid = -swiper.snapGrid[0];
                    const addToSlidesGrid = -swiper.slidesGrid[0];
                    swiper.snapGrid = swiper.snapGrid.map((v)=>v + addToSnapGrid);
                    swiper.slidesGrid = swiper.slidesGrid.map((v)=>v + addToSlidesGrid);
                }
                if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
                if (snapGrid.length !== previousSnapGridLength) {
                    if (swiper.params.watchOverflow) swiper.checkOverflow();
                    swiper.emit("snapGridLengthChange");
                }
                if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
                if (params.watchSlidesProgress) swiper.updateSlidesOffset();
                if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                    const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
                    if (slidesLength <= params.maxBackfaceHiddenSlides) {
                        if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
                    } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
                }
            }
            exports1.default = updateSlides;
        },
        {
            "../../shared/utils.js": "dbikn",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "7KfeT": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            function updateAutoHeight(speed) {
                const swiper = this;
                const activeSlides = [];
                const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                let newHeight = 0;
                let i;
                if (typeof speed === "number") swiper.setTransition(speed);
                else if (speed === true) swiper.setTransition(swiper.params.speed);
                const getSlideByIndex = (index)=>{
                    if (isVirtual) return swiper.slides.filter((el)=>parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index)[0];
                    return swiper.slides.eq(index)[0];
                }; // Find slides currently in view
                if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
                    if (swiper.params.centeredSlides) (swiper.visibleSlides || (0, _domJsDefault.default)([])).each((slide)=>{
                        activeSlides.push(slide);
                    });
                    else for(i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1){
                        const index = swiper.activeIndex + i;
                        if (index > swiper.slides.length && !isVirtual) break;
                        activeSlides.push(getSlideByIndex(index));
                    }
                } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
                // Find new height from highest slide in view
                for(i = 0; i < activeSlides.length; i += 1)if (typeof activeSlides[i] !== "undefined") {
                    const height = activeSlides[i].offsetHeight;
                    newHeight = height > newHeight ? height : newHeight;
                }
                // Update Height
                if (newHeight || newHeight === 0) swiper.$wrapperEl.css("height", `${newHeight}px`);
            }
            exports1.default = updateAutoHeight;
        },
        {
            "../../shared/dom.js": "7pW5q",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "6FBIR": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function updateSlidesOffset() {
                const swiper = this;
                const slides = swiper.slides;
                for(let i = 0; i < slides.length; i += 1)slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
            }
            exports1.default = updateSlidesOffset;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "f3Dkt": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            function updateSlidesProgress(translate = this && this.translate || 0) {
                const swiper = this;
                const params = swiper.params;
                const { slides , rtlTranslate: rtl , snapGrid  } = swiper;
                if (slides.length === 0) return;
                if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
                let offsetCenter = -translate;
                if (rtl) offsetCenter = translate; // Visible Slides
                slides.removeClass(params.slideVisibleClass);
                swiper.visibleSlidesIndexes = [];
                swiper.visibleSlides = [];
                for(let i = 0; i < slides.length; i += 1){
                    const slide = slides[i];
                    let slideOffset = slide.swiperSlideOffset;
                    if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                    const slideBefore = -(offsetCenter - slideOffset);
                    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                    if (isVisible) {
                        swiper.visibleSlides.push(slide);
                        swiper.visibleSlidesIndexes.push(i);
                        slides.eq(i).addClass(params.slideVisibleClass);
                    }
                    slide.progress = rtl ? -slideProgress : slideProgress;
                    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
                }
                swiper.visibleSlides = (0, _domJsDefault.default)(swiper.visibleSlides);
            }
            exports1.default = updateSlidesProgress;
        },
        {
            "../../shared/dom.js": "7pW5q",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "2zH9x": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function updateProgress(translate) {
                const swiper = this;
                if (typeof translate === "undefined") {
                    const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line
                    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
                }
                const params = swiper.params;
                const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
                let { progress , isBeginning , isEnd  } = swiper;
                const wasBeginning = isBeginning;
                const wasEnd = isEnd;
                if (translatesDiff === 0) {
                    progress = 0;
                    isBeginning = true;
                    isEnd = true;
                } else {
                    progress = (translate - swiper.minTranslate()) / translatesDiff;
                    isBeginning = progress <= 0;
                    isEnd = progress >= 1;
                }
                Object.assign(swiper, {
                    progress,
                    isBeginning,
                    isEnd
                });
                if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
                if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
                if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
                if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
                swiper.emit("progress", progress);
            }
            exports1.default = updateProgress;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "28hyn": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function updateSlidesClasses() {
                const swiper = this;
                const { slides , params , $wrapperEl , activeIndex , realIndex  } = swiper;
                const isVirtual = swiper.virtual && params.virtual.enabled;
                slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
                let activeSlide;
                if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
                else activeSlide = slides.eq(activeIndex);
                // Active classes
                activeSlide.addClass(params.slideActiveClass);
                if (params.loop) {
                    // Duplicate to all looped slides
                    if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
                    else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
                } // Next Slide
                let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
                if (params.loop && nextSlide.length === 0) {
                    nextSlide = slides.eq(0);
                    nextSlide.addClass(params.slideNextClass);
                } // Prev Slide
                let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
                if (params.loop && prevSlide.length === 0) {
                    prevSlide = slides.eq(-1);
                    prevSlide.addClass(params.slidePrevClass);
                }
                if (params.loop) {
                    // Duplicate to all looped slides
                    if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
                    else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
                    if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
                    else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
                }
                swiper.emitSlidesClasses();
            }
            exports1.default = updateSlidesClasses;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "8xZJ6": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function updateActiveIndex(newActiveIndex) {
                const swiper = this;
                const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
                const { slidesGrid , snapGrid , params , activeIndex: previousIndex , realIndex: previousRealIndex , snapIndex: previousSnapIndex  } = swiper;
                let activeIndex = newActiveIndex;
                let snapIndex;
                if (typeof activeIndex === "undefined") {
                    for(let i = 0; i < slidesGrid.length; i += 1){
                        if (typeof slidesGrid[i + 1] !== "undefined") {
                            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i;
                            else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                        } else if (translate >= slidesGrid[i]) activeIndex = i;
                    } // Normalize slideIndex
                    if (params.normalizeSlideIndex) {
                        if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
                    }
                }
                if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate);
                else {
                    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
                }
                if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
                if (activeIndex === previousIndex) {
                    if (snapIndex !== previousSnapIndex) {
                        swiper.snapIndex = snapIndex;
                        swiper.emit("snapIndexChange");
                    }
                    return;
                } // Get real index
                const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
                Object.assign(swiper, {
                    snapIndex,
                    realIndex,
                    previousIndex,
                    activeIndex
                });
                swiper.emit("activeIndexChange");
                swiper.emit("snapIndexChange");
                if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
                if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
            }
            exports1.default = updateActiveIndex;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "e8k92": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            function updateClickedSlide(e) {
                const swiper = this;
                const params = swiper.params;
                const slide = (0, _domJsDefault.default)(e).closest(`.${params.slideClass}`)[0];
                let slideFound = false;
                let slideIndex;
                if (slide) {
                    for(let i = 0; i < swiper.slides.length; i += 1)if (swiper.slides[i] === slide) {
                        slideFound = true;
                        slideIndex = i;
                        break;
                    }
                }
                if (slide && slideFound) {
                    swiper.clickedSlide = slide;
                    if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt((0, _domJsDefault.default)(slide).attr("data-swiper-slide-index"), 10);
                    else swiper.clickedIndex = slideIndex;
                } else {
                    swiper.clickedSlide = undefined;
                    swiper.clickedIndex = undefined;
                    return;
                }
                if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
            }
            exports1.default = updateClickedSlide;
        },
        {
            "../../shared/dom.js": "7pW5q",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "82UFa": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _getTranslateJs = require("./getTranslate.js");
            var _getTranslateJsDefault = parcelHelpers.interopDefault(_getTranslateJs);
            var _setTranslateJs = require("./setTranslate.js");
            var _setTranslateJsDefault = parcelHelpers.interopDefault(_setTranslateJs);
            var _minTranslateJs = require("./minTranslate.js");
            var _minTranslateJsDefault = parcelHelpers.interopDefault(_minTranslateJs);
            var _maxTranslateJs = require("./maxTranslate.js");
            var _maxTranslateJsDefault = parcelHelpers.interopDefault(_maxTranslateJs);
            var _translateToJs = require("./translateTo.js");
            var _translateToJsDefault = parcelHelpers.interopDefault(_translateToJs);
            exports1.default = {
                getTranslate: _getTranslateJsDefault.default,
                setTranslate: _setTranslateJsDefault.default,
                minTranslate: _minTranslateJsDefault.default,
                maxTranslate: _maxTranslateJsDefault.default,
                translateTo: _translateToJsDefault.default
            };
        },
        {
            "./getTranslate.js": "l7sfz",
            "./setTranslate.js": "g0P3q",
            "./minTranslate.js": "hopBm",
            "./maxTranslate.js": "izojh",
            "./translateTo.js": "9fo5P",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "l7sfz": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _utilsJs = require("../../shared/utils.js");
            function getSwiperTranslate(axis = this.isHorizontal() ? "x" : "y") {
                const swiper = this;
                const { params , rtlTranslate: rtl , translate , $wrapperEl  } = swiper;
                if (params.virtualTranslate) return rtl ? -translate : translate;
                if (params.cssMode) return translate;
                let currentTranslate = (0, _utilsJs.getTranslate)($wrapperEl[0], axis);
                if (rtl) currentTranslate = -currentTranslate;
                return currentTranslate || 0;
            }
            exports1.default = getSwiperTranslate;
        },
        {
            "../../shared/utils.js": "dbikn",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "g0P3q": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function setTranslate(translate, byController) {
                const swiper = this;
                const { rtlTranslate: rtl , params , $wrapperEl , wrapperEl , progress  } = swiper;
                let x = 0;
                let y = 0;
                const z = 0;
                if (swiper.isHorizontal()) x = rtl ? -translate : translate;
                else y = translate;
                if (params.roundLengths) {
                    x = Math.floor(x);
                    y = Math.floor(y);
                }
                if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
                else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
                swiper.previousTranslate = swiper.translate;
                swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress
                let newProgress;
                const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
                if (translatesDiff === 0) newProgress = 0;
                else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
                if (newProgress !== progress) swiper.updateProgress(translate);
                swiper.emit("setTranslate", swiper.translate, byController);
            }
            exports1.default = setTranslate;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "hopBm": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function minTranslate() {
                return -this.snapGrid[0];
            }
            exports1.default = minTranslate;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "izojh": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function maxTranslate() {
                return -this.snapGrid[this.snapGrid.length - 1];
            }
            exports1.default = maxTranslate;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "9fo5P": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _utilsJs = require("../../shared/utils.js");
            function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
                const swiper = this;
                const { params , wrapperEl  } = swiper;
                if (swiper.animating && params.preventInteractionOnTransition) return false;
                const minTranslate = swiper.minTranslate();
                const maxTranslate = swiper.maxTranslate();
                let newTranslate;
                if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
                else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
                else newTranslate = translate; // Update progress
                swiper.updateProgress(newTranslate);
                if (params.cssMode) {
                    const isH = swiper.isHorizontal();
                    if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
                    else {
                        if (!swiper.support.smoothScroll) {
                            (0, _utilsJs.animateCSSModeScroll)({
                                swiper,
                                targetPosition: -newTranslate,
                                side: isH ? "left" : "top"
                            });
                            return true;
                        }
                        wrapperEl.scrollTo({
                            [isH ? "left" : "top"]: -newTranslate,
                            behavior: "smooth"
                        });
                    }
                    return true;
                }
                if (speed === 0) {
                    swiper.setTransition(0);
                    swiper.setTranslate(newTranslate);
                    if (runCallbacks) {
                        swiper.emit("beforeTransitionStart", speed, internal);
                        swiper.emit("transitionEnd");
                    }
                } else {
                    swiper.setTransition(speed);
                    swiper.setTranslate(newTranslate);
                    if (runCallbacks) {
                        swiper.emit("beforeTransitionStart", speed, internal);
                        swiper.emit("transitionStart");
                    }
                    if (!swiper.animating) {
                        swiper.animating = true;
                        if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                            if (!swiper || swiper.destroyed) return;
                            if (e.target !== this) return;
                            swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                            swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                            swiper.onTranslateToWrapperTransitionEnd = null;
                            delete swiper.onTranslateToWrapperTransitionEnd;
                            if (runCallbacks) swiper.emit("transitionEnd");
                        };
                        swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                    }
                }
                return true;
            }
            exports1.default = translateTo;
        },
        {
            "../../shared/utils.js": "dbikn",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "8Knou": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _setTransitionJs = require("./setTransition.js");
            var _setTransitionJsDefault = parcelHelpers.interopDefault(_setTransitionJs);
            var _transitionStartJs = require("./transitionStart.js");
            var _transitionStartJsDefault = parcelHelpers.interopDefault(_transitionStartJs);
            var _transitionEndJs = require("./transitionEnd.js");
            var _transitionEndJsDefault = parcelHelpers.interopDefault(_transitionEndJs);
            exports1.default = {
                setTransition: _setTransitionJsDefault.default,
                transitionStart: _transitionStartJsDefault.default,
                transitionEnd: _transitionEndJsDefault.default
            };
        },
        {
            "./setTransition.js": "g4hnj",
            "./transitionStart.js": "ZupG2",
            "./transitionEnd.js": "6fcJ0",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "g4hnj": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function setTransition(duration, byController) {
                const swiper = this;
                if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
                swiper.emit("setTransition", duration, byController);
            }
            exports1.default = setTransition;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "ZupG2": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _transitionEmitJs = require("./transitionEmit.js");
            var _transitionEmitJsDefault = parcelHelpers.interopDefault(_transitionEmitJs);
            function transitionStart(runCallbacks = true, direction) {
                const swiper = this;
                const { params  } = swiper;
                if (params.cssMode) return;
                if (params.autoHeight) swiper.updateAutoHeight();
                (0, _transitionEmitJsDefault.default)({
                    swiper,
                    runCallbacks,
                    direction,
                    step: "Start"
                });
            }
            exports1.default = transitionStart;
        },
        {
            "./transitionEmit.js": "d6fZ6",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "d6fZ6": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function transitionEmit({ swiper , runCallbacks , direction , step  }) {
                const { activeIndex , previousIndex  } = swiper;
                let dir = direction;
                if (!dir) {
                    if (activeIndex > previousIndex) dir = "next";
                    else if (activeIndex < previousIndex) dir = "prev";
                    else dir = "reset";
                }
                swiper.emit(`transition${step}`);
                if (runCallbacks && activeIndex !== previousIndex) {
                    if (dir === "reset") {
                        swiper.emit(`slideResetTransition${step}`);
                        return;
                    }
                    swiper.emit(`slideChangeTransition${step}`);
                    if (dir === "next") swiper.emit(`slideNextTransition${step}`);
                    else swiper.emit(`slidePrevTransition${step}`);
                }
            }
            exports1.default = transitionEmit;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "6fcJ0": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _transitionEmitJs = require("./transitionEmit.js");
            var _transitionEmitJsDefault = parcelHelpers.interopDefault(_transitionEmitJs);
            function transitionEnd(runCallbacks = true, direction) {
                const swiper = this;
                const { params  } = swiper;
                swiper.animating = false;
                if (params.cssMode) return;
                swiper.setTransition(0);
                (0, _transitionEmitJsDefault.default)({
                    swiper,
                    runCallbacks,
                    direction,
                    step: "End"
                });
            }
            exports1.default = transitionEnd;
        },
        {
            "./transitionEmit.js": "d6fZ6",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "5VZY1": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _slideToJs = require("./slideTo.js");
            var _slideToJsDefault = parcelHelpers.interopDefault(_slideToJs);
            var _slideToLoopJs = require("./slideToLoop.js");
            var _slideToLoopJsDefault = parcelHelpers.interopDefault(_slideToLoopJs);
            var _slideNextJs = require("./slideNext.js");
            var _slideNextJsDefault = parcelHelpers.interopDefault(_slideNextJs);
            var _slidePrevJs = require("./slidePrev.js");
            var _slidePrevJsDefault = parcelHelpers.interopDefault(_slidePrevJs);
            var _slideResetJs = require("./slideReset.js");
            var _slideResetJsDefault = parcelHelpers.interopDefault(_slideResetJs);
            var _slideToClosestJs = require("./slideToClosest.js");
            var _slideToClosestJsDefault = parcelHelpers.interopDefault(_slideToClosestJs);
            var _slideToClickedSlideJs = require("./slideToClickedSlide.js");
            var _slideToClickedSlideJsDefault = parcelHelpers.interopDefault(_slideToClickedSlideJs);
            exports1.default = {
                slideTo: _slideToJsDefault.default,
                slideToLoop: _slideToLoopJsDefault.default,
                slideNext: _slideNextJsDefault.default,
                slidePrev: _slidePrevJsDefault.default,
                slideReset: _slideResetJsDefault.default,
                slideToClosest: _slideToClosestJsDefault.default,
                slideToClickedSlide: _slideToClickedSlideJsDefault.default
            };
        },
        {
            "./slideTo.js": "iYsU0",
            "./slideToLoop.js": "c0zrc",
            "./slideNext.js": "6QRzM",
            "./slidePrev.js": "2gloi",
            "./slideReset.js": "2Jl3v",
            "./slideToClosest.js": "c03V7",
            "./slideToClickedSlide.js": "kCvnh",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "iYsU0": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _utilsJs = require("../../shared/utils.js");
            function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
                if (typeof index !== "number" && typeof index !== "string") throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
                if (typeof index === "string") {
                    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */ const indexAsNumber = parseInt(index, 10);
                    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */ const isValidNumber = isFinite(indexAsNumber);
                    if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                    // Knowing that the converted `index` is a valid number,
                    // we can update the original argument's value.
                    index = indexAsNumber;
                }
                const swiper = this;
                let slideIndex = index;
                if (slideIndex < 0) slideIndex = 0;
                const { params , snapGrid , slidesGrid , previousIndex , activeIndex , rtlTranslate: rtl , wrapperEl , enabled  } = swiper;
                if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
                const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
                let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
                if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
                const translate = -snapGrid[snapIndex]; // Normalize slideIndex
                if (params.normalizeSlideIndex) for(let i = 0; i < slidesGrid.length; i += 1){
                    const normalizedTranslate = -Math.floor(translate * 100);
                    const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                    const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                    if (typeof slidesGrid[i + 1] !== "undefined") {
                        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i;
                        else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                    } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
                }
                // Directions locks
                if (swiper.initialized && slideIndex !== activeIndex) {
                    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
                        if ((activeIndex || 0) !== slideIndex) return false;
                    }
                }
                if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
                // Update progress
                swiper.updateProgress(translate);
                let direction;
                if (slideIndex > activeIndex) direction = "next";
                else if (slideIndex < activeIndex) direction = "prev";
                else direction = "reset"; // Update Index
                if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                    swiper.updateActiveIndex(slideIndex); // Update Height
                    if (params.autoHeight) swiper.updateAutoHeight();
                    swiper.updateSlidesClasses();
                    if (params.effect !== "slide") swiper.setTranslate(translate);
                    if (direction !== "reset") {
                        swiper.transitionStart(runCallbacks, direction);
                        swiper.transitionEnd(runCallbacks, direction);
                    }
                    return false;
                }
                if (params.cssMode) {
                    const isH = swiper.isHorizontal();
                    const t = rtl ? translate : -translate;
                    if (speed === 0) {
                        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                        if (isVirtual) {
                            swiper.wrapperEl.style.scrollSnapType = "none";
                            swiper._immediateVirtual = true;
                        }
                        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        if (isVirtual) requestAnimationFrame(()=>{
                            swiper.wrapperEl.style.scrollSnapType = "";
                            swiper._swiperImmediateVirtual = false;
                        });
                    } else {
                        if (!swiper.support.smoothScroll) {
                            (0, _utilsJs.animateCSSModeScroll)({
                                swiper,
                                targetPosition: t,
                                side: isH ? "left" : "top"
                            });
                            return true;
                        }
                        wrapperEl.scrollTo({
                            [isH ? "left" : "top"]: t,
                            behavior: "smooth"
                        });
                    }
                    return true;
                }
                swiper.setTransition(speed);
                swiper.setTranslate(translate);
                swiper.updateActiveIndex(slideIndex);
                swiper.updateSlidesClasses();
                swiper.emit("beforeTransitionStart", speed, internal);
                swiper.transitionStart(runCallbacks, direction);
                if (speed === 0) swiper.transitionEnd(runCallbacks, direction);
                else if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                        swiper.onSlideToWrapperTransitionEnd = null;
                        delete swiper.onSlideToWrapperTransitionEnd;
                        swiper.transitionEnd(runCallbacks, direction);
                    };
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                }
                return true;
            }
            exports1.default = slideTo;
        },
        {
            "../../shared/utils.js": "dbikn",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "c0zrc": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
                if (typeof index === "string") {
                    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */ const indexAsNumber = parseInt(index, 10);
                    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */ const isValidNumber = isFinite(indexAsNumber);
                    if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                    // Knowing that the converted `index` is a valid number,
                    // we can update the original argument's value.
                    index = indexAsNumber;
                }
                const swiper = this;
                let newIndex = index;
                if (swiper.params.loop) newIndex += swiper.loopedSlides;
                return swiper.slideTo(newIndex, speed, runCallbacks, internal);
            }
            exports1.default = slideToLoop;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "6QRzM": [
        function(require, module1, exports1) {
            /* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
                const swiper = this;
                const { animating , enabled , params  } = swiper;
                if (!enabled) return swiper;
                let perGroup = params.slidesPerGroup;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
                const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
                if (params.loop) {
                    if (animating && params.loopPreventsSlide) return false;
                    swiper.loopFix(); // eslint-disable-next-line
                    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                }
                if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
                return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
            }
            exports1.default = slideNext;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "2gloi": [
        function(require, module1, exports1) {
            /* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
                const swiper = this;
                const { params , animating , snapGrid , slidesGrid , rtlTranslate , enabled  } = swiper;
                if (!enabled) return swiper;
                if (params.loop) {
                    if (animating && params.loopPreventsSlide) return false;
                    swiper.loopFix(); // eslint-disable-next-line
                    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                }
                const translate = rtlTranslate ? swiper.translate : -swiper.translate;
                function normalize(val) {
                    if (val < 0) return -Math.floor(Math.abs(val));
                    return Math.floor(val);
                }
                const normalizedTranslate = normalize(translate);
                const normalizedSnapGrid = snapGrid.map((val)=>normalize(val));
                let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
                if (typeof prevSnap === "undefined" && params.cssMode) {
                    let prevSnapIndex;
                    snapGrid.forEach((snap, snapIndex)=>{
                        if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                    });
                    if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
                }
                let prevIndex = 0;
                if (typeof prevSnap !== "undefined") {
                    prevIndex = slidesGrid.indexOf(prevSnap);
                    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                        prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                        prevIndex = Math.max(prevIndex, 0);
                    }
                }
                if (params.rewind && swiper.isBeginning) {
                    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
                }
                return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
            }
            exports1.default = slidePrev;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "2Jl3v": [
        function(require, module1, exports1) {
            /* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
                const swiper = this;
                return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
            }
            exports1.default = slideReset;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "c03V7": [
        function(require, module1, exports1) {
            /* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
                const swiper = this;
                let index = swiper.activeIndex;
                const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
                const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
                const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
                if (translate >= swiper.snapGrid[snapIndex]) {
                    // The current translate is on or after the current snap index, so the choice
                    // is between the current index and the one after it.
                    const currentSnap = swiper.snapGrid[snapIndex];
                    const nextSnap = swiper.snapGrid[snapIndex + 1];
                    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
                } else {
                    // The current translate is before the current snap index, so the choice
                    // is between the current index and the one before it.
                    const prevSnap = swiper.snapGrid[snapIndex - 1];
                    const currentSnap1 = swiper.snapGrid[snapIndex];
                    if (translate - prevSnap <= (currentSnap1 - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
                }
                index = Math.max(index, 0);
                index = Math.min(index, swiper.slidesGrid.length - 1);
                return swiper.slideTo(index, speed, runCallbacks, internal);
            }
            exports1.default = slideToClosest;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "kCvnh": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            var _utilsJs = require("../../shared/utils.js");
            function slideToClickedSlide() {
                const swiper = this;
                const { params , $wrapperEl  } = swiper;
                const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
                let slideToIndex = swiper.clickedIndex;
                let realIndex;
                if (params.loop) {
                    if (swiper.animating) return;
                    realIndex = parseInt((0, _domJsDefault.default)(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
                    if (params.centeredSlides) {
                        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                            swiper.loopFix();
                            slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                            (0, _utilsJs.nextTick)(()=>{
                                swiper.slideTo(slideToIndex);
                            });
                        } else swiper.slideTo(slideToIndex);
                    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
                        swiper.loopFix();
                        slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                        (0, _utilsJs.nextTick)(()=>{
                            swiper.slideTo(slideToIndex);
                        });
                    } else swiper.slideTo(slideToIndex);
                } else swiper.slideTo(slideToIndex);
            }
            exports1.default = slideToClickedSlide;
        },
        {
            "../../shared/dom.js": "7pW5q",
            "../../shared/utils.js": "dbikn",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "6S1wN": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _loopCreateJs = require("./loopCreate.js");
            var _loopCreateJsDefault = parcelHelpers.interopDefault(_loopCreateJs);
            var _loopFixJs = require("./loopFix.js");
            var _loopFixJsDefault = parcelHelpers.interopDefault(_loopFixJs);
            var _loopDestroyJs = require("./loopDestroy.js");
            var _loopDestroyJsDefault = parcelHelpers.interopDefault(_loopDestroyJs);
            exports1.default = {
                loopCreate: _loopCreateJsDefault.default,
                loopFix: _loopFixJsDefault.default,
                loopDestroy: _loopDestroyJsDefault.default
            };
        },
        {
            "./loopCreate.js": "2lRpX",
            "./loopFix.js": "iCLJj",
            "./loopDestroy.js": "in4TF",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "2lRpX": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _ssrWindow = require("ssr-window");
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            function loopCreate() {
                const swiper = this;
                const document1 = (0, _ssrWindow.getDocument)();
                const { params , $wrapperEl  } = swiper; // Remove duplicated slides
                const $selector = $wrapperEl.children().length > 0 ? (0, _domJsDefault.default)($wrapperEl.children()[0].parentNode) : $wrapperEl;
                $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
                let slides = $selector.children(`.${params.slideClass}`);
                if (params.loopFillGroupWithBlank) {
                    const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                    if (blankSlidesNum !== params.slidesPerGroup) {
                        for(let i = 0; i < blankSlidesNum; i += 1){
                            const blankNode = (0, _domJsDefault.default)(document1.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                            $selector.append(blankNode);
                        }
                        slides = $selector.children(`.${params.slideClass}`);
                    }
                }
                if (params.slidesPerView === "auto" && !params.loopedSlides) params.loopedSlides = slides.length;
                swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
                swiper.loopedSlides += params.loopAdditionalSlides;
                if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) swiper.loopedSlides = slides.length;
                const prependSlides = [];
                const appendSlides = [];
                slides.each((el, index)=>{
                    const slide = (0, _domJsDefault.default)(el);
                    slide.attr("data-swiper-slide-index", index);
                });
                for(let i1 = 0; i1 < swiper.loopedSlides; i1 += 1){
                    const index = i1 - Math.floor(i1 / slides.length) * slides.length;
                    appendSlides.push(slides.eq(index)[0]);
                    prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
                }
                for(let i2 = 0; i2 < appendSlides.length; i2 += 1)$selector.append((0, _domJsDefault.default)(appendSlides[i2].cloneNode(true)).addClass(params.slideDuplicateClass));
                for(let i3 = prependSlides.length - 1; i3 >= 0; i3 -= 1)$selector.prepend((0, _domJsDefault.default)(prependSlides[i3].cloneNode(true)).addClass(params.slideDuplicateClass));
            }
            exports1.default = loopCreate;
        },
        {
            "ssr-window": "3lyfI",
            "../../shared/dom.js": "7pW5q",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "iCLJj": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function loopFix() {
                const swiper = this;
                swiper.emit("beforeLoopFix");
                const { activeIndex , slides , loopedSlides , allowSlidePrev , allowSlideNext , snapGrid , rtlTranslate: rtl  } = swiper;
                let newIndex;
                swiper.allowSlidePrev = true;
                swiper.allowSlideNext = true;
                const snapTranslate = -snapGrid[activeIndex];
                const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding
                if (activeIndex < loopedSlides) {
                    newIndex = slides.length - loopedSlides * 3 + activeIndex;
                    newIndex += loopedSlides;
                    const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                    if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
                } else if (activeIndex >= slides.length - loopedSlides) {
                    // Fix For Positive Oversliding
                    newIndex = -slides.length + activeIndex + loopedSlides;
                    newIndex += loopedSlides;
                    const slideChanged1 = swiper.slideTo(newIndex, 0, false, true);
                    if (slideChanged1 && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
                }
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
            }
            exports1.default = loopFix;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "in4TF": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function loopDestroy() {
                const swiper = this;
                const { $wrapperEl , params , slides  } = swiper;
                $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
                slides.removeAttr("data-swiper-slide-index");
            }
            exports1.default = loopDestroy;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "6y5ez": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _setGrabCursorJs = require("./setGrabCursor.js");
            var _setGrabCursorJsDefault = parcelHelpers.interopDefault(_setGrabCursorJs);
            var _unsetGrabCursorJs = require("./unsetGrabCursor.js");
            var _unsetGrabCursorJsDefault = parcelHelpers.interopDefault(_unsetGrabCursorJs);
            exports1.default = {
                setGrabCursor: _setGrabCursorJsDefault.default,
                unsetGrabCursor: _unsetGrabCursorJsDefault.default
            };
        },
        {
            "./setGrabCursor.js": "6iLu0",
            "./unsetGrabCursor.js": "fKd0x",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "6iLu0": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function setGrabCursor(moving) {
                const swiper = this;
                if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
                const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
                el.style.cursor = "move";
                el.style.cursor = moving ? "grabbing" : "grab";
            }
            exports1.default = setGrabCursor;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "fKd0x": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function unsetGrabCursor() {
                const swiper = this;
                if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
                swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            }
            exports1.default = unsetGrabCursor;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "jPWSg": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _ssrWindow = require("ssr-window");
            var _onTouchStartJs = require("./onTouchStart.js");
            var _onTouchStartJsDefault = parcelHelpers.interopDefault(_onTouchStartJs);
            var _onTouchMoveJs = require("./onTouchMove.js");
            var _onTouchMoveJsDefault = parcelHelpers.interopDefault(_onTouchMoveJs);
            var _onTouchEndJs = require("./onTouchEnd.js");
            var _onTouchEndJsDefault = parcelHelpers.interopDefault(_onTouchEndJs);
            var _onResizeJs = require("./onResize.js");
            var _onResizeJsDefault = parcelHelpers.interopDefault(_onResizeJs);
            var _onClickJs = require("./onClick.js");
            var _onClickJsDefault = parcelHelpers.interopDefault(_onClickJs);
            var _onScrollJs = require("./onScroll.js");
            var _onScrollJsDefault = parcelHelpers.interopDefault(_onScrollJs);
            let dummyEventAttached = false;
            function dummyEventListener() {}
            const events = (swiper, method)=>{
                const document1 = (0, _ssrWindow.getDocument)();
                const { params , touchEvents , el , wrapperEl , device , support  } = swiper;
                const capture = !!params.nested;
                const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
                const swiperMethod = method; // Touch Events
                if (!support.touch) {
                    el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                    document1[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                    document1[domMethod](touchEvents.end, swiper.onTouchEnd, false);
                } else {
                    const passiveListener = touchEvents.start === "touchstart" && support.passiveListener && params.passiveListeners ? {
                        passive: true,
                        capture: false
                    } : false;
                    el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                    el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                        passive: false,
                        capture
                    } : capture);
                    el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
                    if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
                } // Prevent Links Clicks
                if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
                if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
                // Resize handler
                if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", _onResizeJsDefault.default, true);
                else swiper[swiperMethod]("observerUpdate", _onResizeJsDefault.default, true);
            };
            function attachEvents() {
                const swiper = this;
                const document1 = (0, _ssrWindow.getDocument)();
                const { params , support  } = swiper;
                swiper.onTouchStart = (0, _onTouchStartJsDefault.default).bind(swiper);
                swiper.onTouchMove = (0, _onTouchMoveJsDefault.default).bind(swiper);
                swiper.onTouchEnd = (0, _onTouchEndJsDefault.default).bind(swiper);
                if (params.cssMode) swiper.onScroll = (0, _onScrollJsDefault.default).bind(swiper);
                swiper.onClick = (0, _onClickJsDefault.default).bind(swiper);
                if (support.touch && !dummyEventAttached) {
                    document1.addEventListener("touchstart", dummyEventListener);
                    dummyEventAttached = true;
                }
                events(swiper, "on");
            }
            function detachEvents() {
                const swiper = this;
                events(swiper, "off");
            }
            exports1.default = {
                attachEvents,
                detachEvents
            };
        },
        {
            "ssr-window": "3lyfI",
            "./onTouchStart.js": "kkzrg",
            "./onTouchMove.js": "cSIvX",
            "./onTouchEnd.js": "db2nG",
            "./onResize.js": "4q7ER",
            "./onClick.js": "leO2O",
            "./onScroll.js": "ik2Ty",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "kkzrg": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _ssrWindow = require("ssr-window");
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            var _utilsJs = require("../../shared/utils.js"); // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
            function closestElement(selector, base = this) {
                function __closestFrom(el) {
                    if (!el || el === (0, _ssrWindow.getDocument)() || el === (0, _ssrWindow.getWindow)()) return null;
                    if (el.assignedSlot) el = el.assignedSlot;
                    const found = el.closest(selector);
                    if (!found && !el.getRootNode) return null;
                    return found || __closestFrom(el.getRootNode().host);
                }
                return __closestFrom(base);
            }
            function onTouchStart(event1) {
                const swiper = this;
                const document1 = (0, _ssrWindow.getDocument)();
                const window1 = (0, _ssrWindow.getWindow)();
                const data = swiper.touchEventsData;
                const { params , touches , enabled  } = swiper;
                if (!enabled) return;
                if (swiper.animating && params.preventInteractionOnTransition) return;
                if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
                let e = event1;
                if (e.originalEvent) e = e.originalEvent;
                let $targetEl = (0, _domJsDefault.default)(e.target);
                if (params.touchEventsTarget === "wrapper") {
                    if (!$targetEl.closest(swiper.wrapperEl).length) return;
                }
                data.isTouchEvent = e.type === "touchstart";
                if (!data.isTouchEvent && "which" in e && e.which === 3) return;
                if (!data.isTouchEvent && "button" in e && e.button > 0) return;
                if (data.isTouched && data.isMoved) return; // change target el for shadow root component
                const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== ""; // eslint-disable-next-line
                const eventPath = event1.composedPath ? event1.composedPath() : event1.path;
                if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) $targetEl = (0, _domJsDefault.default)(eventPath[0]);
                const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
                const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element
                if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
                    swiper.allowClick = true;
                    return;
                }
                if (params.swipeHandler) {
                    if (!$targetEl.closest(params.swipeHandler)[0]) return;
                }
                touches.currentX = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
                touches.currentY = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
                const startX = touches.currentX;
                const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
                const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
                const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
                if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window1.innerWidth - edgeSwipeThreshold)) {
                    if (edgeSwipeDetection === "prevent") event1.preventDefault();
                    else return;
                }
                Object.assign(data, {
                    isTouched: true,
                    isMoved: false,
                    allowTouchCallbacks: true,
                    isScrolling: undefined,
                    startMoving: undefined
                });
                touches.startX = startX;
                touches.startY = startY;
                data.touchStartTime = (0, _utilsJs.now)();
                swiper.allowClick = true;
                swiper.updateSize();
                swiper.swipeDirection = undefined;
                if (params.threshold > 0) data.allowThresholdMove = false;
                if (e.type !== "touchstart") {
                    let preventDefault = true;
                    if ($targetEl.is(data.focusableElements)) {
                        preventDefault = false;
                        if ($targetEl[0].nodeName === "SELECT") data.isTouched = false;
                    }
                    if (document1.activeElement && (0, _domJsDefault.default)(document1.activeElement).is(data.focusableElements) && document1.activeElement !== $targetEl[0]) document1.activeElement.blur();
                    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
                }
                if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
                swiper.emit("touchStart", e);
            }
            exports1.default = onTouchStart;
        },
        {
            "ssr-window": "3lyfI",
            "../../shared/dom.js": "7pW5q",
            "../../shared/utils.js": "dbikn",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "cSIvX": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _ssrWindow = require("ssr-window");
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            var _utilsJs = require("../../shared/utils.js");
            function onTouchMove(event1) {
                const document1 = (0, _ssrWindow.getDocument)();
                const swiper = this;
                const data = swiper.touchEventsData;
                const { params , touches , rtlTranslate: rtl , enabled  } = swiper;
                if (!enabled) return;
                let e = event1;
                if (e.originalEvent) e = e.originalEvent;
                if (!data.isTouched) {
                    if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                    return;
                }
                if (data.isTouchEvent && e.type !== "touchmove") return;
                const targetTouch = e.type === "touchmove" && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
                const pageX = e.type === "touchmove" ? targetTouch.pageX : e.pageX;
                const pageY = e.type === "touchmove" ? targetTouch.pageY : e.pageY;
                if (e.preventedByNestedSwiper) {
                    touches.startX = pageX;
                    touches.startY = pageY;
                    return;
                }
                if (!swiper.allowTouchMove) {
                    if (!(0, _domJsDefault.default)(e.target).is(data.focusableElements)) swiper.allowClick = false;
                    if (data.isTouched) {
                        Object.assign(touches, {
                            startX: pageX,
                            startY: pageY,
                            currentX: pageX,
                            currentY: pageY
                        });
                        data.touchStartTime = (0, _utilsJs.now)();
                    }
                    return;
                }
                if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
                    if (swiper.isVertical()) {
                        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                            data.isTouched = false;
                            data.isMoved = false;
                            return;
                        }
                    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
                }
                if (data.isTouchEvent && document1.activeElement) {
                    if (e.target === document1.activeElement && (0, _domJsDefault.default)(e.target).is(data.focusableElements)) {
                        data.isMoved = true;
                        swiper.allowClick = false;
                        return;
                    }
                }
                if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
                if (e.targetTouches && e.targetTouches.length > 1) return;
                touches.currentX = pageX;
                touches.currentY = pageY;
                const diffX = touches.currentX - touches.startX;
                const diffY = touches.currentY - touches.startY;
                if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
                if (typeof data.isScrolling === "undefined") {
                    let touchAngle;
                    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false;
                    else if (diffX * diffX + diffY * diffY >= 25) {
                        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                    }
                }
                if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
                if (typeof data.startMoving === "undefined") {
                    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
                }
                if (data.isScrolling) {
                    data.isTouched = false;
                    return;
                }
                if (!data.startMoving) return;
                swiper.allowClick = false;
                if (!params.cssMode && e.cancelable) e.preventDefault();
                if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
                if (!data.isMoved) {
                    if (params.loop && !params.cssMode) swiper.loopFix();
                    data.startTranslate = swiper.getTranslate();
                    swiper.setTransition(0);
                    if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
                    data.allowMomentumBounce = false; // Grab Cursor
                    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                    swiper.emit("sliderFirstMove", e);
                }
                swiper.emit("sliderMove", e);
                data.isMoved = true;
                let diff = swiper.isHorizontal() ? diffX : diffY;
                touches.diff = diff;
                diff *= params.touchRatio;
                if (rtl) diff = -diff;
                swiper.swipeDirection = diff > 0 ? "prev" : "next";
                data.currentTranslate = diff + data.startTranslate;
                let disableParentSwiper = true;
                let resistanceRatio = params.resistanceRatio;
                if (params.touchReleaseOnEdges) resistanceRatio = 0;
                if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
                if (disableParentSwiper) e.preventedByNestedSwiper = true;
                // Directions locks
                if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
                if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
                if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
                // Threshold
                if (params.threshold > 0) {
                    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                        if (!data.allowThresholdMove) {
                            data.allowThresholdMove = true;
                            touches.startX = touches.currentX;
                            touches.startY = touches.currentY;
                            data.currentTranslate = data.startTranslate;
                            touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                            return;
                        }
                    } else {
                        data.currentTranslate = data.startTranslate;
                        return;
                    }
                }
                if (!params.followFinger || params.cssMode) return; // Update active index in free mode
                if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
                // Update progress
                swiper.updateProgress(data.currentTranslate); // Update translate
                swiper.setTranslate(data.currentTranslate);
            }
            exports1.default = onTouchMove;
        },
        {
            "ssr-window": "3lyfI",
            "../../shared/dom.js": "7pW5q",
            "../../shared/utils.js": "dbikn",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "db2nG": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _utilsJs = require("../../shared/utils.js");
            function onTouchEnd(event1) {
                const swiper = this;
                const data = swiper.touchEventsData;
                const { params , touches , rtlTranslate: rtl , slidesGrid , enabled  } = swiper;
                if (!enabled) return;
                let e = event1;
                if (e.originalEvent) e = e.originalEvent;
                if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
                data.allowTouchCallbacks = false;
                if (!data.isTouched) {
                    if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                    data.isMoved = false;
                    data.startMoving = false;
                    return;
                } // Return Grab Cursor
                if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
                // Time diff
                const touchEndTime = (0, _utilsJs.now)();
                const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click
                if (swiper.allowClick) {
                    const pathTree = e.path || e.composedPath && e.composedPath();
                    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                    swiper.emit("tap click", e);
                    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
                }
                data.lastClickTime = (0, _utilsJs.now)();
                (0, _utilsJs.nextTick)(()=>{
                    if (!swiper.destroyed) swiper.allowClick = true;
                });
                if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
                    data.isTouched = false;
                    data.isMoved = false;
                    data.startMoving = false;
                    return;
                }
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                let currentPos;
                if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate;
                else currentPos = -data.currentTranslate;
                if (params.cssMode) return;
                if (swiper.params.freeMode && params.freeMode.enabled) {
                    swiper.freeMode.onTouchEnd({
                        currentPos
                    });
                    return;
                } // Find current slide
                let stopIndex = 0;
                let groupSize = swiper.slidesSizesGrid[0];
                for(let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup){
                    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                    if (typeof slidesGrid[i + increment] !== "undefined") {
                        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                            stopIndex = i;
                            groupSize = slidesGrid[i + increment] - slidesGrid[i];
                        }
                    } else if (currentPos >= slidesGrid[i]) {
                        stopIndex = i;
                        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                    }
                }
                let rewindFirstIndex = null;
                let rewindLastIndex = null;
                if (params.rewind) {
                    if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                    else if (swiper.isEnd) rewindFirstIndex = 0;
                } // Find current slide size
                const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
                const increment1 = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (timeDiff > params.longSwipesMs) {
                    // Long touches
                    if (!params.longSwipes) {
                        swiper.slideTo(swiper.activeIndex);
                        return;
                    }
                    if (swiper.swipeDirection === "next") {
                        if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment1);
                        else swiper.slideTo(stopIndex);
                    }
                    if (swiper.swipeDirection === "prev") {
                        if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment1);
                        else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex);
                        else swiper.slideTo(stopIndex);
                    }
                } else {
                    // Short swipes
                    if (!params.shortSwipes) {
                        swiper.slideTo(swiper.activeIndex);
                        return;
                    }
                    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                    if (!isNavButtonTarget) {
                        if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment1);
                        if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                    } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment1);
                    else swiper.slideTo(stopIndex);
                }
            }
            exports1.default = onTouchEnd;
        },
        {
            "../../shared/utils.js": "dbikn",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "4q7ER": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function onResize() {
                const swiper = this;
                const { params , el  } = swiper;
                if (el && el.offsetWidth === 0) return; // Breakpoints
                if (params.breakpoints) swiper.setBreakpoint();
                // Save locks
                const { allowSlideNext , allowSlidePrev , snapGrid  } = swiper; // Disable locks on resize
                swiper.allowSlideNext = true;
                swiper.allowSlidePrev = true;
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateSlidesClasses();
                if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true);
                else swiper.slideTo(swiper.activeIndex, 0, false, true);
                if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
                // Return locks after resize
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
            }
            exports1.default = onResize;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "leO2O": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function onClick(e) {
                const swiper = this;
                if (!swiper.enabled) return;
                if (!swiper.allowClick) {
                    if (swiper.params.preventClicks) e.preventDefault();
                    if (swiper.params.preventClicksPropagation && swiper.animating) {
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                    }
                }
            }
            exports1.default = onClick;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "ik2Ty": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function onScroll() {
                const swiper = this;
                const { wrapperEl , rtlTranslate , enabled  } = swiper;
                if (!enabled) return;
                swiper.previousTranslate = swiper.translate;
                if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft;
                else swiper.translate = -wrapperEl.scrollTop;
                // eslint-disable-next-line
                if (swiper.translate === 0) swiper.translate = 0;
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
                let newProgress;
                const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
                if (translatesDiff === 0) newProgress = 0;
                else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
                if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
                swiper.emit("setTranslate", swiper.translate, false);
            }
            exports1.default = onScroll;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "6sZHb": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _setBreakpointJs = require("./setBreakpoint.js");
            var _setBreakpointJsDefault = parcelHelpers.interopDefault(_setBreakpointJs);
            var _getBreakpointJs = require("./getBreakpoint.js");
            var _getBreakpointJsDefault = parcelHelpers.interopDefault(_getBreakpointJs);
            exports1.default = {
                setBreakpoint: _setBreakpointJsDefault.default,
                getBreakpoint: _getBreakpointJsDefault.default
            };
        },
        {
            "./setBreakpoint.js": "9am8j",
            "./getBreakpoint.js": "dePRa",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "9am8j": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _utilsJs = require("../../shared/utils.js");
            const isGridEnabled = (swiper, params)=>{
                return swiper.grid && params.grid && params.grid.rows > 1;
            };
            function setBreakpoint() {
                const swiper = this;
                const { activeIndex , initialized , loopedSlides =0 , params , $el  } = swiper;
                const breakpoints = params.breakpoints;
                if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters
                const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
                if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
                const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
                const breakpointParams = breakpointOnlyParams || swiper.originalParams;
                const wasMultiRow = isGridEnabled(swiper, params);
                const isMultiRow = isGridEnabled(swiper, breakpointParams);
                const wasEnabled = params.enabled;
                if (wasMultiRow && !isMultiRow) {
                    $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
                    swiper.emitContainerClasses();
                } else if (!wasMultiRow && isMultiRow) {
                    $el.addClass(`${params.containerModifierClass}grid`);
                    if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") $el.addClass(`${params.containerModifierClass}grid-column`);
                    swiper.emitContainerClasses();
                } // Toggle navigation, pagination, scrollbar
                [
                    "navigation",
                    "pagination",
                    "scrollbar"
                ].forEach((prop)=>{
                    const wasModuleEnabled = params[prop] && params[prop].enabled;
                    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                    if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                    if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
                });
                const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
                const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
                if (directionChanged && initialized) swiper.changeDirection();
                (0, _utilsJs.extend)(swiper.params, breakpointParams);
                const isEnabled = swiper.params.enabled;
                Object.assign(swiper, {
                    allowTouchMove: swiper.params.allowTouchMove,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev
                });
                if (wasEnabled && !isEnabled) swiper.disable();
                else if (!wasEnabled && isEnabled) swiper.enable();
                swiper.currentBreakpoint = breakpoint;
                swiper.emit("_beforeBreakpoint", breakpointParams);
                if (needsReLoop && initialized) {
                    swiper.loopDestroy();
                    swiper.loopCreate();
                    swiper.updateSlides();
                    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
                }
                swiper.emit("breakpoint", breakpointParams);
            }
            exports1.default = setBreakpoint;
        },
        {
            "../../shared/utils.js": "dbikn",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "dePRa": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _ssrWindow = require("ssr-window");
            function getBreakpoint(breakpoints, base = "window", containerEl) {
                if (!breakpoints || base === "container" && !containerEl) return undefined;
                let breakpoint = false;
                const window1 = (0, _ssrWindow.getWindow)();
                const currentHeight = base === "window" ? window1.innerHeight : containerEl.clientHeight;
                const points = Object.keys(breakpoints).map((point)=>{
                    if (typeof point === "string" && point.indexOf("@") === 0) {
                        const minRatio = parseFloat(point.substr(1));
                        const value = currentHeight * minRatio;
                        return {
                            value,
                            point
                        };
                    }
                    return {
                        value: point,
                        point
                    };
                });
                points.sort((a, b)=>parseInt(a.value, 10) - parseInt(b.value, 10));
                for(let i = 0; i < points.length; i += 1){
                    const { point , value  } = points[i];
                    if (base === "window") {
                        if (window1.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                    } else if (value <= containerEl.clientWidth) breakpoint = point;
                }
                return breakpoint || "max";
            }
            exports1.default = getBreakpoint;
        },
        {
            "ssr-window": "3lyfI",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "dJ7YF": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _addClassesJs = require("./addClasses.js");
            var _addClassesJsDefault = parcelHelpers.interopDefault(_addClassesJs);
            var _removeClassesJs = require("./removeClasses.js");
            var _removeClassesJsDefault = parcelHelpers.interopDefault(_removeClassesJs);
            exports1.default = {
                addClasses: _addClassesJsDefault.default,
                removeClasses: _removeClassesJsDefault.default
            };
        },
        {
            "./addClasses.js": "2wJnK",
            "./removeClasses.js": "bfksE",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "2wJnK": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function prepareClasses(entries, prefix) {
                const resultClasses = [];
                entries.forEach((item)=>{
                    if (typeof item === "object") Object.keys(item).forEach((classNames)=>{
                        if (item[classNames]) resultClasses.push(prefix + classNames);
                    });
                    else if (typeof item === "string") resultClasses.push(prefix + item);
                });
                return resultClasses;
            }
            function addClasses() {
                const swiper = this;
                const { classNames , params , rtl , $el , device , support  } = swiper; // prettier-ignore
                const suffixes = prepareClasses([
                    "initialized",
                    params.direction,
                    {
                        "pointer-events": !support.touch
                    },
                    {
                        "free-mode": swiper.params.freeMode && params.freeMode.enabled
                    },
                    {
                        "autoheight": params.autoHeight
                    },
                    {
                        "rtl": rtl
                    },
                    {
                        "grid": params.grid && params.grid.rows > 1
                    },
                    {
                        "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
                    },
                    {
                        "android": device.android
                    },
                    {
                        "ios": device.ios
                    },
                    {
                        "css-mode": params.cssMode
                    },
                    {
                        "centered": params.cssMode && params.centeredSlides
                    },
                    {
                        "watch-progress": params.watchSlidesProgress
                    }
                ], params.containerModifierClass);
                classNames.push(...suffixes);
                $el.addClass([
                    ...classNames
                ].join(" "));
                swiper.emitContainerClasses();
            }
            exports1.default = addClasses;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "bfksE": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function removeClasses() {
                const swiper = this;
                const { $el , classNames  } = swiper;
                $el.removeClass(classNames.join(" "));
                swiper.emitContainerClasses();
            }
            exports1.default = removeClasses;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "4xpbQ": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _loadImageJs = require("./loadImage.js");
            var _loadImageJsDefault = parcelHelpers.interopDefault(_loadImageJs);
            var _preloadImagesJs = require("./preloadImages.js");
            var _preloadImagesJsDefault = parcelHelpers.interopDefault(_preloadImagesJs);
            exports1.default = {
                loadImage: _loadImageJsDefault.default,
                preloadImages: _preloadImagesJsDefault.default
            };
        },
        {
            "./loadImage.js": "lapsD",
            "./preloadImages.js": "4DDtH",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "lapsD": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _ssrWindow = require("ssr-window");
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
                const window1 = (0, _ssrWindow.getWindow)();
                let image;
                function onReady() {
                    if (callback) callback();
                }
                const isPicture = (0, _domJsDefault.default)(imageEl).parent("picture")[0];
                if (!isPicture && (!imageEl.complete || !checkForComplete)) {
                    if (src) {
                        image = new window1.Image();
                        image.onload = onReady;
                        image.onerror = onReady;
                        if (sizes) image.sizes = sizes;
                        if (srcset) image.srcset = srcset;
                        if (src) image.src = src;
                    } else onReady();
                } else onReady();
            }
            exports1.default = loadImage;
        },
        {
            "ssr-window": "3lyfI",
            "../../shared/dom.js": "7pW5q",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "4DDtH": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function preloadImages() {
                const swiper = this;
                swiper.imagesToLoad = swiper.$el.find("img");
                function onReady() {
                    if (typeof swiper === "undefined" || swiper === null || !swiper || swiper.destroyed) return;
                    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
                    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                        if (swiper.params.updateOnImagesReady) swiper.update();
                        swiper.emit("imagesReady");
                    }
                }
                for(let i = 0; i < swiper.imagesToLoad.length; i += 1){
                    const imageEl = swiper.imagesToLoad[i];
                    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
                }
            }
            exports1.default = preloadImages;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "cCZBR": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function checkOverflow() {
                const swiper = this;
                const { isLocked: wasLocked , params  } = swiper;
                const { slidesOffsetBefore  } = params;
                if (slidesOffsetBefore) {
                    const lastSlideIndex = swiper.slides.length - 1;
                    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                    swiper.isLocked = swiper.size > lastSlideRightEdge;
                } else swiper.isLocked = swiper.snapGrid.length === 1;
                if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
                if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
                if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
                if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
            }
            exports1.default = {
                checkOverflow
            };
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "jwKb5": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            exports1.default = {
                init: true,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: false,
                updateOnWindowResize: true,
                resizeObserver: true,
                nested: false,
                createElements: false,
                enabled: true,
                focusableElements: "input, select, option, textarea, button, video, label",
                // Overrides
                width: null,
                height: null,
                //
                preventInteractionOnTransition: false,
                // ssr
                userAgent: null,
                url: null,
                // To support iOS's swipe-to-go-back gesture (when being used in-app).
                edgeSwipeDetection: false,
                edgeSwipeThreshold: 20,
                // Autoheight
                autoHeight: false,
                // Set wrapper width
                setWrapperSize: false,
                // Virtual Translate
                virtualTranslate: false,
                // Effects
                effect: "slide",
                // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
                // Breakpoints
                breakpoints: undefined,
                breakpointsBase: "window",
                // Slides grid
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: false,
                centeredSlides: false,
                centeredSlidesBounds: false,
                slidesOffsetBefore: 0,
                // in px
                slidesOffsetAfter: 0,
                // in px
                normalizeSlideIndex: true,
                centerInsufficientSlides: false,
                // Disable swiper and hide navigation when container not overflow
                watchOverflow: true,
                // Round length
                roundLengths: false,
                // Touches
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: true,
                shortSwipes: true,
                longSwipes: true,
                longSwipesRatio: 0.5,
                longSwipesMs: 300,
                followFinger: true,
                allowTouchMove: true,
                threshold: 0,
                touchMoveStopPropagation: false,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: false,
                touchReleaseOnEdges: false,
                // Unique Navigation Elements
                uniqueNavElements: true,
                // Resistance
                resistance: true,
                resistanceRatio: 0.85,
                // Progress
                watchSlidesProgress: false,
                // Cursor
                grabCursor: false,
                // Clicks
                preventClicks: true,
                preventClicksPropagation: true,
                slideToClickedSlide: false,
                // Images
                preloadImages: true,
                updateOnImagesReady: true,
                // loop
                loop: false,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopedSlidesLimit: true,
                loopFillGroupWithBlank: false,
                loopPreventsSlide: true,
                // rewind
                rewind: false,
                // Swiping/no swiping
                allowSlidePrev: true,
                allowSlideNext: true,
                swipeHandler: null,
                // '.swipe-handler',
                noSwiping: true,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                // Passive Listeners
                passiveListeners: true,
                maxBackfaceHiddenSlides: 10,
                // NS
                containerModifierClass: "swiper-",
                // NEW
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                // Callbacks
                runCallbacksOnInit: true,
                // Internals
                _emitClasses: false
            };
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "2G6E7": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _utilsJs = require("../shared/utils.js");
            function moduleExtendParams(params, allModulesParams) {
                return function extendParams(obj = {}) {
                    const moduleParamName = Object.keys(obj)[0];
                    const moduleParams = obj[moduleParamName];
                    if (typeof moduleParams !== "object" || moduleParams === null) {
                        (0, _utilsJs.extend)(allModulesParams, obj);
                        return;
                    }
                    if ([
                        "navigation",
                        "pagination",
                        "scrollbar"
                    ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
                        auto: true
                    };
                    if (!(moduleParamName in params && "enabled" in moduleParams)) {
                        (0, _utilsJs.extend)(allModulesParams, obj);
                        return;
                    }
                    if (params[moduleParamName] === true) params[moduleParamName] = {
                        enabled: true
                    };
                    if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                    if (!params[moduleParamName]) params[moduleParamName] = {
                        enabled: false
                    };
                    (0, _utilsJs.extend)(allModulesParams, obj);
                };
            }
            exports1.default = moduleExtendParams;
        },
        {
            "../shared/utils.js": "dbikn",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "13JV9": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            var _utilsJs = require("../../shared/utils.js");
            function Virtual({ swiper , extendParams , on , emit  }) {
                extendParams({
                    virtual: {
                        enabled: false,
                        slides: [],
                        cache: true,
                        renderSlide: null,
                        renderExternal: null,
                        renderExternalUpdate: true,
                        addSlidesBefore: 0,
                        addSlidesAfter: 0
                    }
                });
                let cssModeTimeout;
                swiper.virtual = {
                    cache: {},
                    from: undefined,
                    to: undefined,
                    slides: [],
                    offset: 0,
                    slidesGrid: []
                };
                function renderSlide(slide, index) {
                    const params = swiper.params.virtual;
                    if (params.cache && swiper.virtual.cache[index]) return swiper.virtual.cache[index];
                    const $slideEl = params.renderSlide ? (0, _domJsDefault.default)(params.renderSlide.call(swiper, slide, index)) : (0, _domJsDefault.default)(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
                    if (!$slideEl.attr("data-swiper-slide-index")) $slideEl.attr("data-swiper-slide-index", index);
                    if (params.cache) swiper.virtual.cache[index] = $slideEl;
                    return $slideEl;
                }
                function update(force) {
                    const { slidesPerView , slidesPerGroup , centeredSlides  } = swiper.params;
                    const { addSlidesBefore , addSlidesAfter  } = swiper.params.virtual;
                    const { from: previousFrom , to: previousTo , slides , slidesGrid: previousSlidesGrid , offset: previousOffset  } = swiper.virtual;
                    if (!swiper.params.cssMode) swiper.updateActiveIndex();
                    const activeIndex = swiper.activeIndex || 0;
                    let offsetProp;
                    if (swiper.rtlTranslate) offsetProp = "right";
                    else offsetProp = swiper.isHorizontal() ? "left" : "top";
                    let slidesAfter;
                    let slidesBefore;
                    if (centeredSlides) {
                        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
                        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
                    } else {
                        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
                        slidesBefore = slidesPerGroup + addSlidesBefore;
                    }
                    const from = Math.max((activeIndex || 0) - slidesBefore, 0);
                    const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
                    const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
                    Object.assign(swiper.virtual, {
                        from,
                        to,
                        offset,
                        slidesGrid: swiper.slidesGrid
                    });
                    function onRendered() {
                        swiper.updateSlides();
                        swiper.updateProgress();
                        swiper.updateSlidesClasses();
                        if (swiper.lazy && swiper.params.lazy.enabled) swiper.lazy.load();
                        emit("virtualUpdate");
                    }
                    if (previousFrom === from && previousTo === to && !force) {
                        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) swiper.slides.css(offsetProp, `${offset}px`);
                        swiper.updateProgress();
                        emit("virtualUpdate");
                        return;
                    }
                    if (swiper.params.virtual.renderExternal) {
                        swiper.params.virtual.renderExternal.call(swiper, {
                            offset,
                            from,
                            to,
                            slides: function getSlides() {
                                const slidesToRender = [];
                                for(let i = from; i <= to; i += 1)slidesToRender.push(slides[i]);
                                return slidesToRender;
                            }()
                        });
                        if (swiper.params.virtual.renderExternalUpdate) onRendered();
                        else emit("virtualUpdate");
                        return;
                    }
                    const prependIndexes = [];
                    const appendIndexes = [];
                    if (force) swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
                    else {
                        for(let i = previousFrom; i <= previousTo; i += 1)if (i < from || i > to) swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
                    }
                    for(let i1 = 0; i1 < slides.length; i1 += 1)if (i1 >= from && i1 <= to) {
                        if (typeof previousTo === "undefined" || force) appendIndexes.push(i1);
                        else {
                            if (i1 > previousTo) appendIndexes.push(i1);
                            if (i1 < previousFrom) prependIndexes.push(i1);
                        }
                    }
                    appendIndexes.forEach((index)=>{
                        swiper.$wrapperEl.append(renderSlide(slides[index], index));
                    });
                    prependIndexes.sort((a, b)=>b - a).forEach((index)=>{
                        swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
                    });
                    swiper.$wrapperEl.children(".swiper-slide").css(offsetProp, `${offset}px`);
                    onRendered();
                }
                function appendSlide(slides) {
                    if (typeof slides === "object" && "length" in slides) {
                        for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.push(slides[i]);
                    } else swiper.virtual.slides.push(slides);
                    update(true);
                }
                function prependSlide(slides) {
                    const activeIndex = swiper.activeIndex;
                    let newActiveIndex = activeIndex + 1;
                    let numberOfNewSlides = 1;
                    if (Array.isArray(slides)) {
                        for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
                        newActiveIndex = activeIndex + slides.length;
                        numberOfNewSlides = slides.length;
                    } else swiper.virtual.slides.unshift(slides);
                    if (swiper.params.virtual.cache) {
                        const cache = swiper.virtual.cache;
                        const newCache = {};
                        Object.keys(cache).forEach((cachedIndex)=>{
                            const $cachedEl = cache[cachedIndex];
                            const cachedElIndex = $cachedEl.attr("data-swiper-slide-index");
                            if (cachedElIndex) $cachedEl.attr("data-swiper-slide-index", parseInt(cachedElIndex, 10) + numberOfNewSlides);
                            newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
                        });
                        swiper.virtual.cache = newCache;
                    }
                    update(true);
                    swiper.slideTo(newActiveIndex, 0);
                }
                function removeSlide(slidesIndexes) {
                    if (typeof slidesIndexes === "undefined" || slidesIndexes === null) return;
                    let activeIndex = swiper.activeIndex;
                    if (Array.isArray(slidesIndexes)) for(let i = slidesIndexes.length - 1; i >= 0; i -= 1){
                        swiper.virtual.slides.splice(slidesIndexes[i], 1);
                        if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes[i]];
                        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
                        activeIndex = Math.max(activeIndex, 0);
                    }
                    else {
                        swiper.virtual.slides.splice(slidesIndexes, 1);
                        if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes];
                        if (slidesIndexes < activeIndex) activeIndex -= 1;
                        activeIndex = Math.max(activeIndex, 0);
                    }
                    update(true);
                    swiper.slideTo(activeIndex, 0);
                }
                function removeAllSlides() {
                    swiper.virtual.slides = [];
                    if (swiper.params.virtual.cache) swiper.virtual.cache = {};
                    update(true);
                    swiper.slideTo(0, 0);
                }
                on("beforeInit", ()=>{
                    if (!swiper.params.virtual.enabled) return;
                    swiper.virtual.slides = swiper.params.virtual.slides;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
                    swiper.params.watchSlidesProgress = true;
                    swiper.originalParams.watchSlidesProgress = true;
                    if (!swiper.params.initialSlide) update();
                });
                on("setTranslate", ()=>{
                    if (!swiper.params.virtual.enabled) return;
                    if (swiper.params.cssMode && !swiper._immediateVirtual) {
                        clearTimeout(cssModeTimeout);
                        cssModeTimeout = setTimeout(()=>{
                            update();
                        }, 100);
                    } else update();
                });
                on("init update resize", ()=>{
                    if (!swiper.params.virtual.enabled) return;
                    if (swiper.params.cssMode) (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, "--swiper-virtual-size", `${swiper.virtualSize}px`);
                });
                Object.assign(swiper.virtual, {
                    appendSlide,
                    prependSlide,
                    removeSlide,
                    removeAllSlides,
                    update
                });
            }
            exports1.default = Virtual;
        },
        {
            "../../shared/dom.js": "7pW5q",
            "../../shared/utils.js": "dbikn",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "82wTs": [
        function(require, module1, exports1) {
            /* eslint-disable consistent-return */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _ssrWindow = require("ssr-window");
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            function Keyboard({ swiper , extendParams , on , emit  }) {
                const document1 = (0, _ssrWindow.getDocument)();
                const window1 = (0, _ssrWindow.getWindow)();
                swiper.keyboard = {
                    enabled: false
                };
                extendParams({
                    keyboard: {
                        enabled: false,
                        onlyInViewport: true,
                        pageUpDown: true
                    }
                });
                function handle(event1) {
                    if (!swiper.enabled) return;
                    const { rtlTranslate: rtl  } = swiper;
                    let e = event1;
                    if (e.originalEvent) e = e.originalEvent; // jquery fix
                    const kc = e.keyCode || e.charCode;
                    const pageUpDown = swiper.params.keyboard.pageUpDown;
                    const isPageUp = pageUpDown && kc === 33;
                    const isPageDown = pageUpDown && kc === 34;
                    const isArrowLeft = kc === 37;
                    const isArrowRight = kc === 39;
                    const isArrowUp = kc === 38;
                    const isArrowDown = kc === 40; // Directions locks
                    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
                    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
                    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return undefined;
                    if (document1.activeElement && document1.activeElement.nodeName && (document1.activeElement.nodeName.toLowerCase() === "input" || document1.activeElement.nodeName.toLowerCase() === "textarea")) return undefined;
                    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
                        let inView = false; // Check that swiper should be inside of visible area of window
                        if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) return undefined;
                        const $el = swiper.$el;
                        const swiperWidth = $el[0].clientWidth;
                        const swiperHeight = $el[0].clientHeight;
                        const windowWidth = window1.innerWidth;
                        const windowHeight = window1.innerHeight;
                        const swiperOffset = swiper.$el.offset();
                        if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
                        const swiperCoord = [
                            [
                                swiperOffset.left,
                                swiperOffset.top
                            ],
                            [
                                swiperOffset.left + swiperWidth,
                                swiperOffset.top
                            ],
                            [
                                swiperOffset.left,
                                swiperOffset.top + swiperHeight
                            ],
                            [
                                swiperOffset.left + swiperWidth,
                                swiperOffset.top + swiperHeight
                            ]
                        ];
                        for(let i = 0; i < swiperCoord.length; i += 1){
                            const point = swiperCoord[i];
                            if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                                if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                                inView = true;
                            }
                        }
                        if (!inView) return undefined;
                    }
                    if (swiper.isHorizontal()) {
                        if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                            if (e.preventDefault) e.preventDefault();
                            else e.returnValue = false;
                        }
                        if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
                        if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
                    } else {
                        if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                            if (e.preventDefault) e.preventDefault();
                            else e.returnValue = false;
                        }
                        if (isPageDown || isArrowDown) swiper.slideNext();
                        if (isPageUp || isArrowUp) swiper.slidePrev();
                    }
                    emit("keyPress", kc);
                    return undefined;
                }
                function enable() {
                    if (swiper.keyboard.enabled) return;
                    (0, _domJsDefault.default)(document1).on("keydown", handle);
                    swiper.keyboard.enabled = true;
                }
                function disable() {
                    if (!swiper.keyboard.enabled) return;
                    (0, _domJsDefault.default)(document1).off("keydown", handle);
                    swiper.keyboard.enabled = false;
                }
                on("init", ()=>{
                    if (swiper.params.keyboard.enabled) enable();
                });
                on("destroy", ()=>{
                    if (swiper.keyboard.enabled) disable();
                });
                Object.assign(swiper.keyboard, {
                    enable,
                    disable
                });
            }
            exports1.default = Keyboard;
        },
        {
            "ssr-window": "3lyfI",
            "../../shared/dom.js": "7pW5q",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "dP6Ui": [
        function(require, module1, exports1) {
            /* eslint-disable consistent-return */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _ssrWindow = require("ssr-window");
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            var _utilsJs = require("../../shared/utils.js");
            function Mousewheel({ swiper , extendParams , on , emit  }) {
                const window1 = (0, _ssrWindow.getWindow)();
                extendParams({
                    mousewheel: {
                        enabled: false,
                        releaseOnEdges: false,
                        invert: false,
                        forceToAxis: false,
                        sensitivity: 1,
                        eventsTarget: "container",
                        thresholdDelta: null,
                        thresholdTime: null
                    }
                });
                swiper.mousewheel = {
                    enabled: false
                };
                let timeout;
                let lastScrollTime = (0, _utilsJs.now)();
                let lastEventBeforeSnap;
                const recentWheelEvents = [];
                function normalize(e) {
                    // Reasonable defaults
                    const PIXEL_STEP = 10;
                    const LINE_HEIGHT = 40;
                    const PAGE_HEIGHT = 800;
                    let sX = 0;
                    let sY = 0; // spinX, spinY
                    let pX = 0;
                    let pY = 0; // pixelX, pixelY
                    // Legacy
                    if ("detail" in e) sY = e.detail;
                    if ("wheelDelta" in e) sY = -e.wheelDelta / 120;
                    if ("wheelDeltaY" in e) sY = -e.wheelDeltaY / 120;
                    if ("wheelDeltaX" in e) sX = -e.wheelDeltaX / 120;
                    // side scrolling on FF with DOMMouseScroll
                    if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
                        sX = sY;
                        sY = 0;
                    }
                    pX = sX * PIXEL_STEP;
                    pY = sY * PIXEL_STEP;
                    if ("deltaY" in e) pY = e.deltaY;
                    if ("deltaX" in e) pX = e.deltaX;
                    if (e.shiftKey && !pX) {
                        // if user scrolls with shift he wants horizontal scroll
                        pX = pY;
                        pY = 0;
                    }
                    if ((pX || pY) && e.deltaMode) {
                        if (e.deltaMode === 1) {
                            // delta in LINE units
                            pX *= LINE_HEIGHT;
                            pY *= LINE_HEIGHT;
                        } else {
                            // delta in PAGE units
                            pX *= PAGE_HEIGHT;
                            pY *= PAGE_HEIGHT;
                        }
                    } // Fall-back if spin cannot be determined
                    if (pX && !sX) sX = pX < 1 ? -1 : 1;
                    if (pY && !sY) sY = pY < 1 ? -1 : 1;
                    return {
                        spinX: sX,
                        spinY: sY,
                        pixelX: pX,
                        pixelY: pY
                    };
                }
                function handleMouseEnter() {
                    if (!swiper.enabled) return;
                    swiper.mouseEntered = true;
                }
                function handleMouseLeave() {
                    if (!swiper.enabled) return;
                    swiper.mouseEntered = false;
                }
                function animateSlider(newEvent) {
                    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) return false;
                    if (swiper.params.mousewheel.thresholdTime && (0, _utilsJs.now)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) return false;
                    // If the movement is NOT big enough and
                    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
                    //   Don't go any further (avoid insignificant scroll movement).
                    if (newEvent.delta >= 6 && (0, _utilsJs.now)() - lastScrollTime < 60) return true;
                    // If user is scrolling towards the end:
                    //   If the slider hasn't hit the latest slide or
                    //   if the slider is a loop and
                    //   if the slider isn't moving right now:
                    //     Go to next slide and
                    //     emit a scroll event.
                    // Else (the user is scrolling towards the beginning) and
                    // if the slider hasn't hit the first slide or
                    // if the slider is a loop and
                    // if the slider isn't moving right now:
                    //   Go to prev slide and
                    //   emit a scroll event.
                    if (newEvent.direction < 0) {
                        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                            swiper.slideNext();
                            emit("scroll", newEvent.raw);
                        }
                    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                        swiper.slidePrev();
                        emit("scroll", newEvent.raw);
                    } // If you got here is because an animation has been triggered so store the current time
                    lastScrollTime = new window1.Date().getTime(); // Return false as a default
                    return false;
                }
                function releaseScroll(newEvent) {
                    const params = swiper.params.mousewheel;
                    if (newEvent.direction < 0) {
                        if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) return true;
                    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) return true;
                    return false;
                }
                function handle(event1) {
                    let e = event1;
                    let disableParentSwiper = true;
                    if (!swiper.enabled) return;
                    const params = swiper.params.mousewheel;
                    if (swiper.params.cssMode) e.preventDefault();
                    let target = swiper.$el;
                    if (swiper.params.mousewheel.eventsTarget !== "container") target = (0, _domJsDefault.default)(swiper.params.mousewheel.eventsTarget);
                    if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
                    if (e.originalEvent) e = e.originalEvent; // jquery fix
                    let delta = 0;
                    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
                    const data = normalize(e);
                    if (params.forceToAxis) {
                        if (swiper.isHorizontal()) {
                            if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
                            else return true;
                        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
                        else return true;
                    } else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
                    if (delta === 0) return true;
                    if (params.invert) delta = -delta; // Get the scroll positions
                    let positions = swiper.getTranslate() + delta * params.sensitivity;
                    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
                    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
                    //     the disableParentSwiper will be true.
                    // When loop is false:
                    //     if the scroll positions is not on edge,
                    //     then the disableParentSwiper will be true.
                    //     if the scroll on edge positions,
                    //     then the disableParentSwiper will be false.
                    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
                    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
                    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
                        // Register the new event in a variable which stores the relevant data
                        const newEvent = {
                            time: (0, _utilsJs.now)(),
                            delta: Math.abs(delta),
                            direction: Math.sign(delta),
                            raw: event1
                        }; // Keep the most recent events
                        if (recentWheelEvents.length >= 2) recentWheelEvents.shift(); // only store the last N events
                        const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                        recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
                        //   If direction has changed or
                        //   if the scroll is quicker than the previous one:
                        //     Animate the slider.
                        // Else (this is the first time the wheel is moved):
                        //     Animate the slider.
                        if (prevEvent) {
                            if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) animateSlider(newEvent);
                        } else animateSlider(newEvent);
                        // If it's time to release the scroll:
                        //   Return now so you don't hit the preventDefault.
                        if (releaseScroll(newEvent)) return true;
                    } else {
                        // Freemode or scrollContainer:
                        // If we recently snapped after a momentum scroll, then ignore wheel events
                        // to give time for the deceleration to finish. Stop ignoring after 500 msecs
                        // or if it's a new scroll (larger delta or inverse sign as last event before
                        // an end-of-momentum snap).
                        const newEvent1 = {
                            time: (0, _utilsJs.now)(),
                            delta: Math.abs(delta),
                            direction: Math.sign(delta)
                        };
                        const ignoreWheelEvents = lastEventBeforeSnap && newEvent1.time < lastEventBeforeSnap.time + 500 && newEvent1.delta <= lastEventBeforeSnap.delta && newEvent1.direction === lastEventBeforeSnap.direction;
                        if (!ignoreWheelEvents) {
                            lastEventBeforeSnap = undefined;
                            if (swiper.params.loop) swiper.loopFix();
                            let position = swiper.getTranslate() + delta * params.sensitivity;
                            const wasBeginning = swiper.isBeginning;
                            const wasEnd = swiper.isEnd;
                            if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                            if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                            swiper.setTransition(0);
                            swiper.setTranslate(position);
                            swiper.updateProgress();
                            swiper.updateActiveIndex();
                            swiper.updateSlidesClasses();
                            if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) swiper.updateSlidesClasses();
                            if (swiper.params.freeMode.sticky) {
                                // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                                // the end of a momentum scroll by storing recent (N=15?) wheel events.
                                // 1. do all N events have decreasing or same (absolute value) delta?
                                // 2. did all N events arrive in the last M (M=500?) msecs?
                                // 3. does the earliest event have an (absolute value) delta that's
                                //    at least P (P=1?) larger than the most recent event's delta?
                                // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                                // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                                // Snap immediately and ignore remaining wheel events in this scroll.
                                // See comment above for "remaining wheel events in this scroll" determination.
                                // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                                clearTimeout(timeout);
                                timeout = undefined;
                                if (recentWheelEvents.length >= 15) recentWheelEvents.shift(); // only store the last N events
                                const prevEvent1 = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                                const firstEvent = recentWheelEvents[0];
                                recentWheelEvents.push(newEvent1);
                                if (prevEvent1 && (newEvent1.delta > prevEvent1.delta || newEvent1.direction !== prevEvent1.direction)) recentWheelEvents.splice(0);
                                else if (recentWheelEvents.length >= 15 && newEvent1.time - firstEvent.time < 500 && firstEvent.delta - newEvent1.delta >= 1 && newEvent1.delta <= 6) {
                                    // We're at the end of the deceleration of a momentum scroll, so there's no need
                                    // to wait for more events. Snap ASAP on the next tick.
                                    // Also, because there's some remaining momentum we'll bias the snap in the
                                    // direction of the ongoing scroll because it's better UX for the scroll to snap
                                    // in the same direction as the scroll instead of reversing to snap.  Therefore,
                                    // if it's already scrolled more than 20% in the current direction, keep going.
                                    const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                                    lastEventBeforeSnap = newEvent1;
                                    recentWheelEvents.splice(0);
                                    timeout = (0, _utilsJs.nextTick)(()=>{
                                        swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                                    }, 0); // no delay; move on next tick
                                }
                                if (!timeout) // we'll consider a scroll "complete" when there haven't been any wheel events
                                // for 500ms.
                                timeout = (0, _utilsJs.nextTick)(()=>{
                                    const snapToThreshold = 0.5;
                                    lastEventBeforeSnap = newEvent1;
                                    recentWheelEvents.splice(0);
                                    swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                                }, 500);
                            } // Emit event
                            if (!ignoreWheelEvents) emit("scroll", e); // Stop autoplay
                            if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions
                            if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
                        }
                    }
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                    return false;
                }
                function events(method) {
                    let target = swiper.$el;
                    if (swiper.params.mousewheel.eventsTarget !== "container") target = (0, _domJsDefault.default)(swiper.params.mousewheel.eventsTarget);
                    target[method]("mouseenter", handleMouseEnter);
                    target[method]("mouseleave", handleMouseLeave);
                    target[method]("wheel", handle);
                }
                function enable() {
                    if (swiper.params.cssMode) {
                        swiper.wrapperEl.removeEventListener("wheel", handle);
                        return true;
                    }
                    if (swiper.mousewheel.enabled) return false;
                    events("on");
                    swiper.mousewheel.enabled = true;
                    return true;
                }
                function disable() {
                    if (swiper.params.cssMode) {
                        swiper.wrapperEl.addEventListener(event, handle);
                        return true;
                    }
                    if (!swiper.mousewheel.enabled) return false;
                    events("off");
                    swiper.mousewheel.enabled = false;
                    return true;
                }
                on("init", ()=>{
                    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) disable();
                    if (swiper.params.mousewheel.enabled) enable();
                });
                on("destroy", ()=>{
                    if (swiper.params.cssMode) enable();
                    if (swiper.mousewheel.enabled) disable();
                });
                Object.assign(swiper.mousewheel, {
                    enable,
                    disable
                });
            }
            exports1.default = Mousewheel;
        },
        {
            "ssr-window": "3lyfI",
            "../../shared/dom.js": "7pW5q",
            "../../shared/utils.js": "dbikn",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "lGdRo": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
            var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            function Navigation({ swiper , extendParams , on , emit  }) {
                extendParams({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: false,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                });
                swiper.navigation = {
                    nextEl: null,
                    $nextEl: null,
                    prevEl: null,
                    $prevEl: null
                };
                function getEl(el) {
                    let $el;
                    if (el) {
                        $el = (0, _domJsDefault.default)(el);
                        if (swiper.params.uniqueNavElements && typeof el === "string" && $el.length > 1 && swiper.$el.find(el).length === 1) $el = swiper.$el.find(el);
                    }
                    return $el;
                }
                function toggleEl($el, disabled) {
                    const params = swiper.params.navigation;
                    if ($el && $el.length > 0) {
                        $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
                        if ($el[0] && $el[0].tagName === "BUTTON") $el[0].disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
                    }
                }
                function update() {
                    // Update Navigation Buttons
                    if (swiper.params.loop) return;
                    const { $nextEl , $prevEl  } = swiper.navigation;
                    toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
                    toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
                }
                function onPrevClick(e) {
                    e.preventDefault();
                    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                    swiper.slidePrev();
                    emit("navigationPrev");
                }
                function onNextClick(e) {
                    e.preventDefault();
                    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                    swiper.slideNext();
                    emit("navigationNext");
                }
                function init() {
                    const params = swiper.params.navigation;
                    swiper.params.navigation = (0, _createElementIfNotDefinedJsDefault.default)(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                        nextEl: "swiper-button-next",
                        prevEl: "swiper-button-prev"
                    });
                    if (!(params.nextEl || params.prevEl)) return;
                    const $nextEl = getEl(params.nextEl);
                    const $prevEl = getEl(params.prevEl);
                    if ($nextEl && $nextEl.length > 0) $nextEl.on("click", onNextClick);
                    if ($prevEl && $prevEl.length > 0) $prevEl.on("click", onPrevClick);
                    Object.assign(swiper.navigation, {
                        $nextEl,
                        nextEl: $nextEl && $nextEl[0],
                        $prevEl,
                        prevEl: $prevEl && $prevEl[0]
                    });
                    if (!swiper.enabled) {
                        if ($nextEl) $nextEl.addClass(params.lockClass);
                        if ($prevEl) $prevEl.addClass(params.lockClass);
                    }
                }
                function destroy() {
                    const { $nextEl , $prevEl  } = swiper.navigation;
                    if ($nextEl && $nextEl.length) {
                        $nextEl.off("click", onNextClick);
                        $nextEl.removeClass(swiper.params.navigation.disabledClass);
                    }
                    if ($prevEl && $prevEl.length) {
                        $prevEl.off("click", onPrevClick);
                        $prevEl.removeClass(swiper.params.navigation.disabledClass);
                    }
                }
                on("init", ()=>{
                    if (swiper.params.navigation.enabled === false) disable();
                    else {
                        init();
                        update();
                    }
                });
                on("toEdge fromEdge lock unlock", ()=>{
                    update();
                });
                on("destroy", ()=>{
                    destroy();
                });
                on("enable disable", ()=>{
                    const { $nextEl , $prevEl  } = swiper.navigation;
                    if ($nextEl) $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
                    if ($prevEl) $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
                });
                on("click", (_s, e)=>{
                    const { $nextEl , $prevEl  } = swiper.navigation;
                    const targetEl = e.target;
                    if (swiper.params.navigation.hideOnClick && !(0, _domJsDefault.default)(targetEl).is($prevEl) && !(0, _domJsDefault.default)(targetEl).is($nextEl)) {
                        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                        let isHidden;
                        if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
                        else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                        if (isHidden === true) emit("navigationShow");
                        else emit("navigationHide");
                        if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                        if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                    }
                });
                const enable = ()=>{
                    swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
                    init();
                    update();
                };
                const disable = ()=>{
                    swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
                    destroy();
                };
                Object.assign(swiper.navigation, {
                    enable,
                    disable,
                    update,
                    init,
                    destroy
                });
            }
            exports1.default = Navigation;
        },
        {
            "../../shared/create-element-if-not-defined.js": "4uqq0",
            "../../shared/dom.js": "7pW5q",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "4uqq0": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _ssrWindow = require("ssr-window");
            function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
                const document1 = (0, _ssrWindow.getDocument)();
                if (swiper.params.createElements) Object.keys(checkProps).forEach((key)=>{
                    if (!params[key] && params.auto === true) {
                        let element = swiper.$el.children(`.${checkProps[key]}`)[0];
                        if (!element) {
                            element = document1.createElement("div");
                            element.className = checkProps[key];
                            swiper.$el.append(element);
                        }
                        params[key] = element;
                        originalParams[key] = element;
                    }
                });
                return params;
            }
            exports1.default = createElementIfNotDefined;
        },
        {
            "ssr-window": "3lyfI",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "40Lys": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            var _classesToSelectorJs = require("../../shared/classes-to-selector.js");
            var _classesToSelectorJsDefault = parcelHelpers.interopDefault(_classesToSelectorJs);
            var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
            var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
            function Pagination({ swiper , extendParams , on , emit  }) {
                const pfx = "swiper-pagination";
                extendParams({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: false,
                        hideOnClick: false,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: false,
                        type: "bullets",
                        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
                        dynamicBullets: false,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: (number)=>number,
                        formatFractionTotal: (number)=>number,
                        bulletClass: `${pfx}-bullet`,
                        bulletActiveClass: `${pfx}-bullet-active`,
                        modifierClass: `${pfx}-`,
                        currentClass: `${pfx}-current`,
                        totalClass: `${pfx}-total`,
                        hiddenClass: `${pfx}-hidden`,
                        progressbarFillClass: `${pfx}-progressbar-fill`,
                        progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                        clickableClass: `${pfx}-clickable`,
                        lockClass: `${pfx}-lock`,
                        horizontalClass: `${pfx}-horizontal`,
                        verticalClass: `${pfx}-vertical`,
                        paginationDisabledClass: `${pfx}-disabled`
                    }
                });
                swiper.pagination = {
                    el: null,
                    $el: null,
                    bullets: []
                };
                let bulletSize;
                let dynamicBulletIndex = 0;
                function isPaginationDisabled() {
                    return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
                }
                function setSideBullets($bulletEl, position) {
                    const { bulletActiveClass  } = swiper.params.pagination;
                    $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
                }
                function update() {
                    // Render || Update Pagination bullets/items
                    const rtl = swiper.rtl;
                    const params = swiper.params.pagination;
                    if (isPaginationDisabled()) return;
                    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                    const $el = swiper.pagination.$el; // Current/Total
                    let current;
                    const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.loop) {
                        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                        if (current > slidesLength - 1 - swiper.loopedSlides * 2) current -= slidesLength - swiper.loopedSlides * 2;
                        if (current > total - 1) current -= total;
                        if (current < 0 && swiper.params.paginationType !== "bullets") current = total + current;
                    } else if (typeof swiper.snapIndex !== "undefined") current = swiper.snapIndex;
                    else current = swiper.activeIndex || 0;
                    // Types
                    if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                        const bullets = swiper.pagination.bullets;
                        let firstIndex;
                        let lastIndex;
                        let midIndex;
                        if (params.dynamicBullets) {
                            bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
                            $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`);
                            if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                                dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                                if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1;
                                else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                            }
                            firstIndex = Math.max(current - dynamicBulletIndex, 0);
                            lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                            midIndex = (lastIndex + firstIndex) / 2;
                        }
                        bullets.removeClass([
                            "",
                            "-next",
                            "-next-next",
                            "-prev",
                            "-prev-prev",
                            "-main"
                        ].map((suffix)=>`${params.bulletActiveClass}${suffix}`).join(" "));
                        if ($el.length > 1) bullets.each((bullet)=>{
                            const $bullet = (0, _domJsDefault.default)(bullet);
                            const bulletIndex = $bullet.index();
                            if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                            if (params.dynamicBullets) {
                                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(`${params.bulletActiveClass}-main`);
                                if (bulletIndex === firstIndex) setSideBullets($bullet, "prev");
                                if (bulletIndex === lastIndex) setSideBullets($bullet, "next");
                            }
                        });
                        else {
                            const $bullet = bullets.eq(current);
                            const bulletIndex = $bullet.index();
                            $bullet.addClass(params.bulletActiveClass);
                            if (params.dynamicBullets) {
                                const $firstDisplayedBullet = bullets.eq(firstIndex);
                                const $lastDisplayedBullet = bullets.eq(lastIndex);
                                for(let i = firstIndex; i <= lastIndex; i += 1)bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                                if (swiper.params.loop) {
                                    if (bulletIndex >= bullets.length) {
                                        for(let i1 = params.dynamicMainBullets; i1 >= 0; i1 -= 1)bullets.eq(bullets.length - i1).addClass(`${params.bulletActiveClass}-main`);
                                        bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                                    } else {
                                        setSideBullets($firstDisplayedBullet, "prev");
                                        setSideBullets($lastDisplayedBullet, "next");
                                    }
                                } else {
                                    setSideBullets($firstDisplayedBullet, "prev");
                                    setSideBullets($lastDisplayedBullet, "next");
                                }
                            }
                        }
                        if (params.dynamicBullets) {
                            const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                            const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                            const offsetProp = rtl ? "right" : "left";
                            bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
                        }
                    }
                    if (params.type === "fraction") {
                        $el.find((0, _classesToSelectorJsDefault.default)(params.currentClass)).text(params.formatFractionCurrent(current + 1));
                        $el.find((0, _classesToSelectorJsDefault.default)(params.totalClass)).text(params.formatFractionTotal(total));
                    }
                    if (params.type === "progressbar") {
                        let progressbarDirection;
                        if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
                        else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                        const scale = (current + 1) / total;
                        let scaleX = 1;
                        let scaleY = 1;
                        if (progressbarDirection === "horizontal") scaleX = scale;
                        else scaleY = scale;
                        $el.find((0, _classesToSelectorJsDefault.default)(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
                    }
                    if (params.type === "custom" && params.renderCustom) {
                        $el.html(params.renderCustom(swiper, current + 1, total));
                        emit("paginationRender", $el[0]);
                    } else emit("paginationUpdate", $el[0]);
                    if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
                }
                function render() {
                    // Render Container
                    const params = swiper.params.pagination;
                    if (isPaginationDisabled()) return;
                    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                    const $el = swiper.pagination.$el;
                    let paginationHTML = "";
                    if (params.type === "bullets") {
                        let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                        if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                        for(let i = 0; i < numberOfBullets; i += 1)if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                        else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
                        $el.html(paginationHTML);
                        swiper.pagination.bullets = $el.find((0, _classesToSelectorJsDefault.default)(params.bulletClass));
                    }
                    if (params.type === "fraction") {
                        if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
                        else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                        $el.html(paginationHTML);
                    }
                    if (params.type === "progressbar") {
                        if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
                        else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                        $el.html(paginationHTML);
                    }
                    if (params.type !== "custom") emit("paginationRender", swiper.pagination.$el[0]);
                }
                function init() {
                    swiper.params.pagination = (0, _createElementIfNotDefinedJsDefault.default)(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                        el: "swiper-pagination"
                    });
                    const params = swiper.params.pagination;
                    if (!params.el) return;
                    let $el = (0, _domJsDefault.default)(params.el);
                    if ($el.length === 0) return;
                    if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1) {
                        $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper
                        if ($el.length > 1) $el = $el.filter((el)=>{
                            if ((0, _domJsDefault.default)(el).parents(".swiper")[0] !== swiper.el) return false;
                            return true;
                        });
                    }
                    if (params.type === "bullets" && params.clickable) $el.addClass(params.clickableClass);
                    $el.addClass(params.modifierClass + params.type);
                    $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (params.type === "bullets" && params.dynamicBullets) {
                        $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
                        dynamicBulletIndex = 0;
                        if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                    }
                    if (params.type === "progressbar" && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
                    if (params.clickable) $el.on("click", (0, _classesToSelectorJsDefault.default)(params.bulletClass), function onClick(e) {
                        e.preventDefault();
                        let index = (0, _domJsDefault.default)(this).index() * swiper.params.slidesPerGroup;
                        if (swiper.params.loop) index += swiper.loopedSlides;
                        swiper.slideTo(index);
                    });
                    Object.assign(swiper.pagination, {
                        $el,
                        el: $el[0]
                    });
                    if (!swiper.enabled) $el.addClass(params.lockClass);
                }
                function destroy() {
                    const params = swiper.params.pagination;
                    if (isPaginationDisabled()) return;
                    const $el = swiper.pagination.$el;
                    $el.removeClass(params.hiddenClass);
                    $el.removeClass(params.modifierClass + params.type);
                    $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
                    if (params.clickable) $el.off("click", (0, _classesToSelectorJsDefault.default)(params.bulletClass));
                }
                on("init", ()=>{
                    if (swiper.params.pagination.enabled === false) disable();
                    else {
                        init();
                        render();
                        update();
                    }
                });
                on("activeIndexChange", ()=>{
                    if (swiper.params.loop) update();
                    else if (typeof swiper.snapIndex === "undefined") update();
                });
                on("snapIndexChange", ()=>{
                    if (!swiper.params.loop) update();
                });
                on("slidesLengthChange", ()=>{
                    if (swiper.params.loop) {
                        render();
                        update();
                    }
                });
                on("snapGridLengthChange", ()=>{
                    if (!swiper.params.loop) {
                        render();
                        update();
                    }
                });
                on("destroy", ()=>{
                    destroy();
                });
                on("enable disable", ()=>{
                    const { $el  } = swiper.pagination;
                    if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
                });
                on("lock unlock", ()=>{
                    update();
                });
                on("click", (_s, e)=>{
                    const targetEl = e.target;
                    const { $el  } = swiper.pagination;
                    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !(0, _domJsDefault.default)(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
                        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                        const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
                        if (isHidden === true) emit("paginationShow");
                        else emit("paginationHide");
                        $el.toggleClass(swiper.params.pagination.hiddenClass);
                    }
                });
                const enable = ()=>{
                    swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
                    if (swiper.pagination.$el) swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
                    init();
                    render();
                    update();
                };
                const disable = ()=>{
                    swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);
                    if (swiper.pagination.$el) swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
                    destroy();
                };
                Object.assign(swiper.pagination, {
                    enable,
                    disable,
                    render,
                    update,
                    init,
                    destroy
                });
            }
            exports1.default = Pagination;
        },
        {
            "../../shared/dom.js": "7pW5q",
            "../../shared/classes-to-selector.js": "227R4",
            "../../shared/create-element-if-not-defined.js": "4uqq0",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "227R4": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function classesToSelector(classes = "") {
                return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1") // eslint-disable-line
                .replace(/ /g, ".")}`;
            }
            exports1.default = classesToSelector;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "bfOsF": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _ssrWindow = require("ssr-window");
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            var _utilsJs = require("../../shared/utils.js");
            var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
            var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
            function Scrollbar({ swiper , extendParams , on , emit  }) {
                const document1 = (0, _ssrWindow.getDocument)();
                let isTouched = false;
                let timeout = null;
                let dragTimeout = null;
                let dragStartPos;
                let dragSize;
                let trackSize;
                let divider;
                extendParams({
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: false,
                        draggable: false,
                        snapOnRelease: true,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag",
                        scrollbarDisabledClass: "swiper-scrollbar-disabled",
                        horizontalClass: `swiper-scrollbar-horizontal`,
                        verticalClass: `swiper-scrollbar-vertical`
                    }
                });
                swiper.scrollbar = {
                    el: null,
                    dragEl: null,
                    $el: null,
                    $dragEl: null
                };
                function setTranslate() {
                    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
                    const { scrollbar , rtlTranslate: rtl , progress  } = swiper;
                    const { $dragEl , $el  } = scrollbar;
                    const params = swiper.params.scrollbar;
                    let newSize = dragSize;
                    let newPos = (trackSize - dragSize) * progress;
                    if (rtl) {
                        newPos = -newPos;
                        if (newPos > 0) {
                            newSize = dragSize - newPos;
                            newPos = 0;
                        } else if (-newPos + dragSize > trackSize) newSize = trackSize + newPos;
                    } else if (newPos < 0) {
                        newSize = dragSize + newPos;
                        newPos = 0;
                    } else if (newPos + dragSize > trackSize) newSize = trackSize - newPos;
                    if (swiper.isHorizontal()) {
                        $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
                        $dragEl[0].style.width = `${newSize}px`;
                    } else {
                        $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
                        $dragEl[0].style.height = `${newSize}px`;
                    }
                    if (params.hide) {
                        clearTimeout(timeout);
                        $el[0].style.opacity = 1;
                        timeout = setTimeout(()=>{
                            $el[0].style.opacity = 0;
                            $el.transition(400);
                        }, 1000);
                    }
                }
                function setTransition(duration) {
                    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
                    swiper.scrollbar.$dragEl.transition(duration);
                }
                function updateSize() {
                    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
                    const { scrollbar  } = swiper;
                    const { $dragEl , $el  } = scrollbar;
                    $dragEl[0].style.width = "";
                    $dragEl[0].style.height = "";
                    trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
                    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
                    if (swiper.params.scrollbar.dragSize === "auto") dragSize = trackSize * divider;
                    else dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
                    if (swiper.isHorizontal()) $dragEl[0].style.width = `${dragSize}px`;
                    else $dragEl[0].style.height = `${dragSize}px`;
                    if (divider >= 1) $el[0].style.display = "none";
                    else $el[0].style.display = "";
                    if (swiper.params.scrollbar.hide) $el[0].style.opacity = 0;
                    if (swiper.params.watchOverflow && swiper.enabled) scrollbar.$el[swiper.isLocked ? "addClass" : "removeClass"](swiper.params.scrollbar.lockClass);
                }
                function getPointerPosition(e) {
                    if (swiper.isHorizontal()) return e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientX : e.clientX;
                    return e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientY : e.clientY;
                }
                function setDragPosition(e) {
                    const { scrollbar , rtlTranslate: rtl  } = swiper;
                    const { $el  } = scrollbar;
                    let positionRatio;
                    positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
                    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
                    if (rtl) positionRatio = 1 - positionRatio;
                    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
                    swiper.updateProgress(position);
                    swiper.setTranslate(position);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                function onDragStart(e) {
                    const params = swiper.params.scrollbar;
                    const { scrollbar , $wrapperEl  } = swiper;
                    const { $el , $dragEl  } = scrollbar;
                    isTouched = true;
                    dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
                    e.preventDefault();
                    e.stopPropagation();
                    $wrapperEl.transition(100);
                    $dragEl.transition(100);
                    setDragPosition(e);
                    clearTimeout(dragTimeout);
                    $el.transition(0);
                    if (params.hide) $el.css("opacity", 1);
                    if (swiper.params.cssMode) swiper.$wrapperEl.css("scroll-snap-type", "none");
                    emit("scrollbarDragStart", e);
                }
                function onDragMove(e) {
                    const { scrollbar , $wrapperEl  } = swiper;
                    const { $el , $dragEl  } = scrollbar;
                    if (!isTouched) return;
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                    setDragPosition(e);
                    $wrapperEl.transition(0);
                    $el.transition(0);
                    $dragEl.transition(0);
                    emit("scrollbarDragMove", e);
                }
                function onDragEnd(e) {
                    const params = swiper.params.scrollbar;
                    const { scrollbar , $wrapperEl  } = swiper;
                    const { $el  } = scrollbar;
                    if (!isTouched) return;
                    isTouched = false;
                    if (swiper.params.cssMode) {
                        swiper.$wrapperEl.css("scroll-snap-type", "");
                        $wrapperEl.transition("");
                    }
                    if (params.hide) {
                        clearTimeout(dragTimeout);
                        dragTimeout = (0, _utilsJs.nextTick)(()=>{
                            $el.css("opacity", 0);
                            $el.transition(400);
                        }, 1000);
                    }
                    emit("scrollbarDragEnd", e);
                    if (params.snapOnRelease) swiper.slideToClosest();
                }
                function events(method) {
                    const { scrollbar , touchEventsTouch , touchEventsDesktop , params , support  } = swiper;
                    const $el = scrollbar.$el;
                    if (!$el) return;
                    const target = $el[0];
                    const activeListener = support.passiveListener && params.passiveListeners ? {
                        passive: false,
                        capture: false
                    } : false;
                    const passiveListener = support.passiveListener && params.passiveListeners ? {
                        passive: true,
                        capture: false
                    } : false;
                    if (!target) return;
                    const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
                    if (!support.touch) {
                        target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
                        document1[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
                        document1[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
                    } else {
                        target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
                        target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
                        target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
                    }
                }
                function enableDraggable() {
                    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
                    events("on");
                }
                function disableDraggable() {
                    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
                    events("off");
                }
                function init() {
                    const { scrollbar , $el: $swiperEl  } = swiper;
                    swiper.params.scrollbar = (0, _createElementIfNotDefinedJsDefault.default)(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
                        el: "swiper-scrollbar"
                    });
                    const params = swiper.params.scrollbar;
                    if (!params.el) return;
                    let $el = (0, _domJsDefault.default)(params.el);
                    if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1 && $swiperEl.find(params.el).length === 1) $el = $swiperEl.find(params.el);
                    $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
                    if ($dragEl.length === 0) {
                        $dragEl = (0, _domJsDefault.default)(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
                        $el.append($dragEl);
                    }
                    Object.assign(scrollbar, {
                        $el,
                        el: $el[0],
                        $dragEl,
                        dragEl: $dragEl[0]
                    });
                    if (params.draggable) enableDraggable();
                    if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.scrollbar.lockClass);
                }
                function destroy() {
                    const params = swiper.params.scrollbar;
                    const $el = swiper.scrollbar.$el;
                    if ($el) $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    disableDraggable();
                }
                on("init", ()=>{
                    if (swiper.params.scrollbar.enabled === false) disable();
                    else {
                        init();
                        updateSize();
                        setTranslate();
                    }
                });
                on("update resize observerUpdate lock unlock", ()=>{
                    updateSize();
                });
                on("setTranslate", ()=>{
                    setTranslate();
                });
                on("setTransition", (_s, duration)=>{
                    setTransition(duration);
                });
                on("enable disable", ()=>{
                    const { $el  } = swiper.scrollbar;
                    if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.scrollbar.lockClass);
                });
                on("destroy", ()=>{
                    destroy();
                });
                const enable = ()=>{
                    swiper.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
                    if (swiper.scrollbar.$el) swiper.scrollbar.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
                    init();
                    updateSize();
                    setTranslate();
                };
                const disable = ()=>{
                    swiper.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
                    if (swiper.scrollbar.$el) swiper.scrollbar.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
                    destroy();
                };
                Object.assign(swiper.scrollbar, {
                    enable,
                    disable,
                    updateSize,
                    setTranslate,
                    init,
                    destroy
                });
            }
            exports1.default = Scrollbar;
        },
        {
            "ssr-window": "3lyfI",
            "../../shared/dom.js": "7pW5q",
            "../../shared/utils.js": "dbikn",
            "../../shared/create-element-if-not-defined.js": "4uqq0",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "aEM3Y": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            function Parallax({ swiper , extendParams , on  }) {
                extendParams({
                    parallax: {
                        enabled: false
                    }
                });
                const setTransform = (el, progress)=>{
                    const { rtl  } = swiper;
                    const $el = (0, _domJsDefault.default)(el);
                    const rtlFactor = rtl ? -1 : 1;
                    const p = $el.attr("data-swiper-parallax") || "0";
                    let x = $el.attr("data-swiper-parallax-x");
                    let y = $el.attr("data-swiper-parallax-y");
                    const scale = $el.attr("data-swiper-parallax-scale");
                    const opacity = $el.attr("data-swiper-parallax-opacity");
                    if (x || y) {
                        x = x || "0";
                        y = y || "0";
                    } else if (swiper.isHorizontal()) {
                        x = p;
                        y = "0";
                    } else {
                        y = p;
                        x = "0";
                    }
                    if (x.indexOf("%") >= 0) x = `${parseInt(x, 10) * progress * rtlFactor}%`;
                    else x = `${x * progress * rtlFactor}px`;
                    if (y.indexOf("%") >= 0) y = `${parseInt(y, 10) * progress}%`;
                    else y = `${y * progress}px`;
                    if (typeof opacity !== "undefined" && opacity !== null) {
                        const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
                        $el[0].style.opacity = currentOpacity;
                    }
                    if (typeof scale === "undefined" || scale === null) $el.transform(`translate3d(${x}, ${y}, 0px)`);
                    else {
                        const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
                        $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
                    }
                };
                const setTranslate = ()=>{
                    const { $el , slides , progress , snapGrid  } = swiper;
                    $el.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((el)=>{
                        setTransform(el, progress);
                    });
                    slides.each((slideEl, slideIndex)=>{
                        let slideProgress = slideEl.progress;
                        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== "auto") slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
                        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
                        (0, _domJsDefault.default)(slideEl).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((el)=>{
                            setTransform(el, slideProgress);
                        });
                    });
                };
                const setTransition = (duration = swiper.params.speed)=>{
                    const { $el  } = swiper;
                    $el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((parallaxEl)=>{
                        const $parallaxEl = (0, _domJsDefault.default)(parallaxEl);
                        let parallaxDuration = parseInt($parallaxEl.attr("data-swiper-parallax-duration"), 10) || duration;
                        if (duration === 0) parallaxDuration = 0;
                        $parallaxEl.transition(parallaxDuration);
                    });
                };
                on("beforeInit", ()=>{
                    if (!swiper.params.parallax.enabled) return;
                    swiper.params.watchSlidesProgress = true;
                    swiper.originalParams.watchSlidesProgress = true;
                });
                on("init", ()=>{
                    if (!swiper.params.parallax.enabled) return;
                    setTranslate();
                });
                on("setTranslate", ()=>{
                    if (!swiper.params.parallax.enabled) return;
                    setTranslate();
                });
                on("setTransition", (_swiper, duration)=>{
                    if (!swiper.params.parallax.enabled) return;
                    setTransition(duration);
                });
            }
            exports1.default = Parallax;
        },
        {
            "../../shared/dom.js": "7pW5q",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "5YHxH": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _ssrWindow = require("ssr-window");
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            var _utilsJs = require("../../shared/utils.js");
            function Zoom({ swiper , extendParams , on , emit  }) {
                const window1 = (0, _ssrWindow.getWindow)();
                extendParams({
                    zoom: {
                        enabled: false,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: true,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                });
                swiper.zoom = {
                    enabled: false
                };
                let currentScale = 1;
                let isScaling = false;
                let gesturesEnabled;
                let fakeGestureTouched;
                let fakeGestureMoved;
                const gesture = {
                    $slideEl: undefined,
                    slideWidth: undefined,
                    slideHeight: undefined,
                    $imageEl: undefined,
                    $imageWrapEl: undefined,
                    maxRatio: 3
                };
                const image = {
                    isTouched: undefined,
                    isMoved: undefined,
                    currentX: undefined,
                    currentY: undefined,
                    minX: undefined,
                    minY: undefined,
                    maxX: undefined,
                    maxY: undefined,
                    width: undefined,
                    height: undefined,
                    startX: undefined,
                    startY: undefined,
                    touchesStart: {},
                    touchesCurrent: {}
                };
                const velocity = {
                    x: undefined,
                    y: undefined,
                    prevPositionX: undefined,
                    prevPositionY: undefined,
                    prevTime: undefined
                };
                let scale = 1;
                Object.defineProperty(swiper.zoom, "scale", {
                    get () {
                        return scale;
                    },
                    set (value) {
                        if (scale !== value) {
                            const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
                            const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
                            emit("zoomChange", value, imageEl, slideEl);
                        }
                        scale = value;
                    }
                });
                function getDistanceBetweenTouches(e) {
                    if (e.targetTouches.length < 2) return 1;
                    const x1 = e.targetTouches[0].pageX;
                    const y1 = e.targetTouches[0].pageY;
                    const x2 = e.targetTouches[1].pageX;
                    const y2 = e.targetTouches[1].pageY;
                    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
                    return distance;
                } // Events
                function onGestureStart(e) {
                    const support = swiper.support;
                    const params = swiper.params.zoom;
                    fakeGestureTouched = false;
                    fakeGestureMoved = false;
                    if (!support.gestures) {
                        if (e.type !== "touchstart" || e.type === "touchstart" && e.targetTouches.length < 2) return;
                        fakeGestureTouched = true;
                        gesture.scaleStart = getDistanceBetweenTouches(e);
                    }
                    if (!gesture.$slideEl || !gesture.$slideEl.length) {
                        gesture.$slideEl = (0, _domJsDefault.default)(e.target).closest(`.${swiper.params.slideClass}`);
                        if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                        gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0);
                        gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
                        gesture.maxRatio = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
                        if (gesture.$imageWrapEl.length === 0) {
                            gesture.$imageEl = undefined;
                            return;
                        }
                    }
                    if (gesture.$imageEl) gesture.$imageEl.transition(0);
                    isScaling = true;
                }
                function onGestureChange(e) {
                    const support = swiper.support;
                    const params = swiper.params.zoom;
                    const zoom = swiper.zoom;
                    if (!support.gestures) {
                        if (e.type !== "touchmove" || e.type === "touchmove" && e.targetTouches.length < 2) return;
                        fakeGestureMoved = true;
                        gesture.scaleMove = getDistanceBetweenTouches(e);
                    }
                    if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                        if (e.type === "gesturechange") onGestureStart(e);
                        return;
                    }
                    if (support.gestures) zoom.scale = e.scale * currentScale;
                    else zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
                    if (zoom.scale > gesture.maxRatio) zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
                    if (zoom.scale < params.minRatio) zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
                    gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
                }
                function onGestureEnd(e) {
                    const device = swiper.device;
                    const support = swiper.support;
                    const params = swiper.params.zoom;
                    const zoom = swiper.zoom;
                    if (!support.gestures) {
                        if (!fakeGestureTouched || !fakeGestureMoved) return;
                        if (e.type !== "touchend" || e.type === "touchend" && e.changedTouches.length < 2 && !device.android) return;
                        fakeGestureTouched = false;
                        fakeGestureMoved = false;
                    }
                    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
                    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
                    gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
                    currentScale = zoom.scale;
                    isScaling = false;
                    if (zoom.scale === 1) gesture.$slideEl = undefined;
                }
                function onTouchStart(e) {
                    const device = swiper.device;
                    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
                    if (image.isTouched) return;
                    if (device.android && e.cancelable) e.preventDefault();
                    image.isTouched = true;
                    image.touchesStart.x = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
                    image.touchesStart.y = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
                }
                function onTouchMove(e) {
                    const zoom = swiper.zoom;
                    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
                    swiper.allowClick = false;
                    if (!image.isTouched || !gesture.$slideEl) return;
                    if (!image.isMoved) {
                        image.width = gesture.$imageEl[0].offsetWidth;
                        image.height = gesture.$imageEl[0].offsetHeight;
                        image.startX = (0, _utilsJs.getTranslate)(gesture.$imageWrapEl[0], "x") || 0;
                        image.startY = (0, _utilsJs.getTranslate)(gesture.$imageWrapEl[0], "y") || 0;
                        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
                        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
                        gesture.$imageWrapEl.transition(0);
                    } // Define if we need image drag
                    const scaledWidth = image.width * zoom.scale;
                    const scaledHeight = image.height * zoom.scale;
                    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
                    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
                    image.maxX = -image.minX;
                    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
                    image.maxY = -image.minY;
                    image.touchesCurrent.x = e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX;
                    image.touchesCurrent.y = e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY;
                    if (!image.isMoved && !isScaling) {
                        if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                            image.isTouched = false;
                            return;
                        }
                        if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                            image.isTouched = false;
                            return;
                        }
                    }
                    if (e.cancelable) e.preventDefault();
                    e.stopPropagation();
                    image.isMoved = true;
                    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
                    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
                    if (image.currentX < image.minX) image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
                    if (image.currentX > image.maxX) image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
                    if (image.currentY < image.minY) image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
                    if (image.currentY > image.maxY) image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
                    // Velocity
                    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
                    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
                    if (!velocity.prevTime) velocity.prevTime = Date.now();
                    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
                    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
                    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
                    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
                    velocity.prevPositionX = image.touchesCurrent.x;
                    velocity.prevPositionY = image.touchesCurrent.y;
                    velocity.prevTime = Date.now();
                    gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
                }
                function onTouchEnd() {
                    const zoom = swiper.zoom;
                    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
                    if (!image.isTouched || !image.isMoved) {
                        image.isTouched = false;
                        image.isMoved = false;
                        return;
                    }
                    image.isTouched = false;
                    image.isMoved = false;
                    let momentumDurationX = 300;
                    let momentumDurationY = 300;
                    const momentumDistanceX = velocity.x * momentumDurationX;
                    const newPositionX = image.currentX + momentumDistanceX;
                    const momentumDistanceY = velocity.y * momentumDurationY;
                    const newPositionY = image.currentY + momentumDistanceY; // Fix duration
                    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
                    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
                    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
                    image.currentX = newPositionX;
                    image.currentY = newPositionY; // Define if we need image drag
                    const scaledWidth = image.width * zoom.scale;
                    const scaledHeight = image.height * zoom.scale;
                    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
                    image.maxX = -image.minX;
                    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
                    image.maxY = -image.minY;
                    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
                    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
                    gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
                }
                function onTransitionEnd() {
                    const zoom = swiper.zoom;
                    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
                        if (gesture.$imageEl) gesture.$imageEl.transform("translate3d(0,0,0) scale(1)");
                        if (gesture.$imageWrapEl) gesture.$imageWrapEl.transform("translate3d(0,0,0)");
                        zoom.scale = 1;
                        currentScale = 1;
                        gesture.$slideEl = undefined;
                        gesture.$imageEl = undefined;
                        gesture.$imageWrapEl = undefined;
                    }
                }
                function zoomIn(e) {
                    const zoom = swiper.zoom;
                    const params = swiper.params.zoom;
                    if (!gesture.$slideEl) {
                        if (e && e.target) gesture.$slideEl = (0, _domJsDefault.default)(e.target).closest(`.${swiper.params.slideClass}`);
                        if (!gesture.$slideEl) {
                            if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
                            else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                        }
                        gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0);
                        gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
                    }
                    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
                    if (swiper.params.cssMode) {
                        swiper.wrapperEl.style.overflow = "hidden";
                        swiper.wrapperEl.style.touchAction = "none";
                    }
                    gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
                    let touchX;
                    let touchY;
                    let offsetX;
                    let offsetY;
                    let diffX;
                    let diffY;
                    let translateX;
                    let translateY;
                    let imageWidth;
                    let imageHeight;
                    let scaledWidth;
                    let scaledHeight;
                    let translateMinX;
                    let translateMinY;
                    let translateMaxX;
                    let translateMaxY;
                    let slideWidth;
                    let slideHeight;
                    if (typeof image.touchesStart.x === "undefined" && e) {
                        touchX = e.type === "touchend" ? e.changedTouches[0].pageX : e.pageX;
                        touchY = e.type === "touchend" ? e.changedTouches[0].pageY : e.pageY;
                    } else {
                        touchX = image.touchesStart.x;
                        touchY = image.touchesStart.y;
                    }
                    zoom.scale = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
                    currentScale = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
                    if (e) {
                        slideWidth = gesture.$slideEl[0].offsetWidth;
                        slideHeight = gesture.$slideEl[0].offsetHeight;
                        offsetX = gesture.$slideEl.offset().left + window1.scrollX;
                        offsetY = gesture.$slideEl.offset().top + window1.scrollY;
                        diffX = offsetX + slideWidth / 2 - touchX;
                        diffY = offsetY + slideHeight / 2 - touchY;
                        imageWidth = gesture.$imageEl[0].offsetWidth;
                        imageHeight = gesture.$imageEl[0].offsetHeight;
                        scaledWidth = imageWidth * zoom.scale;
                        scaledHeight = imageHeight * zoom.scale;
                        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
                        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
                        translateMaxX = -translateMinX;
                        translateMaxY = -translateMinY;
                        translateX = diffX * zoom.scale;
                        translateY = diffY * zoom.scale;
                        if (translateX < translateMinX) translateX = translateMinX;
                        if (translateX > translateMaxX) translateX = translateMaxX;
                        if (translateY < translateMinY) translateY = translateMinY;
                        if (translateY > translateMaxY) translateY = translateMaxY;
                    } else {
                        translateX = 0;
                        translateY = 0;
                    }
                    gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
                    gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
                }
                function zoomOut() {
                    const zoom = swiper.zoom;
                    const params = swiper.params.zoom;
                    if (!gesture.$slideEl) {
                        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
                        else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                        gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0);
                        gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
                    }
                    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
                    if (swiper.params.cssMode) {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.style.touchAction = "";
                    }
                    zoom.scale = 1;
                    currentScale = 1;
                    gesture.$imageWrapEl.transition(300).transform("translate3d(0,0,0)");
                    gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)");
                    gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
                    gesture.$slideEl = undefined;
                } // Toggle Zoom
                function zoomToggle(e) {
                    const zoom = swiper.zoom;
                    if (zoom.scale && zoom.scale !== 1) zoomOut();
                    else zoomIn(e);
                }
                function getListeners() {
                    const support = swiper.support;
                    const passiveListener = swiper.touchEvents.start === "touchstart" && support.passiveListener && swiper.params.passiveListeners ? {
                        passive: true,
                        capture: false
                    } : false;
                    const activeListenerWithCapture = support.passiveListener ? {
                        passive: false,
                        capture: true
                    } : true;
                    return {
                        passiveListener,
                        activeListenerWithCapture
                    };
                }
                function getSlideSelector() {
                    return `.${swiper.params.slideClass}`;
                }
                function toggleGestures(method) {
                    const { passiveListener  } = getListeners();
                    const slideSelector = getSlideSelector();
                    swiper.$wrapperEl[method]("gesturestart", slideSelector, onGestureStart, passiveListener);
                    swiper.$wrapperEl[method]("gesturechange", slideSelector, onGestureChange, passiveListener);
                    swiper.$wrapperEl[method]("gestureend", slideSelector, onGestureEnd, passiveListener);
                }
                function enableGestures() {
                    if (gesturesEnabled) return;
                    gesturesEnabled = true;
                    toggleGestures("on");
                }
                function disableGestures() {
                    if (!gesturesEnabled) return;
                    gesturesEnabled = false;
                    toggleGestures("off");
                } // Attach/Detach Events
                function enable() {
                    const zoom = swiper.zoom;
                    if (zoom.enabled) return;
                    zoom.enabled = true;
                    const support = swiper.support;
                    const { passiveListener , activeListenerWithCapture  } = getListeners();
                    const slideSelector = getSlideSelector(); // Scale image
                    if (support.gestures) {
                        swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
                        swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
                    } else if (swiper.touchEvents.start === "touchstart") {
                        swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
                        swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
                        swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
                        if (swiper.touchEvents.cancel) swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
                    } // Move image
                    swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
                }
                function disable() {
                    const zoom = swiper.zoom;
                    if (!zoom.enabled) return;
                    const support = swiper.support;
                    zoom.enabled = false;
                    const { passiveListener , activeListenerWithCapture  } = getListeners();
                    const slideSelector = getSlideSelector(); // Scale image
                    if (support.gestures) {
                        swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
                        swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
                    } else if (swiper.touchEvents.start === "touchstart") {
                        swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
                        swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
                        swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
                        if (swiper.touchEvents.cancel) swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
                    } // Move image
                    swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
                }
                on("init", ()=>{
                    if (swiper.params.zoom.enabled) enable();
                });
                on("destroy", ()=>{
                    disable();
                });
                on("touchStart", (_s, e)=>{
                    if (!swiper.zoom.enabled) return;
                    onTouchStart(e);
                });
                on("touchEnd", (_s, e)=>{
                    if (!swiper.zoom.enabled) return;
                    onTouchEnd(e);
                });
                on("doubleTap", (_s, e)=>{
                    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) zoomToggle(e);
                });
                on("transitionEnd", ()=>{
                    if (swiper.zoom.enabled && swiper.params.zoom.enabled) onTransitionEnd();
                });
                on("slideChange", ()=>{
                    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) onTransitionEnd();
                });
                Object.assign(swiper.zoom, {
                    enable,
                    disable,
                    in: zoomIn,
                    out: zoomOut,
                    toggle: zoomToggle
                });
            }
            exports1.default = Zoom;
        },
        {
            "ssr-window": "3lyfI",
            "../../shared/dom.js": "7pW5q",
            "../../shared/utils.js": "dbikn",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "kPhLF": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _ssrWindow = require("ssr-window");
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            function Lazy({ swiper , extendParams , on , emit  }) {
                extendParams({
                    lazy: {
                        checkInView: false,
                        enabled: false,
                        loadPrevNext: false,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: false,
                        scrollingElement: "",
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                });
                swiper.lazy = {};
                let scrollHandlerAttached = false;
                let initialImageLoaded = false;
                function loadInSlide(index, loadInDuplicate = true) {
                    const params = swiper.params.lazy;
                    if (typeof index === "undefined") return;
                    if (swiper.slides.length === 0) return;
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
                    const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
                    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) $images.push($slideEl[0]);
                    if ($images.length === 0) return;
                    $images.each((imageEl)=>{
                        const $imageEl = (0, _domJsDefault.default)(imageEl);
                        $imageEl.addClass(params.loadingClass);
                        const background = $imageEl.attr("data-background");
                        const src = $imageEl.attr("data-src");
                        const srcset = $imageEl.attr("data-srcset");
                        const sizes = $imageEl.attr("data-sizes");
                        const $pictureEl = $imageEl.parent("picture");
                        swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, ()=>{
                            if (typeof swiper === "undefined" || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
                            if (background) {
                                $imageEl.css("background-image", `url("${background}")`);
                                $imageEl.removeAttr("data-background");
                            } else {
                                if (srcset) {
                                    $imageEl.attr("srcset", srcset);
                                    $imageEl.removeAttr("data-srcset");
                                }
                                if (sizes) {
                                    $imageEl.attr("sizes", sizes);
                                    $imageEl.removeAttr("data-sizes");
                                }
                                if ($pictureEl.length) $pictureEl.children("source").each((sourceEl)=>{
                                    const $source = (0, _domJsDefault.default)(sourceEl);
                                    if ($source.attr("data-srcset")) {
                                        $source.attr("srcset", $source.attr("data-srcset"));
                                        $source.removeAttr("data-srcset");
                                    }
                                });
                                if (src) {
                                    $imageEl.attr("src", src);
                                    $imageEl.removeAttr("data-src");
                                }
                            }
                            $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                            $slideEl.find(`.${params.preloaderClass}`).remove();
                            if (swiper.params.loop && loadInDuplicate) {
                                const slideOriginalIndex = $slideEl.attr("data-swiper-slide-index");
                                if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                                    const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
                                    loadInSlide(originalSlide.index(), false);
                                } else {
                                    const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                                    loadInSlide(duplicatedSlide.index(), false);
                                }
                            }
                            emit("lazyImageReady", $slideEl[0], $imageEl[0]);
                            if (swiper.params.autoHeight) swiper.updateAutoHeight();
                        });
                        emit("lazyImageLoad", $slideEl[0], $imageEl[0]);
                    });
                }
                function load() {
                    const { $wrapperEl , params: swiperParams , slides , activeIndex  } = swiper;
                    const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
                    const params = swiperParams.lazy;
                    let slidesPerView = swiperParams.slidesPerView;
                    if (slidesPerView === "auto") slidesPerView = 0;
                    function slideExist(index) {
                        if (isVirtual) {
                            if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) return true;
                        } else if (slides[index]) return true;
                        return false;
                    }
                    function slideIndex(slideEl) {
                        if (isVirtual) return (0, _domJsDefault.default)(slideEl).attr("data-swiper-slide-index");
                        return (0, _domJsDefault.default)(slideEl).index();
                    }
                    if (!initialImageLoaded) initialImageLoaded = true;
                    if (swiper.params.watchSlidesProgress) $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((slideEl)=>{
                        const index = isVirtual ? (0, _domJsDefault.default)(slideEl).attr("data-swiper-slide-index") : (0, _domJsDefault.default)(slideEl).index();
                        loadInSlide(index);
                    });
                    else if (slidesPerView > 1) {
                        for(let i = activeIndex; i < activeIndex + slidesPerView; i += 1)if (slideExist(i)) loadInSlide(i);
                    } else loadInSlide(activeIndex);
                    if (params.loadPrevNext) {
                        if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                            const amount = params.loadPrevNextAmount;
                            const spv = Math.ceil(slidesPerView);
                            const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                            const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides
                            for(let i1 = activeIndex + spv; i1 < maxIndex; i1 += 1)if (slideExist(i1)) loadInSlide(i1);
                            // Prev Slides
                            for(let i2 = minIndex; i2 < activeIndex; i2 += 1)if (slideExist(i2)) loadInSlide(i2);
                        } else {
                            const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
                            if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
                            const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
                            if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
                        }
                    }
                }
                function checkInViewOnLoad() {
                    const window1 = (0, _ssrWindow.getWindow)();
                    if (!swiper || swiper.destroyed) return;
                    const $scrollElement = swiper.params.lazy.scrollingElement ? (0, _domJsDefault.default)(swiper.params.lazy.scrollingElement) : (0, _domJsDefault.default)(window1);
                    const isWindow = $scrollElement[0] === window1;
                    const scrollElementWidth = isWindow ? window1.innerWidth : $scrollElement[0].offsetWidth;
                    const scrollElementHeight = isWindow ? window1.innerHeight : $scrollElement[0].offsetHeight;
                    const swiperOffset = swiper.$el.offset();
                    const { rtlTranslate: rtl  } = swiper;
                    let inView = false;
                    if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
                    const swiperCoord = [
                        [
                            swiperOffset.left,
                            swiperOffset.top
                        ],
                        [
                            swiperOffset.left + swiper.width,
                            swiperOffset.top
                        ],
                        [
                            swiperOffset.left,
                            swiperOffset.top + swiper.height
                        ],
                        [
                            swiperOffset.left + swiper.width,
                            swiperOffset.top + swiper.height
                        ]
                    ];
                    for(let i = 0; i < swiperCoord.length; i += 1){
                        const point = swiperCoord[i];
                        if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                            if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                            inView = true;
                        }
                    }
                    const passiveListener = swiper.touchEvents.start === "touchstart" && swiper.support.passiveListener && swiper.params.passiveListeners ? {
                        passive: true,
                        capture: false
                    } : false;
                    if (inView) {
                        load();
                        $scrollElement.off("scroll", checkInViewOnLoad, passiveListener);
                    } else if (!scrollHandlerAttached) {
                        scrollHandlerAttached = true;
                        $scrollElement.on("scroll", checkInViewOnLoad, passiveListener);
                    }
                }
                on("beforeInit", ()=>{
                    if (swiper.params.lazy.enabled && swiper.params.preloadImages) swiper.params.preloadImages = false;
                });
                on("init", ()=>{
                    if (swiper.params.lazy.enabled) {
                        if (swiper.params.lazy.checkInView) checkInViewOnLoad();
                        else load();
                    }
                });
                on("scroll", ()=>{
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) load();
                });
                on("scrollbarDragMove resize _freeModeNoMomentumRelease", ()=>{
                    if (swiper.params.lazy.enabled) {
                        if (swiper.params.lazy.checkInView) checkInViewOnLoad();
                        else load();
                    }
                });
                on("transitionStart", ()=>{
                    if (swiper.params.lazy.enabled) {
                        if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
                            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
                            else load();
                        }
                    }
                });
                on("transitionEnd", ()=>{
                    if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
                        if (swiper.params.lazy.checkInView) checkInViewOnLoad();
                        else load();
                    }
                });
                on("slideChange", ()=>{
                    const { lazy , cssMode , watchSlidesProgress , touchReleaseOnEdges , resistanceRatio  } = swiper.params;
                    if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) load();
                });
                on("destroy", ()=>{
                    if (!swiper.$el) return;
                    swiper.$el.find(`.${swiper.params.lazy.loadingClass}`).removeClass(swiper.params.lazy.loadingClass);
                });
                Object.assign(swiper.lazy, {
                    load,
                    loadInSlide
                });
            }
            exports1.default = Lazy;
        },
        {
            "ssr-window": "3lyfI",
            "../../shared/dom.js": "7pW5q",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "hcdrq": [
        function(require, module1, exports1) {
            /* eslint no-bitwise: ["error", { "allow": [">>"] }] */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _utilsJs = require("../../shared/utils.js");
            function Controller({ swiper , extendParams , on  }) {
                extendParams({
                    controller: {
                        control: undefined,
                        inverse: false,
                        by: "slide" // or 'container'
                    }
                });
                swiper.controller = {
                    control: undefined
                };
                function LinearSpline(x, y) {
                    const binarySearch = function search() {
                        let maxIndex;
                        let minIndex;
                        let guess;
                        return (array, val)=>{
                            minIndex = -1;
                            maxIndex = array.length;
                            while(maxIndex - minIndex > 1){
                                guess = maxIndex + minIndex >> 1;
                                if (array[guess] <= val) minIndex = guess;
                                else maxIndex = guess;
                            }
                            return maxIndex;
                        };
                    }();
                    this.x = x;
                    this.y = y;
                    this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
                    // (x1,y1) is the known point before given value,
                    // (x3,y3) is the known point after given value.
                    let i1;
                    let i3;
                    this.interpolate = function interpolate(x2) {
                        if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                        i3 = binarySearch(this.x, x2);
                        i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
                        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                        return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
                    };
                    return this;
                } // xxx: for now i will just save one spline function to to
                function getInterpolateFunction(c) {
                    if (!swiper.controller.spline) swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
                }
                function setTranslate(_t, byController) {
                    const controlled = swiper.controller.control;
                    let multiplier;
                    let controlledTranslate;
                    const Swiper = swiper.constructor;
                    function setControlledTranslate(c) {
                        // this will create an Interpolate function based on the snapGrids
                        // x is the Grid of the scrolled scroller and y will be the controlled scroller
                        // it makes sense to create this only once and recall it for the interpolation
                        // the function does a lot of value caching for performance
                        const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
                        if (swiper.params.controller.by === "slide") {
                            getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                            // but it did not work out
                            controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                        }
                        if (!controlledTranslate || swiper.params.controller.by === "container") {
                            multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                            controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
                        }
                        if (swiper.params.controller.inverse) controlledTranslate = c.maxTranslate() - controlledTranslate;
                        c.updateProgress(controlledTranslate);
                        c.setTranslate(controlledTranslate, swiper);
                        c.updateActiveIndex();
                        c.updateSlidesClasses();
                    }
                    if (Array.isArray(controlled)) {
                        for(let i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTranslate(controlled[i]);
                    } else if (controlled instanceof Swiper && byController !== controlled) setControlledTranslate(controlled);
                }
                function setTransition(duration, byController) {
                    const Swiper = swiper.constructor;
                    const controlled = swiper.controller.control;
                    let i;
                    function setControlledTransition(c) {
                        c.setTransition(duration, swiper);
                        if (duration !== 0) {
                            c.transitionStart();
                            if (c.params.autoHeight) (0, _utilsJs.nextTick)(()=>{
                                c.updateAutoHeight();
                            });
                            c.$wrapperEl.transitionEnd(()=>{
                                if (!controlled) return;
                                if (c.params.loop && swiper.params.controller.by === "slide") c.loopFix();
                                c.transitionEnd();
                            });
                        }
                    }
                    if (Array.isArray(controlled)) {
                        for(i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTransition(controlled[i]);
                    } else if (controlled instanceof Swiper && byController !== controlled) setControlledTransition(controlled);
                }
                function removeSpline() {
                    if (!swiper.controller.control) return;
                    if (swiper.controller.spline) {
                        swiper.controller.spline = undefined;
                        delete swiper.controller.spline;
                    }
                }
                on("beforeInit", ()=>{
                    swiper.controller.control = swiper.params.controller.control;
                });
                on("update", ()=>{
                    removeSpline();
                });
                on("resize", ()=>{
                    removeSpline();
                });
                on("observerUpdate", ()=>{
                    removeSpline();
                });
                on("setTranslate", (_s, translate, byController)=>{
                    if (!swiper.controller.control) return;
                    swiper.controller.setTranslate(translate, byController);
                });
                on("setTransition", (_s, duration, byController)=>{
                    if (!swiper.controller.control) return;
                    swiper.controller.setTransition(duration, byController);
                });
                Object.assign(swiper.controller, {
                    setTranslate,
                    setTransition
                });
            }
            exports1.default = Controller;
        },
        {
            "../../shared/utils.js": "dbikn",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "lDTl7": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _classesToSelectorJs = require("../../shared/classes-to-selector.js");
            var _classesToSelectorJsDefault = parcelHelpers.interopDefault(_classesToSelectorJs);
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            function A11y({ swiper , extendParams , on  }) {
                extendParams({
                    a11y: {
                        enabled: true,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        itemRoleDescriptionMessage: null,
                        slideRole: "group",
                        id: null
                    }
                });
                swiper.a11y = {
                    clicked: false
                };
                let liveRegion = null;
                function notify(message) {
                    const notification = liveRegion;
                    if (notification.length === 0) return;
                    notification.html("");
                    notification.html(message);
                }
                function getRandomNumber(size = 16) {
                    const randomChar = ()=>Math.round(16 * Math.random()).toString(16);
                    return "x".repeat(size).replace(/x/g, randomChar);
                }
                function makeElFocusable($el) {
                    $el.attr("tabIndex", "0");
                }
                function makeElNotFocusable($el) {
                    $el.attr("tabIndex", "-1");
                }
                function addElRole($el, role) {
                    $el.attr("role", role);
                }
                function addElRoleDescription($el, description) {
                    $el.attr("aria-roledescription", description);
                }
                function addElControls($el, controls) {
                    $el.attr("aria-controls", controls);
                }
                function addElLabel($el, label) {
                    $el.attr("aria-label", label);
                }
                function addElId($el, id) {
                    $el.attr("id", id);
                }
                function addElLive($el, live) {
                    $el.attr("aria-live", live);
                }
                function disableEl($el) {
                    $el.attr("aria-disabled", true);
                }
                function enableEl($el) {
                    $el.attr("aria-disabled", false);
                }
                function onEnterOrSpaceKey(e) {
                    if (e.keyCode !== 13 && e.keyCode !== 32) return;
                    const params = swiper.params.a11y;
                    const $targetEl = (0, _domJsDefault.default)(e.target);
                    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
                        if (!(swiper.isEnd && !swiper.params.loop)) swiper.slideNext();
                        if (swiper.isEnd) notify(params.lastSlideMessage);
                        else notify(params.nextSlideMessage);
                    }
                    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
                        if (!(swiper.isBeginning && !swiper.params.loop)) swiper.slidePrev();
                        if (swiper.isBeginning) notify(params.firstSlideMessage);
                        else notify(params.prevSlideMessage);
                    }
                    if (swiper.pagination && $targetEl.is((0, _classesToSelectorJsDefault.default)(swiper.params.pagination.bulletClass))) $targetEl[0].click();
                }
                function updateNavigation() {
                    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
                    const { $nextEl , $prevEl  } = swiper.navigation;
                    if ($prevEl && $prevEl.length > 0) {
                        if (swiper.isBeginning) {
                            disableEl($prevEl);
                            makeElNotFocusable($prevEl);
                        } else {
                            enableEl($prevEl);
                            makeElFocusable($prevEl);
                        }
                    }
                    if ($nextEl && $nextEl.length > 0) {
                        if (swiper.isEnd) {
                            disableEl($nextEl);
                            makeElNotFocusable($nextEl);
                        } else {
                            enableEl($nextEl);
                            makeElFocusable($nextEl);
                        }
                    }
                }
                function hasPagination() {
                    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
                }
                function hasClickablePagination() {
                    return hasPagination() && swiper.params.pagination.clickable;
                }
                function updatePagination() {
                    const params = swiper.params.a11y;
                    if (!hasPagination()) return;
                    swiper.pagination.bullets.each((bulletEl)=>{
                        const $bulletEl = (0, _domJsDefault.default)(bulletEl);
                        if (swiper.params.pagination.clickable) {
                            makeElFocusable($bulletEl);
                            if (!swiper.params.pagination.renderBullet) {
                                addElRole($bulletEl, "button");
                                addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
                            }
                        }
                        if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) $bulletEl.attr("aria-current", "true");
                        else $bulletEl.removeAttr("aria-current");
                    });
                }
                const initNavEl = ($el, wrapperId, message)=>{
                    makeElFocusable($el);
                    if ($el[0].tagName !== "BUTTON") {
                        addElRole($el, "button");
                        $el.on("keydown", onEnterOrSpaceKey);
                    }
                    addElLabel($el, message);
                    addElControls($el, wrapperId);
                };
                const handlePointerDown = ()=>{
                    swiper.a11y.clicked = true;
                };
                const handlePointerUp = ()=>{
                    requestAnimationFrame(()=>{
                        requestAnimationFrame(()=>{
                            if (!swiper.destroyed) swiper.a11y.clicked = false;
                        });
                    });
                };
                const handleFocus = (e)=>{
                    if (swiper.a11y.clicked) return;
                    const slideEl = e.target.closest(`.${swiper.params.slideClass}`);
                    if (!slideEl || !swiper.slides.includes(slideEl)) return;
                    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
                    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
                    if (isActive || isVisible) return;
                    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
                    if (swiper.isHorizontal()) swiper.el.scrollLeft = 0;
                    else swiper.el.scrollTop = 0;
                    swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
                };
                const initSlides = ()=>{
                    const params = swiper.params.a11y;
                    if (params.itemRoleDescriptionMessage) addElRoleDescription((0, _domJsDefault.default)(swiper.slides), params.itemRoleDescriptionMessage);
                    if (params.slideRole) addElRole((0, _domJsDefault.default)(swiper.slides), params.slideRole);
                    const slidesLength = swiper.params.loop ? swiper.slides.filter((el)=>!el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;
                    if (params.slideLabelMessage) swiper.slides.each((slideEl, index)=>{
                        const $slideEl = (0, _domJsDefault.default)(slideEl);
                        const slideIndex = swiper.params.loop ? parseInt($slideEl.attr("data-swiper-slide-index"), 10) : index;
                        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
                        addElLabel($slideEl, ariaLabelMessage);
                    });
                };
                const init = ()=>{
                    const params = swiper.params.a11y;
                    swiper.$el.append(liveRegion); // Container
                    const $containerEl = swiper.$el;
                    if (params.containerRoleDescriptionMessage) addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
                    if (params.containerMessage) addElLabel($containerEl, params.containerMessage);
                    // Wrapper
                    const $wrapperEl = swiper.$wrapperEl;
                    const wrapperId = params.id || $wrapperEl.attr("id") || `swiper-wrapper-${getRandomNumber(16)}`;
                    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
                    addElId($wrapperEl, wrapperId);
                    addElLive($wrapperEl, live); // Slide
                    initSlides(); // Navigation
                    let $nextEl;
                    let $prevEl;
                    if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
                    if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
                    if ($nextEl && $nextEl.length) initNavEl($nextEl, wrapperId, params.nextSlideMessage);
                    if ($prevEl && $prevEl.length) initNavEl($prevEl, wrapperId, params.prevSlideMessage);
                    // Pagination
                    if (hasClickablePagination()) swiper.pagination.$el.on("keydown", (0, _classesToSelectorJsDefault.default)(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
                    // Tab focus
                    swiper.$el.on("focus", handleFocus, true);
                    swiper.$el.on("pointerdown", handlePointerDown, true);
                    swiper.$el.on("pointerup", handlePointerUp, true);
                };
                function destroy() {
                    if (liveRegion && liveRegion.length > 0) liveRegion.remove();
                    let $nextEl;
                    let $prevEl;
                    if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
                    if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
                    if ($nextEl) $nextEl.off("keydown", onEnterOrSpaceKey);
                    if ($prevEl) $prevEl.off("keydown", onEnterOrSpaceKey);
                    // Pagination
                    if (hasClickablePagination()) swiper.pagination.$el.off("keydown", (0, _classesToSelectorJsDefault.default)(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
                    // Tab focus
                    swiper.$el.off("focus", handleFocus, true);
                    swiper.$el.off("pointerdown", handlePointerDown, true);
                    swiper.$el.off("pointerup", handlePointerUp, true);
                }
                on("beforeInit", ()=>{
                    liveRegion = (0, _domJsDefault.default)(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
                });
                on("afterInit", ()=>{
                    if (!swiper.params.a11y.enabled) return;
                    init();
                });
                on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", ()=>{
                    if (!swiper.params.a11y.enabled) return;
                    initSlides();
                });
                on("fromEdge toEdge afterInit lock unlock", ()=>{
                    if (!swiper.params.a11y.enabled) return;
                    updateNavigation();
                });
                on("paginationUpdate", ()=>{
                    if (!swiper.params.a11y.enabled) return;
                    updatePagination();
                });
                on("destroy", ()=>{
                    if (!swiper.params.a11y.enabled) return;
                    destroy();
                });
            }
            exports1.default = A11y;
        },
        {
            "../../shared/classes-to-selector.js": "227R4",
            "../../shared/dom.js": "7pW5q",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "7pifE": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _ssrWindow = require("ssr-window");
            function History({ swiper , extendParams , on  }) {
                extendParams({
                    history: {
                        enabled: false,
                        root: "",
                        replaceState: false,
                        key: "slides",
                        keepQuery: false
                    }
                });
                let initialized = false;
                let paths = {};
                const slugify = (text)=>{
                    return text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
                };
                const getPathValues = (urlOverride)=>{
                    const window1 = (0, _ssrWindow.getWindow)();
                    let location1;
                    if (urlOverride) location1 = new URL(urlOverride);
                    else location1 = window1.location;
                    const pathArray = location1.pathname.slice(1).split("/").filter((part)=>part !== "");
                    const total = pathArray.length;
                    const key = pathArray[total - 2];
                    const value = pathArray[total - 1];
                    return {
                        key,
                        value
                    };
                };
                const setHistory = (key, index)=>{
                    const window1 = (0, _ssrWindow.getWindow)();
                    if (!initialized || !swiper.params.history.enabled) return;
                    let location1;
                    if (swiper.params.url) location1 = new URL(swiper.params.url);
                    else location1 = window1.location;
                    const slide = swiper.slides.eq(index);
                    let value = slugify(slide.attr("data-history"));
                    if (swiper.params.history.root.length > 0) {
                        let root = swiper.params.history.root;
                        if (root[root.length - 1] === "/") root = root.slice(0, root.length - 1);
                        value = `${root}/${key}/${value}`;
                    } else if (!location1.pathname.includes(key)) value = `${key}/${value}`;
                    if (swiper.params.history.keepQuery) value += location1.search;
                    const currentState = window1.history.state;
                    if (currentState && currentState.value === value) return;
                    if (swiper.params.history.replaceState) window1.history.replaceState({
                        value
                    }, null, value);
                    else window1.history.pushState({
                        value
                    }, null, value);
                };
                const scrollToSlide = (speed, value, runCallbacks)=>{
                    if (value) for(let i = 0, length = swiper.slides.length; i < length; i += 1){
                        const slide = swiper.slides.eq(i);
                        const slideHistory = slugify(slide.attr("data-history"));
                        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                            const index = slide.index();
                            swiper.slideTo(index, speed, runCallbacks);
                        }
                    }
                    else swiper.slideTo(0, speed, runCallbacks);
                };
                const setHistoryPopState = ()=>{
                    paths = getPathValues(swiper.params.url);
                    scrollToSlide(swiper.params.speed, paths.value, false);
                };
                const init = ()=>{
                    const window1 = (0, _ssrWindow.getWindow)();
                    if (!swiper.params.history) return;
                    if (!window1.history || !window1.history.pushState) {
                        swiper.params.history.enabled = false;
                        swiper.params.hashNavigation.enabled = true;
                        return;
                    }
                    initialized = true;
                    paths = getPathValues(swiper.params.url);
                    if (!paths.key && !paths.value) return;
                    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
                    if (!swiper.params.history.replaceState) window1.addEventListener("popstate", setHistoryPopState);
                };
                const destroy = ()=>{
                    const window1 = (0, _ssrWindow.getWindow)();
                    if (!swiper.params.history.replaceState) window1.removeEventListener("popstate", setHistoryPopState);
                };
                on("init", ()=>{
                    if (swiper.params.history.enabled) init();
                });
                on("destroy", ()=>{
                    if (swiper.params.history.enabled) destroy();
                });
                on("transitionEnd _freeModeNoMomentumRelease", ()=>{
                    if (initialized) setHistory(swiper.params.history.key, swiper.activeIndex);
                });
                on("slideChange", ()=>{
                    if (initialized && swiper.params.cssMode) setHistory(swiper.params.history.key, swiper.activeIndex);
                });
            }
            exports1.default = History;
        },
        {
            "ssr-window": "3lyfI",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "6TTnC": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _ssrWindow = require("ssr-window");
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            function HashNavigation({ swiper , extendParams , emit , on  }) {
                let initialized = false;
                const document1 = (0, _ssrWindow.getDocument)();
                const window1 = (0, _ssrWindow.getWindow)();
                extendParams({
                    hashNavigation: {
                        enabled: false,
                        replaceState: false,
                        watchState: false
                    }
                });
                const onHashChange = ()=>{
                    emit("hashChange");
                    const newHash = document1.location.hash.replace("#", "");
                    const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr("data-hash");
                    if (newHash !== activeSlideHash) {
                        const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
                        if (typeof newIndex === "undefined") return;
                        swiper.slideTo(newIndex);
                    }
                };
                const setHash = ()=>{
                    if (!initialized || !swiper.params.hashNavigation.enabled) return;
                    if (swiper.params.hashNavigation.replaceState && window1.history && window1.history.replaceState) {
                        window1.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr("data-hash")}` || "");
                        emit("hashSet");
                    } else {
                        const slide = swiper.slides.eq(swiper.activeIndex);
                        const hash = slide.attr("data-hash") || slide.attr("data-history");
                        document1.location.hash = hash || "";
                        emit("hashSet");
                    }
                };
                const init = ()=>{
                    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
                    initialized = true;
                    const hash = document1.location.hash.replace("#", "");
                    if (hash) {
                        const speed = 0;
                        for(let i = 0, length = swiper.slides.length; i < length; i += 1){
                            const slide = swiper.slides.eq(i);
                            const slideHash = slide.attr("data-hash") || slide.attr("data-history");
                            if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                                const index = slide.index();
                                swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                            }
                        }
                    }
                    if (swiper.params.hashNavigation.watchState) (0, _domJsDefault.default)(window1).on("hashchange", onHashChange);
                };
                const destroy = ()=>{
                    if (swiper.params.hashNavigation.watchState) (0, _domJsDefault.default)(window1).off("hashchange", onHashChange);
                };
                on("init", ()=>{
                    if (swiper.params.hashNavigation.enabled) init();
                });
                on("destroy", ()=>{
                    if (swiper.params.hashNavigation.enabled) destroy();
                });
                on("transitionEnd _freeModeNoMomentumRelease", ()=>{
                    if (initialized) setHash();
                });
                on("slideChange", ()=>{
                    if (initialized && swiper.params.cssMode) setHash();
                });
            }
            exports1.default = HashNavigation;
        },
        {
            "ssr-window": "3lyfI",
            "../../shared/dom.js": "7pW5q",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "1YoHq": [
        function(require, module1, exports1) {
            /* eslint no-underscore-dangle: "off" */ /* eslint no-use-before-define: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _ssrWindow = require("ssr-window");
            var _utilsJs = require("../../shared/utils.js");
            function Autoplay({ swiper , extendParams , on , emit  }) {
                let timeout;
                swiper.autoplay = {
                    running: false,
                    paused: false
                };
                extendParams({
                    autoplay: {
                        enabled: false,
                        delay: 3000,
                        waitForTransition: true,
                        disableOnInteraction: true,
                        stopOnLastSlide: false,
                        reverseDirection: false,
                        pauseOnMouseEnter: false
                    }
                });
                function run() {
                    if (!swiper.size) {
                        swiper.autoplay.running = false;
                        swiper.autoplay.paused = false;
                        return;
                    }
                    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
                    let delay = swiper.params.autoplay.delay;
                    if ($activeSlideEl.attr("data-swiper-autoplay")) delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
                    clearTimeout(timeout);
                    timeout = (0, _utilsJs.nextTick)(()=>{
                        let autoplayResult;
                        if (swiper.params.autoplay.reverseDirection) {
                            if (swiper.params.loop) {
                                swiper.loopFix();
                                autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                                emit("autoplay");
                            } else if (!swiper.isBeginning) {
                                autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                                emit("autoplay");
                            } else if (!swiper.params.autoplay.stopOnLastSlide) {
                                autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                                emit("autoplay");
                            } else stop();
                        } else if (swiper.params.loop) {
                            swiper.loopFix();
                            autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                            emit("autoplay");
                        } else if (!swiper.isEnd) {
                            autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                            emit("autoplay");
                        } else if (!swiper.params.autoplay.stopOnLastSlide) {
                            autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                            emit("autoplay");
                        } else stop();
                        if (swiper.params.cssMode && swiper.autoplay.running) run();
                        else if (autoplayResult === false) run();
                    }, delay);
                }
                function start() {
                    if (typeof timeout !== "undefined") return false;
                    if (swiper.autoplay.running) return false;
                    swiper.autoplay.running = true;
                    emit("autoplayStart");
                    run();
                    return true;
                }
                function stop() {
                    if (!swiper.autoplay.running) return false;
                    if (typeof timeout === "undefined") return false;
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = undefined;
                    }
                    swiper.autoplay.running = false;
                    emit("autoplayStop");
                    return true;
                }
                function pause(speed) {
                    if (!swiper.autoplay.running) return;
                    if (swiper.autoplay.paused) return;
                    if (timeout) clearTimeout(timeout);
                    swiper.autoplay.paused = true;
                    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
                        swiper.autoplay.paused = false;
                        run();
                    } else [
                        "transitionend",
                        "webkitTransitionEnd"
                    ].forEach((event1)=>{
                        swiper.$wrapperEl[0].addEventListener(event1, onTransitionEnd);
                    });
                }
                function onVisibilityChange() {
                    const document1 = (0, _ssrWindow.getDocument)();
                    if (document1.visibilityState === "hidden" && swiper.autoplay.running) pause();
                    if (document1.visibilityState === "visible" && swiper.autoplay.paused) {
                        run();
                        swiper.autoplay.paused = false;
                    }
                }
                function onTransitionEnd(e) {
                    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
                    if (e.target !== swiper.$wrapperEl[0]) return;
                    [
                        "transitionend",
                        "webkitTransitionEnd"
                    ].forEach((event1)=>{
                        swiper.$wrapperEl[0].removeEventListener(event1, onTransitionEnd);
                    });
                    swiper.autoplay.paused = false;
                    if (!swiper.autoplay.running) stop();
                    else run();
                }
                function onMouseEnter() {
                    if (swiper.params.autoplay.disableOnInteraction) stop();
                    else {
                        emit("autoplayPause");
                        pause();
                    }
                    [
                        "transitionend",
                        "webkitTransitionEnd"
                    ].forEach((event1)=>{
                        swiper.$wrapperEl[0].removeEventListener(event1, onTransitionEnd);
                    });
                }
                function onMouseLeave() {
                    if (swiper.params.autoplay.disableOnInteraction) return;
                    swiper.autoplay.paused = false;
                    emit("autoplayResume");
                    run();
                }
                function attachMouseEvents() {
                    if (swiper.params.autoplay.pauseOnMouseEnter) {
                        swiper.$el.on("mouseenter", onMouseEnter);
                        swiper.$el.on("mouseleave", onMouseLeave);
                    }
                }
                function detachMouseEvents() {
                    swiper.$el.off("mouseenter", onMouseEnter);
                    swiper.$el.off("mouseleave", onMouseLeave);
                }
                on("init", ()=>{
                    if (swiper.params.autoplay.enabled) {
                        start();
                        const document1 = (0, _ssrWindow.getDocument)();
                        document1.addEventListener("visibilitychange", onVisibilityChange);
                        attachMouseEvents();
                    }
                });
                on("beforeTransitionStart", (_s, speed, internal)=>{
                    if (swiper.autoplay.running) {
                        if (internal || !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.pause(speed);
                        else stop();
                    }
                });
                on("sliderFirstMove", ()=>{
                    if (swiper.autoplay.running) {
                        if (swiper.params.autoplay.disableOnInteraction) stop();
                        else pause();
                    }
                });
                on("touchEnd", ()=>{
                    if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) run();
                });
                on("destroy", ()=>{
                    detachMouseEvents();
                    if (swiper.autoplay.running) stop();
                    const document1 = (0, _ssrWindow.getDocument)();
                    document1.removeEventListener("visibilitychange", onVisibilityChange);
                });
                Object.assign(swiper.autoplay, {
                    pause,
                    run,
                    start,
                    stop
                });
            }
            exports1.default = Autoplay;
        },
        {
            "ssr-window": "3lyfI",
            "../../shared/utils.js": "dbikn",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "e0dJV": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _utilsJs = require("../../shared/utils.js");
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            function Thumb({ swiper , extendParams , on  }) {
                extendParams({
                    thumbs: {
                        swiper: null,
                        multipleActiveThumbs: true,
                        autoScrollOffset: 0,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-thumbs"
                    }
                });
                let initialized = false;
                let swiperCreated = false;
                swiper.thumbs = {
                    swiper: null
                };
                function onThumbClick() {
                    const thumbsSwiper = swiper.thumbs.swiper;
                    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                    const clickedIndex = thumbsSwiper.clickedIndex;
                    const clickedSlide = thumbsSwiper.clickedSlide;
                    if (clickedSlide && (0, _domJsDefault.default)(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
                    if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
                    let slideToIndex;
                    if (thumbsSwiper.params.loop) slideToIndex = parseInt((0, _domJsDefault.default)(thumbsSwiper.clickedSlide).attr("data-swiper-slide-index"), 10);
                    else slideToIndex = clickedIndex;
                    if (swiper.params.loop) {
                        let currentIndex = swiper.activeIndex;
                        if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                            swiper.loopFix(); // eslint-disable-next-line
                            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                            currentIndex = swiper.activeIndex;
                        }
                        const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
                        const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
                        if (typeof prevIndex === "undefined") slideToIndex = nextIndex;
                        else if (typeof nextIndex === "undefined") slideToIndex = prevIndex;
                        else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
                        else slideToIndex = prevIndex;
                    }
                    swiper.slideTo(slideToIndex);
                }
                function init() {
                    const { thumbs: thumbsParams  } = swiper.params;
                    if (initialized) return false;
                    initialized = true;
                    const SwiperClass = swiper.constructor;
                    if (thumbsParams.swiper instanceof SwiperClass) {
                        swiper.thumbs.swiper = thumbsParams.swiper;
                        Object.assign(swiper.thumbs.swiper.originalParams, {
                            watchSlidesProgress: true,
                            slideToClickedSlide: false
                        });
                        Object.assign(swiper.thumbs.swiper.params, {
                            watchSlidesProgress: true,
                            slideToClickedSlide: false
                        });
                    } else if ((0, _utilsJs.isObject)(thumbsParams.swiper)) {
                        const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
                        Object.assign(thumbsSwiperParams, {
                            watchSlidesProgress: true,
                            slideToClickedSlide: false
                        });
                        swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
                        swiperCreated = true;
                    }
                    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
                    swiper.thumbs.swiper.on("tap", onThumbClick);
                    return true;
                }
                function update(initial) {
                    const thumbsSwiper = swiper.thumbs.swiper;
                    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                    const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView; // Activate thumbs
                    let thumbsToActivate = 1;
                    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
                    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
                    if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
                    thumbsToActivate = Math.floor(thumbsToActivate);
                    thumbsSwiper.slides.removeClass(thumbActiveClass);
                    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for(let i = 0; i < thumbsToActivate; i += 1)thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
                    else for(let i1 = 0; i1 < thumbsToActivate; i1 += 1)thumbsSwiper.slides.eq(swiper.realIndex + i1).addClass(thumbActiveClass);
                    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
                    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
                    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
                        let currentThumbsIndex = thumbsSwiper.activeIndex;
                        let newThumbsIndex;
                        let direction;
                        if (thumbsSwiper.params.loop) {
                            if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                                thumbsSwiper.loopFix(); // eslint-disable-next-line
                                thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                                currentThumbsIndex = thumbsSwiper.activeIndex;
                            } // Find actual thumbs index to slide to
                            const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                            const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                            if (typeof prevThumbsIndex === "undefined") newThumbsIndex = nextThumbsIndex;
                            else if (typeof nextThumbsIndex === "undefined") newThumbsIndex = prevThumbsIndex;
                            else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
                            else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
                            else newThumbsIndex = prevThumbsIndex;
                            direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
                        } else {
                            newThumbsIndex = swiper.realIndex;
                            direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
                        }
                        if (useOffset) newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
                        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                            if (thumbsSwiper.params.centeredSlides) {
                                if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                                else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                            } else newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup;
                            thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
                        }
                    }
                }
                on("beforeInit", ()=>{
                    const { thumbs  } = swiper.params;
                    if (!thumbs || !thumbs.swiper) return;
                    init();
                    update(true);
                });
                on("slideChange update resize observerUpdate", ()=>{
                    update();
                });
                on("setTransition", (_s, duration)=>{
                    const thumbsSwiper = swiper.thumbs.swiper;
                    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                    thumbsSwiper.setTransition(duration);
                });
                on("beforeDestroy", ()=>{
                    const thumbsSwiper = swiper.thumbs.swiper;
                    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                    if (swiperCreated) thumbsSwiper.destroy();
                });
                Object.assign(swiper.thumbs, {
                    init,
                    update
                });
            }
            exports1.default = Thumb;
        },
        {
            "../../shared/utils.js": "dbikn",
            "../../shared/dom.js": "7pW5q",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "4NFQW": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _utilsJs = require("../../shared/utils.js");
            function freeMode({ swiper , extendParams , emit , once  }) {
                extendParams({
                    freeMode: {
                        enabled: false,
                        momentum: true,
                        momentumRatio: 1,
                        momentumBounce: true,
                        momentumBounceRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: false,
                        minimumVelocity: 0.02
                    }
                });
                function onTouchStart() {
                    const translate = swiper.getTranslate();
                    swiper.setTranslate(translate);
                    swiper.setTransition(0);
                    swiper.touchEventsData.velocities.length = 0;
                    swiper.freeMode.onTouchEnd({
                        currentPos: swiper.rtl ? swiper.translate : -swiper.translate
                    });
                }
                function onTouchMove() {
                    const { touchEventsData: data , touches  } = swiper; // Velocity
                    if (data.velocities.length === 0) data.velocities.push({
                        position: touches[swiper.isHorizontal() ? "startX" : "startY"],
                        time: data.touchStartTime
                    });
                    data.velocities.push({
                        position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
                        time: (0, _utilsJs.now)()
                    });
                }
                function onTouchEnd({ currentPos  }) {
                    const { params , $wrapperEl , rtlTranslate: rtl , snapGrid , touchEventsData: data  } = swiper; // Time diff
                    const touchEndTime = (0, _utilsJs.now)();
                    const timeDiff = touchEndTime - data.touchStartTime;
                    if (currentPos < -swiper.minTranslate()) {
                        swiper.slideTo(swiper.activeIndex);
                        return;
                    }
                    if (currentPos > -swiper.maxTranslate()) {
                        if (swiper.slides.length < snapGrid.length) swiper.slideTo(snapGrid.length - 1);
                        else swiper.slideTo(swiper.slides.length - 1);
                        return;
                    }
                    if (params.freeMode.momentum) {
                        if (data.velocities.length > 1) {
                            const lastMoveEvent = data.velocities.pop();
                            const velocityEvent = data.velocities.pop();
                            const distance = lastMoveEvent.position - velocityEvent.position;
                            const time = lastMoveEvent.time - velocityEvent.time;
                            swiper.velocity = distance / time;
                            swiper.velocity /= 2;
                            if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) swiper.velocity = 0;
                            // this implies that the user stopped moving a finger then released.
                            // There would be no events with distance zero, so the last event is stale.
                            if (time > 150 || (0, _utilsJs.now)() - lastMoveEvent.time > 300) swiper.velocity = 0;
                        } else swiper.velocity = 0;
                        swiper.velocity *= params.freeMode.momentumVelocityRatio;
                        data.velocities.length = 0;
                        let momentumDuration = 1000 * params.freeMode.momentumRatio;
                        const momentumDistance = swiper.velocity * momentumDuration;
                        let newPosition = swiper.translate + momentumDistance;
                        if (rtl) newPosition = -newPosition;
                        let doBounce = false;
                        let afterBouncePosition;
                        const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
                        let needsLoopFix;
                        if (newPosition < swiper.maxTranslate()) {
                            if (params.freeMode.momentumBounce) {
                                if (newPosition + swiper.maxTranslate() < -bounceAmount) newPosition = swiper.maxTranslate() - bounceAmount;
                                afterBouncePosition = swiper.maxTranslate();
                                doBounce = true;
                                data.allowMomentumBounce = true;
                            } else newPosition = swiper.maxTranslate();
                            if (params.loop && params.centeredSlides) needsLoopFix = true;
                        } else if (newPosition > swiper.minTranslate()) {
                            if (params.freeMode.momentumBounce) {
                                if (newPosition - swiper.minTranslate() > bounceAmount) newPosition = swiper.minTranslate() + bounceAmount;
                                afterBouncePosition = swiper.minTranslate();
                                doBounce = true;
                                data.allowMomentumBounce = true;
                            } else newPosition = swiper.minTranslate();
                            if (params.loop && params.centeredSlides) needsLoopFix = true;
                        } else if (params.freeMode.sticky) {
                            let nextSlide;
                            for(let j = 0; j < snapGrid.length; j += 1)if (snapGrid[j] > -newPosition) {
                                nextSlide = j;
                                break;
                            }
                            if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") newPosition = snapGrid[nextSlide];
                            else newPosition = snapGrid[nextSlide - 1];
                            newPosition = -newPosition;
                        }
                        if (needsLoopFix) once("transitionEnd", ()=>{
                            swiper.loopFix();
                        });
                        // Fix duration
                        if (swiper.velocity !== 0) {
                            if (rtl) momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                            else momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                            if (params.freeMode.sticky) {
                                // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                                // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                                // It's easy to see this when simulating touch with mouse events. To fix this,
                                // limit single-slide swipes to the default slide duration. This also has the
                                // nice side effect of matching slide speed if the user stopped moving before
                                // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                                // For faster swipes, also apply limits (albeit higher ones).
                                const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                                const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                                if (moveDistance < currentSlideSize) momentumDuration = params.speed;
                                else if (moveDistance < 2 * currentSlideSize) momentumDuration = params.speed * 1.5;
                                else momentumDuration = params.speed * 2.5;
                            }
                        } else if (params.freeMode.sticky) {
                            swiper.slideToClosest();
                            return;
                        }
                        if (params.freeMode.momentumBounce && doBounce) {
                            swiper.updateProgress(afterBouncePosition);
                            swiper.setTransition(momentumDuration);
                            swiper.setTranslate(newPosition);
                            swiper.transitionStart(true, swiper.swipeDirection);
                            swiper.animating = true;
                            $wrapperEl.transitionEnd(()=>{
                                if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                                emit("momentumBounce");
                                swiper.setTransition(params.speed);
                                setTimeout(()=>{
                                    swiper.setTranslate(afterBouncePosition);
                                    $wrapperEl.transitionEnd(()=>{
                                        if (!swiper || swiper.destroyed) return;
                                        swiper.transitionEnd();
                                    });
                                }, 0);
                            });
                        } else if (swiper.velocity) {
                            emit("_freeModeNoMomentumRelease");
                            swiper.updateProgress(newPosition);
                            swiper.setTransition(momentumDuration);
                            swiper.setTranslate(newPosition);
                            swiper.transitionStart(true, swiper.swipeDirection);
                            if (!swiper.animating) {
                                swiper.animating = true;
                                $wrapperEl.transitionEnd(()=>{
                                    if (!swiper || swiper.destroyed) return;
                                    swiper.transitionEnd();
                                });
                            }
                        } else swiper.updateProgress(newPosition);
                        swiper.updateActiveIndex();
                        swiper.updateSlidesClasses();
                    } else if (params.freeMode.sticky) {
                        swiper.slideToClosest();
                        return;
                    } else if (params.freeMode) emit("_freeModeNoMomentumRelease");
                    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
                        swiper.updateProgress();
                        swiper.updateActiveIndex();
                        swiper.updateSlidesClasses();
                    }
                }
                Object.assign(swiper, {
                    freeMode: {
                        onTouchStart,
                        onTouchMove,
                        onTouchEnd
                    }
                });
            }
            exports1.default = freeMode;
        },
        {
            "../../shared/utils.js": "dbikn",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "gE5KG": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function Grid({ swiper , extendParams  }) {
                extendParams({
                    grid: {
                        rows: 1,
                        fill: "column"
                    }
                });
                let slidesNumberEvenToRows;
                let slidesPerRow;
                let numFullColumns;
                const initSlides = (slidesLength)=>{
                    const { slidesPerView  } = swiper.params;
                    const { rows , fill  } = swiper.params.grid;
                    slidesPerRow = slidesNumberEvenToRows / rows;
                    numFullColumns = Math.floor(slidesLength / rows);
                    if (Math.floor(slidesLength / rows) === slidesLength / rows) slidesNumberEvenToRows = slidesLength;
                    else slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
                    if (slidesPerView !== "auto" && fill === "row") slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
                };
                const updateSlide = (i, slide, slidesLength, getDirectionLabel)=>{
                    const { slidesPerGroup , spaceBetween  } = swiper.params;
                    const { rows , fill  } = swiper.params.grid; // Set slides order
                    let newSlideOrderIndex;
                    let column;
                    let row;
                    if (fill === "row" && slidesPerGroup > 1) {
                        const groupIndex = Math.floor(i / (slidesPerGroup * rows));
                        const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
                        const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
                        row = Math.floor(slideIndexInGroup / columnsInGroup);
                        column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
                        slide.css({
                            "-webkit-order": newSlideOrderIndex,
                            order: newSlideOrderIndex
                        });
                    } else if (fill === "column") {
                        column = Math.floor(i / rows);
                        row = i - column * rows;
                        if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                            row += 1;
                            if (row >= rows) {
                                row = 0;
                                column += 1;
                            }
                        }
                    } else {
                        row = Math.floor(i / slidesPerRow);
                        column = i - row * slidesPerRow;
                    }
                    slide.css(getDirectionLabel("margin-top"), row !== 0 ? spaceBetween && `${spaceBetween}px` : "");
                };
                const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel)=>{
                    const { spaceBetween , centeredSlides , roundLengths  } = swiper.params;
                    const { rows  } = swiper.params.grid;
                    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
                    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
                    swiper.$wrapperEl.css({
                        [getDirectionLabel("width")]: `${swiper.virtualSize + spaceBetween}px`
                    });
                    if (centeredSlides) {
                        snapGrid.splice(0, snapGrid.length);
                        const newSlidesGrid = [];
                        for(let i = 0; i < snapGrid.length; i += 1){
                            let slidesGridItem = snapGrid[i];
                            if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                            if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
                        }
                        snapGrid.push(...newSlidesGrid);
                    }
                };
                swiper.grid = {
                    initSlides,
                    updateSlide,
                    updateWrapperSize
                };
            }
            exports1.default = Grid;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "ga5Sr": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _appendSlideJs = require("./methods/appendSlide.js");
            var _appendSlideJsDefault = parcelHelpers.interopDefault(_appendSlideJs);
            var _prependSlideJs = require("./methods/prependSlide.js");
            var _prependSlideJsDefault = parcelHelpers.interopDefault(_prependSlideJs);
            var _addSlideJs = require("./methods/addSlide.js");
            var _addSlideJsDefault = parcelHelpers.interopDefault(_addSlideJs);
            var _removeSlideJs = require("./methods/removeSlide.js");
            var _removeSlideJsDefault = parcelHelpers.interopDefault(_removeSlideJs);
            var _removeAllSlidesJs = require("./methods/removeAllSlides.js");
            var _removeAllSlidesJsDefault = parcelHelpers.interopDefault(_removeAllSlidesJs);
            function Manipulation({ swiper  }) {
                Object.assign(swiper, {
                    appendSlide: (0, _appendSlideJsDefault.default).bind(swiper),
                    prependSlide: (0, _prependSlideJsDefault.default).bind(swiper),
                    addSlide: (0, _addSlideJsDefault.default).bind(swiper),
                    removeSlide: (0, _removeSlideJsDefault.default).bind(swiper),
                    removeAllSlides: (0, _removeAllSlidesJsDefault.default).bind(swiper)
                });
            }
            exports1.default = Manipulation;
        },
        {
            "./methods/appendSlide.js": "69bun",
            "./methods/prependSlide.js": "djuuM",
            "./methods/addSlide.js": "4opfk",
            "./methods/removeSlide.js": "8WI06",
            "./methods/removeAllSlides.js": "7pufd",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "69bun": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function appendSlide(slides) {
                const swiper = this;
                const { $wrapperEl , params  } = swiper;
                if (params.loop) swiper.loopDestroy();
                if (typeof slides === "object" && "length" in slides) {
                    for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.append(slides[i]);
                } else $wrapperEl.append(slides);
                if (params.loop) swiper.loopCreate();
                if (!params.observer) swiper.update();
            }
            exports1.default = appendSlide;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "djuuM": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function prependSlide(slides) {
                const swiper = this;
                const { params , $wrapperEl , activeIndex  } = swiper;
                if (params.loop) swiper.loopDestroy();
                let newActiveIndex = activeIndex + 1;
                if (typeof slides === "object" && "length" in slides) {
                    for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.prepend(slides[i]);
                    newActiveIndex = activeIndex + slides.length;
                } else $wrapperEl.prepend(slides);
                if (params.loop) swiper.loopCreate();
                if (!params.observer) swiper.update();
                swiper.slideTo(newActiveIndex, 0, false);
            }
            exports1.default = prependSlide;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "4opfk": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function addSlide(index, slides) {
                const swiper = this;
                const { $wrapperEl , params , activeIndex  } = swiper;
                let activeIndexBuffer = activeIndex;
                if (params.loop) {
                    activeIndexBuffer -= swiper.loopedSlides;
                    swiper.loopDestroy();
                    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
                }
                const baseLength = swiper.slides.length;
                if (index <= 0) {
                    swiper.prependSlide(slides);
                    return;
                }
                if (index >= baseLength) {
                    swiper.appendSlide(slides);
                    return;
                }
                let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
                const slidesBuffer = [];
                for(let i = baseLength - 1; i >= index; i -= 1){
                    const currentSlide = swiper.slides.eq(i);
                    currentSlide.remove();
                    slidesBuffer.unshift(currentSlide);
                }
                if (typeof slides === "object" && "length" in slides) {
                    for(let i1 = 0; i1 < slides.length; i1 += 1)if (slides[i1]) $wrapperEl.append(slides[i1]);
                    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
                } else $wrapperEl.append(slides);
                for(let i2 = 0; i2 < slidesBuffer.length; i2 += 1)$wrapperEl.append(slidesBuffer[i2]);
                if (params.loop) swiper.loopCreate();
                if (!params.observer) swiper.update();
                if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
                else swiper.slideTo(newActiveIndex, 0, false);
            }
            exports1.default = addSlide;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "8WI06": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function removeSlide(slidesIndexes) {
                const swiper = this;
                const { params , $wrapperEl , activeIndex  } = swiper;
                let activeIndexBuffer = activeIndex;
                if (params.loop) {
                    activeIndexBuffer -= swiper.loopedSlides;
                    swiper.loopDestroy();
                    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
                }
                let newActiveIndex = activeIndexBuffer;
                let indexToRemove;
                if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
                    for(let i = 0; i < slidesIndexes.length; i += 1){
                        indexToRemove = slidesIndexes[i];
                        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
                        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
                    }
                    newActiveIndex = Math.max(newActiveIndex, 0);
                } else {
                    indexToRemove = slidesIndexes;
                    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
                    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
                    newActiveIndex = Math.max(newActiveIndex, 0);
                }
                if (params.loop) swiper.loopCreate();
                if (!params.observer) swiper.update();
                if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
                else swiper.slideTo(newActiveIndex, 0, false);
            }
            exports1.default = removeSlide;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "7pufd": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function removeAllSlides() {
                const swiper = this;
                const slidesIndexes = [];
                for(let i = 0; i < swiper.slides.length; i += 1)slidesIndexes.push(i);
                swiper.removeSlide(slidesIndexes);
            }
            exports1.default = removeAllSlides;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "fBGpM": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _effectInitJs = require("../../shared/effect-init.js");
            var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
            var _effectTargetJs = require("../../shared/effect-target.js");
            var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
            var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
            var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
            function EffectFade({ swiper , extendParams , on  }) {
                extendParams({
                    fadeEffect: {
                        crossFade: false,
                        transformEl: null
                    }
                });
                const setTranslate = ()=>{
                    const { slides  } = swiper;
                    const params = swiper.params.fadeEffect;
                    for(let i = 0; i < slides.length; i += 1){
                        const $slideEl = swiper.slides.eq(i);
                        const offset = $slideEl[0].swiperSlideOffset;
                        let tx = -offset;
                        if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                        let ty = 0;
                        if (!swiper.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                        const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
                        $targetEl.css({
                            opacity: slideOpacity
                        }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
                    }
                };
                const setTransition = (duration)=>{
                    const { transformEl  } = swiper.params.fadeEffect;
                    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                    $transitionElements.transition(duration);
                    (0, _effectVirtualTransitionEndJsDefault.default)({
                        swiper,
                        duration,
                        transformEl,
                        allSlides: true
                    });
                };
                (0, _effectInitJsDefault.default)({
                    effect: "fade",
                    swiper,
                    on,
                    setTranslate,
                    setTransition,
                    overwriteParams: ()=>({
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: true,
                            spaceBetween: 0,
                            virtualTranslate: !swiper.params.cssMode
                        })
                });
            }
            exports1.default = EffectFade;
        },
        {
            "../../shared/effect-init.js": "5DnvG",
            "../../shared/effect-target.js": "eKqS8",
            "../../shared/effect-virtual-transition-end.js": "VhYFx",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "5DnvG": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function effectInit(params) {
                const { effect , swiper , on , setTranslate , setTransition , overwriteParams , perspective , recreateShadows , getEffectParams  } = params;
                on("beforeInit", ()=>{
                    if (swiper.params.effect !== effect) return;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
                    if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
                    Object.assign(swiper.params, overwriteParamsResult);
                    Object.assign(swiper.originalParams, overwriteParamsResult);
                });
                on("setTranslate", ()=>{
                    if (swiper.params.effect !== effect) return;
                    setTranslate();
                });
                on("setTransition", (_s, duration)=>{
                    if (swiper.params.effect !== effect) return;
                    setTransition(duration);
                });
                on("transitionEnd", ()=>{
                    if (swiper.params.effect !== effect) return;
                    if (recreateShadows) {
                        if (!getEffectParams || !getEffectParams().slideShadows) return; // remove shadows
                        swiper.slides.each((slideEl)=>{
                            const $slideEl = swiper.$(slideEl);
                            $slideEl.find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove();
                        }); // create new one
                        recreateShadows();
                    }
                });
                let requireUpdateOnVirtual;
                on("virtualUpdate", ()=>{
                    if (swiper.params.effect !== effect) return;
                    if (!swiper.slides.length) requireUpdateOnVirtual = true;
                    requestAnimationFrame(()=>{
                        if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                            setTranslate();
                            requireUpdateOnVirtual = false;
                        }
                    });
                });
            }
            exports1.default = effectInit;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "eKqS8": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function effectTarget(effectParams, $slideEl) {
                if (effectParams.transformEl) return $slideEl.find(effectParams.transformEl).css({
                    "backface-visibility": "hidden",
                    "-webkit-backface-visibility": "hidden"
                });
                return $slideEl;
            }
            exports1.default = effectTarget;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "VhYFx": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            function effectVirtualTransitionEnd({ swiper , duration , transformEl , allSlides  }) {
                const { slides , activeIndex , $wrapperEl  } = swiper;
                if (swiper.params.virtualTranslate && duration !== 0) {
                    let eventTriggered = false;
                    let $transitionEndTarget;
                    if (allSlides) $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
                    else $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
                    $transitionEndTarget.transitionEnd(()=>{
                        if (eventTriggered) return;
                        if (!swiper || swiper.destroyed) return;
                        eventTriggered = true;
                        swiper.animating = false;
                        const triggerEvents = [
                            "webkitTransitionEnd",
                            "transitionend"
                        ];
                        for(let i = 0; i < triggerEvents.length; i += 1)$wrapperEl.trigger(triggerEvents[i]);
                    });
                }
            }
            exports1.default = effectVirtualTransitionEnd;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "hV6iY": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            var _effectInitJs = require("../../shared/effect-init.js");
            var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
            function EffectCube({ swiper , extendParams , on  }) {
                extendParams({
                    cubeEffect: {
                        slideShadows: true,
                        shadow: true,
                        shadowOffset: 20,
                        shadowScale: 0.94
                    }
                });
                const createSlideShadows = ($slideEl, progress, isHorizontal)=>{
                    let shadowBefore = isHorizontal ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
                    let shadowAfter = isHorizontal ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
                    if (shadowBefore.length === 0) {
                        shadowBefore = (0, _domJsDefault.default)(`<div class="swiper-slide-shadow-${isHorizontal ? "left" : "top"}"></div>`);
                        $slideEl.append(shadowBefore);
                    }
                    if (shadowAfter.length === 0) {
                        shadowAfter = (0, _domJsDefault.default)(`<div class="swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}"></div>`);
                        $slideEl.append(shadowAfter);
                    }
                    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                };
                const recreateShadows = ()=>{
                    // create new ones
                    const isHorizontal = swiper.isHorizontal();
                    swiper.slides.each((slideEl)=>{
                        const progress = Math.max(Math.min(slideEl.progress, 1), -1);
                        createSlideShadows((0, _domJsDefault.default)(slideEl), progress, isHorizontal);
                    });
                };
                const setTranslate = ()=>{
                    const { $el , $wrapperEl , slides , width: swiperWidth , height: swiperHeight , rtlTranslate: rtl , size: swiperSize , browser: browser1  } = swiper;
                    const params = swiper.params.cubeEffect;
                    const isHorizontal = swiper.isHorizontal();
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    let wrapperRotate = 0;
                    let $cubeShadowEl;
                    if (params.shadow) {
                        if (isHorizontal) {
                            $cubeShadowEl = $wrapperEl.find(".swiper-cube-shadow");
                            if ($cubeShadowEl.length === 0) {
                                $cubeShadowEl = (0, _domJsDefault.default)('<div class="swiper-cube-shadow"></div>');
                                $wrapperEl.append($cubeShadowEl);
                            }
                            $cubeShadowEl.css({
                                height: `${swiperWidth}px`
                            });
                        } else {
                            $cubeShadowEl = $el.find(".swiper-cube-shadow");
                            if ($cubeShadowEl.length === 0) {
                                $cubeShadowEl = (0, _domJsDefault.default)('<div class="swiper-cube-shadow"></div>');
                                $el.append($cubeShadowEl);
                            }
                        }
                    }
                    for(let i = 0; i < slides.length; i += 1){
                        const $slideEl = slides.eq(i);
                        let slideIndex = i;
                        if (isVirtual) slideIndex = parseInt($slideEl.attr("data-swiper-slide-index"), 10);
                        let slideAngle = slideIndex * 90;
                        let round = Math.floor(slideAngle / 360);
                        if (rtl) {
                            slideAngle = -slideAngle;
                            round = Math.floor(-slideAngle / 360);
                        }
                        const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                        let tx = 0;
                        let ty = 0;
                        let tz = 0;
                        if (slideIndex % 4 === 0) {
                            tx = -round * 4 * swiperSize;
                            tz = 0;
                        } else if ((slideIndex - 1) % 4 === 0) {
                            tx = 0;
                            tz = -round * 4 * swiperSize;
                        } else if ((slideIndex - 2) % 4 === 0) {
                            tx = swiperSize + round * 4 * swiperSize;
                            tz = swiperSize;
                        } else if ((slideIndex - 3) % 4 === 0) {
                            tx = -swiperSize;
                            tz = 3 * swiperSize + swiperSize * 4 * round;
                        }
                        if (rtl) tx = -tx;
                        if (!isHorizontal) {
                            ty = tx;
                            tx = 0;
                        }
                        const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = slideIndex * 90 + progress * 90;
                            if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
                        }
                        $slideEl.transform(transform);
                        if (params.slideShadows) createSlideShadows($slideEl, progress, isHorizontal);
                    }
                    $wrapperEl.css({
                        "-webkit-transform-origin": `50% 50% -${swiperSize / 2}px`,
                        "transform-origin": `50% 50% -${swiperSize / 2}px`
                    });
                    if (params.shadow) {
                        if (isHorizontal) $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
                        else {
                            const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                            const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                            const scale1 = params.shadowScale;
                            const scale2 = params.shadowScale / multiplier;
                            const offset = params.shadowOffset;
                            $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
                        }
                    }
                    const zFactor = browser1.isSafari || browser1.isWebView ? -swiperSize / 2 : 0;
                    $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
                    $wrapperEl[0].style.setProperty("--swiper-cube-translate-z", `${zFactor}px`);
                };
                const setTransition = (duration)=>{
                    const { $el , slides  } = swiper;
                    slides.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
                    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) $el.find(".swiper-cube-shadow").transition(duration);
                };
                (0, _effectInitJsDefault.default)({
                    effect: "cube",
                    swiper,
                    on,
                    setTranslate,
                    setTransition,
                    recreateShadows,
                    getEffectParams: ()=>swiper.params.cubeEffect,
                    perspective: ()=>true,
                    overwriteParams: ()=>({
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: true,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: false,
                            virtualTranslate: true
                        })
                });
            }
            exports1.default = EffectCube;
        },
        {
            "../../shared/dom.js": "7pW5q",
            "../../shared/effect-init.js": "5DnvG",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "dI6Dz": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _domJs = require("../../shared/dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            var _createShadowJs = require("../../shared/create-shadow.js");
            var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
            var _effectInitJs = require("../../shared/effect-init.js");
            var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
            var _effectTargetJs = require("../../shared/effect-target.js");
            var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
            var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
            var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
            function EffectFlip({ swiper , extendParams , on  }) {
                extendParams({
                    flipEffect: {
                        slideShadows: true,
                        limitRotation: true,
                        transformEl: null
                    }
                });
                const createSlideShadows = ($slideEl, progress, params)=>{
                    let shadowBefore = swiper.isHorizontal() ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
                    let shadowAfter = swiper.isHorizontal() ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
                    if (shadowBefore.length === 0) shadowBefore = (0, _createShadowJsDefault.default)(params, $slideEl, swiper.isHorizontal() ? "left" : "top");
                    if (shadowAfter.length === 0) shadowAfter = (0, _createShadowJsDefault.default)(params, $slideEl, swiper.isHorizontal() ? "right" : "bottom");
                    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                };
                const recreateShadows = ()=>{
                    // Set shadows
                    const params = swiper.params.flipEffect;
                    swiper.slides.each((slideEl)=>{
                        const $slideEl = (0, _domJsDefault.default)(slideEl);
                        let progress = $slideEl[0].progress;
                        if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min(slideEl.progress, 1), -1);
                        createSlideShadows($slideEl, progress, params);
                    });
                };
                const setTranslate = ()=>{
                    const { slides , rtlTranslate: rtl  } = swiper;
                    const params = swiper.params.flipEffect;
                    for(let i = 0; i < slides.length; i += 1){
                        const $slideEl = slides.eq(i);
                        let progress = $slideEl[0].progress;
                        if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                        const offset = $slideEl[0].swiperSlideOffset;
                        const rotate = -180 * progress;
                        let rotateY = rotate;
                        let rotateX = 0;
                        let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                        let ty = 0;
                        if (!swiper.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                            rotateX = -rotateY;
                            rotateY = 0;
                        } else if (rtl) rotateY = -rotateY;
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
                        if (params.slideShadows) createSlideShadows($slideEl, progress, params);
                        const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                        const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
                        $targetEl.transform(transform);
                    }
                };
                const setTransition = (duration)=>{
                    const { transformEl  } = swiper.params.flipEffect;
                    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                    $transitionElements.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
                    (0, _effectVirtualTransitionEndJsDefault.default)({
                        swiper,
                        duration,
                        transformEl
                    });
                };
                (0, _effectInitJsDefault.default)({
                    effect: "flip",
                    swiper,
                    on,
                    setTranslate,
                    setTransition,
                    recreateShadows,
                    getEffectParams: ()=>swiper.params.flipEffect,
                    perspective: ()=>true,
                    overwriteParams: ()=>({
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: true,
                            spaceBetween: 0,
                            virtualTranslate: !swiper.params.cssMode
                        })
                });
            }
            exports1.default = EffectFlip;
        },
        {
            "../../shared/dom.js": "7pW5q",
            "../../shared/create-shadow.js": "9JYAP",
            "../../shared/effect-init.js": "5DnvG",
            "../../shared/effect-target.js": "eKqS8",
            "../../shared/effect-virtual-transition-end.js": "VhYFx",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "9JYAP": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _domJs = require("./dom.js");
            var _domJsDefault = parcelHelpers.interopDefault(_domJs);
            function createShadow(params, $slideEl, side) {
                const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}`;
                const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
                let $shadowEl = $shadowContainer.children(`.${shadowClass}`);
                if (!$shadowEl.length) {
                    $shadowEl = (0, _domJsDefault.default)(`<div class="swiper-slide-shadow${side ? `-${side}` : ""}"></div>`);
                    $shadowContainer.append($shadowEl);
                }
                return $shadowEl;
            }
            exports1.default = createShadow;
        },
        {
            "./dom.js": "7pW5q",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "9UFNU": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _createShadowJs = require("../../shared/create-shadow.js");
            var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
            var _effectInitJs = require("../../shared/effect-init.js");
            var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
            var _effectTargetJs = require("../../shared/effect-target.js");
            var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
            function EffectCoverflow({ swiper , extendParams , on  }) {
                extendParams({
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        scale: 1,
                        modifier: 1,
                        slideShadows: true,
                        transformEl: null
                    }
                });
                const setTranslate = ()=>{
                    const { width: swiperWidth , height: swiperHeight , slides , slidesSizesGrid  } = swiper;
                    const params = swiper.params.coverflowEffect;
                    const isHorizontal = swiper.isHorizontal();
                    const transform = swiper.translate;
                    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
                    const rotate = isHorizontal ? params.rotate : -params.rotate;
                    const translate = params.depth; // Each slide offset from center
                    for(let i = 0, length = slides.length; i < length; i += 1){
                        const $slideEl = slides.eq(i);
                        const slideSize = slidesSizesGrid[i];
                        const slideOffset = $slideEl[0].swiperSlideOffset;
                        const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
                        const offsetMultiplier = typeof params.modifier === "function" ? params.modifier(centerOffset) : centerOffset * params.modifier;
                        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0
                        let translateZ = -translate * Math.abs(offsetMultiplier);
                        let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders
                        if (typeof stretch === "string" && stretch.indexOf("%") !== -1) stretch = parseFloat(params.stretch) / 100 * slideSize;
                        let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
                        let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
                        let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values
                        if (Math.abs(translateX) < 0.001) translateX = 0;
                        if (Math.abs(translateY) < 0.001) translateY = 0;
                        if (Math.abs(translateZ) < 0.001) translateZ = 0;
                        if (Math.abs(rotateY) < 0.001) rotateY = 0;
                        if (Math.abs(rotateX) < 0.001) rotateX = 0;
                        if (Math.abs(scale) < 0.001) scale = 0;
                        const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
                        const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
                        $targetEl.transform(slideTransform);
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (params.slideShadows) {
                            // Set shadows
                            let $shadowBeforeEl = isHorizontal ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
                            let $shadowAfterEl = isHorizontal ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
                            if ($shadowBeforeEl.length === 0) $shadowBeforeEl = (0, _createShadowJsDefault.default)(params, $slideEl, isHorizontal ? "left" : "top");
                            if ($shadowAfterEl.length === 0) $shadowAfterEl = (0, _createShadowJsDefault.default)(params, $slideEl, isHorizontal ? "right" : "bottom");
                            if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                        }
                    }
                };
                const setTransition = (duration)=>{
                    const { transformEl  } = swiper.params.coverflowEffect;
                    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                    $transitionElements.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
                };
                (0, _effectInitJsDefault.default)({
                    effect: "coverflow",
                    swiper,
                    on,
                    setTranslate,
                    setTransition,
                    perspective: ()=>true,
                    overwriteParams: ()=>({
                            watchSlidesProgress: true
                        })
                });
            }
            exports1.default = EffectCoverflow;
        },
        {
            "../../shared/create-shadow.js": "9JYAP",
            "../../shared/effect-init.js": "5DnvG",
            "../../shared/effect-target.js": "eKqS8",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "6uSvC": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _createShadowJs = require("../../shared/create-shadow.js");
            var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
            var _effectInitJs = require("../../shared/effect-init.js");
            var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
            var _effectTargetJs = require("../../shared/effect-target.js");
            var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
            var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
            var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
            function EffectCreative({ swiper , extendParams , on  }) {
                extendParams({
                    creativeEffect: {
                        transformEl: null,
                        limitProgress: 1,
                        shadowPerProgress: false,
                        progressMultiplier: 1,
                        perspective: true,
                        prev: {
                            translate: [
                                0,
                                0,
                                0
                            ],
                            rotate: [
                                0,
                                0,
                                0
                            ],
                            opacity: 1,
                            scale: 1
                        },
                        next: {
                            translate: [
                                0,
                                0,
                                0
                            ],
                            rotate: [
                                0,
                                0,
                                0
                            ],
                            opacity: 1,
                            scale: 1
                        }
                    }
                });
                const getTranslateValue = (value)=>{
                    if (typeof value === "string") return value;
                    return `${value}px`;
                };
                const setTranslate = ()=>{
                    const { slides , $wrapperEl , slidesSizesGrid  } = swiper;
                    const params = swiper.params.creativeEffect;
                    const { progressMultiplier: multiplier  } = params;
                    const isCenteredSlides = swiper.params.centeredSlides;
                    if (isCenteredSlides) {
                        const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
                        $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
                    }
                    for(let i = 0; i < slides.length; i += 1){
                        const $slideEl = slides.eq(i);
                        const slideProgress = $slideEl[0].progress;
                        const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
                        let originalProgress = progress;
                        if (!isCenteredSlides) originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
                        const offset = $slideEl[0].swiperSlideOffset;
                        const t = [
                            swiper.params.cssMode ? -offset - swiper.translate : -offset,
                            0,
                            0
                        ];
                        const r = [
                            0,
                            0,
                            0
                        ];
                        let custom = false;
                        if (!swiper.isHorizontal()) {
                            t[1] = t[0];
                            t[0] = 0;
                        }
                        let data = {
                            translate: [
                                0,
                                0,
                                0
                            ],
                            rotate: [
                                0,
                                0,
                                0
                            ],
                            scale: 1,
                            opacity: 1
                        };
                        if (progress < 0) {
                            data = params.next;
                            custom = true;
                        } else if (progress > 0) {
                            data = params.prev;
                            custom = true;
                        } // set translate
                        t.forEach((value, index)=>{
                            t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
                        }); // set rotates
                        r.forEach((value, index)=>{
                            r[index] = data.rotate[index] * Math.abs(progress * multiplier);
                        });
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                        const translateString = t.join(", ");
                        const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
                        const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
                        const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
                        const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows
                        if (custom && data.shadow || !custom) {
                            let $shadowEl = $slideEl.children(".swiper-slide-shadow");
                            if ($shadowEl.length === 0 && data.shadow) $shadowEl = (0, _createShadowJsDefault.default)(params, $slideEl);
                            if ($shadowEl.length) {
                                const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                                $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                            }
                        }
                        const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
                        $targetEl.transform(transform).css({
                            opacity: opacityString
                        });
                        if (data.origin) $targetEl.css("transform-origin", data.origin);
                    }
                };
                const setTransition = (duration)=>{
                    const { transformEl  } = swiper.params.creativeEffect;
                    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                    $transitionElements.transition(duration).find(".swiper-slide-shadow").transition(duration);
                    (0, _effectVirtualTransitionEndJsDefault.default)({
                        swiper,
                        duration,
                        transformEl,
                        allSlides: true
                    });
                };
                (0, _effectInitJsDefault.default)({
                    effect: "creative",
                    swiper,
                    on,
                    setTranslate,
                    setTransition,
                    perspective: ()=>swiper.params.creativeEffect.perspective,
                    overwriteParams: ()=>({
                            watchSlidesProgress: true,
                            virtualTranslate: !swiper.params.cssMode
                        })
                });
            }
            exports1.default = EffectCreative;
        },
        {
            "../../shared/create-shadow.js": "9JYAP",
            "../../shared/effect-init.js": "5DnvG",
            "../../shared/effect-target.js": "eKqS8",
            "../../shared/effect-virtual-transition-end.js": "VhYFx",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "9saRD": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            var _createShadowJs = require("../../shared/create-shadow.js");
            var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
            var _effectInitJs = require("../../shared/effect-init.js");
            var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
            var _effectTargetJs = require("../../shared/effect-target.js");
            var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
            var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
            var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
            function EffectCards({ swiper , extendParams , on  }) {
                extendParams({
                    cardsEffect: {
                        slideShadows: true,
                        transformEl: null,
                        rotate: true,
                        perSlideRotate: 2,
                        perSlideOffset: 8
                    }
                });
                const setTranslate = ()=>{
                    const { slides , activeIndex  } = swiper;
                    const params = swiper.params.cardsEffect;
                    const { startTranslate , isTouched  } = swiper.touchEventsData;
                    const currentTranslate = swiper.translate;
                    for(let i = 0; i < slides.length; i += 1){
                        const $slideEl = slides.eq(i);
                        const slideProgress = $slideEl[0].progress;
                        const progress = Math.min(Math.max(slideProgress, -4), 4);
                        let offset = $slideEl[0].swiperSlideOffset;
                        if (swiper.params.centeredSlides && !swiper.params.cssMode) swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
                        if (swiper.params.centeredSlides && swiper.params.cssMode) offset -= slides[0].swiperSlideOffset;
                        let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                        let tY = 0;
                        const tZ = -100 * Math.abs(progress);
                        let scale = 1;
                        let rotate = -params.perSlideRotate * progress;
                        let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
                        const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
                        const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
                        const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
                        if (isSwipeToNext || isSwipeToPrev) {
                            const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                            rotate += -28 * progress * subProgress;
                            scale += -0.5 * subProgress;
                            tXAdd += 96 * subProgress;
                            tY = `${-25 * subProgress * Math.abs(progress)}%`;
                        }
                        if (progress < 0) tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
                        else if (progress > 0) tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
                        else tX = `${tX}px`;
                        if (!swiper.isHorizontal()) {
                            const prevY = tY;
                            tY = tX;
                            tX = prevY;
                        }
                        const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
                        const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rotate : 0}deg)
        scale(${scaleString})
      `;
                        if (params.slideShadows) {
                            // Set shadows
                            let $shadowEl = $slideEl.find(".swiper-slide-shadow");
                            if ($shadowEl.length === 0) $shadowEl = (0, _createShadowJsDefault.default)(params, $slideEl);
                            if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
                        }
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                        const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
                        $targetEl.transform(transform);
                    }
                };
                const setTransition = (duration)=>{
                    const { transformEl  } = swiper.params.cardsEffect;
                    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                    $transitionElements.transition(duration).find(".swiper-slide-shadow").transition(duration);
                    (0, _effectVirtualTransitionEndJsDefault.default)({
                        swiper,
                        duration,
                        transformEl
                    });
                };
                (0, _effectInitJsDefault.default)({
                    effect: "cards",
                    swiper,
                    on,
                    setTranslate,
                    setTransition,
                    perspective: ()=>true,
                    overwriteParams: ()=>({
                            watchSlidesProgress: true,
                            virtualTranslate: !swiper.params.cssMode
                        })
                });
            }
            exports1.default = EffectCards;
        },
        {
            "../../shared/create-shadow.js": "9JYAP",
            "../../shared/effect-init.js": "5DnvG",
            "../../shared/effect-target.js": "eKqS8",
            "../../shared/effect-virtual-transition-end.js": "VhYFx",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "girFM": [
        function() {},
        {}
    ],
    "eRzTM": [
        function(require, module1, exports1) {
            !function(e, t) {
                module1.exports = t();
            }(this, function() {
                return function(e) {
                    function t(o) {
                        if (n[o]) return n[o].exports;
                        var i = n[o] = {
                            exports: {},
                            id: o,
                            loaded: !1
                        };
                        return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
                    }
                    var n = {};
                    return t.m = e, t.c = n, t.p = "dist/", t(0);
                }([
                    function(e, t, n) {
                        "use strict";
                        function o(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var i = Object.assign || function(e) {
                            for(var t = 1; t < arguments.length; t++){
                                var n = arguments[t];
                                for(var o in n)Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                            }
                            return e;
                        }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), s = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = !1, x = {
                            offset: 120,
                            delay: 0,
                            easing: "ease",
                            duration: 400,
                            disable: !1,
                            once: !1,
                            startEvent: "DOMContentLoaded",
                            throttleDelay: 99,
                            debounceDelay: 50,
                            disableMutationObserver: !1
                        }, j = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
                        }, O = function() {
                            w = (0, h.default)(), j();
                        }, M = function() {
                            w.forEach(function(e, t) {
                                e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
                            });
                        }, S = function(e) {
                            return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0;
                        }, _ = function(e) {
                            x = i(x, e), w = (0, h.default)();
                            var t = document.all && !window.atob;
                            return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && [
                                "complete",
                                "interactive"
                            ].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
                                j(!0);
                            }) : document.addEventListener(x.startEvent, function() {
                                j(!0);
                            }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function() {
                                (0, b.default)(w, x.once);
                            }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
                        };
                        e.exports = {
                            init: _,
                            refresh: j,
                            refreshHard: O
                        };
                    },
                    function(e, t) {},
                    ,
                    ,
                    ,
                    ,
                    function(e, t) {
                        (function(t) {
                            "use strict";
                            function n(e, t, n) {
                                function o(t) {
                                    var n = b, o = v;
                                    return b = v = void 0, k = t, g = e.apply(o, n);
                                }
                                function r(e) {
                                    return k = e, h = setTimeout(f, t), M ? o(e) : g;
                                }
                                function a(e) {
                                    var n = e - w, o = e - k, i = t - n;
                                    return S ? j(i, y - o) : i;
                                }
                                function c(e) {
                                    var n = e - w, o = e - k;
                                    return void 0 === w || n >= t || n < 0 || S && o >= y;
                                }
                                function f() {
                                    var e = O();
                                    return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
                                }
                                function d(e) {
                                    return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
                                }
                                function l() {
                                    void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
                                }
                                function p() {
                                    return void 0 === h ? g : d(O());
                                }
                                function m() {
                                    var e = O(), n = c(e);
                                    if (b = arguments, v = this, w = e, n) {
                                        if (void 0 === h) return r(w);
                                        if (S) return h = setTimeout(f, t), o(w);
                                    }
                                    return void 0 === h && (h = setTimeout(f, t)), g;
                                }
                                var b, v, y, g, h, w, k = 0, M = !1, S = !1, _ = !0;
                                if ("function" != typeof e) throw new TypeError(s);
                                return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                            }
                            function o(e, t, o) {
                                var r = !0, a = !0;
                                if ("function" != typeof e) throw new TypeError(s);
                                return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
                                    leading: r,
                                    maxWait: t,
                                    trailing: a
                                });
                            }
                            function i(e) {
                                var t = "undefined" == typeof e ? "undefined" : c(e);
                                return !!e && ("object" == t || "function" == t);
                            }
                            function r(e) {
                                return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
                            }
                            function a(e) {
                                return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
                            }
                            function u(e) {
                                if ("number" == typeof e) return e;
                                if (a(e)) return f;
                                if (i(e)) {
                                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = i(t) ? t + "" : t;
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = e.replace(l, "");
                                var n = m.test(e);
                                return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
                            }
                            var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e;
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            }, s = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
                                return h.Date.now();
                            };
                            e.exports = o;
                        }).call(t, function() {
                            return this;
                        }());
                    },
                    function(e, t) {
                        (function(t) {
                            "use strict";
                            function n(e, t, n) {
                                function i(t) {
                                    var n = b, o = v;
                                    return b = v = void 0, O = t, g = e.apply(o, n);
                                }
                                function r(e) {
                                    return O = e, h = setTimeout(f, t), M ? i(e) : g;
                                }
                                function u(e) {
                                    var n = e - w, o = e - O, i = t - n;
                                    return S ? x(i, y - o) : i;
                                }
                                function s(e) {
                                    var n = e - w, o = e - O;
                                    return void 0 === w || n >= t || n < 0 || S && o >= y;
                                }
                                function f() {
                                    var e = j();
                                    return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
                                }
                                function d(e) {
                                    return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
                                }
                                function l() {
                                    void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
                                }
                                function p() {
                                    return void 0 === h ? g : d(j());
                                }
                                function m() {
                                    var e = j(), n = s(e);
                                    if (b = arguments, v = this, w = e, n) {
                                        if (void 0 === h) return r(w);
                                        if (S) return h = setTimeout(f, t), i(w);
                                    }
                                    return void 0 === h && (h = setTimeout(f, t)), g;
                                }
                                var b, v, y, g, h, w, O = 0, M = !1, S = !1, _ = !0;
                                if ("function" != typeof e) throw new TypeError(c);
                                return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                            }
                            function o(e) {
                                var t = "undefined" == typeof e ? "undefined" : u(e);
                                return !!e && ("object" == t || "function" == t);
                            }
                            function i(e) {
                                return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
                            }
                            function r(e) {
                                return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f;
                            }
                            function a(e) {
                                if ("number" == typeof e) return e;
                                if (r(e)) return s;
                                if (o(e)) {
                                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = o(t) ? t + "" : t;
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = e.replace(d, "");
                                var n = p.test(e);
                                return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
                            }
                            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e;
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            }, c = "Expected a function", s = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
                                return g.Date.now();
                            };
                            e.exports = n;
                        }).call(t, function() {
                            return this;
                        }());
                    },
                    function(e, t) {
                        "use strict";
                        function n(e) {
                            var t = void 0, o = void 0, i = void 0;
                            for(t = 0; t < e.length; t += 1){
                                if (o = e[t], o.dataset && o.dataset.aos) return !0;
                                if (i = o.children && n(o.children)) return !0;
                            }
                            return !1;
                        }
                        function o() {
                            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        }
                        function i() {
                            return !!o();
                        }
                        function r(e, t) {
                            var n = window.document, i = o(), r = new i(a);
                            u = t, r.observe(n.documentElement, {
                                childList: !0,
                                subtree: !0,
                                removedNodes: !0
                            });
                        }
                        function a(e) {
                            e && e.forEach(function(e) {
                                var t = Array.prototype.slice.call(e.addedNodes), o = Array.prototype.slice.call(e.removedNodes), i = t.concat(o);
                                if (n(i)) return u();
                            });
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var u = function() {};
                        t.default = {
                            isSupported: i,
                            ready: r
                        };
                    },
                    function(e, t) {
                        "use strict";
                        function n(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }
                        function o() {
                            return navigator.userAgent || navigator.vendor || window.opera || "";
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var i = function() {
                            function e(e, t) {
                                for(var n = 0; n < t.length; n++){
                                    var o = t[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                                }
                            }
                            return function(t, n, o) {
                                return n && e(t.prototype, n), o && e(t, o), t;
                            };
                        }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = function() {
                            function e() {
                                n(this, e);
                            }
                            return i(e, [
                                {
                                    key: "phone",
                                    value: function() {
                                        var e = o();
                                        return !(!r.test(e) && !a.test(e.substr(0, 4)));
                                    }
                                },
                                {
                                    key: "mobile",
                                    value: function() {
                                        var e = o();
                                        return !(!u.test(e) && !c.test(e.substr(0, 4)));
                                    }
                                },
                                {
                                    key: "tablet",
                                    value: function() {
                                        return this.mobile() && !this.phone();
                                    }
                                }
                            ]), e;
                        }();
                        t.default = new s;
                    },
                    function(e, t) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n = function(e, t, n) {
                            var o = e.node.getAttribute("data-aos-once");
                            t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate");
                        }, o = function(e, t) {
                            var o = window.pageYOffset, i = window.innerHeight;
                            e.forEach(function(e, r) {
                                n(e, i + o, t);
                            });
                        };
                        t.default = o;
                    },
                    function(e, t, n) {
                        "use strict";
                        function o(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var i = n(12), r = o(i), a = function(e, t) {
                            return e.forEach(function(e, n) {
                                e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset);
                            }), e;
                        };
                        t.default = a;
                    },
                    function(e, t, n) {
                        "use strict";
                        function o(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var i = n(13), r = o(i), a = function(e, t) {
                            var n = 0, o = 0, i = window.innerHeight, a = {
                                offset: e.getAttribute("data-aos-offset"),
                                anchor: e.getAttribute("data-aos-anchor"),
                                anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                            };
                            switch(a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement){
                                case "top-bottom":
                                    break;
                                case "center-bottom":
                                    n += e.offsetHeight / 2;
                                    break;
                                case "bottom-bottom":
                                    n += e.offsetHeight;
                                    break;
                                case "top-center":
                                    n += i / 2;
                                    break;
                                case "bottom-center":
                                    n += i / 2 + e.offsetHeight;
                                    break;
                                case "center-center":
                                    n += i / 2 + e.offsetHeight / 2;
                                    break;
                                case "top-top":
                                    n += i;
                                    break;
                                case "bottom-top":
                                    n += e.offsetHeight + i;
                                    break;
                                case "center-top":
                                    n += e.offsetHeight / 2 + i;
                            }
                            return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
                        };
                        t.default = a;
                    },
                    function(e, t) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n = function(e) {
                            for(var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);)t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                            return {
                                top: n,
                                left: t
                            };
                        };
                        t.default = n;
                    },
                    function(e, t) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n = function(e) {
                            return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) {
                                return {
                                    node: e
                                };
                            });
                        };
                        t.default = n;
                    }
                ]);
            });
        },
        {}
    ],
    "iYkXi": [
        function() {},
        {}
    ]
}, [
    "jQVXF",
    "1SICI"
], "1SICI", "parcelRequireac79");

//# sourceMappingURL=index.1bad6d69.js.map
