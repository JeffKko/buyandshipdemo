/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"privacy": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/buyandshipdemo";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/assets/js/pages/privacy.js","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=kiz9fn8zow7!./src/layouts/DefaultHeaderSticky.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-webpack-plugin/loader.js?id=kiz9fn8zow7!./src/layouts/DefaultHeaderSticky.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components_Button_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Button.vue */ "./src/components/Button.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    BsButton: _components_Button_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  },
  data: function data() {
    return {
      isHeaderSticked: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    window.addEventListener('scroll', function () {
      window.requestAnimationFrame(function (_) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop === 0) {
          _this.isHeaderSticked = false;
          return false;
        }

        if (scrollTop > 300) {
          _this.isHeaderSticked = true;
        }
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=kiz9fn8zow7!./src/layouts/DefaultHeaderSticky.vue?vue&type=template&id=07a96570&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-webpack-plugin/loader.js?id=kiz9fn8zow7!./src/layouts/DefaultHeaderSticky.vue?vue&type=template&id=07a96570& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "header-slide" } }, [
    _c(
      "header",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isHeaderSticked,
            expression: "isHeaderSticked"
          }
        ],
        staticClass: "bs-header bs-header--sticky"
      },
      [
        _c("div", { staticClass: "header-l" }, [
          _c("a", { staticClass: "header-logo", attrs: { href: "/" } }, [
            _c("img", {
              staticClass: "header-logo-image",
              attrs: {
                alt: "logo",
                src: __webpack_require__(/*! @/static/img/company_logo_light.png */ "./src/static/img/company_logo_light.png"),
                srcset:
                  __webpack_require__(/*! @/static/img/company_logo_light.png */ "./src/static/img/company_logo_light.png") +
                  " 1x, " +
                  __webpack_require__(/*! @/static/img/company_logo_light@2x.png */ "./src/static/img/company_logo_light@2x.png") +
                  " 2x, " +
                  __webpack_require__(/*! @/static/img/company_logo_light@3x.png */ "./src/static/img/company_logo_light@3x.png") +
                  " 3x"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "bs-container" }, [_vm._t("default")], 2)
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "header-r" },
          [
            _c(
              "a",
              {
                staticClass: "header-member",
                attrs: { href: "https://www.buyandship.com.tw/login/" }
              },
              [
                _c("i", {
                  staticClass: "header-member-icon bs-icon-user-black"
                }),
                _vm._v(" "),
                _c("div", { staticClass: "text-subtitle-sm" }, [_vm._v("登入")])
              ]
            ),
            _vm._v(" "),
            _c(
              "bs-button",
              {
                attrs: { type: "primary", solid: "" },
                on: { click: _vm.signup }
              },
              [_vm._v("註冊")]
            )
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/js/pages/privacy.js":
/*!****************************************!*\
  !*** ./src/assets/js/pages/privacy.js ***!
  \****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! smooth-scroll */ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(smooth_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_js_main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/js/main.js */ "./src/assets/js/main.js");
/* harmony import */ var _layouts_DefaultHeaderSticky_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/layouts/DefaultHeaderSticky.vue */ "./src/layouts/DefaultHeaderSticky.vue");
/* harmony import */ var _assets_js_utils_hybridPage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/js/utils/hybridPage.js */ "./src/assets/js/utils/hybridPage.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_style_pages_terms_privacy_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/style/pages/terms-privacy.less */ "./src/assets/style/pages/terms-privacy.less");
/* harmony import */ var _assets_style_pages_terms_privacy_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_style_pages_terms_privacy_less__WEBPACK_IMPORTED_MODULE_8__);









Object(_assets_js_utils_hybridPage_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])();
new _assets_js_main_js__WEBPACK_IMPORTED_MODULE_4__[/* Page */ "a"]({
  el: '#app',
  components: {
    DefaultHeaderSticky: _layouts_DefaultHeaderSticky_vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
  },
  data: function data() {
    return {
      isShowGraphic: false,
      currentTitle: ''
    };
  },
  mounted: function mounted() {
    this.initObserver();
  },
  methods: {
    scrollToTitle: function scrollToTitle() {
      var scroll = new smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default.a();
      scroll.animateScroll(document.querySelector(".js-content-anchor[data-title=\"".concat(this.currentTitle, "\"]")), null, {
        offset: 90
      });
    },
    initObserver: function initObserver() {
      var _this = this;

      var callback = function callback(entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            _this.currentTitle = entry.target.dataset.title;
          }
        });
      };

      var observer = new IntersectionObserver(callback);
      var target = document.querySelectorAll('.js-content-anchor');

      _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default()(target).forEach(function (v) {
        return observer.observe(v);
      });
    }
  }
});

/***/ }),

/***/ "./src/assets/style/pages/terms-privacy.less":
/*!***************************************************!*\
  !*** ./src/assets/style/pages/terms-privacy.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/layouts/DefaultHeaderSticky.vue":
/*!*********************************************!*\
  !*** ./src/layouts/DefaultHeaderSticky.vue ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _DefaultHeaderSticky_vue_vue_type_template_id_07a96570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultHeaderSticky.vue?vue&type=template&id=07a96570& */ "./src/layouts/DefaultHeaderSticky.vue?vue&type=template&id=07a96570&");
/* harmony import */ var _DefaultHeaderSticky_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultHeaderSticky.vue?vue&type=script&lang=js& */ "./src/layouts/DefaultHeaderSticky.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _DefaultHeaderSticky_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _DefaultHeaderSticky_vue_vue_type_template_id_07a96570___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _DefaultHeaderSticky_vue_vue_type_template_id_07a96570___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/layouts/DefaultHeaderSticky.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./src/layouts/DefaultHeaderSticky.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/layouts/DefaultHeaderSticky.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_kiz9fn8zow7_DefaultHeaderSticky_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!../../node_modules/string-replace-webpack-plugin/loader.js?id=kiz9fn8zow7!./DefaultHeaderSticky.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=kiz9fn8zow7!./src/layouts/DefaultHeaderSticky.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_kiz9fn8zow7_DefaultHeaderSticky_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/layouts/DefaultHeaderSticky.vue?vue&type=template&id=07a96570&":
/*!****************************************************************************!*\
  !*** ./src/layouts/DefaultHeaderSticky.vue?vue&type=template&id=07a96570& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_kiz9fn8zow7_DefaultHeaderSticky_vue_vue_type_template_id_07a96570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!../../node_modules/string-replace-webpack-plugin/loader.js?id=kiz9fn8zow7!./DefaultHeaderSticky.vue?vue&type=template&id=07a96570& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=kiz9fn8zow7!./src/layouts/DefaultHeaderSticky.vue?vue&type=template&id=07a96570&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_kiz9fn8zow7_DefaultHeaderSticky_vue_vue_type_template_id_07a96570___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_kiz9fn8zow7_DefaultHeaderSticky_vue_vue_type_template_id_07a96570___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "./src/static/img/company_logo_light.png":
/*!***********************************************!*\
  !*** ./src/static/img/company_logo_light.png ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/buyandshipdemo/assets/img/company_logo_light.png";

/***/ }),

/***/ "./src/static/img/company_logo_light@2x.png":
/*!**************************************************!*\
  !*** ./src/static/img/company_logo_light@2x.png ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/buyandshipdemo/assets/img/company_logo_light@2x.png";

/***/ }),

/***/ "./src/static/img/company_logo_light@3x.png":
/*!**************************************************!*\
  !*** ./src/static/img/company_logo_light@3x.png ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/buyandshipdemo/assets/img/company_logo_light@3x.png";

/***/ })

/******/ });