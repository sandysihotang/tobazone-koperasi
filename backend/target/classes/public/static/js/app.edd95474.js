(function(e){function t(t){for(var a,i,c=t[0],l=t[1],d=t[2],s=0,f=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("782e"),o=n.n(r),i=n("bc3a"),c=n.n(i),l=n("a7fe"),d=n.n(l),u=n("f820"),s=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld")],1)},m=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},v=[],h={name:"HelloWorld"},b=h,g=n("2877"),y=Object(g["a"])(b,p,v,!1,null,null,null),w=y.exports,Q={name:"home",components:{HelloWorld:w}},C=Q,_=Object(g["a"])(C,f,m,!1,null,null,null),S=_.exports;a["a"].use(s["a"]);var I=[{path:"/",name:"home",component:S},{path:"/about",name:"about",component:function(){return Promise.resolve().then(n.bind(null,"f820"))}}],x=new s["a"]({routes:I}),O=x,j=n("2f62");a["a"].use(j["a"]);var E=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}}),P=(n("a4ac"),n("5c7d"),n("7d6e"),n("e54f"),n("573e"),n("35fc"),n("1867"),n("43b9"),n("b05d")),T=n("4d5a"),F=n("e359"),M=n("9404"),H=n("09e3"),L=n("9989"),B=n("65c6"),V=n("6ac5"),W=n("9c40"),$=n("0016"),k=n("1c1c"),A=n("66e5"),D=n("4074"),J=n("0170"),R=n("4515"),N=n("8169"),Y=n("8380"),q=n("27f9"),z=n("cb32"),G=n("2c91"),K=n("4e73"),U=n("4983"),X=n("7ff0"),Z=n("714f");a["a"].use(P["a"],{config:{},components:{QLayout:T["a"],QHeader:F["a"],QDrawer:M["a"],QPageContainer:H["a"],QPage:L["a"],QToolbar:B["a"],QToolbarTitle:V["a"],QBtn:W["a"],QIcon:$["a"],QList:k["a"],QItem:A["a"],QItemSection:D["a"],QItemLabel:J["a"],QSpinnerAudio:R["a"],QChatMessage:N["a"],QSpinnerDots:Y["a"],QInput:q["a"],QAvatar:z["a"],QSpace:G["a"],QMenu:K["a"],QScrollArea:U["a"],QFooter:X["a"]},directives:{Ripple:Z["a"]},plugins:{}});var ee=c.a.create({});o.a.logToConsole=!1;var te=new o.a("b62a6641110833445445",{cluster:"ap1",forceTLS:!0}),ne=te.subscribe("my-channel");ne.bind("my-event",(function(e){})),a["a"].config.productionTip=!1,a["a"].use(d.a,ee),new a["a"]({router:O,store:E,render:function(e){return e(u["default"])}}).$mount("#app")},a4ac:function(e,t,n){},f820:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"about",align:"center"}},[n("h1",[e._v(" Video Call ")]),n("h4",[e._v("My feed: ")]),n("div",{staticStyle:{height:"100px",width:"100px"},attrs:{id:"me"}}),n("h4",[e._v("Remote feeds :")]),n("div",{attrs:{id:"remote-container"}}),n("h4",[e._v("Canvas Feeds :")]),n("div",{attrs:{id:"canvas-container"}})])}],o=(n("a15b"),n("6b5f")),i=n.n(o),c={data:function(){return{remoteContainer:null,canvasContaner:null,client:null}},methods:{handleFail:function(e){},addVideoStream:function(e){var t=document.createElement("div");t.id=e,t.style.transform="rotateY(180deg)",t.style.width="100px",t.style.height="100px",this.remoteContainer.appendChild(t)},removeVideoStream:function(e){var t=e.stream;t.stop();var n=document.getElementById(t.getId());n.parentNode.removeChild(n)},addCanvas:function(e){var t=this,n=document.getElementById("video".concat(e)),a=document.createElement("canvas");this.canvasContaner.appendChild(a);var r=a.getContext("2d");n.addEventListener("loadedmetadata",(function(){a.width=n.videoWidth,a.height=n.videoHeight})),n.addEventListener("play",(function(){var e=t;(function t(){e.paused||e.ended||(e.widows!==a.width&&(a.width=e.videoWidth,a.height=e.videoHeight),r.drawImage(e,0,0),setTimeout(t,1e3/30))})()}),0)}},mounted:function(){var e=this;this.remoteContainer=document.getElementById("remote-container"),this.canvasContaner=document.getElementById("canvas container"),this.client=i.a.createClient({mode:"live",codec:"h264"}),this.client.init("ad66aaf4f6914593abc5ef00405ad6c0",(function(){})),this.client.join(null,"agora-demo",null,(function(t){var n=i.a.createStream({streamID:t,audio:!1,video:!0,screen:!1});n.init((function(){n.play("me"),e.client.publish(n,e.handleFail),e.client.on("stream-added",(function(t){e.client.subscribe(t.stream,e.handleFail)})),e.client.on("stream-subscribed",(function(t){var n=t.stream;e.addVideoStream("".concat(n.getId())),n.play("".concat(n.getId())),e.addCanvas("".concat(n.getId()))})),e.client.on("stream-removed",e.removeVideoStream)}),e.handleFail)}),this.handleFail)}},l=c,d=n("2877"),u=Object(d["a"])(l,a,r,!1,null,null,null);t["default"]=u.exports}});
//# sourceMappingURL=app.edd95474.js.map