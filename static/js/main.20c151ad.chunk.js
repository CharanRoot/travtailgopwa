(this["webpackJsonptravtail-pwa"]=this["webpackJsonptravtail-pwa"]||[]).push([[0],{127:function(e,t,a){e.exports=a.p+"static/media/Travtail.d50df39a.png"},159:function(e,t,a){e.exports=a(209)},164:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),s=(a(164),a(80)),i=a(121),l=a(122),u=a(141),d=a(140),m=a(14),p=a(61),f=a(24),h=a.n(f),v=a(42),g=a(26),b=a(253),E=a(248),w=a(249),x=a(123),k=a.n(x),y=a(254),C=a(255),O=a(245),S=a(246),j=function(e){var t=e.inputRef,a=Object(s.a)(e,["inputRef"]);return r.a.createElement(k.a,Object.assign({},a,{ref:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){t(e?e.inputElement:null)})),mask:["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholderChar:"\u2000",showMask:!0,autoFocus:!0,guide:!1,placeholder:"(xxx) xxx - xxxx"}))},_=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement(C.a,{htmlFor:"phone-number"},"Phone Number"),r.a.createElement(O.a,{error:e.inputError,value:e.numberText,onChange:function(t){e.setNumberText(t.target.value)},name:"textmask",id:"phone-number-mask-input",inputComponent:j,startAdornment:r.a.createElement(S.a,{position:"start"},"+1")})))},I=a(127),T=a.n(I),A=a(13),R=a(31),F={aws_project_region:"us-east-1",aws_cognito_identity_pool_id:"us-east-1:39c1b6b3-8451-44c8-8ff4-36a925c09b32",aws_cognito_region:"us-east-1",aws_user_pools_id:"us-east-1_b81z2jnAQ",aws_user_pools_web_client_id:"65c53478dqfertlmbtdrtq9399",oauth:{},aws_cloud_logic_custom:[{name:"stripeIntegration",endpoint:"https://ve0xisbmb1.execute-api.us-east-1.amazonaws.com/dev",region:"us-east-1"}],aws_appsync_graphqlEndpoint:"https://rosmypxllbhcdp4ouyw5a624nm.appsync-api.us-east-1.amazonaws.com/graphql",aws_appsync_region:"us-east-1",aws_appsync_authenticationType:"AMAZON_COGNITO_USER_POOLS"},N=(a(96),a(128)),U=a(208),P=function(){var e=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.graphql(Object(U.b)("\n  query GetStore($storeId: String!) {\n    getStore(storeId: $storeId) {\n      storeId\n      ipAddress\n      items\n      ownerId\n      address\n      properties\n    }\n  }\n",{storeId:t}));case 3:if(null===(a=e.sent).data.getStore){e.next=8;break}return e.abrupt("return",JSON.parse(a.data.getStore.items));case 8:return e.abrupt("return",null);case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log("error finding store...",e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();A.b.configure(F);var W=function(e){var t=r.a.useState(!1),a=Object(g.a)(t,2),n=a[0],o=a[1],c=r.a.useState(""),s=Object(g.a)(c,2),i=s[0],l=s[1],u=r.a.useState(""),d=Object(g.a)(u,2),p=d[0],f=d[1],x=r.a.useState(0),k=Object(g.a)(x,2),y=k[0],C=k[1],O=r.a.useState(!1),S=Object(g.a)(O,2),j=S[0],I=S[1],A=r.a.useState(null),F=Object(g.a)(A,2),N=F[0],U=F[1],W=r.a.useState("Welcome, please verify your phone"),q=Object(g.a)(W,2),z=q[0],L=q[1],M=r.a.useState(!1),Q=Object(g.a)(M,2),$=Q[0],J=Q[1],Z=Math.random().toString(10)+"Abc#",B=Object(m.g)(),G=new URLSearchParams(Object(m.h)().search),V=function(){return"+1"+i.replace(/\s|\(|\)|-/g,"")},D=function(){var e=Object(v.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.signIn(V());case 3:(t=e.sent)&&U(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),"UserNotFoundException"===e.t0.code?Y():(console.log(e.t0.code),console.log("error signing in:",e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(v.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("new sign up"),e.prev=1,e.next=4,R.a.signUp({username:V(),password:Z,attributes:{phone_number:V()}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("error signing up:",e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var t=Object(v.a)(h.a.mark((function t(){var a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.a.sendCustomChallengeAnswer(N,p);case 3:if(!(a=t.sent)){t.next=16;break}if(e.setUser(a),U(null),console.log("verify success"),!G.get("store")){t.next=15;break}return J(!0),L("Loading the store"),t.next=13,P(G.get("store"));case 13:(n=t.sent)&&e.setStoreItems(n);case 15:B.push("/store");case 16:t.next=25;break;case 18:return t.prev=18,t.t0=t.catch(0),L("Authentication fail, new code sent"),t.next=23,D();case 23:f(""),console.log(t.t0);case 25:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(){return t.apply(this,arguments)}}();r.a.useEffect((function(){y>0&&setTimeout((function(){return C(y-1)}),1e3)}),[y]);var K=n?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{id:"verification-code",label:"Input code",size:"small",onChange:function(e){f(e.target.value)},autoComplete:"off"}),r.a.createElement(E.a,{variant:"contained",style:{margin:"10px"},disabled:!p,onClick:H},"Verify")):null;return r.a.createElement("div",{className:"App-header"},r.a.createElement("img",{src:T.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",null,r.a.createElement("p",null,z)),r.a.createElement("div",null,$?r.a.createElement(w.a,null):null),r.a.createElement("div",null,r.a.createElement(_,{numberText:i,setNumberText:l,inputError:j}),r.a.createElement(E.a,{onClick:function(){12===V().length?(D(),L("Verify with SMS code"),I(!1),o(!0),C(10)):(I(!0),L("Please input valid phone number"))},variant:"contained",style:{margin:"10px"},disabled:0!==y},n?"Resend".concat(y?"(".concat(y,")"):""):"Send")),r.a.createElement("div",null,K),r.a.createElement("div",{style:{paddingTop:"20px"}},G.get("store")?"Current store #".concat(G.get("store")):"Not a valid store"))},q=a(136),z=a(138),L=a.n(z),M=a(137),Q=a.n(M),$=a(250),J=a(251),Z=a(256),B=a(252),G=function(e){var t=e.item,a=e.addToCart,n=e.deleteFromCart,o=e.itemNumber,c=r.a.useState(0),s=Object(g.a)(c,2),i=s[0],l=s[1];r.a.useEffect((function(){o&&l(o)}),[o]);var u=0===i,d=i===t.maxQuantity;return r.a.createElement("div",null,r.a.createElement($.a,{variant:"outlined"},r.a.createElement(J.a,{avatar:r.a.createElement(Z.a,{src:t.img,alt:t.name}),title:t.name,subheader:"Price:$ ".concat(t.price," Available: ").concat(t.maxQuantity),action:r.a.createElement("div",null,r.a.createElement(B.a,{size:"small",onClick:function(){i-1>=0&&(l(i-1),n(t.id))},disabled:u},r.a.createElement(Q.a,null)),i,r.a.createElement(B.a,{size:"small",onClick:function(){i+1<=t.maxQuantity&&(l(i+1),a(t.id))},disabled:d},r.a.createElement(L.a,null)))})))},V=a(62),D=Object(q.a)("pk_test_Wks4vayZlORiZoodc5IA0RhA00RaDpuklR"),Y=function(e){var t=e.cart,a=e.addToCart,n=e.deleteFromCart,o=e.items,c=Object(m.g)(),s=r.a.useState(""),i=Object(g.a)(s,2),l=i[0],u=i[1];r.a.useEffect((function(){var e=new URLSearchParams(window.location.search);e.get("success")&&u("Order placed! You will receive an email confirmation."),e.get("canceled")&&u("Order canceled -- continue to shop around and checkout when you're ready.")}),[]);var d=o?o.filter((function(e){return!!(t.has(e.id)&&t.get(e.id)>0)})):[],p=function(){var e=Object(v.a)(h.a.mark((function e(){var a,n,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d.forEach((function(e){e.number=t.get(e.id)})),a={response:!0,body:{items:d},headers:{}},e.prev=2,e.next=5,V.a.post("stripeIntegration","/stripe",a);case 5:return n=e.sent,console.log("setupIntents",n),e.next=9,D;case 9:return r=e.sent,e.next=12,null===r||void 0===r?void 0:r.redirectToCheckout({sessionId:n.data.id});case 12:null===(o=e.sent)||void 0===o||o.error,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),console.log("error",e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(){return e.apply(this,arguments)}}(),f=o?o.filter((function(e){return!!(t.has(e.id)&&t.get(e.id)>0)})).map((function(e,o){return r.a.createElement(G,{key:o,addToCart:a,deleteFromCart:n,item:e,itemNumber:t.get(e.id)})})):r.a.createElement("div",null,"Unable to get store items");return l?r.a.createElement("div",null,r.a.createElement("p",null,l),r.a.createElement("button",{onClick:function(){c.push("/")}},"return")):r.a.createElement("div",null,r.a.createElement("div",null,f),r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement("button",{onClick:p},"Checkout")))},H=function(e){var t=Object(m.g)(),a=e.items?e.items.map((function(t,a){return r.a.createElement(G,{key:a,addToCart:e.addToCart,deleteFromCart:e.deleteFromCart,item:t})})):r.a.createElement("div",{style:{textAlign:"center"}},"Unable to load store items");return r.a.createElement("div",null,r.a.createElement("div",null),r.a.createElement("div",{style:{marginTop:"60px",textAlign:"left"}},a),r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement(E.a,{onClick:function(){t.push("/checkout")}},"Show Cart")))},K=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).setUser=function(e){n.setState({user:e})},n.setStoreItem=function(e){n.setState({storeItems:e})},n.addToCart=function(e){n.state.cart.has(e)?n.setState({cart:n.state.cart.set(e,n.state.cart.get(e)+1)}):n.setState({cart:n.state.cart.set(e,1)})},n.deleteFromCart=function(e){n.state.cart.has(e)&&n.setState({cart:n.state.cart.set(e,n.state.cart.get(e)-1)})},n.PrivateRoute=function(e){var t=e.component,a=e.data,o=Object(s.a)(e,["component","data"]);return r.a.createElement(m.b,Object.assign({},o,{render:function(e){return Object.keys(n.state.user).length>0?r.a.createElement(t,Object.assign({},e,a)):r.a.createElement(m.a,{to:"/"})}}))},n.state={user:{bypass:!0},cart:new Map,storeItems:null},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{basename:"/travtailgopwa"},r.a.createElement("div",{className:"App"},r.a.createElement(m.d,null,r.a.createElement(this.PrivateRoute,{component:Y,data:{addToCart:this.addToCart,deleteFromCart:this.deleteFromCart,items:this.state.storeItems,cart:this.state.cart},path:"/checkout"}),r.a.createElement(this.PrivateRoute,{component:H,data:{addToCart:this.addToCart,deleteFromCart:this.deleteFromCart,items:this.state.storeItems},path:"/store"}),r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(W,{setUser:e.setUser,setStoreItems:e.setStoreItem})}}))))}}]),a}(r.a.Component),X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/travtailgopwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/travtailgopwa","/service-worker.js");X?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ee(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ee(t,e)}))}}()},96:function(e,t,a){}},[[159,1,2]]]);
//# sourceMappingURL=main.20c151ad.chunk.js.map