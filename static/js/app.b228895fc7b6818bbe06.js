webpackJsonp([0],{"07PK":function(t,n,e){"use strict";n.a={name:"HelloWorld",data:function(){return{msg:"欢迎来到德莱联盟！哈哈"}}}},"0mnJ":function(t,n,e){"use strict";n.a={data:function(){return{msg3:"这是注册页面"}}}},"54+b":function(t,n,e){"use strict";function a(t){e("YWBy")}var i=e("MyHI"),r=e("kvAW"),o=e("VU/8"),s=a,c=o(i.a,r.a,!1,s,"data-v-77457c4c",null);n.a=c.exports},"6LJZ":function(t,n){},"9JNO":function(t,n,e){"use strict";n.a={data:function(){return{msg2:"欢迎来到德莱联盟！哈哈22"}}}},C7xF:function(t,n){},K5zu:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"first"},[e("h2",[t._v(t._s(t.msg3))]),t._v(" "),e("span",{on:{click:function(n){t.$router.go(-1)}}},[t._v("后退")])])},i=[],r={render:a,staticRenderFns:i};n.a=r},M93x:function(t,n,e){"use strict";function a(t){e("C7xF")}var i=e("xJD8"),r=e("Mgwu"),o=e("VU/8"),s=a,c=o(i.a,r.a,!1,s,null,null);n.a=c.exports},Mgwu:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],r={render:a,staticRenderFns:i};n.a=r},MyHI:function(t,n,e){"use strict";n.a={name:"HelloWorld",data:function(){return{msg:"欢迎来到德莱联盟！哈哈"}},mounted:function(){!function(){function t(){d=!(document.body.scrollTop>r)}function n(){i=window.innerWidth,r=window.innerHeight,o.style.height=r+"px",s.width=i,s.height=r}function e(){if(d){c.clearRect(0,0,i,r);for(var t in u)u[t].draw()}requestAnimationFrame(e)}function a(){function t(){n.pos.x=Math.random()*i,n.pos.y=r+100*Math.random(),n.alpha=.1+.3*Math.random(),n.scale=.1+.3*Math.random(),n.velocity=Math.random()}var n=this;!function(){n.pos={},t(),console.log(n)}(),this.draw=function(){n.alpha<=0&&t(),n.pos.y-=n.velocity,n.alpha-=5e-4,c.beginPath(),c.arc(n.pos.x,n.pos.y,10*n.scale,0,2*Math.PI,!1),c.fillStyle="rgba(255,255,255,"+n.alpha+")",c.fill()}}var i,r,o,s,c,u,l,d=!0;!function(){i=window.innerWidth,r=window.innerHeight,l={x:0,y:r},o=document.getElementById("large-header"),o.style.height=r+"px",s=document.getElementById("demo-canvas"),s.width=i,s.height=r,c=s.getContext("2d"),u=[];for(var t=0;t<.5*i;t++){var n=new a;u.push(n)}e()}(),function(){window.addEventListener("scroll",t),window.addEventListener("resize",n)}()}(),function(){for(var t=0,n=["ms","moz","webkit","o"],e=0;e<n.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[n[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[e]+"CancelAnimationFrame"]||window[n[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n,e){var a=(new Date).getTime(),i=Math.max(0,16-(a-t)),r=window.setTimeout(function(){n(a+i)},i);return t=a+i,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}()}}},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),i=e("M93x"),r=e("YaEn");a.a.config.productionTip=!1,new a.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},OQcA:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"first"},[e("h2",[t._v(t._s(t.msg2))]),t._v(" "),e("div",{attrs:{onclick:"window.history.go(-1)"}},[t._v("后退2")]),t._v(" "),e("a",{attrs:{href:"/"}},[t._v("后退a")])])},i=[],r={render:a,staticRenderFns:i};n.a=r},YWBy:function(t,n){},YaEn:function(t,n,e){"use strict";var a=e("7+uW"),i=e("/ocq"),r=e("54+b"),o=e("gORT"),s=e("uscc"),c=e("wrV3");a.a.use(i.a),n.a=new i.a({routes:[{path:"/",name:"Forest",component:r.a},{path:"/login",name:"LoginView",component:s.a},{path:"/register",name:"RegisterView",component:c.a},{path:"/Hello",name:"HelloWorld",component:o.a}]})},gORT:function(t,n,e){"use strict";function a(t){e("iG8g")}var i=e("07PK"),r=e("kyqX"),o=e("VU/8"),s=a,c=o(i.a,r.a,!1,s,"data-v-5b64e90f",null);n.a=c.exports},iG8g:function(t,n){},kvAW:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"container demo-2"},[e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("ul",{staticClass:"menu"},[e("li",[t._v(t._s(t.msg))]),t._v(" "),e("li",[e("router-link",{attrs:{to:"/login"}},[t._v("跳转到第一个页面")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/register"}},[t._v("跳转到第二个页面")])],1)])])])])},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"large-header",attrs:{id:"large-header"}},[e("canvas",{attrs:{id:"demo-canvas"}}),t._v(" "),e("h1",{staticClass:"main-title"},[e("span",[t._v("Spirit")])])])}],r={render:a,staticRenderFns:i};n.a=r},kyqX:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v(t._s(t.msg))]),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/login"}},[t._v("跳转到第一个页面")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/register"}},[t._v("跳转到第二个页面")])],1)]),t._v(" "),e("router-view",{staticClass:"view"})],1)},i=[],r={render:a,staticRenderFns:i};n.a=r},"rXL/":function(t,n){},uscc:function(t,n,e){"use strict";function a(t){e("6LJZ")}var i=e("9JNO"),r=e("OQcA"),o=e("VU/8"),s=a,c=o(i.a,r.a,!1,s,"data-v-784ec462",null);n.a=c.exports},wrV3:function(t,n,e){"use strict";function a(t){e("rXL/")}var i=e("0mnJ"),r=e("K5zu"),o=e("VU/8"),s=a,c=o(i.a,r.a,!1,s,"data-v-c93c2d52",null);n.a=c.exports},xJD8:function(t,n,e){"use strict";n.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.b228895fc7b6818bbe06.js.map