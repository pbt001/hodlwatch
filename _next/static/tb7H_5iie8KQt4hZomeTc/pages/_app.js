(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{0:function(e,t,n){n("3Ckp"),e.exports=n("bBV7")},"0pOA":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("hisu"),o=n("yBJb"),a=n("kMo5"),u=n("P+uj"),i=n("CHlC"),c=n("mXGw"),s=n.n(c),f=n("o42t"),p=n.n(f),l=n("/m4v"),d=n("Fcif"),h=n("gTDC"),v=n.n(h),m=n("T5cu"),b=n.n(m),y=n("cnbf");function _(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"===typeof o?o(n,r,e):t(o)}}}}var w=_();w.withExtraArgument=_;var O=w,S=n("PTAR"),x=n("uCW7"),j=n("7R8V"),C=n("zp/s"),g=n("qkCi"),P=n("ZQwM"),k=n("8WVE"),E=Object(y.c)({core:S.e,portfolio:x.a,exchanges:C.a,apiKeys:j.d,priceData:g.d,modals:P.b}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y.d,A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(k.e)()||e,n=Object(y.e)(E,t,M(Object(y.a)(O)));return n.subscribe(b()((function(){var e=n.getState(),t=e.portfolio,r=e.core,o=e.apiKeys,a=e.priceData;Object(k.f)({portfolio:t,core:v()(r,["init","quoteSymbol"]),priceData:v()(a,["timeframe"]),apiKeys:o})}),500)),n},T=s.a.createElement,I=!1,B="__REDUX_STORE__";var G,D=n("9fEB"),X=n.n(D),Y=(n("lbcf"),n("IBMJ"),s.a.createElement),J=function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps,r=e.reduxStore;return Y(s.a.Fragment,null,Y(X.a,null,Y("title",null,"hodl.watch")),Y(l.a,{store:r},Y(t,n)))}}]),t}(p.a);t.default=(G=J,function(e){function t(e){var n,o;return Object(r.a)(this,t),(n=Object(a.a)(this,Object(u.a)(t).call(this,e))).reduxStore=(o=e.initialReduxState,I?A(o):(window[B]||(window[B]=A(o)),window[B])),n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return T(G,Object(d.a)({},this.props,{reduxStore:this.reduxStore}))}}]),t}(s.a.Component))},"2LUv":function(e,t,n){var r=n("m1Oa"),o=n("o/EK"),a=n("sJOi");e.exports=function(e){return r(e)||o(e)||a()}},"3Ckp":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},"5YB7":function(e,t,n){var r=n("PbJ5");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"6jsY":function(e,t,n){"use strict";var r=n("fwM5"),o=n("bkNG"),a=n("Y8Bl"),u=n("7osH"),i=n("5YB7"),c=n("/dBk"),s=n("mYab");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=h,t.default=void 0;var f=s(n("mXGw")),p=n("z4BS");function l(e){var t,n,r;return c.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.Component,n=e.ctx,o.next=3,c.awrap((0,p.loadGetInitialProps)(t,n));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}))}t.AppInitialProps=p.AppInitialProps;var d=function(e){function t(){return r(this,t),a(this,u(t).apply(this,arguments))}return i(t,e),o(t,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=e.__N_SSG,a=e.__N_SSP;return f.default.createElement(n,Object.assign({},r,o||a?{}:{url:h(t)}))}}]),t}(f.default.Component);function h(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=d,d.origGetInitialProps=l,d.getInitialProps=l},"7osH":function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},"9fEB":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("mXGw")),a=r(n("GlZI")),u=n("9rrO"),i=n("bxxT"),c=n("vI6Y");function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=s;var p=["name","httpEquiv","charSet","itemProp"];function l(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,c=p.length;i<c;i++){var s=p[i];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],l=r[s]||new Set;l.has(f)?a=!1:(l.add(f),r[s]=l)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var d=a.default();function h(e){var t=e.children;return o.default.createElement(u.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:l,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}h.rewind=d.rewind,t.default=h},"9rrO":function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("mXGw"));t.AmpStateContext=o.createContext({})},GlZI:function(e,t,n){"use strict";var r=n("fwM5"),o=n("Y8Bl"),a=n("7osH"),u=n("0pOA"),i=n("bkNG"),c=n("5YB7"),s=n("2LUv");Object.defineProperty(t,"__esModule",{value:!0});var f=n("mXGw"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(s){function f(e){var i;return r(this,f),i=o(this,a(f).call(this,e)),p&&(t.add(u(i)),n(u(i))),i}return c(f,s),i(f,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(f,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(f.Component)}},IBMJ:function(e,t,n){},Y8Bl:function(e,t,n){var r=n("pSYS"),o=n("0pOA");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},bxxT:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("mXGw"));t.HeadManagerContext=o.createContext(null)},lbcf:function(e,t,n){},m1Oa:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"o/EK":function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},o42t:function(e,t,n){e.exports=n("6jsY")},sJOi:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},vI6Y:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("mXGw")),a=n("9rrO");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))}}},[[0,1,2,7,0,4,6]]]);