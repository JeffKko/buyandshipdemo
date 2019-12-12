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
/******/ 		"pricing": 0
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
/******/ 	__webpack_require__.p = "";
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
/******/ 	deferredModules.push(["./src/assets/js/pages/pricing.js","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./node_modules/vue-loader/lib/index.js?!./src/components/Slideshow.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Slideshow.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! smooth-scroll */ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(smooth_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_4__);



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
  props: {
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    perPage: {
      type: Number,
      default: function _default() {
        return 4;
      }
    }
  },
  components: {},
  data: function data() {
    return {
      isShow: {
        arrowLeft: false,
        arrowRight: true
      },
      index: 0,
      position: 0,
      totalNum: 0,
      perWidthStyle: null
    };
  },
  computed: {
    scrollStyle: function scrollStyle() {
      return {
        transform: "translateX(-".concat(this.position, "%)")
      };
    } // perWidthStyle() {
    //   let width = this.$el ? this.$el.offsetWidth : 0
    //   return {
    //     width: `${width / this.perPage}px`
    //   }
    // }

  },
  watch: {
    index: function index(val) {
      // slide as page
      // this.position = val * (1 / this.perPage * 100)
      this.position = val * (1 / this.totalNum * 100);
    }
  },
  mounted: function mounted() {
    this.initArrow();
    this.totalNum = this.list.length;

    if (window.matchMedia('(min-width: 768px)').matches) {
      this.calculatePerWidth();
      window.addEventListener('resize', this.calculatePerWidth, true);
    }
  },
  methods: {
    initArrow: function initArrow() {
      var _this = this;

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var tabHook = entry.target === _this.$refs['scroll'].firstChild ? 'arrowLeft' : 'arrowRight';
          var isTabVisble = entry.intersectionRatio > 0.25;
          _this.isShow[tabHook] = !isTabVisble;
        });
      }, {
        threshold: [0, 0.25, 0.5, 0.75, 1]
      });
      observer.observe(this.$refs['scroll'].firstChild);
      observer.observe(this.$refs['scroll'].lastChild);
    },
    scrollTo: function scrollTo(position) {
      if (position === 'left') {
        if (this.index <= 0) return false;
        this.index -= 1;
      }

      if (position === 'right') {
        if (this.index >= this.totalNum - this.perPage) return false;
        this.index += 1;
      }
    },
    calculatePerWidth: function calculatePerWidth() {
      console.log(this.$el.offsetWidth);
      console.log(this.perPage);
      this.perWidthStyle = {
        width: "".concat((this.$el.offsetWidth - 24 * this.perPage) / this.perPage, "px")
      };
    },
    clickCard: function clickCard(image) {
      this.$emit('on-click-card', image);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./node_modules/vue-loader/lib/index.js?!./src/components/Tab.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tab.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    isUnderline: {
      type: Boolean,
      default: false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./node_modules/vue-loader/lib/index.js?!./src/components/Tabs.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tabs.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Tab_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Tab.vue */ "./src/components/Tab.vue");
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
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    BsTab: _components_Tab_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  },
  data: function data() {
    return {
      isShow: {
        arrowLeft: false,
        arrowRight: false
      }
    };
  },
  created: function created() {
    smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1___default.a.polyfill();
  },
  mounted: function mounted() {
    this.controllArrowShowOrHide();
    this.$refs.tabScroll.addEventListener('scroll', lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.controllArrowShowOrHide, 100));
  },
  beforeDestroy: function beforeDestroy() {
    this.$refs.tabScroll.removeEventListener('scroll', lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.controllArrowShowOrHide, 100));
  },
  methods: {
    controllArrowShowOrHide: function controllArrowShowOrHide() {
      var scrollElement = this.$refs.tabScroll;

      if (scrollElement.scrollLeft !== 0) {
        this.isShow.arrowLeft = true;
      } else {
        this.isShow.arrowLeft = false;
      }

      if (scrollElement.scrollLeft + scrollElement.offsetWidth !== scrollElement.scrollWidth) {
        this.isShow.arrowRight = true;
      } else {
        this.isShow.arrowRight = false;
      }
    },
    tabScrollTo: function tabScrollTo(position) {
      var $target;
      if (position === 'left') $target = 0;
      if (position === 'right') $target = this.$refs.tabScroll.scrollWidth;
      this.$refs.tabScroll.scrollTo({
        left: $target,
        behavior: 'smooth'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/bp-vuejs-dropdown/Dropdown.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/bp-vuejs-dropdown/Dropdown.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__);






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
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bp-vuejs-dropdown',
  props: {
    role: {
      type: String,
      required: false,
      default: ''
    },
    unscroll: {
      type: [HTMLElement, String],
      required: false,
      default: null
    },
    align: {
      type: String,
      required: false,
      default: 'bottom'
    },
    x: {
      type: Number,
      required: false,
      default: 0
    },
    y: {
      type: Number,
      required: false,
      default: 0
    },
    beforeOpen: {
      type: Function,
      required: false,
      default: function _default(resolve) {
        return resolve();
      }
    },
    trigger: {
      type: String,
      required: false,
      default: 'click'
    },
    closeOnClick: {
      type: Boolean,
      required: false,
      default: false
    },
    isIcon: {
      type: Boolean,
      required: false,
      default: true
    },
    className: {
      type: String,
      required: false,
      default: ''
    }
  },
  data: function data() {
    return {
      isHidden: true,
      isLoading: false,
      id: null,
      timeout: null,
      top: undefined,
      right: undefined,
      bottom: undefined,
      left: undefined,
      width: undefined
    };
  },
  watch: {
    isHidden: function isHidden(_isHidden) {
      if (this.unscroll) {
        var el = this.unscroll instanceof HTMLElement ? this.unscroll : document.querySelector(this.unscroll);

        if (el) {
          el.style.overflow = !_isHidden ? 'hidden' : '';
        }
      }
    }
  },
  created: function created() {
    var _this = this;

    var $root = this.$root; // --- hide dropdown if other dropdowns show
    // --- or document clicked

    $root.$on('bp-dropdown:open', function () {
      return _this.isHidden = true;
    });
    $root.$on('bp-dropdown:hide', function () {
      return _this.isHidden = true;
    }); // --- hide dropdown on document click event

    if (this.trigger === 'click' && !$root['is-bp-dropdown']) {
      _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()($root, 'is-bp-dropdown', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: true
      });

      document.onmousedown = function (e) {
        var target = e.target;
        var dropdown = target.closest('.bp-dropdown__btn') || target.closest('.bp-dropdown__body');

        if (!dropdown) {
          $root.$emit('bp-dropdown:hide');
        }
      };
    }

    this.id = 'bp-dropdown-' + this.generateRandomId();
  },
  methods: {
    // --- generate random id for query selector
    generateRandomId: function generateRandomId() {
      return Math.random().toString(36).substr(2, 10);
    },
    _onToggle: function _onToggle(e) {
      if (this.trigger !== 'click') {
        return;
      }

      this.checkCustomCallback(e);
    },
    _onBtnEnter: function _onBtnEnter(e) {
      if (this.trigger !== 'hover' || !this.isHidden) {
        return;
      }

      this.checkCustomCallback(e);
    },
    _onBtnLeave: function _onBtnLeave(e) {
      var _this2 = this;

      if (this.trigger !== 'hover') {
        return;
      }

      if (this.role) {
        this.timeout = setTimeout(function () {
          return _this2.isHidden = true;
        }, 100);
      }

      var to = e.toElement;

      if (!to) {
        return;
      }

      var isDropdown = to.closest('.bp-dropdown__btn') || to.closest('.bp-dropdown__body');

      if (isDropdown) {
        return;
      }

      this.prepare();
    },
    _onBodyClick: function _onBodyClick() {
      if (this.closeOnClick) {
        this.isHidden = true;
      }
    },
    _onBodyEnter: function _onBodyEnter() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    },
    _onBodyLeave: function _onBodyLeave(e) {
      if (this.trigger !== 'hover') {
        return;
      }

      var to = e.toElement;

      if (!to) {
        return;
      }

      if (to.closest('.bp-dropdown__btn') || to.closest('.bp-dropdown__sub')) {
        return;
      }

      this.prepare();
    },
    checkCustomCallback: function checkCustomCallback(e) {
      var _this3 = this;

      if (!this.isHidden) {
        this.prepare();
        return;
      } // --- custom callback before open


      var promise = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve) {
        _this3.isLoading = true;

        _this3.beforeOpen.call(_this3, resolve);
      });
      promise.then(function () {
        _this3.isLoading = false;

        if (!e.target.closest('.bp-dropdown__body')) {
          // --- hide dropdown if other dropdowns show
          _this3.$root.$emit('bp-dropdown:open');
        }

        setTimeout(_this3.prepare, 0);
      });
      promise.catch(function () {
        throw Error('bp-dropdown promise error');
      });
    },
    prepare: function prepare() {
      var _this4 = this;

      this.isHidden = !this.isHidden;

      if (!this.isHidden) {
        this.$nextTick(function () {
          var button = _this4.$el.firstElementChild;
          var container = document.getElementById(_this4.id);

          _this4.setWidth(button.offsetWidth);

          _this4.setPosition(button, container);
        });
      }
    },
    setWidth: function setWidth(width) {
      this.width = width;
    },
    setPosition: function setPosition(btn, body) {
      if (!btn || !body) {
        return;
      }

      var coords = this.getCoords(btn); // --- current position

      var currentTop = coords.top;
      var currentLeft = coords.left; // --- btn size

      var btnWidth = btn.offsetWidth;
      var btnHeight = btn.offsetHeight; // --- body size

      var bodyWidth = body.offsetWidth;
      var bodyHeight = body.offsetHeight;

      switch (this.align) {
        case 'top':
          this.top = currentTop + pageYOffset - bodyHeight;
          this.left = currentLeft + pageXOffset;
          break;

        case 'right':
          this.top = currentTop + pageYOffset;
          this.left = currentLeft + pageXOffset + btnWidth;
          break;

        case 'bottom':
          this.top = currentTop + pageYOffset + btnHeight;
          this.left = currentLeft + pageXOffset;
          break;

        case 'left':
          this.top = currentTop + pageYOffset;
          this.left = currentLeft + pageXOffset - bodyWidth;
          break;

        default:
          this.top = currentTop + pageYOffset + btnHeight;
          this.left = currentLeft + pageXOffset;
          break;
      }

      this.top += this.y;
      this.left += this.x;
    },
    getCoords: function getCoords(el) {
      el = el.getBoundingClientRect();
      return {
        top: el.top - pageYOffset,
        left: el.left - pageXOffset
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/bp-vuejs-dropdown/Dropdown.vue":
/*!*****************************************************!*\
  !*** ./node_modules/bp-vuejs-dropdown/Dropdown.vue ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Dropdown_vue_vue_type_template_id_42ca018e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=template&id=42ca018e& */ "./node_modules/bp-vuejs-dropdown/Dropdown.vue?vue&type=template&id=42ca018e&");
/* harmony import */ var _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=script&lang=js& */ "./node_modules/bp-vuejs-dropdown/Dropdown.vue?vue&type=script&lang=js&");
/* harmony import */ var _Dropdown_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=style&index=0&lang=css& */ "./node_modules/bp-vuejs-dropdown/Dropdown.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _Dropdown_vue_vue_type_template_id_42ca018e___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Dropdown_vue_vue_type_template_id_42ca018e___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/bp-vuejs-dropdown/Dropdown.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/bp-vuejs-dropdown/Dropdown.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./node_modules/bp-vuejs-dropdown/Dropdown.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_loader_lib_index_js_ref_1_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../babel-loader/lib??ref--1!../vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/bp-vuejs-dropdown/Dropdown.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_babel_loader_lib_index_js_ref_1_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./node_modules/bp-vuejs-dropdown/Dropdown.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./node_modules/bp-vuejs-dropdown/Dropdown.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_0_0_css_loader_dist_cjs_js_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_less_loader_dist_cjs_js_ref_0_3_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../mini-css-extract-plugin/dist/loader.js??ref--0-0!../css-loader/dist/cjs.js!../vue-loader/lib/loaders/stylePostLoader.js!../postcss-loader/src!../less-loader/dist/cjs.js??ref--0-3!../vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/bp-vuejs-dropdown/Dropdown.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_0_0_css_loader_dist_cjs_js_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_less_loader_dist_cjs_js_ref_0_3_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_0_0_css_loader_dist_cjs_js_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_less_loader_dist_cjs_js_ref_0_3_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_0_0_css_loader_dist_cjs_js_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_less_loader_dist_cjs_js_ref_0_3_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/bp-vuejs-dropdown/Dropdown.vue?vue&type=template&id=42ca018e&":
/*!************************************************************************************!*\
  !*** ./node_modules/bp-vuejs-dropdown/Dropdown.vue?vue&type=template&id=42ca018e& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_42ca018e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=template&id=42ca018e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/bp-vuejs-dropdown/Dropdown.vue?vue&type=template&id=42ca018e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_42ca018e___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_42ca018e___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var SLOPPY_METHOD = sloppyArrayMethod('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var flags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/bp-vuejs-dropdown/Dropdown.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--0-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--0-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/bp-vuejs-dropdown/Dropdown.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./src/components/Slideshow.vue?vue&type=style&index=0&lang=less&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--0-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--0-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./src/components/Slideshow.vue?vue&type=style&index=0&lang=less& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./src/components/Tabs.vue?vue&type=style&index=0&lang=less&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--0-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--0-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./src/components/Tabs.vue?vue&type=style&index=0&lang=less& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/bp-vuejs-dropdown/Dropdown.vue?vue&type=template&id=42ca018e&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/bp-vuejs-dropdown/Dropdown.vue?vue&type=template&id=42ca018e& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _obj, _obj$1, _obj$2
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "bp-dropdown",
      class: { className: _vm.className, "bp-dropdown--sub": _vm.role }
    },
    [
      _c(
        "span",
        {
          class: ((_obj = {}),
          (_obj["bp-dropdown__" + (_vm.role ? "sub" : "btn")] = true),
          (_obj[
            "bp-dropdown__" + (_vm.role ? "sub" : "btn") + "--active"
          ] = !_vm.isHidden),
          (_obj[_vm.className + "-bp__btn"] = _vm.className),
          (_obj[_vm.className + "-bp__btn--active"] = !_vm.isHidden),
          _obj),
          on: {
            click: _vm._onToggle,
            mouseenter: _vm._onBtnEnter,
            mouseleave: _vm._onBtnLeave
          }
        },
        [
          _vm._t("btn"),
          _vm._v(" "),
          _vm.isIcon
            ? _vm._t("icon", [
                _vm.isLoading
                  ? _c(
                      "svg",
                      {
                        staticClass:
                          "bp-dropdown__icon bp-dropdown__icon--spin",
                        attrs: { viewBox: "0 0 512 512" }
                      },
                      [
                        _c("path", {
                          attrs: {
                            fill: "currentColor",
                            d:
                              "M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
                          }
                        })
                      ]
                    )
                  : _c(
                      "svg",
                      {
                        staticClass: "bp-dropdown__icon",
                        class: ((_obj$1 = {}),
                        (_obj$1["bp-dropdown__icon--" + _vm.align] = _vm.align),
                        _obj$1),
                        attrs: { viewBox: "0 0 256 512" }
                      },
                      [
                        _c("path", {
                          attrs: {
                            fill: "currentColor",
                            d:
                              "M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"
                          }
                        })
                      ]
                    )
              ])
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        !_vm.isHidden
          ? _c(
              "div",
              {
                staticClass: "bp-dropdown__body",
                class: ((_obj$2 = {}),
                (_obj$2[_vm.className + "-bp__body"] = _vm.className),
                _obj$2),
                style: {
                  minWidth: _vm.width + "px",
                  top: _vm.top + "px",
                  left: _vm.left + "px"
                },
                attrs: { id: _vm.id },
                on: {
                  click: _vm._onBodyClick,
                  mouseenter: _vm._onBodyEnter,
                  mouseleave: _vm._onBodyLeave
                }
              },
              [_vm._t("body")],
              2
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./src/components/Slideshow.vue?vue&type=template&id=2154092e&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./src/components/Slideshow.vue?vue&type=template&id=2154092e& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "bs-slideshow" },
    [
      _c("transition", { attrs: { name: "opacity" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isShow.arrowLeft,
                expression: "isShow.arrowLeft"
              }
            ],
            staticClass: "bs-slideshow-arrow-left",
            on: {
              click: function($event) {
                return _vm.scrollTo("left")
              }
            }
          },
          [
            _c("i", { staticClass: "bs-icon" }, [
              _c("span", { staticClass: "icon-slideshow-arrow-left" })
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bs-slideshow-container" }, [
        _c("div", { staticClass: "bs-slideshow-scroll-warp" }, [
          _c(
            "div",
            { staticClass: "bs-slideshow-scroll", style: _vm.scrollStyle },
            [
              _c(
                "div",
                { ref: "scroll", staticClass: "bs-slideshow-scroll-inner" },
                _vm._l(_vm.list, function(item, i) {
                  return _c(
                    "div",
                    {
                      key: "slideshow_" + _vm._uid + "_" + i,
                      staticClass: "bs-slideshow-item",
                      style: _vm.perWidthStyle,
                      on: {
                        click: function($event) {
                          return _vm.clickCard(item.image)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "bs-slideshow-item-media" }, [
                        _c("img", { attrs: { src: item.image, alt: "item" } })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "bs-slideshow-item-info text-subtitle-sm"
                        },
                        [_vm._v(_vm._s(item.desc))]
                      )
                    ]
                  )
                }),
                0
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "opacity" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isShow.arrowRight,
                expression: "isShow.arrowRight"
              }
            ],
            staticClass: "bs-slideshow-arrow-right",
            on: {
              click: function($event) {
                return _vm.scrollTo("right")
              }
            }
          },
          [
            _c("i", { staticClass: "bs-icon" }, [
              _c("span", { staticClass: "icon-slideshow-arrow-right" })
            ])
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./src/components/Tab.vue?vue&type=template&id=bc09d9d6&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./src/components/Tab.vue?vue&type=template&id=bc09d9d6& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "bs-tab",
      on: {
        click: function($event) {
          return _vm.$emit("click")
        }
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "bs-tab-inner",
          class: { "bs-tab-inner--underline": _vm.isUnderline }
        },
        [_vm._t("default")],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./src/components/Tabs.vue?vue&type=template&id=bdda1ea4&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./src/components/Tabs.vue?vue&type=template&id=bdda1ea4& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "bs-tabs" },
    [
      _c("transition", { attrs: { name: "opacity" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isShow.arrowLeft,
                expression: "isShow.arrowLeft"
              }
            ],
            staticClass: "bs-tabs-arrow-left",
            on: {
              click: function($event) {
                return _vm.tabScrollTo("left")
              }
            }
          },
          [
            _c("i", { staticClass: "bs-icon" }, [
              _c("span", { staticClass: "icon-tabs-arrow-left" })
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "bs-tabs-scroll-wrap",
          class: { "bs-tabs-scroll-wrap--hasFix": _vm.$slots.fix }
        },
        [
          _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isShow.arrowLeft,
                expression: "isShow.arrowLeft"
              }
            ],
            staticClass: "bs-tabs-scroll-mask-left"
          }),
          _vm._v(" "),
          _c(
            "div",
            { ref: "tabScroll", staticClass: "bs-tabs-scroll" },
            [_vm._t("default")],
            2
          ),
          _vm._v(" "),
          _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isShow.arrowRight,
                expression: "isShow.arrowRight"
              }
            ],
            staticClass: "bs-tabs-scroll-mask-right"
          })
        ]
      ),
      _vm._v(" "),
      _vm._t("fix"),
      _vm._v(" "),
      _c("transition", { attrs: { name: "opacity" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isShow.arrowRight,
                expression: "isShow.arrowRight"
              }
            ],
            staticClass: "bs-tabs-arrow-right",
            on: {
              click: function($event) {
                return _vm.tabScrollTo("right")
              }
            }
          },
          [
            _c("i", { staticClass: "bs-icon" }, [
              _c("span", { staticClass: "icon-tabs-arrow-right" })
            ])
          ]
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/assets/js/directives/blinkNumber.js":
/*!*************************************************!*\
  !*** ./src/assets/js/directives/blinkNumber.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__);




function cancelAllAnimationFrames() {
  var id = window.requestAnimationFrame(function () {});

  while (id--) {
    window.cancelAnimationFrame(id);
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  bind: function bind(el, binding) {
    el.innerText = binding.value;
  },
  update: function update(el, binding, vnode, oldVnode) {
    var newVal = +binding.value;
    var oldVal = +el.innerText.split(',').join('');
    var range = Math.abs(newVal - oldVal);
    var argNum = Math.round(range / 10);
    var isBigger = newVal > oldVal;
    cancelAllAnimationFrames();
    window.requestAnimationFrame(_blink.bind(this, newVal, oldVal || 0));

    function _blink(newVal, oldVal) {
      var nextNum;

      if (isBigger) {
        nextNum = oldVal + argNum;

        if (nextNum >= newVal) {
          nextNum = newVal;
        }
      } else {
        nextNum = oldVal - argNum;

        if (nextNum <= newVal) {
          nextNum = newVal;
        }
      }

      el.innerText = nextNum.toLocaleString();

      if (newVal !== nextNum) {
        window.requestAnimationFrame(_blink.bind(this, newVal, nextNum));
      }
    }
  }
});

/***/ }),

/***/ "./src/assets/js/pages/pricing.js":
/*!****************************************!*\
  !*** ./src/assets/js/pages/pricing.js ***!
  \****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bp_vuejs_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bp-vuejs-dropdown */ "./node_modules/bp-vuejs-dropdown/Dropdown.vue");
/* harmony import */ var _assets_js_main_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/js/main.js */ "./src/assets/js/main.js");
/* harmony import */ var _components_Tabs_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Tabs.vue */ "./src/components/Tabs.vue");
/* harmony import */ var _components_Tab_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Tab.vue */ "./src/components/Tab.vue");
/* harmony import */ var _components_Slideshow_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Slideshow.vue */ "./src/components/Slideshow.vue");
/* harmony import */ var _assets_js_directives_blinkNumber_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/assets/js/directives/blinkNumber.js */ "./src/assets/js/directives/blinkNumber.js");
/* harmony import */ var _assets_js_utils_hybridPage_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/assets/js/utils/hybridPage.js */ "./src/assets/js/utils/hybridPage.js");
/* harmony import */ var _assets_js_utils_checkApp_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/assets/js/utils/checkApp.js */ "./src/assets/js/utils/checkApp.js");
/* harmony import */ var _assets_style_pages_pricing_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/assets/style/pages/pricing.less */ "./src/assets/style/pages/pricing.less");
/* harmony import */ var _assets_style_pages_pricing_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_style_pages_pricing_less__WEBPACK_IMPORTED_MODULE_14__);















var BS = {
  context: {
    rate: {
      'address-type-delivery': {
        'warehouse-4px-uspdx': {
          plans: {
            basic: {
              maxWeightRatio: 1,
              truncateDimensions: true,
              weightRatioApplyFirst: true,
              weightCalculationMargin: 0,
              weightCalculationMarginApplyFirst: true,
              base: ["\u6BCF\u78C5NT$150", [150, 300]]
            }
          }
        },
        'warehouse-qs-osaka': {
          plans: {
            basic: {
              maxWeightRatio: 1,
              truncateDimensions: true,
              weightRatioApplyFirst: true,
              weightCalculationMargin: 0,
              weightCalculationMarginApplyFirst: true,
              base: ["\u6BCF\u78C5NT$120", [120, 240]]
            }
          }
        },
        'warehouse-kas-seoul': {
          plans: {
            basic: {
              maxWeightRatio: 1,
              truncateDimensions: true,
              weightRatioApplyFirst: true,
              weightCalculationMargin: 0,
              weightCalculationMarginApplyFirst: true,
              base: ["\u6BCF\u78C5NT$120", [120, 240]]
            }
          }
        },
        'warehouse-bns-hk': {
          plans: {
            basic: {
              maxWeightRatio: 1,
              truncateDimensions: true,
              weightRatioApplyFirst: true,
              weightCalculationMargin: 0,
              weightCalculationMarginApplyFirst: true,
              base: ["\u6BCF\u78C5NT$100", [100, 200]]
            }
          }
        },
        'warehouse-lht-dongguan': {
          plans: {
            basic: {
              maxWeightRatio: 1,
              truncateDimensions: true,
              weightRatioApplyFirst: true,
              weightCalculationMargin: 0,
              weightCalculationMarginApplyFirst: true,
              base: ["\u6BCF\u78C5NT$100", [100, 200]]
            }
          }
        },
        'warehouse-chukou-portsmouth': {
          plans: {
            basic: {
              maxWeightRatio: 1,
              truncateDimensions: true,
              weightRatioApplyFirst: true,
              weightCalculationMargin: 0,
              weightCalculationMarginApplyFirst: true,
              base: ["\u6BCF\u78C5NT$150", [150, 300]]
            }
          }
        },
        'warehouse-bnsau-sydney': {
          plans: {
            basic: {
              maxWeightRatio: 1,
              truncateDimensions: true,
              weightRatioApplyFirst: true,
              weightCalculationMargin: 0,
              weightCalculationMarginApplyFirst: true,
              base: ["\u6BCF\u78C5NT$120", [120, 240]]
            }
          }
        },
        'warehouse-bnsit-milan': {
          plans: {
            basic: {
              maxWeightRatio: 1,
              truncateDimensions: true,
              weightRatioApplyFirst: true,
              weightCalculationMargin: 0,
              weightCalculationMarginApplyFirst: true,
              base: ["\u6BCF\u78C5NT$150", [150, 300]]
            }
          }
        },
        'warehouse-bnsth-bangkok': {
          plans: {
            basic: {
              maxWeightRatio: 1,
              truncateDimensions: true,
              weightRatioApplyFirst: true,
              weightCalculationMargin: 0,
              weightCalculationMarginApplyFirst: true,
              base: ["\u6BCF\u78C5NT$120", [120, 240]]
            }
          }
        }
      },
      'address-type-self-bnstw-0001': {
        'warehouse-4px-uspdx': {
          plans: {
            basic: {
              maxWeightRatio: 1,
              truncateDimensions: true,
              weightRatioApplyFirst: true,
              weightCalculationMargin: 0,
              weightCalculationMarginApplyFirst: true,
              base: ["\u6BCF\u78C5NT$140", [140, 280]]
            }
          }
        },
        'warehouse-qs-osaka': {
          plans: {
            basic: {
              maxWeightRatio: 1,
              truncateDimensions: true,
              weightRatioApplyFirst: true,
              weightCalculationMargin: 0,
              weightCalculationMarginApplyFirst: true,
              base: ["\u6BCF\u78C5NT$110", [110, 220]]
            }
          }
        },
        'warehouse-kas-seoul': {
          plans: {
            basic: {
              maxWeightRatio: 1,
              truncateDimensions: true,
              weightRatioApplyFirst: true,
              weightCalculationMargin: 0,
              weightCalculationMarginApplyFirst: true,
              base: ["\u6BCF\u78C5NT$110", [110, 220]]
            }
          }
        },
        'warehouse-bns-hk': {
          plans: {
            basic: {
              maxWeightRatio: 1,
              truncateDimensions: true,
              weightRatioApplyFirst: true,
              weightCalculationMargin: 0,
              weightCalculationMarginApplyFirst: true,
              base: ["\u6BCF\u78C5NT$90", [90, 180]]
            }
          }
        },
        'warehouse-lht-dongguan': {
          plans: {
            basic: {
              maxWeightRatio: 1,
              truncateDimensions: true,
              weightRatioApplyFirst: true,
              weightCalculationMargin: 0,
              weightCalculationMarginApplyFirst: true,
              base: ["\u6BCF\u78C5NT$90", [90, 180]]
            }
          }
        },
        'warehouse-chukou-portsmouth': {
          plans: {
            basic: {
              maxWeightRatio: 1,
              truncateDimensions: true,
              weightRatioApplyFirst: true,
              weightCalculationMargin: 0,
              weightCalculationMarginApplyFirst: true,
              base: ["\u6BCF\u78C5NT$140", [140, 280]]
            }
          }
        },
        'warehouse-bnsau-sydney': {
          plans: {
            basic: {
              maxWeightRatio: 1,
              truncateDimensions: true,
              weightRatioApplyFirst: true,
              weightCalculationMargin: 0,
              weightCalculationMarginApplyFirst: true,
              base: ["\u6BCF\u78C5NT$110", [110, 220]]
            }
          }
        },
        'warehouse-bnsit-milan': {
          plans: {
            basic: {
              maxWeightRatio: 1,
              truncateDimensions: true,
              weightRatioApplyFirst: true,
              weightCalculationMargin: 0,
              weightCalculationMarginApplyFirst: true,
              base: ["\u6BCF\u78C5NT$140", [140, 280]]
            }
          }
        },
        'warehouse-bnsth-bangkok': {
          plans: {
            basic: {
              maxWeightRatio: 1,
              truncateDimensions: true,
              weightRatioApplyFirst: true,
              weightCalculationMargin: 0,
              weightCalculationMarginApplyFirst: true,
              base: ["\u6BCF\u78C5NT$110", [110, 220]]
            }
          }
        }
      }
    }
  }
};
Object(_assets_js_utils_hybridPage_js__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])();
new _assets_js_main_js__WEBPACK_IMPORTED_MODULE_7__[/* Page */ "a"]({
  el: '#bsMain',
  directives: {
    blinkNumber: _assets_js_directives_blinkNumber_js__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]
  },
  components: {
    BsTabs: _components_Tabs_vue__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
    BsTab: _components_Tab_vue__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
    BsSlideshow: _components_Slideshow_vue__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],
    BpDropdown: bp_vuejs_dropdown__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]
  },
  data: function data() {
    return {
      isApp: Object(_assets_js_utils_checkApp_js__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(),
      currentTab: 'USA',
      placement: 'header',
      weightKG: 0,
      weightLB: 0,
      delivery: 'address-type-delivery',
      warehouseId: 'us',
      warehouseCode: 'warehouse-4px-uspdx',
      rate: BS.context.rate
    };
  },
  computed: {
    chargeWeight: function chargeWeight() {
      return this.chargeableWeight(this.rate);
    },
    totalFee: function totalFee() {
      var weight = this.chargeWeight;
      var delivery = this.delivery;
      var warehouse = this.warehouseCode;

      if (!weight || !delivery || !warehouse || typeof this.rate[delivery][warehouse] === 'undefined') {
        // return this.option['help'];
        return 0;
      }

      return this.calculateFee(this.rate, weight, delivery, warehouse);
    },
    warehouseFlagClass: function warehouseFlagClass() {
      return "icon-flag-".concat(this.warehouseId);
    },
    warehouseName: function warehouseName() {
      return {
        us: '美國',
        uk: '英國',
        it: '義大利',
        jp: '日本',
        kr: '韓國',
        au: '澳洲',
        th: '泰國',
        hk: '香港',
        cn: '中國'
      }[this.warehouseId];
    },
    deliveryWay: function deliveryWay() {
      return {
        'address-type-delivery': '宅配地址 (住所地址)',
        'address-type-self-bnstw-0001': '提貨點'
      }[this.delivery];
    }
  },
  watch: {},
  mounted: function mounted() {},
  methods: {
    chargeKG: function chargeKG(e, oldVal) {
      var newVal = e.target.value;
      var result = this.getWeightValue(newVal, oldVal);
      this.weightKG = result;
      this.weightLB = Math.round(result * 2.20462262 * 100) / 100;
      this.$forceUpdate();
    },
    chargeLB: function chargeLB(e, oldVal) {
      var newVal = e.target.value;
      var result = this.getWeightValue(newVal, oldVal);
      this.weightLB = result;
      this.weightKG = Math.round(result / 2.20462262 * 100) / 100;
      this.$forceUpdate();
    },
    getWeightValue: function getWeightValue(newVal, oldVal) {
      if (newVal.toString() === '') {
        return 0;
      }

      if (!newVal.toString().match(/^\d+($|\.\d*$)/g)) {
        return oldVal;
      }

      if (newVal.toString()[0] === '0') {
        return newVal.toString().substring(1, newVal.toString().length);
      }

      if (newVal > 99999) {
        return oldVal;
      }

      return newVal;
    },
    selectWarehouse: function selectWarehouse(warehouseId, warehouseCode) {
      this.warehouseId = warehouseId;
      this.warehouseCode = warehouseCode;
      this.$emit('bp-dropdown:hide');
    },
    selectDelivery: function selectDelivery(delivery) {
      this.delivery = delivery;
      this.$emit('bp-dropdown:hide');
    },
    chargeableWeight: function chargeableWeight(rate) {
      var weight = this.weightLB;
      var delivery = this.delivery;
      var warehouse = this.warehouseCode;

      if (isNaN(weight) || weight <= 0 || !delivery || !warehouse) {
        return 0;
      }

      weight = this.getChargeableWeight(rate, delivery, warehouse, weight);
      return isNaN(weight) ? 0 : Math.ceil(weight);
    },
    getChargeableWeight: function getChargeableWeight(rate, delivery, warehouse, weight) {
      // Final adjustment for the margin
      var weightCalculationMargin = 0;

      if (typeof rate[delivery] === 'undefined' && delivery.indexOf('-self-') !== -1) {
        delivery = 'address-type-self';
      }

      if (typeof rate[delivery][warehouse].plans.basic.weightCalculationMargin !== 'undefined') {
        weightCalculationMargin = rate[delivery][warehouse].plans.basic.weightCalculationMargin;
      }

      if (weightCalculationMargin !== 0) {
        if (Math.ceil(weight) !== Math.ceil(weight - weightCalculationMargin) && weight > weightCalculationMargin) {
          weight = Math.ceil(weight - weightCalculationMargin);
        }
      }

      return weight;
    },
    calculateFee: function calculateFee(rate, weight, delivery, warehouse) {
      var getFee = function getFee(table, weight) {
        var decimal = weight - Math.floor(weight);
        var fee = 0;
        var i;
        var j;
        weight = Math.floor(weight);

        for (i = 0; i < weight && i < table.length; i++) {
          fee = table[i];
        }

        for (j = i; j < weight; j++) {
          fee += table[table.length - 1] - table[table.length - 2];
        }

        fee += (table[table.length - 1] - table[table.length - 2]) * decimal;
        return fee;
      };

      if (typeof rate[delivery] === 'undefined' && delivery.indexOf('-self-') !== -1) {
        delivery = 'address-type-self';
      }

      var basicRate = rate[delivery][warehouse].plans.basic.base[1];
      return getFee(basicRate, weight);
    }
  }
}); // (function (G, $, undefined) {
//   'use strict';
//   var BUYANDSHIP = G.BUYANDSHIP || {};
//   BUYANDSHIP.$ = $;
//   G.BUYANDSHIP = BUYANDSHIP;
//   // Util
//   var util = G.BUYANDSHIP.util || {};
//   G.BUYANDSHIP.util = util;
//   util.calculateFee = function (option, weight, delivery, warehouse) {
//     var getFee = function (table, weight) {
//       var decimal = weight - Math.floor(weight);
//       var fee = 0;
//       var i;
//       var j;
//       weight = Math.floor(weight);
//       for (i = 0; i < weight && i < table.length; i++) {
//         fee = table[i];
//       }
//       for (j = i; j < weight; j++) {
//         fee += (table[table.length - 1] - table[table.length - 2]);
//       }
//       fee += (table[table.length - 1] - table[table.length - 2]) * decimal;
//       return fee;
//     };
//     if (typeof option['rate'][delivery] === 'undefined' && delivery.indexOf('-self-') !== -1) {
//       delivery = 'address-type-self';
//     }
//     var basicRate = option['rate'][delivery][warehouse]['plans']['basic']['base'][1];
//     return getFee(basicRate, weight);
//   };
//   util.getChargeableWeight = function (option, delivery, warehouse, weight) {
//     // Final adjustment for the margin
//     var weightCalculationMargin = 0;
//     if (typeof option['rate'][delivery] === 'undefined' && delivery.indexOf('-self-') !== -1) {
//       delivery = 'address-type-self';
//     }
//     if (typeof option['rate'][delivery][warehouse]['plans']['basic']['weightCalculationMargin'] !== 'undefined') {
//       weightCalculationMargin = option['rate'][delivery][warehouse]['plans']['basic']['weightCalculationMargin'];
//     }
//     if (weightCalculationMargin !== 0) {
//       if (Math.ceil(weight) !== Math.ceil(weight - weightCalculationMargin) && weight > weightCalculationMargin) {
//         weight = Math.ceil(weight - weightCalculationMargin);
//       }
//     }
//     return weight;
//   };
//   // Content
//   var content = G.BUYANDSHIP.content || {};
//   G.BUYANDSHIP.content = content;
//   content.feeCalculatorViewModel = function (option) {
//     this.weight = ko.observable(option['weight']);
//     this.delivery = ko.observable(option['delivery']);
//     this.warehouse = ko.observable(option['warehouse']);
//     this.chargeableWeight = ko.computed(function () {
//       var weight = this.weight();
//       var delivery = this.delivery();
//       var warehouse = this.warehouse();
//       if (isNaN(weight) || weight == 0 || !delivery || !warehouse) {
//         return option['help'];
//       }
//       weight = util.getChargeableWeight(option, delivery, warehouse, weight);
//       return Math.ceil(weight);
//     }, this);
//     this.totalFee = ko.computed(function () {
//       var weight = this.chargeableWeight();
//       var delivery = this.delivery();
//       var warehouse = this.warehouse();
//       if (weight === '' || !delivery || !warehouse || typeof option['rate'][delivery][warehouse] === 'undefined') {
//         return option['help'];
//       }
//       return util.calculateFee(option, weight, delivery, warehouse);
//     }, this);
//   };
//   content.addPickUpPointMap = function (pickUpPointConfig) {
//     var initAreaOption = function (pickUpPointData) {
//       var optionsAsString = '<option value="">' + pickUpPointConfig["pickUpPointArea"]["name"] + '</option>';
//       for (var option in pickUpPointData) {
//         optionsAsString += "<option value='" + option + "'>" + option + "</option>";
//       }
//       $(pickUpPointConfig["pickUpPointArea"]["target"]).html(optionsAsString);
//     }
//     var initDistrictOption = function (pickUpPointData, area) {
//       if (area != '') {
//         var optionsAsString = '<option value="">' + pickUpPointConfig["pickUpPointDistrict"]["name"] + '</option>';
//         pickUpPointData[area].forEach(function (obj) {
//           optionsAsString += "<option value='" + Object.keys(obj) + "'>" + Object.keys(obj) + "</option>";
//         });
//         $(pickUpPointConfig["pickUpPointDistrict"]["target"]).html(optionsAsString);
//         initPickUpPointOption(pickUpPointData, "", "");
//       }
//     }
//     var initPickUpPointOption = function (pickUpPointData, selectedArea, selectedDistrict) {
//       var optionsAsString = '<option value="">' + pickUpPointConfig["pickUpPointType"]["name"] + '</option>';
//       var districtObjects = pickUpPointData[selectedArea];
//       if (districtObjects != undefined) {
//         for (var i = 0; i < districtObjects.length; i++) {
//           var districtObject = districtObjects[i];
//           for (var district in districtObject) {
//             if (district == selectedDistrict) {
//               var pickUpPointTypeObjects = districtObject[district];
//               for (var j = 0; j < pickUpPointTypeObjects.length; j++) {
//                 var pickUpPointTypeObject = pickUpPointTypeObjects[j];
//                 for (var pickUpPointType in pickUpPointTypeObject) {
//                   optionsAsString += "<option value='" + pickUpPointType + "'>" + pickUpPointType + "</option>";
//                 }
//               }
//             }
//           }
//         }
//       }
//       $(pickUpPointConfig["pickUpPointType"]["target"]).html(optionsAsString);
//     }
//     var clearAllMarkers = function (markers, maxZoomLevel) {
//       showMarkerOnMap(null, markers, maxZoomLevel, '', '', '');
//     }
//     var showMarkerOnMap = function (map, markers, maxZoomLevel, selectedArea, selectedDistrict, selectedPickUpPointType) {
//       var filtedMarkers = [];
//       for (var area in markers) {
//         if (area == selectedArea || selectedArea == '') {
//           if (typeof (filtedMarkers[area]) == 'undefined') {
//             filtedMarkers[area] = [];
//           }
//           for (var district in markers[area]) {
//             if (district == selectedDistrict || selectedDistrict == '') {
//               if (typeof (filtedMarkers[area][district]) == 'undefined') {
//                 filtedMarkers[area][district] = [];
//               }
//               for (var pickUpPointType in markers[area][district]) {
//                 if (pickUpPointType == selectedPickUpPointType || selectedPickUpPointType == '') {
//                   if (typeof (filtedMarkers[area][district][pickUpPointType]) == 'undefined') {
//                     filtedMarkers[area][district][pickUpPointType] = [];
//                   }
//                   for (var i = 0; i < markers[area][district][pickUpPointType].length; i++) {
//                     markers[area][district][pickUpPointType][i].setMap(map);
//                     if (map != null) {
//                       filtedMarkers[area][district][pickUpPointType].push(markers[area][district][pickUpPointType][i]);
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//       if (map != null)
//         setZoom(map, filtedMarkers, maxZoomLevel);
//     }
//     var setZoom = function (map, markers, maxZoomLevel) {
//       var boundbox = new google.maps.LatLngBounds();
//       for (var area in markers) {
//         for (var district in markers[area]) {
//           for (var pickUpPointType in markers[area][district]) {
//             for (var i = 0; i < markers[area][district][pickUpPointType].length; i++) {
//               boundbox.extend(markers[area][district][pickUpPointType][i].getPosition());
//             }
//           }
//         }
//       }
//       map.setCenter(boundbox.getCenter());
//       map.fitBounds(boundbox);
//       if (map.getZoom() > maxZoomLevel) {
//         map.setZoom(maxZoomLevel);
//       }
//     }
//     var initPickUpPointMap = function (pickUpPointData, googleMapAnchor) {
//       var map = new google.maps.Map(document.getElementById(googleMapAnchor));
//       var infoWindow = new google.maps.InfoWindow;
//       var markers = [];
//       for (var area in pickUpPointData) {
//         var districtObjects = pickUpPointData[area];
//         for (var i = 0; i < districtObjects.length; i++) {
//           var districtObject = districtObjects[i];
//           for (var district in districtObject) {
//             var pickUpPointTypeObjects = districtObject[district];
//             for (var j = 0; j < pickUpPointTypeObjects.length; j++) {
//               var pickUpPointTypeObject = pickUpPointTypeObjects[j];
//               for (var pickUpPointType in pickUpPointTypeObject) {
//                 var pickUpPointLocationObjects = pickUpPointTypeObject[pickUpPointType];
//                 for (var k = 0; k < pickUpPointLocationObjects.length; k++) {
//                   markers = pickUpPointConfig["pickUpPointMarkerCallBack"](map, markers, infoWindow, area, district, pickUpPointType, pickUpPointLocationObjects[k])
//                 }
//               }
//             }
//           }
//         }
//       }
//       setZoom(map, markers);
//       return [map, markers];
//     }
//     var parseTSV = function (tsvData) {
//       var data = [];
//       var pickUpPointRows = tsvData.split('\n');
//       var headers = [];
//       for (var i = 0; i < pickUpPointRows.length; i++) {
//         if (i == 0) {
//           headers = pickUpPointRows[i].split('\t');
//           headers.forEach(function (header, index) {
//             headers[index] = header.replace(/[\n\r]+/g, '');
//           }, headers);
//         } else {
//           var value = pickUpPointRows[i].split('\t');
//           var pickUpPointObj = {};
//           for (var j = 0; j < headers.length; j++) {
//             pickUpPointObj[headers[j]] = value[j];
//           }
//           pickUpPointObj['markerLat'] = parseFloat(pickUpPointObj['markerLat']);
//           pickUpPointObj['markerLng'] = parseFloat(pickUpPointObj['markerLng']);
//           data.push(pickUpPointObj);
//         }
//       }
//       var importedPickUpPoint = {};
//       for (var i = 0; i < data.length; i++) {
//         if (typeof (importedPickUpPoint[data[i].area]) == 'undefined') {
//           importedPickUpPoint[data[i].area] = [];
//         }
//         var districtExist = 0;
//         for (var j = 0; j < importedPickUpPoint[data[i].area].length; j++) {
//           for (var district in importedPickUpPoint[data[i].area][j]) {
//             if (district == data[i].district) {
//               districtExist = 1;
//             }
//           }
//         }
//         if (!districtExist) {
//           var districtObject = {};
//           districtObject[data[i].district] = [];
//           importedPickUpPoint[data[i].area].push(districtObject);
//         }
//         var pickUpPointTypeExist = 0;
//         var pickUpPointDataObject = {
//           "location": data[i].location,
//           "name": data[i].name,
//           "address": data[i].address,
//           "detail": data[i].detail,
//           "paymentMethod": data[i].paymentMethod,
//           "marker": {
//             "position": {
//               "lat": data[i].markerLat,
//               "lng": data[i].markerLng
//             },
//             "title": data[i].markerTitle,
//             "mapTypeId": data[i].markerMapTypeId,
//             "icon": data[i].markerIcon,
//             "url": data[i].markerUrl
//           }
//         };
//         for (var j = 0; j < importedPickUpPoint[data[i].area].length; j++) {
//           for (var district in importedPickUpPoint[data[i].area][j]) {
//             if (district == data[i].district) {
//               for (var k = 0; k < importedPickUpPoint[data[i].area][j][district].length; k++) {
//                 for (var pickUpPointType in importedPickUpPoint[data[i].area][j][district][k]) {
//                   if (pickUpPointType == data[i].pickUpPointType) {
//                     pickUpPointTypeExist = 1;
//                     importedPickUpPoint[data[i].area][j][district][k][data[i].pickUpPointType].push(pickUpPointDataObject);
//                   }
//                 }
//               }
//             }
//           }
//         }
//         if (!pickUpPointTypeExist) {
//           var pickUpPointTypeObject = {};
//           pickUpPointTypeObject[data[i].pickUpPointType] = [];
//           pickUpPointTypeObject[data[i].pickUpPointType].push(pickUpPointDataObject);
//           for (var j = 0; j < importedPickUpPoint[data[i].area].length; j++) {
//             for (var district in importedPickUpPoint[data[i].area][j]) {
//               if (district == data[i].district) {
//                 importedPickUpPoint[data[i].area][j][district].push(pickUpPointTypeObject);
//               }
//             }
//           }
//         }
//       }
//       return importedPickUpPoint;
//     }
//     $.get(pickUpPointConfig["url"], function (tsvData) {
//       var pickUpPointData = parseTSV(tsvData);
//       var area, district, pickUpPointType;
//       var result = initPickUpPointMap(pickUpPointData, pickUpPointConfig["googleMap"]["target"]);
//       var map = result[0];
//       var markers = result[1];
//       initAreaOption(pickUpPointData);
//       $(pickUpPointConfig["pickUpPointArea"]["target"]).change(function () {
//         initDistrictOption(pickUpPointData, this.value);
//         area = this.value;
//         clearAllMarkers(markers, pickUpPointConfig["googleMap"]["maxZoomLevel"]);
//         showMarkerOnMap(map, markers, pickUpPointConfig["googleMap"]["maxZoomLevel"], area, '', '');
//         $(pickUpPointConfig["pickUpPointList"]["target"]).html('');
//       });
//       $(pickUpPointConfig["pickUpPointDistrict"]["target"]).change(function () {
//         initPickUpPointOption(pickUpPointData, area, this.value);
//         district = this.value;
//         clearAllMarkers(markers, pickUpPointConfig["googleMap"]["maxZoomLevel"]);
//         showMarkerOnMap(map, markers, pickUpPointConfig["googleMap"]["maxZoomLevel"], area, district, '');
//         $(pickUpPointConfig["pickUpPointList"]["target"]).html(pickUpPointConfig["pickUpPointCallBack"](pickUpPointData, area, district, ''));
//       });
//       $(pickUpPointConfig["pickUpPointType"]["target"]).change(function () {
//         pickUpPointType = this.value;
//         clearAllMarkers(markers, pickUpPointConfig["googleMap"]["maxZoomLevel"]);
//         showMarkerOnMap(map, markers, pickUpPointConfig["googleMap"]["maxZoomLevel"], area, district, pickUpPointType);
//         $(pickUpPointConfig["pickUpPointList"]["target"]).html(pickUpPointConfig["pickUpPointCallBack"](pickUpPointData, area, district, pickUpPointType));
//       });
//     });
//   }
// }(this, jQuery));
// (function ($) {
//   $(document).ready(function () {
//     ko.applyBindings(new BUYANDSHIP.content.feeCalculatorViewModel(
//       {
//         "weight": null,
//         "height": null,
//         "width": null,
//         "depth": null,
//         "delivery": null,
//         "rate": { "address-type-delivery": { "warehouse-4px-uspdx": { "plans": { "basic": { "maxWeightRatio": 1, "truncateDimensions": true, "weightRatioApplyFirst": true, "weightCalculationMargin": 0, "weightCalculationMarginApplyFirst": true, "base": ["\u6bcf\u78c5NT$150", [150, 300]] } } }, "warehouse-qs-osaka": { "plans": { "basic": { "maxWeightRatio": 1, "truncateDimensions": true, "weightRatioApplyFirst": true, "weightCalculationMargin": 0, "weightCalculationMarginApplyFirst": true, "base": ["\u6bcf\u78c5NT$120", [120, 240]] } } }, "warehouse-kas-seoul": { "plans": { "basic": { "maxWeightRatio": 1, "truncateDimensions": true, "weightRatioApplyFirst": true, "weightCalculationMargin": 0, "weightCalculationMarginApplyFirst": true, "base": ["\u6bcf\u78c5NT$120", [120, 240]] } } }, "warehouse-bns-hk": { "plans": { "basic": { "maxWeightRatio": 1, "truncateDimensions": true, "weightRatioApplyFirst": true, "weightCalculationMargin": 0, "weightCalculationMarginApplyFirst": true, "base": ["\u6bcf\u78c5NT$100", [100, 200]] } } }, "warehouse-lht-dongguan": { "plans": { "basic": { "maxWeightRatio": 1, "truncateDimensions": true, "weightRatioApplyFirst": true, "weightCalculationMargin": 0, "weightCalculationMarginApplyFirst": true, "base": ["\u6bcf\u78c5NT$100", [100, 200]] } } }, "warehouse-chukou-portsmouth": { "plans": { "basic": { "maxWeightRatio": 1, "truncateDimensions": true, "weightRatioApplyFirst": true, "weightCalculationMargin": 0, "weightCalculationMarginApplyFirst": true, "base": ["\u6bcf\u78c5NT$150", [150, 300]] } } }, "warehouse-bnsau-sydney": { "plans": { "basic": { "maxWeightRatio": 1, "truncateDimensions": true, "weightRatioApplyFirst": true, "weightCalculationMargin": 0, "weightCalculationMarginApplyFirst": true, "base": ["\u6bcf\u78c5NT$120", [120, 240]] } } }, "warehouse-bnsit-milan": { "plans": { "basic": { "maxWeightRatio": 1, "truncateDimensions": true, "weightRatioApplyFirst": true, "weightCalculationMargin": 0, "weightCalculationMarginApplyFirst": true, "base": ["\u6bcf\u78c5NT$150", [150, 300]] } } }, "warehouse-bnsth-bangkok": { "plans": { "basic": { "maxWeightRatio": 1, "truncateDimensions": true, "weightRatioApplyFirst": true, "weightCalculationMargin": 0, "weightCalculationMarginApplyFirst": true, "base": ["\u6bcf\u78c5NT$120", [120, 240]] } } } } },
//         "help": '請填寫以下表格'
//       }));
//   });
// })(jQuery);

/***/ }),

/***/ "./src/assets/style/pages/pricing.less":
/*!*********************************************!*\
  !*** ./src/assets/style/pages/pricing.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/components/Slideshow.vue":
/*!**************************************!*\
  !*** ./src/components/Slideshow.vue ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Slideshow_vue_vue_type_template_id_2154092e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slideshow.vue?vue&type=template&id=2154092e& */ "./src/components/Slideshow.vue?vue&type=template&id=2154092e&");
/* harmony import */ var _Slideshow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slideshow.vue?vue&type=script&lang=js& */ "./src/components/Slideshow.vue?vue&type=script&lang=js&");
/* harmony import */ var _Slideshow_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slideshow.vue?vue&type=style&index=0&lang=less& */ "./src/components/Slideshow.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _Slideshow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _Slideshow_vue_vue_type_template_id_2154092e___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Slideshow_vue_vue_type_template_id_2154092e___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Slideshow.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./src/components/Slideshow.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/Slideshow.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_node_modules_vue_loader_lib_index_js_vue_loader_options_Slideshow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!../../node_modules/vue-loader/lib??vue-loader-options!./Slideshow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./node_modules/vue-loader/lib/index.js?!./src/components/Slideshow.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_node_modules_vue_loader_lib_index_js_vue_loader_options_Slideshow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/components/Slideshow.vue?vue&type=style&index=0&lang=less&":
/*!************************************************************************!*\
  !*** ./src/components/Slideshow.vue?vue&type=style&index=0&lang=less& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_ref_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_Slideshow_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--0-0!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src!../../node_modules/less-loader/dist/cjs.js??ref--0-3!../../node_modules/vue-loader/lib??vue-loader-options!../../node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./Slideshow.vue?vue&type=style&index=0&lang=less& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./src/components/Slideshow.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_ref_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_Slideshow_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_ref_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_Slideshow_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_ref_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_Slideshow_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/Slideshow.vue?vue&type=template&id=2154092e&":
/*!*********************************************************************!*\
  !*** ./src/components/Slideshow.vue?vue&type=template&id=2154092e& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_Slideshow_vue_vue_type_template_id_2154092e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!../../node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./Slideshow.vue?vue&type=template&id=2154092e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./src/components/Slideshow.vue?vue&type=template&id=2154092e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_Slideshow_vue_vue_type_template_id_2154092e___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_Slideshow_vue_vue_type_template_id_2154092e___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "./src/components/Tab.vue":
/*!********************************!*\
  !*** ./src/components/Tab.vue ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Tab_vue_vue_type_template_id_bc09d9d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab.vue?vue&type=template&id=bc09d9d6& */ "./src/components/Tab.vue?vue&type=template&id=bc09d9d6&");
/* harmony import */ var _Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tab.vue?vue&type=script&lang=js& */ "./src/components/Tab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _Tab_vue_vue_type_template_id_bc09d9d6___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Tab_vue_vue_type_template_id_bc09d9d6___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Tab.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./src/components/Tab.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/components/Tab.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!../../node_modules/vue-loader/lib??vue-loader-options!./Tab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./node_modules/vue-loader/lib/index.js?!./src/components/Tab.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/components/Tab.vue?vue&type=template&id=bc09d9d6&":
/*!***************************************************************!*\
  !*** ./src/components/Tab.vue?vue&type=template&id=bc09d9d6& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_Tab_vue_vue_type_template_id_bc09d9d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!../../node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./Tab.vue?vue&type=template&id=bc09d9d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./src/components/Tab.vue?vue&type=template&id=bc09d9d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_Tab_vue_vue_type_template_id_bc09d9d6___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_Tab_vue_vue_type_template_id_bc09d9d6___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "./src/components/Tabs.vue":
/*!*********************************!*\
  !*** ./src/components/Tabs.vue ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Tabs_vue_vue_type_template_id_bdda1ea4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs.vue?vue&type=template&id=bdda1ea4& */ "./src/components/Tabs.vue?vue&type=template&id=bdda1ea4&");
/* harmony import */ var _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs.vue?vue&type=script&lang=js& */ "./src/components/Tabs.vue?vue&type=script&lang=js&");
/* harmony import */ var _Tabs_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tabs.vue?vue&type=style&index=0&lang=less& */ "./src/components/Tabs.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _Tabs_vue_vue_type_template_id_bdda1ea4___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Tabs_vue_vue_type_template_id_bdda1ea4___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Tabs.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./src/components/Tabs.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/components/Tabs.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./node_modules/vue-loader/lib/index.js?!./src/components/Tabs.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/components/Tabs.vue?vue&type=style&index=0&lang=less&":
/*!*******************************************************************!*\
  !*** ./src/components/Tabs.vue?vue&type=style&index=0&lang=less& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_ref_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_Tabs_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--0-0!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src!../../node_modules/less-loader/dist/cjs.js??ref--0-3!../../node_modules/vue-loader/lib??vue-loader-options!../../node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./Tabs.vue?vue&type=style&index=0&lang=less& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./src/components/Tabs.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_ref_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_Tabs_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_ref_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_Tabs_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_ref_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_Tabs_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/Tabs.vue?vue&type=template&id=bdda1ea4&":
/*!****************************************************************!*\
  !*** ./src/components/Tabs.vue?vue&type=template&id=bdda1ea4& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_Tabs_vue_vue_type_template_id_bdda1ea4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!../../node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./Tabs.vue?vue&type=template&id=bdda1ea4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/string-replace-webpack-plugin/loader.js?id=apzah5b56pl!./src/components/Tabs.vue?vue&type=template&id=bdda1ea4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_Tabs_vue_vue_type_template_id_bdda1ea4___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_webpack_plugin_loader_js_id_apzah5b56pl_Tabs_vue_vue_type_template_id_bdda1ea4___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

/******/ });