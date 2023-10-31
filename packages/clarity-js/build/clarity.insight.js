!function(){"use strict";var t=Object.freeze({__proto__:null,get queue(){return Me},get start(){return Ee},get stop(){return Te},get track(){return be}}),e=Object.freeze({__proto__:null,get clone(){return Ze},get compute(){return Ge},get data(){return Ye},get keys(){return Re},get reset(){return Fe},get start(){return Je},get stop(){return Qe},get trigger(){return Be},get update(){return Ke}}),n=Object.freeze({__proto__:null,get check(){return rn},get compute(){return on},get data(){return qe},get start(){return nn},get stop(){return un},get trigger(){return an}}),r=Object.freeze({__proto__:null,get compute(){return hn},get data(){return cn},get log(){return fn},get reset(){return pn},get start(){return ln},get stop(){return dn},get updates(){return sn}}),a=Object.freeze({__proto__:null,get callbacks(){return vn},get clear(){return xn},get consent(){return _n},get data(){return gn},get id(){return kn},get metadata(){return bn},get save(){return On},get shortid(){return Tn},get start(){return yn},get stop(){return wn}}),o=Object.freeze({__proto__:null,get data(){return Hn},get envelope(){return Wn},get start(){return Cn},get stop(){return Dn}}),i={projectId:null,delay:1e3,lean:!1,track:!0,content:!0,drop:[],mask:[],unmask:[],regions:[],cookies:[],fraud:!0,checksum:[],report:null,upload:null,fallback:null,upgrade:null,action:null,dob:null};function u(t){return window.Zone&&"__symbol__"in window.Zone?window.Zone.__symbol__(t):t}var c=0;function s(t){void 0===t&&(t=null);var e=t&&t.timeStamp>0?t.timeStamp:performance.now();return Math.max(Math.round(e-c),0)}var l="0.7.13";var d=/\S/gi,f=!0,h=null,p=null,g=null;function v(t,e,n,r){if(void 0===r&&(r=!1),t)switch(n){case 0:return t;case 1:switch(e){case"*T":case"value":case"placeholder":case"click":return function(t){var e=-1,n=0,r=!1,a=!1,o=!1,i=null;_();for(var u=0;u<t.length;u++){var c=t.charCodeAt(u);if(r=r||c>=48&&c<=57,a=a||64===c,o=9===c||10===c||13===c||32===c,0===u||u===t.length-1||o){if(r||a){null===i&&(i=t.split(""));var s=t.substring(e+1,o?u:u+1);s=f&&null!==g?s.match(g)?s:b(s,"▪","▫"):w(s),i.splice(e+1-n,s.length,s),n+=s.length-1}o&&(r=!1,a=!1,e=u)}}return i?i.join(""):t}(t);case"input":case"change":return k(t)}return t;case 2:case 3:switch(e){case"*T":case"data-":return r?y(t):w(t);case"src":case"srcset":case"title":case"alt":return 3===n?"":t;case"value":case"click":case"input":case"change":return k(t);case"placeholder":return w(t)}break;case 4:switch(e){case"*T":case"data-":return r?y(t):w(t);case"value":case"input":case"click":case"change":return Array(5).join("•");case"checksum":return""}break;case 5:switch(e){case"*T":case"data-":return b(t,"▪","▫");case"value":case"input":case"click":case"change":return Array(5).join("•");case"checksum":case"src":case"srcset":case"alt":case"title":return""}}return t}function m(t,e){if(void 0===e&&(e=!1),e)return"".concat("https://").concat("Electron");var n=i.drop;if(n&&n.length>0&&t&&t.indexOf("?")>0){var r=t.split("?"),a=r[0],o=r[1];return a+"?"+o.split("&").map((function(t){return n.some((function(e){return 0===t.indexOf("".concat(e,"="))}))?"".concat(t.split("=")[0],"=").concat("*na*"):t})).join("&")}return t}function y(t){var e=t.trim();if(e.length>0){var n=e[0],r=t.indexOf(n),a=t.substr(0,r),o=t.substr(r+e.length);return"".concat(a).concat(e.length.toString(36)).concat(o)}return t}function w(t){return t.replace(d,"•")}function b(t,e,n){return _(),t?t.replace(p,e).replace(h,n):t}function k(t){for(var e=5*(Math.floor(t.length/5)+1),n="",r=0;r<e;r++)n+=r>0&&r%5==0?" ":"•";return n}function _(){if(f&&null===h)try{h=new RegExp("\\p{N}","gu"),p=new RegExp("\\p{L}","gu"),g=new RegExp("\\p{Sc}","gu")}catch(t){f=!1}}var x=null,O=null,E=!1;function M(){E&&(x={time:s(),event:4,data:{visible:O.visible,docWidth:O.docWidth,docHeight:O.docHeight,screenWidth:O.screenWidth,screenHeight:O.screenHeight,scrollX:O.scrollX,scrollY:O.scrollY,pointerX:O.pointerX,pointerY:O.pointerY,activityTime:O.activityTime}}),O=O||{visible:1,docWidth:0,docHeight:0,screenWidth:0,screenHeight:0,scrollX:0,scrollY:0,pointerX:0,pointerY:0,activityTime:0}}function T(t,e,n){switch(t){case 8:O.docWidth=e,O.docHeight=n;break;case 11:O.screenWidth=e,O.screenHeight=n;break;case 10:O.scrollX=e,O.scrollY=n;break;default:O.pointerX=e,O.pointerY=n}E=!0}function N(t){O.activityTime=t}function S(t,e){O.visible="visible"===e?1:0,O.visible||N(t),E=!0}var I=Object.freeze({__proto__:null,activity:N,compute:function(){},reset:M,start:function(){E=!1,M()},get state(){return x},stop:function(){M()},track:T,visibility:S});function j(t,e){tr()&&t&&"string"==typeof t&&t.length<255&&e&&"string"==typeof e&&e.length}var A,H=null,C=null;function D(t){t in H||(H[t]=0),t in C||(C[t]=0),H[t]++,C[t]++}function W(t,e){null!==e&&(t in H||(H[t]=0),t in C||(C[t]=0),H[t]+=e,C[t]+=e)}function z(t,e){null!==e&&!1===isNaN(e)&&(t in H||(H[t]=0),(e>H[t]||0===H[t])&&(C[t]=e,H[t]=e))}function X(t,e,n){return window.setTimeout(qn(t),e,n)}function q(t){return window.clearTimeout(t)}var Y=0,R=0,P=null;function L(){P&&q(P),P=X(U,R),Y=s()}function U(){var t=s();(A={gap:t-Y}).gap<3e5?P=X(U,R):Kn&&(j("clarity","suspend"),or(),["mousemove","touchstart"].forEach((function(t){return Rn(document,t,nr)})),["resize","scroll","pageshow"].forEach((function(t){return Rn(window,t,nr)})))}var V=Object.freeze({__proto__:null,get data(){return A},reset:L,start:function(){R=6e4,Y=0},stop:function(){q(P),Y=0,R=0}}),J=null;var B=Object.freeze({__proto__:null,compute:function(){},get data(){return J},reset:function(){J={}},start:function(){J={}},stop:function(){J={}},track:function(t,e){if(t in J){var n=J[t],r=n[n.length-1];e-r[0]>100?J[t].push([e,0]):r[1]=e-r[0]}else J[t]=[[e,0]]}}),Z=null;function G(t){tr()&&i.lean&&(i.lean=!1,Z={key:t},On(),i.upgrade&&i.upgrade(t))}var F=Object.freeze({__proto__:null,get data(){return Z},start:function(){!i.lean&&i.upgrade&&i.upgrade("Config"),Z=null},stop:function(){Z=null},upgrade:G});function K(t,e,n,r){return new(n||(n=Promise))((function(a,o){function i(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}c((r=r.apply(t,e||[])).next())}))}function Q(t,e){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&u[0]?r.return:u[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,u[1])).done)return a;switch(r=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){i.label=u[1];break}if(6===u[0]&&i.label<a[1]){i.label=a[1],a=u;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(u);break}a[2]&&i.ops.pop(),i.trys.pop();continue}u=e.call(t,i)}catch(t){u=[6,t],r=0}finally{n=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}var $=null;function tt(t,e){nt(t,"string"==typeof e?[e]:e)}function et(t,e,n,r){return void 0===e&&(e=null),void 0===n&&(n=null),void 0===r&&(r=null),K(this,void 0,void 0,(function(){var a,o;return Q(this,(function(i){switch(i.label){case 0:return o={},[4,at(t)];case 1:return o.userId=i.sent(),o.userHint=r||((u=t)&&u.length>=5?"".concat(u.substring(0,2)).concat(b(u.substring(2),"*","*")):b(u,"*","*")),nt("userId",[(a=o).userId]),nt("userHint",[a.userHint]),nt("userType",[ot(t)]),e&&(nt("sessionId",[e]),a.sessionId=e),n&&(nt("pageId",[n]),a.pageId=n),[2,a]}var u}))}))}function nt(t,e){if(tr()&&t&&e&&"string"==typeof t&&t.length<255){for(var n=(t in $?$[t]:[]),r=0;r<e.length;r++)"string"==typeof e[r]&&e[r].length<255&&n.push(e[r]);$[t]=n}}function rt(){$={}}function at(t){return K(this,void 0,void 0,(function(){var e;return Q(this,(function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),crypto&&t?[4,crypto.subtle.digest("SHA-256",(new TextEncoder).encode(t))]:[3,2];case 1:return e=n.sent(),[2,Array.prototype.map.call(new Uint8Array(e),(function(t){return("00"+t.toString(16)).slice(-2)})).join("")];case 2:return[2,""];case 3:return[3,5];case 4:return n.sent(),[2,""];case 5:return[2]}}))}))}function ot(t){return t&&t.indexOf("@")>0?"email":"string"}var it="CompressionStream"in window;function ut(t){return K(this,void 0,void 0,(function(){var e,n;return Q(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),it?(e=new ReadableStream({start:function(e){return K(this,void 0,void 0,(function(){return Q(this,(function(n){return e.enqueue(t),e.close(),[2]}))}))}}).pipeThrough(new TextEncoderStream).pipeThrough(new window.CompressionStream("gzip")),n=Uint8Array.bind,[4,ct(e)]):[3,2];case 1:return[2,new(n.apply(Uint8Array,[void 0,r.sent()]))];case 2:return[3,4];case 3:return r.sent(),[3,4];case 4:return[2,null]}}))}))}function ct(t){return K(this,void 0,void 0,(function(){var e,n,r,a,o;return Q(this,(function(i){switch(i.label){case 0:e=t.getReader(),n=[],r=!1,a=[],i.label=1;case 1:return r?[3,3]:[4,e.read()];case 2:return o=i.sent(),r=o.done,a=o.value,r?[2,n]:(n.push.apply(n,a),[3,1]);case 3:return[2,n]}}))}))}var st,lt=[I,r,Object.freeze({__proto__:null,compute:function(){},get data(){return $},identify:et,reset:rt,set:tt,start:function(){rt()},stop:function(){rt()}}),n,B,a,o,t,V,F,e];function dt(){H={},C={},D(5),lt.forEach((function(t){return qn(t.start)()}))}function ft(){lt.slice().reverse().forEach((function(t){return qn(t.stop)()})),H={},C={}}function ht(t){return K(this,void 0,void 0,(function(){var e,n,r,a,o,i,u,c,l,d,f,h,p;return Q(this,(function(g){switch(e=s(),n=[e,t],t){case 8:r=st,n.push(r.width),n.push(r.height),T(t,r.width,r.height),Me(n);break;case 43:if((a=$t).length>0){for(o=0,i=a;o<i.length;o++)for(u=i[o],c=u.metadata.privacy,l=u.data,d=0,f=["tag","attributes","value"];d<f.length;d++)if(l[h=f[d]])switch(h){case"tag":n.push(u.id),u.parent&&n.push(u.parent),u.previous&&n.push(u.previous),n.push(l[h]);break;case"attributes":for(p in l[h])void 0!==l[h][p]&&n.push(pt(p,l[h][p],c));break;case"value":n.push(v(l[h],l.tag,c))}Me(function(t){for(var e=[],n={},r=0,a=null,o=0;o<t.length;o++)if("string"==typeof t[o]){var i=t[o],u=n[i]||-1;u>=0?a?a.push(u):(a=[u],e.push(a),r++):(a=null,e.push(i),n[i]=r++)}else a=null,e.push(t[o]),r++;return e}(n),!0)}}return[2]}))}))}function pt(t,e,n){return"".concat(t,"=").concat(v(e,0===t.indexOf("data-")?"data-":t,n))}function gt(){st=null}function vt(){var t,e,n,r,a,o,i,u,c,s,l,d,f,h,p,g;gt(),t=document.body,e=document.documentElement,n=t?t.clientWidth:null,r=t?t.scrollWidth:null,a=t?t.offsetWidth:null,o=e?e.clientWidth:null,i=e?e.scrollWidth:null,u=e?e.offsetWidth:null,c=Math.max(n,r,a,o,i,u),s=t?t.clientHeight:null,l=t?t.scrollHeight:null,d=t?t.offsetHeight:null,f=e?e.clientHeight:null,h=e?e.scrollHeight:null,p=e?e.offsetHeight:null,g=Math.max(s,l,d,f,h,p),null!==st&&c===st.width&&g===st.height||null===c||null===g||(st={width:c,height:g},ht(8))}var mt=[],yt=null;var wt=Object.freeze({__proto__:null,compute:function(){},data:yt,log:function(){},observe:function(){},reset:function(){},start:function(){},state:mt,stop:function(){}}),bt=[],kt=null,_t=null,xt=null;function Ot(){bt=[],kt=null,_t=null}function Et(t,e){return void 0===e&&(e=0),K(this,void 0,void 0,(function(){var n,r,a;return Q(this,(function(o){for(n=0,r=bt;n<r.length;n++)if(r[n].task===t)return[2];return a=new Promise((function(n){bt[1===e?"unshift":"push"]({task:t,resolve:n,id:kn()})})),null===kt&&null===_t&&Mt(),[2,a]}))}))}function Mt(){var t=bt.shift();t&&(kt=t,t.task().then((function(){t.id===kn()&&(t.resolve(),kt=null,Mt())})).catch((function(e){t.id===kn()&&(e&&Xe(0,1,e.name,e.message,e.stack),kt=null,Mt())})))}var Tt,Nt=["input","textarea","radio","button","canvas"],St=[];function It(t){Rn(t,"click",jt.bind(this,9,t),!0)}function jt(t,e,n){var r=document.documentElement,a="pageX"in n?Math.round(n.pageX):"clientX"in n?Math.round(n.clientX+r.scrollLeft):null,o="pageY"in n?Math.round(n.pageY):"clientY"in n?Math.round(n.clientY+r.scrollTop):null,i=ae(n),u=function(t){for(;t&&t!==document;){if(t.nodeType===Node.ELEMENT_NODE){var e=t;if("A"===e.tagName)return e}t=t.parentNode}return null}(i),c=function(t){var e=null,n=document.documentElement;if("function"==typeof t.getBoundingClientRect){var r=t.getBoundingClientRect();r&&r.width>0&&r.height>0&&(e={x:Math.floor(r.left+("pageXOffset"in window?window.pageXOffset:n.scrollLeft)),y:Math.floor(r.top+("pageYOffset"in window?window.pageYOffset:n.scrollTop)),w:Math.floor(r.width),h:Math.floor(r.height)})}return e}(i);0===n.detail&&c&&(a=Math.round(c.x+c.w/2),o=Math.round(c.y+c.h/2));var l=c?Math.max(Math.floor((a-c.x)/c.w*32767),0):0,d=c?Math.max(Math.floor((o-c.y)/c.h*32767),0):0;null!==a&&null!==o&&(St.push({time:s(n),event:t,data:{target:i,x:a,y:o,eX:l,eY:d,button:n.button,reaction:Ht(i),context:Ct(u),text:At(i),link:u?u.href:null,hash:null,trust:n.isTrusted?1:0}}),Et(de.bind(this,t)))}function At(t){var e=null;if(t){var n=t.textContent||t.value||t.alt;n&&(e=n.replace(/\s+/g," ").trim().substr(0,25))}return e}function Ht(t){if(t.nodeType===Node.ELEMENT_NODE){var e=t.tagName.toLowerCase();if(Nt.indexOf(e)>=0)return 0}return 1}function Ct(t){if(t&&t.hasAttribute("target"))switch(t.getAttribute("target")){case"_blank":return 1;case"_parent":return 2;case"_top":return 3}return 0}function Dt(){St=[]}function Wt(){var t=document.documentElement;Tt={width:t&&"clientWidth"in t?Math.min(t.clientWidth,window.innerWidth):window.innerWidth,height:t&&"clientHeight"in t?Math.min(t.clientHeight,window.innerHeight):window.innerHeight},de(11)}function zt(){Tt=null}var Xt=[],qt=null;function Yt(t){void 0===t&&(t=null);var e=window,n=document.documentElement,r=t?ae(t):n;if(r&&r.nodeType===Node.DOCUMENT_NODE){r=n=r.documentElement}var a=r===n&&"pageXOffset"in e?Math.round(e.pageXOffset):Math.round(r.scrollLeft),o=r===n&&"pageYOffset"in e?Math.round(e.pageYOffset):Math.round(r.scrollTop),i={time:s(t),event:10,data:{target:r,x:a,y:o}};if((null!==t||0!==a||0!==o)&&null!==a&&null!==o){var u=Xt.length,c=u>1?Xt[u-2]:null;c&&function(t,e){var n=t.data.x-e.data.x,r=t.data.y-e.data.y;return n*n+r*r<400&&e.time-t.time<25}(c,i)&&Xt.pop(),Xt.push(i),q(qt),qt=X(Rt,500,10)}}function Rt(t){Et(de.bind(this,t))}var Pt,Lt,Ut=[];function Vt(t){Ut.push({time:s(t),event:39,data:{target:ae(t)}}),Et(de.bind(this,39))}function Jt(){Ut=[]}function Bt(t){Pt={name:t.type},de(26,s(t)),or()}function Zt(){Pt=null}function Gt(t){void 0===t&&(t=null),Lt={visible:"visibilityState"in document?document.visibilityState:"default"},de(28,s(t))}function Ft(){Lt=null}function Kt(t){!function(t){Rn(t===document?window:t,"scroll",Yt,!0)}(t),t.nodeType===Node.DOCUMENT_NODE&&(It(t),function(t){Rn(t,"submit",Vt,!0)}(t))}var Qt=Object.freeze({__proto__:null,observe:Kt,start:function(){fe=[],pe(),Dt(),Rn(window,"resize",Wt),Wt(),Rn(document,"visibilitychange",Gt),Gt(),Xt=[],Yt(),Jt(),Rn(window,"pagehide",Bt)},stop:function(){fe=[],pe(),Dt(),zt(),Ft(),q(qt),Xt=[],Jt(),Zt()}}),$t=[],te=1,ee=null;function ne(){return!1}function re(){}function ae(t){var e=t.composed&&t.composedPath?t.composedPath():null,n=e&&e.length>0?e[0]:t.target;return n.nodeType===Node.DOCUMENT_NODE?n.documentElement:n}function oe(t){var e={id:0,hash:null,privacy:5,node:t};return t&&(e.id=ee.has(t)?ee.get(t):ce(t)),e}function ie(){ee=new WeakMap}function ue(t){var e={},n=t.attributes;if(n&&n.length>0)for(var r=0;r<n.length;r++)e[n[r].name]=n[r].value;return e}function ce(t){return null===t?null:ee.has(t)?ee.get(t):(ee.set(t,te),te++)}function se(t,e,n){if(t&&n&&n.tag){var r=ce(t),a=e?ee.get(e):null,o=t.previousSibling?ee.get(t.previousSibling):null;$t.push({id:r,parent:a,previous:o,children:[],data:n,selector:null,hash:null,region:null,metadata:{active:!0,suspend:!1,privacy:5,position:null,fraud:null,size:null}})}}var le=Object.freeze({__proto__:null,compute:function(){},hashText:re,iframe:ne,metadata:oe,offset:function(){return{x:0,y:0}},snapshot:function(){$t=[],function(t){var e=[t];for(;e.length>0;){for(var n=null,r=null,a=null,o=e.shift(),i=o.firstChild,u=o.parentElement?o.parentElement:o.parentNode?o.parentNode:null;i;)e.push(i),i=i.nextSibling;switch(o.nodeType){case Node.DOCUMENT_TYPE_NODE:var c=o;r="*D",n={name:c.name,publicId:c.publicId,systemId:c.systemId};break;case Node.TEXT_NODE:a=o.nodeValue,r=ee.get(u)?"*T":r;break;case Node.ELEMENT_NODE:var s=o;n=ue(s),r=["NOSCRIPT","SCRIPT","STYLE"].indexOf(s.tagName)<0?s.tagName:r}se(o,u,{tag:r,attributes:n,value:a})}}(document),ht(43)},start:function(){ie(),vt(),ce(document.documentElement),Kt(document)},stop:function(){ie(),gt()},target:ae,get values(){return $t}});function de(t,e){return void 0===e&&(e=null),K(this,void 0,void 0,(function(){var n,r,a,o,i,u,c,l,d,f,h,p,g,y,w,b,k,_,x,O,E,M,N,I,j,A,H,C,D,W,z;return Q(this,(function(X){switch(n=e||s(),r=[n,t],t){case 13:case 14:case 12:case 15:case 16:case 17:case 18:case 19:case 20:for(a=0,o=mt;a<o.length;a++)W=o[a],(i=oe(W.data.target,W.event)).id>0&&((r=[W.time,W.event]).push(i.id),r.push(W.data.x),r.push(W.data.y),Me(r),T(W.event,W.data.x,W.data.y));break;case 9:for(u=0,c=St;u<c.length;u++)W=c[u],l=oe(W.data.target,W.event,W.data.text),r=[W.time,W.event],d=l.hash?l.hash.join("."):"",r.push(l.id),r.push(W.data.x),r.push(W.data.y),r.push(W.data.eX),r.push(W.data.eY),r.push(W.data.button),r.push(W.data.reaction),r.push(W.data.context),r.push(v(W.data.text,"click",l.privacy)),r.push(m(W.data.link)),r.push(d),r.push(W.data.trust),Me(r),ge(W.time,W.event,d,W.data.x,W.data.y,W.data.reaction,W.data.context);Dt();break;case 38:for(f=0,h=mt;f<h.length;f++)W=h[f],r=[W.time,W.event],(H=oe(W.data.target,W.event)).id>0&&(r.push(H.id),r.push(W.data.action),Me(r));break;case 11:p=Tt,r.push(p.width),r.push(p.height),T(t,p.width,p.height),zt(),Me(r);break;case 26:g=Pt,r.push(g.name),Zt(),Me(r);break;case 27:for(y=0,w=mt;y<w.length;y++)W=w[y],b=oe(W.data.target,W.event,W.data.value),(r=[W.time,W.event]).push(b.id),r.push(v(W.data.value,"input",b.privacy)),Me(r);break;case 21:(k=yt)&&(_=oe(k.start),x=oe(k.end),r.push(_.id),r.push(k.startOffset),r.push(x.id),r.push(k.endOffset),Me(r));break;case 10:for(O=0,E=Xt;O<E.length;O++)W=E[O],(M=oe(W.data.target,W.event)).id>0&&((r=[W.time,W.event]).push(M.id),r.push(W.data.x),r.push(W.data.y),Me(r),T(W.event,W.data.x,W.data.y));Xt=[];break;case 42:for(N=0,I=mt;N<I.length;N++)W=I[N],r=[W.time,W.event],(H=oe(W.data.target,W.event)).id>0&&((r=[W.time,W.event]).push(H.id),r.push(W.data.type),r.push(v(W.data.value,"change",H.privacy)),r.push(v(W.data.checksum,"checksum",H.privacy)),Me(r));break;case 39:for(j=0,A=Ut;j<A.length;j++)W=A[j],r=[W.time,W.event],(H=oe(W.data.target,W.event)).id>0&&(r.push(H.id),Me(r));Jt();break;case 22:for(C=0,D=he;C<D.length;C++)W=D[C],(r=[W.time,W.event]).push(W.data.type),r.push(W.data.hash),r.push(W.data.x),r.push(W.data.y),r.push(W.data.reaction),r.push(W.data.context),Me(r,!1);pe();break;case 28:z=Lt,r.push(z.visible),Me(r),S(n,z.visible),Ft()}return[2]}))}))}var fe=[],he=[];function pe(){he=[]}function ge(t,e,n,r,a,o,i){void 0===o&&(o=1),void 0===i&&(i=0),fe.push({time:t,event:22,data:{type:e,hash:n,x:r,y:a,reaction:o,context:i}}),T(e,r,a)}var ve,me,ye,we,be,ke=0,_e=0,xe=null,Oe=0;function Ee(){we=!0,ke=0,_e=0,Oe=0,ve=[],me=[],ye={},be=null}function Me(t,e){if(void 0===e&&(e=!0),we){var n=s(),r=t.length>1?t[1]:null,a=JSON.stringify(t);switch(r){case 5:ke+=a.length;case 37:case 6:case 43:_e+=a.length,ve.push(a);break;default:me.push(a)}D(25);var o=function(){var t=!1===i.lean&&ke>0?100:Hn.sequence*i.delay;return"string"==typeof i.upload?Math.max(Math.min(t,3e4),100):i.delay}();n-Oe>2*o&&(q(xe),xe=null),e&&null===xe&&(25!==r&&L(),xe=X(Ne,o),Oe=n,rn(_e))}}function Te(){q(xe),Ne(!0),ke=0,_e=0,Oe=0,ve=[],me=[],ye={},be=null,we=!1}function Ne(t){return void 0===t&&(t=!1),K(this,void 0,void 0,(function(){var e,n,r,a,o,u,c,s;return Q(this,(function(l){switch(l.label){case 0:return xe=null,(e=!1===i.lean&&_e>0&&(_e<1048576||Hn.sequence>0))&&z(1,1),function(){var t=[];he=[];for(var e=Hn.start+Hn.duration,n=Math.max(e-2e3,0),r=0,a=fe;r<a.length;r++){var o=a[r];o.time>=n&&(o.time<=e&&he.push(o),t.push(o))}fe=t,de(22)}(),on(),Ge(),n=!0===t,r=JSON.stringify(Wn(n)),a="[".concat(me.join(),"]"),o=e?"[".concat(ve.join(),"]"):"",u=function(t){return t.p.length>0?'{"e":'.concat(t.e,',"a":').concat(t.a,',"p":').concat(t.p,"}"):'{"e":'.concat(t.e,',"a":').concat(t.a,"}")}({e:r,a:a,p:o}),n?(s=null,[3,3]):[3,1];case 1:return[4,ut(u)];case 2:s=l.sent(),l.label=3;case 3:return W(2,(c=s)?c.length:u.length),Se(u,c,Hn.sequence,n),me=[],e&&(ve=[],_e=0,ke=0),[2]}}))}))}function Se(t,e,n,r){if(void 0===r&&(r=!1),"string"==typeof i.upload){var a=i.upload,o=!1;if(r&&"sendBeacon"in navigator)try{(o=navigator.sendBeacon.bind(navigator)(a,t))&&je(n)}catch(t){}if(!1===o){n in ye?ye[n].attempts++:ye[n]={data:t,attempts:1};var u=new XMLHttpRequest;u.open("POST",a,!0),u.timeout=15e3,u.ontimeout=function(){Xn(new Error("".concat("Timeout"," : ").concat(a)))},null!==n&&(u.onreadystatechange=function(){qn(Ie)(u,n)}),u.withCredentials=!0,e?(u.setRequestHeader("Accept","application/x-clarity-gzip"),u.send(e)):u.send(t)}}else if(i.upload){(0,i.upload)(t),je(n)}}function Ie(t,e){var n=ye[e];t&&4===t.readyState&&n&&((t.status<200||t.status>208)&&n.attempts<=1?t.status>=400&&t.status<500?an(6):(0===t.status&&(i.upload=i.fallback?i.fallback:i.upload),Se(n.data,null,e)):(be={sequence:e,attempts:n.attempts,status:t.status},n.attempts,200===t.status&&t.responseText&&function(t){for(var e=t&&t.length>0?t.split("\n"):[],n=0,r=e;n<r.length;n++){var a=r[n],o=a&&a.length>0?a.split(/ (.*)/):[""];switch(o[0]){case"END":an(6);break;case"UPGRADE":G("Auto");break;case"ACTION":i.action&&o.length>1&&i.action(o[1]);break;case"EXTRACT":o.length>1&&Be(o[1])}}}(t.responseText),0===t.status&&(Se(n.data,null,e,!0),an(3)),t.status>=200&&t.status<=208&&je(e),delete ye[e]))}function je(t){1===t&&On()}var Ae,He={};function Ce(t){var e=t.error||t;return e.message in He||(He[e.message]=0),He[e.message]++>=5||e&&e.message&&(Ae={message:e.message,line:t.lineno,column:t.colno,stack:e.stack,source:t.filename},De(31)),!0}function De(t){return K(this,void 0,void 0,(function(){var e;return Q(this,(function(n){switch(e=[s(),t],t){case 31:e.push(Ae.message),e.push(Ae.line),e.push(Ae.column),e.push(Ae.stack),e.push(m(Ae.source)),Me(e);break;case 33:We&&(e.push(We.code),e.push(We.name),e.push(We.message),e.push(We.stack),e.push(We.severity),Me(e,!1))}return[2]}))}))}var We,ze={};function Xe(t,e,n,r,a){void 0===n&&(n=null),void 0===r&&(r=null),void 0===a&&(a=null);var o=n?"".concat(n,"|").concat(r):"";t in ze&&ze[t].indexOf(o)>=0||(We={code:t,name:n,message:r,stack:a,severity:e},t in ze?ze[t].push(o):ze[t]=[o],De(33))}var qe,Ye={},Re=new Set,Pe={},Le={},Ue={},Ve={};function Je(){Fe()}function Be(t){try{var e=t&&t.length>0?t.split(/ (.*)/):[""],n=e[0].split(/\|(.*)/),r=parseInt(n[0]),a=n.length>1?n[1]:"",o=e.length>1?JSON.parse(e[1]):{};for(var i in Pe[r]={},Le[r]={},Ue[r]={},Ve[r]=a,o){var u=parseInt(i),c=o[i],s=2;switch(c.startsWith("~")?s=0:c.startsWith("!")&&(s=4),s){case 0:var l=c.substring(1,c.length);Pe[r][u]=$e(l);break;case 2:Le[r][u]=c;break;case 4:var d=c.substring(1,c.length);Ue[r][u]=d}}}catch(t){Xe(8,1,t?t.name:null)}}function Ze(t){return JSON.parse(JSON.stringify(t))}function Ge(){try{for(var t in Pe){var e=parseInt(t);if(""==Ve[e]||document.querySelector(Ve[e])){var n=Pe[e];for(var r in n){var a=parseInt(r),o=(h=tn(Ze(n[a])))?JSON.stringify(h).substring(0,1e4):h;o&&Ke(e,a,o)}var i=Le[e];for(var u in i){var c=parseInt(u),s=document.querySelectorAll(i[c]);if(s)Ke(e,c,Array.from(s).map((function(t){return t.textContent})).join("<SEP>").substring(0,1e4))}var l=Ue[e];for(var d in l){var f=parseInt(d);Ke(e,f,(void l[f]).trim().substring(0,1e4))}}}Re.size}catch(t){Xe(5,1,t?t.name:null)}var h}function Fe(){Re.clear()}function Ke(t,e,n){var r,a=!1;t in Ye||(Ye[t]={},a=!0),r=Ue[t],0==Object.keys(r).length||e in Ye[t]&&Ye[t][e]==n||(a=!0),Ye[t][e]=n,a&&Re.add(t)}function Qe(){Fe()}function $e(t){for(var e=[],n=t.split(".");n.length>0;){var r=n.shift(),a=r.indexOf("["),o=r.indexOf("{"),i=r.indexOf("}");e.push({name:a>0?r.substring(0,a):o>0?r.substring(0,o):r,type:a>0?1:o>0?2:3,condition:o>0?r.substring(o+1,i):null})}return e}function tn(t,e){if(void 0===e&&(e=window),0==t.length)return e;var n,r=t.shift();if(e&&e[r.name]){var a=e[r.name];if(1!==r.type&&en(a,r.condition))n=tn(t,a);else if(Array.isArray(a)){for(var o=[],i=0,u=a;i<u.length;i++){var c=u[i];if(en(c,r.condition)){var s=tn(t,c);s&&o.push(s)}}n=o}return n}return null}function en(t,e){if(e){var n=e.split(":");return n.length>1?t[n[0]]==n[1]:t[n[0]]}return!0}function nn(){qe={check:0}}function rn(t){if(0===qe.check){var e=qe.check;e=Hn.sequence>=128?1:e,e=Hn.pageNum>=128?7:e,e=s()>72e5?2:e,(e=t>10485760?2:e)!==qe.check&&an(e)}}function an(t){qe.check=t,xn(),or()}function on(){qe.check}function un(){qe=null}var cn=null,sn=null;function ln(){cn={},sn={}}function dn(){cn={},sn={}}function fn(t,e){e&&(e="".concat(e),t in cn||(cn[t]=[]),cn[t].indexOf(e)<0&&(cn[t].push(e),t in sn||(sn[t]=[]),sn[t].push(e),cn[t].length>128&&an(5)))}function hn(){}function pn(){sn={}}var gn=null,vn=[],mn=null;function yn(){mn=null;var t,e=navigator&&"userAgent"in navigator?navigator.userAgent:"",n=document&&document.title?document.title:"",r=e.indexOf("Electron")>0?1:0,a=function(){var t={session:Tn(),ts:Math.round(Date.now()),count:1,upgrade:null,upload:""},e=In("_clsk");if(e){var n=e.split("|");n.length>=5&&t.ts-Nn(n[1])<18e5&&(t.session=n[0],t.count=Nn(n[2])+1,t.upgrade=Nn(n[3]),t.upload=n.length>=6?"".concat("https://").concat(n[5],"/").concat(n[4]):"".concat("https://").concat(n[4]))}return t}(),o=Sn(),u=i.projectId||function(t,e){void 0===e&&(e=null);for(var n,r=5381,a=r,o=0;o<t.length;o+=2)r=(r<<5)+r^t.charCodeAt(o),o+1<t.length&&(a=(a<<5)+a^t.charCodeAt(o+1));return n=Math.abs(r+11579*a),(e?n%Math.pow(2,e):n).toString(36)}(location.host);gn={projectId:u,userId:o.id,sessionId:a.session,pageNum:a.count},i.lean=i.track&&null!==a.upgrade?0===a.upgrade:i.lean,i.upload=i.track&&"string"==typeof i.upload&&a.upload&&a.upload.length>8?a.upload:i.upload,fn(0,e),fn(3,n),fn(1,m(location.href,!!r)),fn(2,document.referrer),fn(15,function(){var t=Tn();if(i.track&&En(window,"sessionStorage")){var e=sessionStorage.getItem("_cltk");t=e||t,sessionStorage.setItem("_cltk",t)}return t}()),fn(16,document.documentElement.lang),fn(17,document.dir),fn(26,"".concat(window.devicePixelRatio)),fn(28,o.dob.toString()),fn(29,o.version.toString()),z(0,a.ts),z(1,0),z(35,r),navigator&&(fn(9,navigator.language),z(33,navigator.hardwareConcurrency),z(32,navigator.maxTouchPoints),z(34,Math.round(navigator.deviceMemory)),(t=navigator.userAgentData)&&t.getHighEntropyValues?t.getHighEntropyValues(["model","platform","platformVersion","uaFullVersion"]).then((function(t){var e;fn(22,t.platform),fn(23,t.platformVersion),null===(e=t.brands)||void 0===e||e.forEach((function(t){fn(24,t.name+"~"+t.version)})),fn(25,t.model),z(27,t.mobile?1:0)})):fn(22,navigator.platform)),screen&&(z(14,Math.round(screen.width)),z(15,Math.round(screen.height)),z(16,Math.round(screen.colorDepth)));for(var c=0,s=i.cookies;c<s.length;c++){var l=s[c],d=In(l);d&&tt(l,d)}Mn(o)}function wn(){mn=null,gn=null}function bn(t,e){void 0===e&&(e=!0);var n=i.lean?0:1;gn&&(n||!1===e)?t(gn,!i.lean):vn.push({callback:t,wait:e})}function kn(){return gn?[gn.userId,gn.sessionId,gn.pageNum].join("."):""}function _n(){tr()&&(i.track=!0,Mn(Sn(),1))}function xn(){jn("_clsk","",0)}function On(){var t=Math.round(Date.now()),e=i.upload&&"string"==typeof i.upload?i.upload.replace("https://",""):"",n=i.lean?0:1;!function(t){vn.length>0&&vn.forEach((function(e){!e.callback||e.wait&&!t||e.callback(gn,!i.lean)}))}(n),jn("_clsk",[gn.sessionId,t,gn.pageNum,n,e].join("|"),1)}function En(t,e){try{return!!t[e]}catch(t){return!1}}function Mn(t,e){void 0===e&&(e=null),e=null===e?t.consent:e;var n=Math.ceil((Date.now()+31536e6)/864e5),r=0===t.dob?null===i.dob?0:i.dob:t.dob;(null===t.expiry||Math.abs(n-t.expiry)>=1||t.consent!==e||t.dob!==r)&&jn("_clck",[gn.userId,2,n.toString(36),e,r].join("|"),365)}function Tn(){var t=Math.floor(Math.random()*Math.pow(2,32));return window&&window.crypto&&window.crypto.getRandomValues&&Uint32Array&&(t=window.crypto.getRandomValues(new Uint32Array(1))[0]),t.toString(36)}function Nn(t,e){return void 0===e&&(e=10),parseInt(t,e)}function Sn(){var t={id:Tn(),version:0,expiry:null,consent:0,dob:0},e=In("_clck");if(e&&e.length>0){for(var n=e.split("|"),r=0,a=0,o=document.cookie.split(";");a<o.length;a++){r+="_clck"===o[a].split("=")[0].trim()?1:0}if(1===n.length||r>1){var u="".concat(";").concat("expires=").concat(new Date(0).toUTCString()).concat(";path=/");document.cookie="".concat("_clck","=").concat(u),document.cookie="".concat("_clsk","=").concat(u)}n.length>1&&(t.version=Nn(n[1])),n.length>2&&(t.expiry=Nn(n[2],36)),n.length>3&&1===Nn(n[3])&&(t.consent=1),n.length>4&&Nn(n[1])>1&&(t.dob=Nn(n[4])),i.track=i.track||1===t.consent,t.id=i.track?n[0]:t.id}return t}function In(t){if(En(document,"cookie")){var e=document.cookie.split(";");if(e)for(var n=0;n<e.length;n++){var r=e[n].split("=");if(r.length>1&&r[0]&&r[0].trim()===t)return r[1]}}return null}function jn(t,e,n){if(i.track&&(navigator&&navigator.cookieEnabled||En(document,"cookie"))){var r=new Date;r.setDate(r.getDate()+n);var a=r?"expires="+r.toUTCString():"",o="".concat(t,"=").concat(e).concat(";").concat(a).concat(";path=/");try{if(null===mn){for(var u=location.hostname?location.hostname.split("."):[],c=u.length-1;c>=0;c--)if(mn=".".concat(u[c]).concat(mn||""),c<u.length-1&&(document.cookie="".concat(o).concat(";").concat("domain=").concat(mn),In(t)===e))return;mn=""}}catch(t){mn=""}document.cookie=mn?"".concat(o).concat(";").concat("domain=").concat(mn):o}}var An,Hn=null;function Cn(){var t=gn;Hn={version:l,sequence:0,start:0,duration:0,projectId:t.projectId,userId:t.userId,sessionId:t.sessionId,pageNum:t.pageNum,upload:0,end:0}}function Dn(){Hn=null}function Wn(t){return Hn.start=Hn.start+Hn.duration,Hn.duration=s()-Hn.start,Hn.sequence++,Hn.upload=t&&"sendBeacon"in navigator?1:0,Hn.end=t?1:0,[Hn.version,Hn.sequence,Hn.start,Hn.duration,Hn.projectId,Hn.userId,Hn.sessionId,Hn.pageNum,Hn.upload,Hn.end]}function zn(){An=[]}function Xn(t){if(An&&-1===An.indexOf(t.message)){var e=i.report;if(e&&e.length>0){var n={v:Hn.version,p:Hn.projectId,u:Hn.userId,s:Hn.sessionId,n:Hn.pageNum};t.message&&(n.m=t.message),t.stack&&(n.e=t.stack);var r=new XMLHttpRequest;r.open("POST",e,!0),r.send(JSON.stringify(n)),An.push(t.message)}}return t}function qn(t){return function(){var e=performance.now();try{t.apply(this,arguments)}catch(t){throw Xn(t)}var n=performance.now()-e;W(4,n),n>30&&(D(7),z(6,n))}}var Yn=[];function Rn(t,e,n,r){void 0===r&&(r=!1),n=qn(n);try{t[u("addEventListener")](e,n,r),Yn.push({event:e,target:t,listener:n,capture:r})}catch(t){}}function Pn(){for(var t=0,e=Yn;t<e.length;t++){var n=e[t];try{n.target[u("removeEventListener")](n.event,n.listener,n.capture)}catch(t){}}Yn=[]}var Ln=null,Un=null,Vn=null,Jn=0;function Bn(){return!(Jn++>20)||(Xe(4,0),!1)}function Zn(){Jn=0,Vn!==Fn()&&(or(),window.setTimeout(Gn,250))}function Gn(){ar(),z(29,1)}function Fn(){return location.href?location.href.replace(location.hash,""):location.href}var Kn=!1;function Qn(){Kn=!0,c=performance.now(),Ot(),Pn(),zn(),Vn=Fn(),Jn=0,Rn(window,"popstate",Zn),null===Ln&&(Ln=history.pushState,history.pushState=function(){Ln.apply(this,arguments),tr()&&Bn()&&Zn()}),null===Un&&(Un=history.replaceState,history.replaceState=function(){Un.apply(this,arguments),tr()&&Bn()&&Zn()})}function $n(){Vn=null,Jn=0,zn(),Pn(),Ot(),c=0,Kn=!1}function tr(){return Kn}function er(t){if(null===t||Kn)return!1;for(var e in t)e in i&&(i[e]=t[e]);return!0}function nr(){ar(),j("clarity","restart")}var rr=[Object.freeze({__proto__:null,start:function(){!function(){z(26,navigator.webdriver?1:0);try{z(31,window.top==window.self?1:2)}catch(t){z(31,0)}}(),Rn(window,"error",Ce),He={},ze={}},stop:function(){ze={}}}),le,Qt,wt];function ar(t){void 0===t&&(t=null),function(){try{return!1===Kn&&"undefined"!=typeof Promise&&window.MutationObserver&&document.createTreeWalker&&"now"in Date&&"now"in performance&&"undefined"!=typeof WeakMap}catch(t){return!1}}()&&(er(t),Qn(),dt(),rr.forEach((function(t){return qn(t.start)()})),null===t&&sr())}function or(){tr()&&(rr.slice().reverse().forEach((function(t){return qn(t.stop)()})),ft(),$n(),void 0!==ur&&(ur[cr]=function(){(ur[cr].q=ur[cr].q||[]).push(arguments),"start"===arguments[0]&&ur[cr].q.unshift(ur[cr].q.pop())&&sr()}))}var ir=Object.freeze({__proto__:null,consent:_n,event:j,hashText:re,identify:et,metadata:bn,pause:function(){tr()&&(j("clarity","pause"),null===_t&&(_t=new Promise((function(t){xt=t}))))},resume:function(){tr()&&(_t&&(xt(),_t=null,null===kt&&Mt()),j("clarity","resume"))},set:tt,start:ar,stop:or,upgrade:G,version:l}),ur=window,cr="clarity";function sr(){if(void 0!==ur){if(ur[cr]&&ur[cr].v)return console.warn("Error CL001: Multiple Clarity tags detected.");var t=ur[cr]&&ur[cr].q||[];for(ur[cr]=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return ir[t].apply(ir,e)},ur[cr].v=l;t.length>0;)ur[cr].apply(ur,t.shift())}}sr()}();