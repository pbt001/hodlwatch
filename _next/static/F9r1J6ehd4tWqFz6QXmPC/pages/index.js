(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"8Jek":function(e,t,i){var n;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===a)for(var o in n)i.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},Ezi6:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("bb6g"),r=i("8Jek"),a=i("mXGw"),s=i("aGQH"),o=i("5U3R");function l(e){var t=e.tag,i=void 0===t?"h2":t,l=n.__rest(e,["tag"]),u=r("subtitle",n.__assign({},s.getHeadingModifiers(l)),l.className),c=o.getHTMLProps(l,s.removeHeadingProps);return a.createElement(i,n.__assign({},c,{className:u}))}t.Subtitle=l;var u=s.withHelpersModifiers(l);t.default=u},RNiq:function(e,t,i){"use strict";i.r(t);var n=i("29wY"),r=i.n(n),a=i("Ezi6"),s=i.n(a),o=i("asxF"),l=i.n(o),u=i("dU/h"),c=i.n(u),d=i("kFFf"),f=i.n(d),p=i("unkz"),g=i.n(p),v=i("OiKP"),_=i.n(v),h=i("fLcH"),b=i.n(h),m=i("5YRn"),w=i.n(m),H=i("bBnb"),y=i.n(H),M=i("mXGw"),P=i.n(M),k=i("/m4v"),F=i("53GE"),N=i("PTAR"),L=i("l1rL"),z=P.a.createElement,E=function(e){var t=e.handleLoadApp,i=e.btnIsLoading;return z(f.a,{isFullHeight:!0,isColor:"light"},z(c.a,null,z(g.a,{hasTextAlign:"centered"},z(r.a,{isSize:1},F.a),z(s.a,null,"cryptocurrency portfolio tracking app"),z(_.a,{isColor:"success",onClick:t,isLoading:i},"start using"))),z(l.a,null,z(g.a,{hasTextAlign:"centered"},z("span",null,"hodl.watch uses browsers local storage to ensure its functionality"))))},G=y()(Object(k.b)((function(e){return{appIsInitialized:Object(N.d)(e)}}),(function(e){return{setAppInitialized:function(){return e(Object(N.k)())}}})),b()("btnIsLoading","setBtnLoading",!1),w()({handleLoadApp:function(e){var t=e.setAppInitialized,i=e.setBtnLoading;return function(){i(!0),t()}}}))((function(e){return z(P.a.Fragment,null,e.appIsInitialized?z(L.a,{to:"/app",replace:!0}):z(E,e))}));t.default=G},TqC3:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i("RNiq")}])},asxF:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("bb6g"),r=i("8Jek"),a=i("mXGw"),s=i("aGQH");function o(e){var t=e.tag,i=void 0===t?"footer":t,s=n.__rest(e,["tag"]),o=r("hero-foot",s.className);return a.createElement(i,n.__assign({},s,{className:o}))}t.HeroFooter=o;var l=s.withHelpersModifiers(o);t.default=l},"dU/h":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("bb6g"),r=i("8Jek"),a=i("mXGw"),s=i("aGQH");function o(e){var t=e.tag,i=void 0===t?"div":t,s=n.__rest(e,["tag"]),o=r("hero-body",s.className);return a.createElement(i,n.__assign({},s,{className:o}))}t.HeroBody=o;var l=s.withHelpersModifiers(o);t.default=l},kFFf:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("bb6g"),r=i("8Jek"),a=i("mXGw"),s=i("aGQH"),o=i("5U3R");function l(e){var t=e.tag,i=void 0===t?"section":t,l=n.__rest(e,["tag"]),u=r("hero",n.__assign({"is-bold":l.isBold,"is-fullheight":l.isFullHeight,"is-halfheight":l.isHalfHeight},o.combineModifiers(l,s.getColorModifiers,s.getSizeModifiers)),l.className),c=(l.isBold,l.isFullHeight,n.__rest(l,["isBold","isFullHeight"])),d=o.getHTMLProps(c,s.removeColorProps,s.removeSizeProps);return a.createElement(i,n.__assign({},d,{className:u}))}t.Hero=l;var u=s.withHelpersModifiers(l);t.default=u}},[["TqC3",1,2,0,4,6]]]);