!function(l){function t(t){for(var i,e,s=t[0],r=t[1],o=t[2],n=0,a=[];n<s.length;n++)e=s[n],Object.prototype.hasOwnProperty.call(u,e)&&u[e]&&a.push(u[e][0]),u[e]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(l[i]=r[i]);for(d&&d(t);a.length;)a.shift()();return h.push.apply(h,o||[]),c()}function c(){for(var t,i=0;i<h.length;i++){for(var e=h[i],s=!0,r=1;r<e.length;r++){var o=e[r];0!==u[o]&&(s=!1)}s&&(h.splice(i--,1),t=n(n.s=e[0]))}return t}var e={},u={5:0},h=[];function n(t){if(e[t])return e[t].exports;var i=e[t]={i:t,l:!1,exports:{}};return l[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=l,n.c=e,n.d=function(t,i,e){n.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(i,t){if(1&t&&(i=n(i)),8&t)return i;if(4&t&&"object"==typeof i&&i&&i.__esModule)return i;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:i}),2&t&&"string"!=typeof i)for(var s in i)n.d(e,s,function(t){return i[t]}.bind(null,s));return e},n.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},n.p="/buyandshipdemo";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var r=0;r<i.length;r++)t(i[r]);var d=s;h.push([443,0]),c()}({23:function(t,i,e){"use strict";function s(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bs-slideshow"},[s("transition",{attrs:{name:"opacity"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow.arrowLeft,expression:"isShow.arrowLeft"}],staticClass:"bs-slideshow-arrow-left",on:{click:function(t){return e.scrollTo("left")}}},[s("i",{staticClass:"bs-icon"},[s("span",{staticClass:"icon-slideshow-arrow-left"})])])]),e._v(" "),s("div",{staticClass:"bs-slideshow-container"},[s("div",{staticClass:"bs-slideshow-scroll-warp"},[s("div",{staticClass:"bs-slideshow-scroll",style:e.scrollStyle},[s("div",{ref:"scroll",staticClass:"bs-slideshow-scroll-inner"},e._l(e.list,function(i,t){return s("div",{key:"slideshow_"+e._uid+"_"+t,staticClass:"bs-slideshow-item",style:e.perWidthStyle,on:{click:function(t){return e.clickCard(i.image)}}},[s("div",{staticClass:"bs-slideshow-item-media"},[s("img",{attrs:{src:i.image,alt:"item"}})]),e._v(" "),s("div",{staticClass:"bs-slideshow-item-info text-subtitle-sm"},[e._v(e._s(i.desc))])])}),0)])])]),e._v(" "),s("transition",{attrs:{name:"opacity"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow.arrowRight,expression:"isShow.arrowRight"}],staticClass:"bs-slideshow-arrow-right",on:{click:function(t){return e.scrollTo("right")}}},[s("i",{staticClass:"bs-icon"},[s("span",{staticClass:"icon-slideshow-arrow-right"})])])])],1)}s._withStripped=!0;e(15),e(51),e(17),e(21),e(31);var r={props:{list:{type:Array,default:function(){return[]}},perPage:{type:Number,default:function(){return 4}}},components:{},data:function(){return{isShow:{arrowLeft:!1,arrowRight:!0},index:0,position:0,totalNum:0,perWidthStyle:null}},computed:{scrollStyle:function(){return{transform:"translateX(-".concat(this.position,"%)")}}},watch:{index:function(t){this.position=t*(1/this.totalNum*100)}},mounted:function(){this.initArrow(),this.totalNum=this.list.length,768<document.body.offsetWidth&&(this.calculatePerWidth(),window.addEventListener("resize",this.calculatePerWidth,!0))},methods:{initArrow:function(){var s=this,t=new IntersectionObserver(function(t){t.forEach(function(t){var i=t.target===s.$refs.scroll.firstChild?"arrowLeft":"arrowRight",e=.25<t.intersectionRatio;s.isShow[i]=!e})},{threshold:[0,.25,.5,.75,1]});t.observe(this.$refs.scroll.firstChild),t.observe(this.$refs.scroll.lastChild)},scrollTo:function(t){if("left"===t){if(this.index<=0)return!1;this.index-=1}if("right"===t){if(this.index>=this.totalNum-this.perPage)return!1;this.index+=1}},calculatePerWidth:function(){this.perWidthStyle={width:"".concat((this.$el.offsetWidth-24*this.perPage)/this.perPage,"px")}},clickCard:function(t){this.$emit("on-click-card",t)}}},o=(e(44),e(0)),n=Object(o.a)(r,s,[],!1,null,null,null);n.options.__file="src/components/Slideshow.vue";i.a=n.exports},44:function(t,i,e){"use strict";var s=e(5);e.n(s).a},443:function(t,i,e){"use strict";e.r(i);var s=e(1),r=e(9),o=e(55),n=e(23),a=e(18);e(444);Object(r.a)(),new s.a({el:"#app",components:{BsSlideshow:n.a,BsDialog:a.a},data:function(){return{isShowGraphic:!0,isShowDialog:!1,isApp:Object(o.a)()}},mounted:function(){},methods:{showGallery:function(){if(768<document.body.offsetWidth)return!1;this.isShowDialog=!0},openIntercom:function(){this.isApp?window.location="https://buyandship/inapp/intercom":window.Intercom("show")}}})},444:function(t,i,e){},5:function(t,i,e){}});