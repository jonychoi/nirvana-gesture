(this["webpackJsonpnirvana-gesture"]=this["webpackJsonpnirvana-gesture"]||[]).push([[0],{263:function(e,t,n){},269:function(e,t){},270:function(e,t){},278:function(e,t){},281:function(e,t){},282:function(e,t){},284:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);for(var i=n(49),r=n.n(i),a=n(234),c=n.n(a),o=(n(263),n(5)),s=n.n(o),l=n(11),u=n(4),d=(n(285),n(256)),g=n(257),f=n.n(g),h=n(42),j=function(e){var t=e.webcamRef,n=e.canvasRef;return Object(h.jsxs)("div",{className:"posecanvas",style:{transform:"scale(-1, 1)",height:480/1.7},children:[Object(h.jsx)(f.a,{ref:t,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zIndex:10,width:640/1.7,height:480/1.7}}),Object(h.jsx)("canvas",{ref:n,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zIndex:10,width:640/1.7,height:480/1.7}})]})},p=(n(284),{thumb:[0,1,2,3,4],indexFinger:[0,5,6,7,8],middleFinger:[0,9,10,11,12],ringFinger:[0,13,14,15,16],pinky:[0,17,18,19,20]}),b=function(e,t){e.length>0&&e.forEach((function(e){for(var n=e.landmarks,i=0;i<Object.keys(p).length;i++)for(var r=Object.keys(p)[i],a=0;a<p[r].length-1;a++){var c=p[r][a],o=p[r][a+1];t.beginPath(),t.moveTo(n[c][0],n[c][1]),t.lineTo(n[o][0],n[o][1]),t.strokeStyle="plum",t.lineWidth=4,t.stroke()}for(var s=0;s<n.length;s++){var l=n[s][0],u=n[s][1];t.beginPath(),t.arc(l,u,5,0,3*Math.PI),t.fillStyle="#00dcff",t.fill()}}))},m=n(37),v=new m.GestureDescription("paper"),x=0,O=[m.Finger.Thumb,m.Finger.Index,m.Finger.Middle,m.Finger.Ring,m.Finger.Pinky];x<O.length;x++){var F=O[x];v.addCurl(F,m.FingerCurl.NoCurl,.9),v.addDirection(F,m.FingerDirection.VerticalUp,.9)}for(var w=new m.GestureDescription("rock"),y=0,k=[m.Finger.Thumb,m.Finger.Index,m.Finger.Middle,m.Finger.Ring,m.Finger.Pinky];y<k.length;y++){var D=k[y];w.addCurl(D,m.FingerCurl.FullCurl,1),w.addDirection(D,m.FingerDirection.VerticaDown,.55)}for(var C=new m.GestureDescription("left"),R=0,S=[m.Finger.Thumb,m.Finger.Index,m.Finger.Middle,m.Finger.Ring,m.Finger.Pinky];R<S.length;R++){var I=S[R];C.addCurl(I,m.FingerCurl.NoCurl,.75),C.addDirection(I,m.FingerDirection.DiagonalUpLeft,.75),C.addDirection(I,m.FingerDirection.HorizontalLeft,.75)}for(var M=new m.GestureDescription("right"),L=0,P=[m.Finger.Thumb,m.Finger.Index,m.Finger.Middle,m.Finger.Ring,m.Finger.Pinky];L<P.length;L++){var T=P[L];M.addCurl(T,m.FingerCurl.NoCurl,.75),M.addDirection(T,m.FingerDirection.DiagonalUpRight,.75),M.addDirection(T,m.FingerDirection.HorizontalRight,.75)}var z=function(){var e=Object(l.a)(s.a.mark((function e(t,n,i,r){var a,c,o,l,u,d,g,f,h;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof n.current||null===n.current||4!==n.current.video.readyState){e.next=20;break}return a=n.current.video,c=n.current.video.videoWidth,o=n.current.video.videoHeight,n.current.video.width=c,n.current.video.height=o,i.current.width=c,i.current.height=o,e.next=10,t.estimateHands(a);case 10:if(l=e.sent,console.log("this is",l[0].landmarks),!(l.length>0)){e.next=18;break}return u=new m.GestureEstimator([C,M,w,v]),e.next=16,u.estimate(l[0].landmarks,4);case 16:void 0!==(d=e.sent).gestures&&d.gestures.length>0&&(console.log(d.gestures),g=d.gestures.map((function(e){return e.confidence})),f=g.indexOf(Math.max.apply(null,g)),console.log(d.gestures[f]),r(d.gestures[f].name));case 18:h=i.current.getContext("2d"),b(l,h);case 20:case"end":return e.stop()}}),e)})));return function(t,n,i,r){return e.apply(this,arguments)}}(),E=function(e){var t=e.src,n=e.id,i=e.select;return Object(h.jsx)("div",{style:{width:i===n?225:150,height:i===n?330:220,marginLeft:20,marginRight:20,overflow:"hidden",color:"white",backgroundColor:"white",textAlign:"center",justifyContent:"center",transition:"all 300ms"},children:Object(h.jsx)("img",{alt:"poster",src:t,style:{width:"100%",height:"100%",objectFit:"cover"}})})},G=n.p+"static/media/1.d45df112.jpg",H=n.p+"static/media/2.a6bd5bbb.jpg",N=n.p+"static/media/3.711032e0.jpg",A=n.p+"static/media/4.4e78807b.jpg",W=n.p+"static/media/5.f22c965f.jpg",U=n.p+"static/media/6.477caece.jpg",J=n.p+"static/media/7.e6aa15a8.jpg",V=n.p+"static/media/8.c58922f4.jpg",B=n.p+"static/media/9.c1d9f561.jpg",X=n.p+"static/media/10.7e8bb2e9.png",Y=n.p+"static/media/11.17512b37.jpg",q=[G,H,N,A,W,U,J,V,B,X,Y,G,H,N,A,W,U,J,V,B,X,Y,G,H,N,A,W,U,J,V,B,X,Y,G,H,N,A,W,U,J,V,B,X,Y],K=function(e){var t=e.gesture,n=e.isLoaded,r=Object(i.useRef)(null),a=Object(i.useState)(0),c=Object(u.a)(a,2),o=c[0],s=c[1],l=Object(i.useState)(!1),d=Object(u.a)(l,2),g=d[0],f=d[1],j=Object(i.useState)(null),p=Object(u.a)(j,2),b=p[0],m=p[1],v=Object(i.useState)("left 300ms"),x=Object(u.a)(v,2),O=x[0],F=x[1];return Object(i.useEffect)((function(){!function(){if("paper"===t)m(!!g),f(!1),m(null);else if("rock"===t)f(!0),function(){var e=Math.floor(q.length/2),t=r.current.offsetWidth;console.log(Math.floor(e+o/t*e)),m(o>0?Math.floor(e+o/t*e)+7:Math.floor(e-o/t*e)+7)}(),F("left 0ms");else if("left"!==t||g){if("right"===t&&!g){F("left 300ms"),f(!1),s(o-15)}}else{F("left 300ms"),f(!1),s(o+15)}}()}),[t,o,b,g]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{style:{width:"100%",height:300,position:"relative",display:"flex",overflowY:"hidden",overflowX:"scroll",backgroundColor:"black",alignItems:"center",justifyContent:"center"},children:[!n&&Object(h.jsx)("h3",{style:{weight:700,color:"white"},children:"Detector Loading..."}),Object(h.jsx)("div",{ref:r,style:{left:o,transition:O,position:"relative",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",alignSelf:"center",justifySelf:"center",height:"100%"},children:q.map((function(e,t){return Object(h.jsx)(E,{select:b,src:e,id:t},t)}))})]}),Object(h.jsx)("h1",{style:{fontWeight:"700",fontSize:50,color:"white",marginTop:25},children:b?"selected":"diselected"})]})};var Q=function(){var e=Object(i.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)(!1),c=Object(u.a)(a,2),o=c[0],g=c[1],f=Object(i.useRef)(null),p=Object(i.useRef)(null),b=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a();case 2:t=e.sent,console.log("Handpose model loaded"),g(!0),setInterval((function(){z(t,f,p,r)}),10);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){b()}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(K,{gesture:n,isLoaded:o}),Object(h.jsx)(j,{webcamRef:f,canvasRef:p})]})};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(Q,{})}),document.getElementById("root"))}},[[286,1,2]]]);
//# sourceMappingURL=main.9d2c48cb.chunk.js.map