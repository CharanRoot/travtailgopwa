(this["webpackJsonptravtail-pwa"]=this["webpackJsonptravtail-pwa"]||[]).push([[0],{115:function(e,t,n){e.exports=n.p+"static/media/Travtail.d50df39a.png"},140:function(e,t,n){e.exports=n(189)},145:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),i=(n(145),n(74)),s=n(109),u=n(110),l=n(125),p=n(124),d=n(14),f=n(67),m=n(26),v=n.n(m),h=n(46),g=n(39),b=n(229),w=n(231),E=n(111),k=n.n(E),x=n(232),j=n(233),O=n(227),y=n(234),_=function(e){var t=e.inputRef,n=Object(i.a)(e,["inputRef"]);return r.a.createElement(k.a,Object.assign({},n,{ref:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){t(e?e.inputElement:null)})),mask:["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholderChar:"\u2000",showMask:!0}))},S=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement(j.a,{htmlFor:"phone-number"},"Phone Number"),r.a.createElement(O.a,{autoFocus:!0,error:e.inputError,value:e.numberText,onChange:function(t){e.setNumberText(t.target.value)},name:"textmask",id:"phone-number-mask-input",inputComponent:_,startAdornment:r.a.createElement(y.a,{position:"start"},"+1")})))},C=n(115),A=n.n(C),R=n(13),U=n(37),W={aws_project_region:"us-east-1",aws_cognito_identity_pool_id:"us-east-1:39c1b6b3-8451-44c8-8ff4-36a925c09b32",aws_cognito_region:"us-east-1",aws_user_pools_id:"us-east-1_b81z2jnAQ",aws_user_pools_web_client_id:"65c53478dqfertlmbtdrtq9399",oauth:{},aws_cloud_logic_custom:[{name:"stripeIntegration",endpoint:"https://ve0xisbmb1.execute-api.us-east-1.amazonaws.com/dev",region:"us-east-1"}]};R.b.configure(W);var N=function(e){var t=r.a.useState(!1),n=Object(g.a)(t,2),a=n[0],o=n[1],c=r.a.useState(""),i=Object(g.a)(c,2),s=i[0],u=i[1],l=r.a.useState(""),p=Object(g.a)(l,2),f=p[0],m=p[1],E=r.a.useState(0),k=Object(g.a)(E,2),x=k[0],j=k[1],O=r.a.useState(!1),y=Object(g.a)(O,2),_=y[0],C=y[1],R=r.a.useState(null),W=Object(g.a)(R,2),N=W[0],T=W[1],I=Math.random().toString(10)+"Abc#",P=Object(d.g)(),F=function(){return"+1"+s.replace(/\s|\(|\)|-/g,"")},z=function(){var e=Object(h.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(12!==F().length){e.next=14;break}return C(!1),e.prev=2,e.next=5,U.a.signIn(F());case 5:(t=e.sent)&&T(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),"UserNotFoundException"===e.t0.code?L():(console.log(e.t0.code),console.log("error signing in:",e.t0));case 12:e.next=15;break;case 14:C(!0);case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(h.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("new sign up"),e.prev=1,e.next=4,U.a.signUp({username:F(),password:I,attributes:{phone_number:F()}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("error signing up:",e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var t=Object(h.a)(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U.a.sendCustomChallengeAnswer(N,f);case 3:(n=t.sent)&&(e.setUser(n),T(null),console.log("verify success"),P.push("/checkout")),t.next=13;break;case 7:return t.prev=7,t.t0=t.catch(0),t.next=11,z();case 11:m(""),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),q=function(){var e=Object(h.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),j(10),e.next=4,z();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r.a.useEffect((function(){x>0&&setTimeout((function(){return j(x-1)}),1500)}),[x]);var B=a?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{id:"verification-code",label:"Input code",size:"small",onChange:function(e){m(e.target.value)}}),r.a.createElement(w.a,{variant:"contained",style:{margin:"10px"},disabled:!f,onClick:M},"Verify")):null;return r.a.createElement("div",null,r.a.createElement("img",{src:A.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",null,r.a.createElement("p",null,"Welcome, please verify your phone")),r.a.createElement("div",null,r.a.createElement(S,{numberText:s,setNumberText:u,inputError:_}),r.a.createElement(w.a,{onClick:q,variant:"contained",style:{margin:"10px"},disabled:0!==x},a?"Resend".concat(x?"(".concat(x,")"):""):"Send")),r.a.createElement("div",null,B),r.a.createElement("div",null))},T=n(120),I=n(230),P=Object(T.a)("pk_test_Wks4vayZlORiZoodc5IA0RhA00RaDpuklR"),F=function(){var e=Object(d.g)(),t=r.a.useState(""),n=Object(g.a)(t,2),a=n[0],o=n[1];r.a.useEffect((function(){var e=new URLSearchParams(window.location.search);e.get("success")&&o("Order placed! You will receive an email confirmation."),e.get("canceled")&&o("Order canceled -- continue to shop around and checkout when you're ready.")}),[]);var c=function(){var e=Object(h.a)(v.a.mark((function e(){var t,n,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={response:!0,body:{},headers:{}},e.prev=1,e.next=4,I.a.post("stripeIntegration","/stripe",t);case 4:return n=e.sent,console.log("setupIntents",n),e.next=8,P;case 8:return a=e.sent,e.next=11,null===a||void 0===a?void 0:a.redirectToCheckout({sessionId:n.data.id});case 11:null===(r=e.sent)||void 0===r||r.error,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log("error",e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}();return a?r.a.createElement("div",null,r.a.createElement("p",null,a),r.a.createElement("button",{onClick:function(){e.push("/")}},"return")):r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{onClick:c},"Checkout")))},z=(n(188),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).setUser=function(e){a.setState({user:e})},a.PrivateRoute=function(e){var t=e.component,n=Object(i.a)(e,["component"]);return console.log("Object.keys(object1)",a.state.user),r.a.createElement(d.b,Object.assign({},n,{render:function(e){return Object.keys(a.state.user).length>0?r.a.createElement(t,e):r.a.createElement(d.a,{to:"/"})}}))},a.state={user:{}},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(f.a,{basename:"/travtailgopwa"},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(){return r.a.createElement(N,{setUser:e.setUser})}}),r.a.createElement(this.PrivateRoute,{path:"/checkout",component:F})))))}}]),n}(r.a.Component)),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/travtailgopwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/travtailgopwa","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):M(t,e)}))}}()}},[[140,1,2]]]);
//# sourceMappingURL=main.f01b4d69.chunk.js.map