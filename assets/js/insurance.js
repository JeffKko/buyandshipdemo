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
/******/ 		"insurance": 0
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
/******/ 	deferredModules.push(["./src/assets/js/pages/insurance.js","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/assets/js/pages/insurance.js":
/*!******************************************!*\
  !*** ./src/assets/js/pages/insurance.js ***!
  \******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/js/main.js */ "./src/assets/js/main.js");
/* harmony import */ var _assets_js_utils_hybridPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/js/utils/hybridPage.js */ "./src/assets/js/utils/hybridPage.js");
/* harmony import */ var _components_Tabs_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Tabs.vue */ "./src/components/Tabs.vue");
/* harmony import */ var _components_Tab_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Tab.vue */ "./src/components/Tab.vue");
/* harmony import */ var _assets_style_pages_insurance_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/style/pages/insurance.less */ "./src/assets/style/pages/insurance.less");
/* harmony import */ var _assets_style_pages_insurance_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_style_pages_insurance_less__WEBPACK_IMPORTED_MODULE_4__);





Object(_assets_js_utils_hybridPage_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
new _assets_js_main_js__WEBPACK_IMPORTED_MODULE_0__[/* Page */ "a"]({
  el: '#bsMain',
  components: {
    BsTabs: _components_Tabs_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    BsTab: _components_Tab_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
  },
  data: function data() {
    return {
      currentTab: 'Basic'
    };
  },
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./src/assets/style/pages/insurance.less":
/*!***********************************************!*\
  !*** ./src/assets/style/pages/insurance.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

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