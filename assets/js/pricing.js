!function(l){function t(t){for(var e,i,n=t[0],s=t[1],r=t[2],o=0,a=[];o<n.length;o++)i=n[o],Object.prototype.hasOwnProperty.call(u,i)&&u[i]&&a.push(u[i][0]),u[i]=0;for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(l[e]=s[e]);for(d&&d(t);a.length;)a.shift()();return h.push.apply(h,r||[]),c()}function c(){for(var t,e=0;e<h.length;e++){for(var i=h[e],n=!0,s=1;s<i.length;s++){var r=i[s];0!==u[r]&&(n=!1)}n&&(h.splice(e--,1),t=o(o.s=i[0]))}return t}var i={},u={10:0},h=[];function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=l,o.c=i,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/buyandshipdemo";var e=window.webpackJsonp=window.webpackJsonp||[],n=e.push.bind(e);e.push=t,e=e.slice();for(var s=0;s<e.length;s++)t(e[s]);var d=n;h.push([506,0]),c()}({109:function(t,e,i){var n=i(28),s=Date.prototype,r="Invalid Date",o="toString",a=s[o],l=s.getTime;new Date(NaN)+""!=r&&n(s,o,function(){var t=l.call(this);return t==t?a.call(this):r})},110:function(t,e,i){"use strict";var n=i(28),s=i(20),r=i(14),o=i(172),a="toString",l=RegExp.prototype,c=l[a],u=r(function(){return"/a/b"!=c.call({source:"a",flags:"b"})}),h=c.name!=a;(u||h)&&n(RegExp.prototype,a,function(){var t=s(this),e=String(t.source),i=t.flags;return"/"+e+"/"+String(void 0===i&&t instanceof RegExp&&!("flags"in l)?o.call(t):i)},{unsafe:!0})},12:function(t,e,i){},123:function(t,e,i){},13:function(t,e,i){"use strict";function n(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bs-tab",on:{click:function(t){return e.$emit("click")}}},[i("div",{staticClass:"bs-tab-inner",class:{"bs-tab-inner--underline":e.isUnderline}},[e._t("default")],2)])}n._withStripped=!0;var s={props:{isActive:{type:Boolean,default:!1},isUnderline:{type:Boolean,default:!1}}},r=i(0),o=Object(r.a)(s,n,[],!1,null,null,null);o.options.__file="src/components/Tab.vue";e.a=o.exports},176:function(t,e,i){"use strict";var n=i(10),s=i(77).indexOf,r=i(98),o=[].indexOf,a=!!o&&1/[1].indexOf(1,-0)<0,l=r("indexOf");n({target:"Array",proto:!0,forced:a||l},{indexOf:function(t,e){return a?o.apply(this,arguments)||0:s(this,t,1<arguments.length?e:void 0)}})},23:function(t,e,i){"use strict";function n(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{staticClass:"bs-slideshow"},[n("transition",{attrs:{name:"opacity"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:i.isShow.arrowLeft,expression:"isShow.arrowLeft"}],staticClass:"bs-slideshow-arrow-left",on:{click:function(t){return i.scrollTo("left")}}},[n("i",{staticClass:"bs-icon"},[n("span",{staticClass:"icon-slideshow-arrow-left"})])])]),i._v(" "),n("div",{staticClass:"bs-slideshow-container"},[n("div",{staticClass:"bs-slideshow-scroll-warp"},[n("div",{staticClass:"bs-slideshow-scroll",style:i.scrollStyle},[n("div",{ref:"scroll",staticClass:"bs-slideshow-scroll-inner"},i._l(i.list,function(e,t){return n("div",{key:"slideshow_"+i._uid+"_"+t,staticClass:"bs-slideshow-item",style:i.perWidthStyle,on:{click:function(t){return i.clickCard(e.image)}}},[n("div",{staticClass:"bs-slideshow-item-media"},[n("img",{attrs:{src:e.image,alt:"item"}})]),i._v(" "),n("div",{staticClass:"bs-slideshow-item-info text-subtitle-sm"},[i._v(i._s(e.desc))])])}),0)])])]),i._v(" "),n("transition",{attrs:{name:"opacity"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:i.isShow.arrowRight,expression:"isShow.arrowRight"}],staticClass:"bs-slideshow-arrow-right",on:{click:function(t){return i.scrollTo("right")}}},[n("i",{staticClass:"bs-icon"},[n("span",{staticClass:"icon-slideshow-arrow-right"})])])])],1)}n._withStripped=!0;i(15),i(51),i(17),i(21),i(31);var s={props:{list:{type:Array,default:function(){return[]}},perPage:{type:Number,default:function(){return 4}}},components:{},data:function(){return{isShow:{arrowLeft:!1,arrowRight:!0},index:0,position:0,totalNum:0,perWidthStyle:null}},computed:{scrollStyle:function(){return{transform:"translateX(-".concat(this.position,"%)")}}},watch:{index:function(t){this.position=t*(1/this.totalNum*100)}},mounted:function(){this.initArrow(),this.totalNum=this.list.length,768<document.body.offsetWidth&&(this.calculatePerWidth(),window.addEventListener("resize",this.calculatePerWidth,!0))},methods:{initArrow:function(){var n=this,t=new IntersectionObserver(function(t){t.forEach(function(t){var e=t.target===n.$refs.scroll.firstChild?"arrowLeft":"arrowRight",i=.25<t.intersectionRatio;n.isShow[e]=!i})},{threshold:[0,.25,.5,.75,1]});t.observe(this.$refs.scroll.firstChild),t.observe(this.$refs.scroll.lastChild)},scrollTo:function(t){if("left"===t){if(this.index<=0)return!1;this.index-=1}if("right"===t){if(this.index>=this.totalNum-this.perPage)return!1;this.index+=1}},calculatePerWidth:function(){this.perWidthStyle={width:"".concat((this.$el.offsetWidth-24*this.perPage)/this.perPage,"px")}},clickCard:function(t){this.$emit("on-click-card",t)}}},r=(i(44),i(0)),o=Object(r.a)(s,n,[],!1,null,null,null);o.options.__file="src/components/Slideshow.vue";e.a=o.exports},272:function(t,e,i){t.exports=i(459)},34:function(t,e,i){"use strict";function n(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bs-tabs"},[i("transition",{attrs:{name:"opacity"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow.arrowLeft,expression:"isShow.arrowLeft"}],staticClass:"bs-tabs-arrow-left",on:{click:function(t){return e.tabScrollTo("left")}}},[i("i",{staticClass:"bs-icon"},[i("span",{staticClass:"icon-tabs-arrow-left"})])])]),e._v(" "),i("div",{staticClass:"bs-tabs-scroll-wrap",class:{"bs-tabs-scroll-wrap--hasFix":e.$slots.fix}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow.arrowLeft,expression:"isShow.arrowLeft"}],staticClass:"bs-tabs-scroll-mask-left"}),e._v(" "),i("div",{ref:"tabScroll",staticClass:"bs-tabs-scroll"},[e._t("default")],2),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow.arrowRight,expression:"isShow.arrowRight"}],staticClass:"bs-tabs-scroll-mask-right"})]),e._v(" "),e._t("fix"),e._v(" "),i("transition",{attrs:{name:"opacity"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow.arrowRight,expression:"isShow.arrowRight"}],staticClass:"bs-tabs-arrow-right",on:{click:function(t){return e.tabScrollTo("right")}}},[i("i",{staticClass:"bs-icon"},[i("span",{staticClass:"icon-tabs-arrow-right"})])])])],2)}n._withStripped=!0;i(15),i(17),i(31);var s={components:{BsTab:i(13).a},data:function(){return{isShow:{arrowLeft:!1,arrowRight:!0}}},mounted:function(){var n=this,t=new IntersectionObserver(function(t){t.forEach(function(t){var e=t.target===n.$refs.tabScroll.firstChild?"arrowLeft":"arrowRight",i=.95<t.intersectionRatio;n.isShow[e]=!i})},{threshold:[0,.25,.5,.75,1]});t.observe(this.$refs.tabScroll.firstChild),t.observe(this.$refs.tabScroll.lastChild)},methods:{tabScrollTo:function(t){var e;"left"===t&&(e=this.$refs.tabScroll.firstChild),"right"===t&&(e=this.$refs.tabScroll.lastChild),e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}}},r=(i(60),i(0)),o=Object(r.a)(s,n,[],!1,null,null,null);o.options.__file="src/components/Tabs.vue";e.a=o.exports},44:function(t,e,i){"use strict";var n=i(5);i.n(n).a},459:function(t,e,i){i(460);var n=i(26).Object;t.exports=function(t,e,i){return n.defineProperty(t,e,i)}},460:function(t,e,i){var n=i(46);n(n.S+n.F*!i(66),"Object",{defineProperty:i(65).f})},461:function(t,e,i){"use strict";var n=i(123);i.n(n).a},462:function(t,e,i){"use strict";var n=i(258),h=i(88),m=i(20),d=i(45),y=i(153),_=i(259),C=i(56),x=i(260),p=i(108),s=i(14),f=[].push,S=Math.min,k=4294967295,O=!s(function(){return!RegExp(k,"y")});n("split",2,function(s,w,b){var v;return v="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||1<".".split(/()()/).length||"".split(/.?/).length?function(t,e){var i=String(d(this)),n=void 0===e?k:e>>>0;if(0==n)return[];if(void 0===t)return[i];if(!h(t))return w.call(i,t,n);for(var s,r,o,a=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),c=0,u=new RegExp(t.source,l+"g");(s=p.call(u,i))&&!(c<(r=u.lastIndex)&&(a.push(i.slice(c,s.index)),1<s.length&&s.index<i.length&&f.apply(a,s.slice(1)),o=s[0].length,c=r,a.length>=n));)u.lastIndex===s.index&&u.lastIndex++;return c===i.length?!o&&u.test("")||a.push(""):a.push(i.slice(c)),a.length>n?a.slice(0,n):a}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:w.call(this,t,e)}:w,[function(t,e){var i=d(this),n=null==t?void 0:t[s];return void 0!==n?n.call(t,i,e):v.call(String(i),t,e)},function(t,e){var i=b(v,t,this,e,v!==w);if(i.done)return i.value;var n=m(t),s=String(this),r=y(n,RegExp),o=n.unicode,a=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(O?"y":"g"),l=new r(O?n:"^(?:"+n.source+")",a),c=void 0===e?k:e>>>0;if(0==c)return[];if(0===s.length)return null===x(l,s)?[s]:[];for(var u=0,h=0,d=[];h<s.length;){l.lastIndex=O?h:0;var p,f=x(l,O?s:s.slice(h));if(null===f||(p=S(C(l.lastIndex+(O?0:h)),s.length))===u)h=_(s,h,o);else{if(d.push(s.slice(u,h)),d.length===c)return d;for(var g=1;g<=f.length-1;g++)if(d.push(f[g]),d.length===c)return d;h=u=p}}return d.push(s.slice(u)),d}]},!O)},463:function(t,e,i){},5:function(t,e,i){},506:function(t,e,i){"use strict";i.r(e);function n(){var t,e,i,n=this,s=n.$createElement,r=n._self._c||s;return r("div",{staticClass:"bp-dropdown",class:{className:n.className,"bp-dropdown--sub":n.role}},[r("span",{class:(t={},t["bp-dropdown__"+(n.role?"sub":"btn")]=!0,t["bp-dropdown__"+(n.role?"sub":"btn")+"--active"]=!n.isHidden,t[n.className+"-bp__btn"]=n.className,t[n.className+"-bp__btn--active"]=!n.isHidden,t),on:{click:n._onToggle,mouseenter:n._onBtnEnter,mouseleave:n._onBtnLeave}},[n._t("btn"),n._v(" "),n.isIcon?n._t("icon",[n.isLoading?r("svg",{staticClass:"bp-dropdown__icon bp-dropdown__icon--spin",attrs:{viewBox:"0 0 512 512"}},[r("path",{attrs:{fill:"currentColor",d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"}})]):r("svg",{staticClass:"bp-dropdown__icon",class:(e={},e["bp-dropdown__icon--"+n.align]=n.align,e),attrs:{viewBox:"0 0 256 512"}},[r("path",{attrs:{fill:"currentColor",d:"M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"}})])]):n._e()],2),n._v(" "),r("transition",{attrs:{name:"fade"}},[n.isHidden?n._e():r("div",{staticClass:"bp-dropdown__body",class:(i={},i[n.className+"-bp__body"]=n.className,i),style:{minWidth:n.width+"px",top:n.top+"px",left:n.left+"px"},attrs:{id:n.id},on:{click:n._onBodyClick,mouseenter:n._onBodyEnter,mouseleave:n._onBodyLeave}},[n._t("body")],2)])],1)}i(176),i(109),i(47),i(171),i(110),i(257);n._withStripped=!0;i(51);var s=i(190),r=i.n(s),o=i(272),a=i.n(o),l={name:"bp-vuejs-dropdown",props:{role:{type:String,required:!1,default:""},unscroll:{type:[HTMLElement,String],required:!1,default:null},align:{type:String,required:!1,default:"bottom"},x:{type:Number,required:!1,default:0},y:{type:Number,required:!1,default:0},beforeOpen:{type:Function,required:!1,default:function(t){return t()}},trigger:{type:String,required:!1,default:"click"},closeOnClick:{type:Boolean,required:!1,default:!1},isIcon:{type:Boolean,required:!1,default:!0},className:{type:String,required:!1,default:""}},data:function(){return{isHidden:!0,isLoading:!1,id:null,timeout:null,top:void 0,right:void 0,bottom:void 0,left:void 0,width:void 0}},watch:{isHidden:function(t){if(this.unscroll){var e=this.unscroll instanceof HTMLElement?this.unscroll:document.querySelector(this.unscroll);e&&(e.style.overflow=t?"":"hidden")}}},created:function(){var t=this,i=this.$root;i.$on("bp-dropdown:open",function(){return t.isHidden=!0}),i.$on("bp-dropdown:hide",function(){return t.isHidden=!0}),"click"!==this.trigger||i["is-bp-dropdown"]||(a()(i,"is-bp-dropdown",{enumerable:!1,configurable:!1,writable:!1,value:!0}),document.onmousedown=function(t){var e=t.target;e.closest(".bp-dropdown__btn")||e.closest(".bp-dropdown__body")||i.$emit("bp-dropdown:hide")}),this.id="bp-dropdown-"+this.generateRandomId()},methods:{generateRandomId:function(){return Math.random().toString(36).substr(2,10)},_onToggle:function(t){"click"===this.trigger&&this.checkCustomCallback(t)},_onBtnEnter:function(t){"hover"===this.trigger&&this.isHidden&&this.checkCustomCallback(t)},_onBtnLeave:function(t){var e=this;if("hover"===this.trigger){this.role&&(this.timeout=setTimeout(function(){return e.isHidden=!0},100));var i=t.toElement;if(i)i.closest(".bp-dropdown__btn")||i.closest(".bp-dropdown__body")||this.prepare()}},_onBodyClick:function(){this.closeOnClick&&(this.isHidden=!0)},_onBodyEnter:function(){this.timeout&&clearTimeout(this.timeout)},_onBodyLeave:function(t){if("hover"===this.trigger){var e=t.toElement;e&&(e.closest(".bp-dropdown__btn")||e.closest(".bp-dropdown__sub")||this.prepare())}},checkCustomCallback:function(t){var e=this;if(this.isHidden){var i=new r.a(function(t){e.isLoading=!0,e.beforeOpen.call(e,t)});i.then(function(){e.isLoading=!1,t.target.closest(".bp-dropdown__body")||e.$root.$emit("bp-dropdown:open"),setTimeout(e.prepare,0)}),i.catch(function(){throw Error("bp-dropdown promise error")})}else this.prepare()},prepare:function(){var i=this;this.isHidden=!this.isHidden,this.isHidden||this.$nextTick(function(){var t=i.$el.firstElementChild,e=document.getElementById(i.id);i.setWidth(t.offsetWidth),i.setPosition(t,e)})},setWidth:function(t){this.width=t},setPosition:function(t,e){if(t&&e){var i=this.getCoords(t),n=i.top,s=i.left,r=t.offsetWidth,o=t.offsetHeight,a=e.offsetWidth,l=e.offsetHeight;switch(this.align){case"top":this.top=n+pageYOffset-l,this.left=s+pageXOffset;break;case"right":this.top=n+pageYOffset,this.left=s+pageXOffset+r;break;case"bottom":this.top=n+pageYOffset+o,this.left=s+pageXOffset;break;case"left":this.top=n+pageYOffset,this.left=s+pageXOffset-a;break;default:this.top=n+pageYOffset+o,this.left=s+pageXOffset}this.top+=this.y,this.left+=this.x}},getCoords:function(t){return{top:(t=t.getBoundingClientRect()).top-pageYOffset,left:t.left-pageXOffset}}}},c=(i(461),i(0)),u=Object(c.a)(l,n,[],!1,null,null,null);u.options.__file="node_modules/bp-vuejs-dropdown/Dropdown.vue";var h=u.exports,d=i(1),p=i(34),f=i(13),g=i(23);i(170),i(462);var w={bind:function(t,e){t.innerText=e.value},update:function(s,t){var e=+t.value,i=+s.innerText.split(",").join(""),n=Math.abs(e-i),r=Math.round(n/10),o=i<e;!function(){for(var t=window.requestAnimationFrame(function(){});t--;)window.cancelAnimationFrame(t)}(),window.requestAnimationFrame(function t(e,i){var n;o?e<=(n=i+r)&&(n=e):(n=i-r)<=e&&(n=e);s.innerText=n.toLocaleString();e!==n&&window.requestAnimationFrame(t.bind(this,e,n))}.bind(this,e,i||0))}},b=i(9),v=i(55),m=(i(463),{context:{rate:{"address-type-delivery":{"warehouse-4px-uspdx":{plans:{basic:{maxWeightRatio:1,truncateDimensions:!0,weightRatioApplyFirst:!0,weightCalculationMargin:0,weightCalculationMarginApplyFirst:!0,base:["每磅NT$150",[150,300]]}}},"warehouse-qs-osaka":{plans:{basic:{maxWeightRatio:1,truncateDimensions:!0,weightRatioApplyFirst:!0,weightCalculationMargin:0,weightCalculationMarginApplyFirst:!0,base:["每磅NT$120",[120,240]]}}},"warehouse-kas-seoul":{plans:{basic:{maxWeightRatio:1,truncateDimensions:!0,weightRatioApplyFirst:!0,weightCalculationMargin:0,weightCalculationMarginApplyFirst:!0,base:["每磅NT$120",[120,240]]}}},"warehouse-bns-hk":{plans:{basic:{maxWeightRatio:1,truncateDimensions:!0,weightRatioApplyFirst:!0,weightCalculationMargin:0,weightCalculationMarginApplyFirst:!0,base:["每磅NT$100",[100,200]]}}},"warehouse-lht-dongguan":{plans:{basic:{maxWeightRatio:1,truncateDimensions:!0,weightRatioApplyFirst:!0,weightCalculationMargin:0,weightCalculationMarginApplyFirst:!0,base:["每磅NT$100",[100,200]]}}},"warehouse-chukou-portsmouth":{plans:{basic:{maxWeightRatio:1,truncateDimensions:!0,weightRatioApplyFirst:!0,weightCalculationMargin:0,weightCalculationMarginApplyFirst:!0,base:["每磅NT$150",[150,300]]}}},"warehouse-bnsau-sydney":{plans:{basic:{maxWeightRatio:1,truncateDimensions:!0,weightRatioApplyFirst:!0,weightCalculationMargin:0,weightCalculationMarginApplyFirst:!0,base:["每磅NT$120",[120,240]]}}},"warehouse-bnsit-milan":{plans:{basic:{maxWeightRatio:1,truncateDimensions:!0,weightRatioApplyFirst:!0,weightCalculationMargin:0,weightCalculationMarginApplyFirst:!0,base:["每磅NT$150",[150,300]]}}},"warehouse-bnsth-bangkok":{plans:{basic:{maxWeightRatio:1,truncateDimensions:!0,weightRatioApplyFirst:!0,weightCalculationMargin:0,weightCalculationMarginApplyFirst:!0,base:["每磅NT$120",[120,240]]}}}}}}});Object(b.a)(),new d.a({el:"#app",directives:{blinkNumber:w},components:{BsTabs:p.a,BsTab:f.a,BsSlideshow:g.a,BpDropdown:h},data:function(){return{isShowGraphic:!1,isApp:Object(v.a)(),currentTab:"Europe",placement:"header",weightKG:0,weightLB:0,delivery:"address-type-delivery",warehouseId:"us",warehouseCode:"warehouse-4px-uspdx",rate:m.context.rate}},computed:{chargeWeight:function(){return this.chargeableWeight(this.rate)},totalFee:function(){var t=this.chargeWeight,e=this.delivery,i=this.warehouseCode;return t&&e&&i&&void 0!==this.rate[e][i]?this.calculateFee(this.rate,t,e,i):0},warehouseFlagClass:function(){return"icon-flag-".concat(this.warehouseId)},warehouseName:function(){return{us:"USA",uk:"UK",it:"Itali",jp:"Japan",kr:"Korea",au:"Australia",th:"Thialand",hk:"Hong-kong",cn:"China"}[this.warehouseId]}},watch:{},mounted:function(){},methods:{chargeKG:function(t,e){var i=t.target.value,n=this.getWeightValue(i,e);this.weightKG=n,this.weightLB=Math.round(2.20462262*n*100)/100,this.$forceUpdate()},chargeLB:function(t,e){var i=t.target.value,n=this.getWeightValue(i,e);this.weightLB=n,this.weightKG=Math.round(n/2.20462262*100)/100,this.$forceUpdate()},getWeightValue:function(t,e){return""===t.toString()?0:t.toString().match(/^\d+($|.\d+$)/g)?"0"===t.toString()[0]?t.toString().substring(1,t.toString().length):99999<t?e:t:e},selectWarehouse:function(t,e){this.warehouseId=t,this.warehouseCode=e,this.$emit("bp-dropdown:hide")},selectDelivery:function(t){this.delivery=t,this.$emit("bp-dropdown:hide")},chargeableWeight:function(t){var e=this.weightLB,i=this.delivery,n=this.warehouseCode;return isNaN(e)||e<=0||!i||!n?0:(e=this.getChargeableWeight(t,i,n,e),isNaN(e)?0:Math.ceil(e))},getChargeableWeight:function(t,e,i,n){var s=0;return void 0===t[e]&&-1!==e.indexOf("-self-")&&(e="address-type-self"),void 0!==t[e][i].plans.basic.weightCalculationMargin&&(s=t[e][i].plans.basic.weightCalculationMargin),0!==s&&Math.ceil(n)!==Math.ceil(n-s)&&s<n&&(n=Math.ceil(n-s)),n},calculateFee:function(t,e,i,n){return void 0===t[i]&&-1!==i.indexOf("-self-")&&(i="address-type-self"),function(t,e){var i,n,s=e-Math.floor(e),r=0;for(e=Math.floor(e),i=0;i<e&&i<t.length;i++)r=t[i];for(n=i;n<e;n++)r+=t[t.length-1]-t[t.length-2];return r+=(t[t.length-1]-t[t.length-2])*s}(t[i][n].plans.basic.base[1],e)}}})},60:function(t,e,i){"use strict";var n=i(12);i.n(n).a},88:function(t,e,i){var n=i(16),s=i(32),r=i(4)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==s(t))}}});