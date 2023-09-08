var e,t,r,n,i,o,a,s,c,u,l,d,p,h,f,g,v,m,y,b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=b.parcelRequire3a11;null==E&&((E=function(e){if(e in w)return w[e].exports;if(e in k){var t=k[e];delete k[e];var r={id:e,exports:{}};return w[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){k[e]=t},b.parcelRequire3a11=E);var S={},M={},O=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
M=O("object"==typeof globalThis&&globalThis)||O("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
O("object"==typeof self&&self)||O("object"==typeof b&&b)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||M||Function("return this")();var L={},j={};// Detect IE8's incomplete defineProperty implementation
L=!(j=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},F={};F=!j(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var x=Function.prototype.call;$=F?x.bind(x):function(){return x.apply(x,arguments)};var P={}.propertyIsEnumerable,T=Object.getOwnPropertyDescriptor;o=T&&!P.call({1:2},1)?function(e){var t=T(this,e);return!!t&&t.enumerable}:P;var q={};q=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var I={},N={},A={},C=Function.prototype,D=C.call,H=F&&C.bind.bind(D,D),R={},z=(A=F?H:function(e){return function(){return D.apply(e,arguments)}})({}.toString),W=A("".slice);R=function(e){return W(z(e),8,-1)};var U=Object,G=A("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
N=j(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!U("z").propertyIsEnumerable(0)})?function(e){return"String"===R(e)?G(e,""):U(e)}:U;var B={},Y={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
Y=function(e){return null==e};var J=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
B=function(e){if(Y(e))throw J("Can't call method on "+e);return e},I=function(e){return N(B(e))};var Q={},V={},K={},X={},Z={},ee="object"==typeof document&&document.all,et=(Z={all:ee,IS_HTMLDDA:void 0===ee&&void 0!==ee}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
X=Z.IS_HTMLDDA?function(e){return"function"==typeof e||e===et}:function(e){return"function"==typeof e};var er=Z.all;K=Z.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:X(e)||e===er}:function(e){return"object"==typeof e?null!==e:X(e)};var en={},ei={};ei=function(e,t){var r;return arguments.length<2?(r=M[e],X(r)?r:void 0):M[e]&&M[e][t]};var eo={};eo=A({}.isPrototypeOf);var ea={},es={},ec={},eu={};eu="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var el=M.process,ed=M.Deno,ep=el&&el.versions||ed&&ed.version,eh=ep&&ep.v8;eh&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(s=(a=eh.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&eu&&(!(a=eu.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=eu.match(/Chrome\/(\d+)/))&&(s=+a[1]),ec=s;var ef=M.String;ea=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(es=!!Object.getOwnPropertySymbols&&!j(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!ef(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&ec&&ec<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eg=Object;en=ea?function(e){return"symbol"==typeof e}:function(e){var t=ei("Symbol");return X(t)&&eo(t.prototype,eg(e))};var ev={},em={},ey={},eb=String;ey=function(e){try{return eb(e)}catch(e){return"Object"}};var e_=TypeError;// `Assert: IsCallable(argument) is true`
em=function(e){if(X(e))return e;throw e_(ey(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
ev=function(e,t){var r=e[t];return Y(r)?void 0:em(r)};var ew={},ek=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
ew=function(e,t){var r,n;if("string"===t&&X(r=e.toString)&&!K(n=$(r,e))||X(r=e.valueOf)&&!K(n=$(r,e))||"string"!==t&&X(r=e.toString)&&!K(n=$(r,e)))return n;throw ek("Can't convert object to primitive value")};var eE={},eS={};eS=!1;var eM={},eO={},eL=Object.defineProperty;eO=function(e,t){try{eL(M,e,{value:t,configurable:!0,writable:!0})}catch(r){M[e]=t}return t};var ej="__core-js_shared__";eM=M[ej]||eO(ej,{}),(eE=function(e,t){return eM[e]||(eM[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.1",mode:eS?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",source:"https://github.com/zloirock/core-js"});var e$={},eF={},ex=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
eF=function(e){return ex(B(e))};var eP=A({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
e$=Object.hasOwn||function(e,t){return eP(eF(e),t)};var eT={},eq=0,eI=Math.random(),eN=A(1..toString);eT=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eN(++eq+eI,36)};var eA=M.Symbol,eC=eE("wks"),eD=ea?eA.for||eA:eA&&eA.withoutSetter||eT,eH=TypeError,eR=(e$(eC,e="toPrimitive")||(eC[e]=es&&e$(eA,e)?eA[e]:eD("Symbol."+e)),eC[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
V=function(e,t){if(!K(e)||en(e))return e;var r,n=ev(e,eR);if(n){if(void 0===t&&(t="default"),r=$(n,e,t),!K(r)||en(r))return r;throw eH("Can't convert object to primitive value")}return void 0===t&&(t="number"),ew(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
Q=function(e){var t=V(e,"string");return en(t)?t:t+""};var ez={},eW={},eU=M.document,eG=K(eU)&&K(eU.createElement);eW=function(e){return eG?eU.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
ez=!L&&!j(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eW("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eB=Object.getOwnPropertyDescriptor;i=L?eB:function(e,t){if(e=I(e),t=Q(t),ez)try{return eB(e,t)}catch(e){}if(e$(e,t))return q(!$(o,e,t),e[t])};var eY={},eJ={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eJ=L&&j(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eQ={},eV=String,eK=TypeError;// `Assert: Type(argument) is Object`
eQ=function(e){if(K(e))return e;throw eK(eV(e)+" is not an object")};var eX=TypeError,eZ=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,e1="enumerable",e2="configurable",e3="writable";c=L?eJ?function(e,t,r){if(eQ(e),t=Q(t),eQ(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e3 in r&&!r[e3]){var n=e0(e,t);n&&n[e3]&&(e[t]=r.value,r={configurable:e2 in r?r[e2]:n[e2],enumerable:e1 in r?r[e1]:n[e1],writable:!1})}return eZ(e,t,r)}:eZ:function(e,t,r){if(eQ(e),t=Q(t),eQ(r),ez)try{return eZ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eX("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eY=L?function(e,t,r){return c(e,t,q(1,r))}:function(e,t,r){return e[t]=r,e};var e4={},e7={},e9=Function.prototype,e8=L&&Object.getOwnPropertyDescriptor,e5=e$(e9,"name")&&(!L||L&&e8(e9,"name").configurable),e6={},te=A(Function.toString);X(eM.inspectSource)||(eM.inspectSource=function(e){return te(e)}),e6=eM.inspectSource;var tt={},tr={},tn=M.WeakMap;tr=X(tn)&&/native code/.test(String(tn));var ti={},to=eE("keys");ti=function(e){return to[e]||(to[e]=eT(e))};var ta={};ta={};var ts="Object already initialized",tc=M.TypeError,tu=M.WeakMap;if(tr||eM.state){var tl=eM.state||(eM.state=new tu);/* eslint-disable no-self-assign -- prototype methods protection */tl.get=tl.get,tl.has=tl.has,tl.set=tl.set,/* eslint-enable no-self-assign -- prototype methods protection */u=function(e,t){if(tl.has(e))throw tc(ts);return t.facade=e,tl.set(e,t),t},l=function(e){return tl.get(e)||{}},d=function(e){return tl.has(e)}}else{var tp=ti("state");ta[tp]=!0,u=function(e,t){if(e$(e,tp))throw tc(ts);return t.facade=e,eY(e,tp,t),t},l=function(e){return e$(e,tp)?e[tp]:{}},d=function(e){return e$(e,tp)}}var th=(tt={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!K(t)||(r=l(t)).type!==e)throw tc("Incompatible receiver, "+e+" required");return r}}}).enforce,tf=tt.get,tg=String,tv=Object.defineProperty,tm=A("".slice),ty=A("".replace),tb=A([].join),t_=L&&!j(function(){return 8!==tv(function(){},"length",{value:8}).length}),tw=String(String).split("String"),tk=e7=function(e,t,r){"Symbol("===tm(tg(t),0,7)&&(t="["+ty(tg(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!e$(e,"name")||e5&&e.name!==t)&&(L?tv(e,"name",{value:t,configurable:!0}):e.name=t),t_&&r&&e$(r,"arity")&&e.length!==r.arity&&tv(e,"length",{value:r.arity});try{r&&e$(r,"constructor")&&r.constructor?L&&tv(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=th(e);return e$(n,"source")||(n.source=tb(tw,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tk(function(){return X(this)&&tf(this).source||e6(this)},"toString"),e4=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(X(r)&&e7(r,o,n),n.global)i?e[t]=r:eO(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tE={},tS={},tM={},tO={},tL={},tj={},t$=Math.ceil,tF=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tj=Math.trunc||function(e){var t=+e;return(t>0?tF:t$)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tL=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tj(t)};var tx=Math.max,tP=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tO=function(e,t){var r=tL(e);return r<0?tx(r+t,0):tP(r,t)};var tT={},tq={},tI=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tq=function(e){return e>0?tI(tL(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tT=function(e){return tq(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tN=function(e){return function(t,r,n){var i,o=I(t),a=tT(o),s=tO(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tA={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tN(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tN(!1)}.indexOf,tC=A([].push);tM=function(e,t){var r,n=I(e),i=0,o=[];for(r in n)!e$(ta,r)&&e$(n,r)&&tC(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)e$(n,r=t[i++])&&(~tA(o,r)||tC(o,r));return o};var tD=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tM(e,tD)},h=Object.getOwnPropertySymbols;var tH=A([].concat);// all object keys, includes non-enumerable and symbols
tS=ei("Reflect","ownKeys")||function(e){var t=p(eQ(e));return h?tH(t,h(e)):t},tE=function(e,t,r){for(var n=tS(t),o=0;o<n.length;o++){var a=n[o];e$(e,a)||r&&e$(r,a)||c(e,a,i(t,a))}};var tR={},tz=/#|\.prototype\./,tW=function(e,t){var r=tG[tU(e)];return r===tY||r!==tB&&(X(t)?j(t):!!t)},tU=tW.normalize=function(e){return String(e).replace(tz,".").toLowerCase()},tG=tW.data={},tB=tW.NATIVE="N",tY=tW.POLYFILL="P";tR=tW,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/S=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?M:l?M[c]||eO(c,{}):(M[c]||{}).prototype)for(n in t){// contained in target
if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tR(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tE(a,o)}(e.sham||o&&o.sham)&&eY(a,"sham",!0),e4(r,n,a,e)}};var tJ={},tQ={},tV=Function.prototype,tK=tV.apply,tX=tV.call;// eslint-disable-next-line es/no-reflect -- safe
tQ="object"==typeof Reflect&&Reflect.apply||(F?tX.bind(tK):function(){return tX.apply(tK,arguments)});var tZ={},t0={},t1=(t0=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===R(e))return A(e)})(t0.bind);// optional / simple context binding
tZ=function(e,t){return em(e),void 0===t?e:F?t1(e,t):function(){return e.apply(t,arguments)}};var t2={};t2=ei("document","documentElement");var t3={};t3=A([].slice);var t4={},t7=TypeError;t4=function(e,t){if(e<t)throw t7("Not enough arguments");return e};var t9={};// eslint-disable-next-line redos/no-vulnerable -- safe
t9=/(?:ipad|iphone|ipod).*applewebkit/i.test(eu);var t8={};t8="process"===R(M.process);var t5=M.setImmediate,t6=M.clearImmediate,re=M.process,rt=M.Dispatch,rr=M.Function,rn=M.MessageChannel,ri=M.String,ro=0,ra={},rs="onreadystatechange";j(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
f=M.location});var rc=function(e){if(e$(ra,e)){var t=ra[e];delete ra[e],t()}},ru=function(e){return function(){rc(e)}},rl=function(e){rc(e.data)},rd=function(e){// old engines have not location.origin
M.postMessage(ri(e),f.protocol+"//"+f.host)};t5&&t6||(t5=function(e){t4(arguments.length,1);var t=X(e)?e:rr(e),r=t3(arguments,1);return ra[++ro]=function(){tQ(t,void 0,r)},g(ro),ro},t6=function(e){delete ra[e]},t8?g=function(e){re.nextTick(ru(e))}:rt&&rt.now?g=function(e){rt.now(ru(e))}:rn&&!t9?(m=(v=new rn).port2,v.port1.onmessage=rl,g=tZ(m.postMessage,m)):M.addEventListener&&X(M.postMessage)&&!M.importScripts&&f&&"file:"!==f.protocol&&!j(rd)?(g=rd,M.addEventListener("message",rl,!1)):g=rs in eW("script")?function(e){t2.appendChild(eW("script"))[rs]=function(){t2.removeChild(this),rc(e)}}:function(e){setTimeout(ru(e),0)});var rp=(tJ={set:t5,clear:t6}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
S({global:!0,bind:!0,enumerable:!0,forced:M.clearImmediate!==rp},{clearImmediate:rp});var rh=tJ.set,rf={},rg={};/* global Bun -- Deno case */rg="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rv=M.Function,rm=/MSIE .\./.test(eu)||rg&&((t=M.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rf=function(e,t){var r=t?2:1;return rm?function(n,i/* , ...arguments */){var o=t4(arguments.length,1)>r,a=X(n)?n:rv(n),s=o?t3(arguments,r):[],c=o?function(){tQ(a,this,s)}:a;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var ry=M.setImmediate?rf(rh,!1):rh;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
S({global:!0,bind:!0,enumerable:!0,forced:M.setImmediate!==ry},{setImmediate:ry});const rb="https://forkify-api.herokuapp.com/api/v2/recipes/",r_="dcd5ead4-5bce-495c-8638-2c12460fe637",rw=async(e,t)=>{try{let r=t?fetch(e,{method:"POST",//headers information about request itself
headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.data} ${i.status}`);return i}catch(e){throw e}}// export const getJSON = async (url) => {
,rk={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookMarks:[]},rE=e=>{let{recipe:t}=e;return{id:t.id,title:t.title,publisher:t.publisher,sourceURL:t.soure_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}// add property key if it exists
}},rS=async e=>{try{// const response = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=67ba5058-2d87-4be0-9da8-284779f91248');
let t=await rw(`${rb}${e}?key=${r_}`);rk.recipe=rE(t.data),rk.bookMarks.some(t=>t.id===e)?rk.recipe.bookMarked=!0:rk.recipe.bookMarked=!1}catch(e){throw console.log("error",e),e}},rM=async e=>{try{rk.search.query=e;let t=await rw(`${rb}?search=${e}&key=${r_}`);rk.search.results=t.data.recipes.map(e=>({id:e.id,image:e.image_url,publisher:e.publisher,title:e.title})),rk.search.page=1}catch(e){throw e}},rO=(e=rk.search.page)=>{rk.search.page=e;let t=(e-1)*rk.search.resultsPerPage,r=e*rk.search.resultsPerPage-1;return rk.search.results.slice(t,r)},rL=e=>{rk.recipe.ingredients.forEach(t=>{t.quantity=t.quantity/rk.recipe.servings*e}),rk.recipe.servings=e},rj=()=>{localStorage.setItem("bookmarks",JSON.stringify(rk.bookMarks))},r$=e=>{rk.bookMarks.push(e),e.id===rk.recipe.id&&(rk.recipe.bookMarked=!0),rj()},rF=e=>{let t=rk.bookMarks.findIndex(t=>t.id===e);rk.bookMarks.splice(t,1),rk.recipe.id===e&&(rk.recipe.bookMarked=!1),rj()};(()=>{let e=localStorage.getItem("bookmarks");e&&(rk.bookMarks=JSON.parse(e))})();const rx=async e=>{try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw Error("Wrong ingredient format. Please use the correct format");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rw(`${rb}?key=${r_}`,r);rk.recipe=rE(n.data),r$(rk.recipe)}catch(e){throw e}};var rP={};rP=new URL(E("27Lyk").resolve("hfd23"),import.meta.url).toString();class rT{_data;/**
   * Render the received object to the dom
   * @param {Object | Object[]} data
   * @param {*} render
  */render(e,t=!0){this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}showSpinner(){let e=`
      <div class="spinner">
      <svg>
        <use href="${/*@__PURE__*/_(rP)}#icon-loader"></use>
      </svg>
    </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
             <use href="${/*@__PURE__*/_(rP)}#icon-alert-triangle"></use>
          </svg>
        </div>
          <p>${e}</p>
       </div> 
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._successMessage){let t=`
      <div class="error">
        <div>
          <svg>
             <use href="${/*@__PURE__*/_(rP)}#icon-smile"></use>
          </svg>
        </div>
          <p>${e}</p>
       </div> 
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}}var rq={};rq=new URL(E("27Lyk").resolve("eyyUD"),import.meta.url).toString(),(Fraction=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,i=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var o=r.split("/");this.numerator=o[0],this.denominator=o[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),//this.numerator *= scaleup;
this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),//this.numerator *= scaleup;
this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
},y=Fraction;class rI extends rT{_parentElement=document.querySelector(".recipe");_errorMessage="We can't find such recipe with this id. Please try another one";_successMessage="";handleRender(e=this._errorMessage){["hashchange","load"].forEach(t=>window.addEventListener(t,e));// publisher
}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--tiny");if(!r)return;let n=r.dataset.updateTo;e(n)})}addHandlerAddBookMark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
       <figure class="recipe__fig">
      <img src="${this._data.image}" class="recipe__img" /> 
     <h1 class="recipe__title">
       <span>${this._data.title}</span>
     </h1>
        </figure>

      <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/_(rq)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/_(rq)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings" data-update-to="${1==+this._data.servings?1:+this._data.servings-1}">
            <svg>
              <use href="${/*@__PURE__*/_(rq)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings" data-update-to="${+this._data.servings+1}">
            <svg>
              <use href="${/*@__PURE__*/_(rq)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
              <use href="${/*@__PURE__*/_(rq)}#icon-user"></use>
          </svg>
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${/*@__PURE__*/_(rq)}#icon-bookmark${this._data.bookMarked?"-fill":(this._data.bookMarked,"")}"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">


       ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.sourceURL}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${/*@__PURE__*/_(rq)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `}_generateMarkupIngredient(e){return`
        <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${/*@__PURE__*/_(rq)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?new y(e.quantity).toString():""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit}</span>
          ${e.description}
        </div>
      </li>
        `}}var rN=new rI,rA=new class extends rT{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
    <li class="preview">
          <a class="preview__link ${e===this._data.id?"preview__link--active":""}" href="#${this._data.id}">
            <figure class="preview__fig">
              <img src="${this._data.image}" alt="Test" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${this._data.title}</h4>
              <p class="preview__publisher">${this._data.publisher}</p>
              <div class="preview__user-generated">
                <svg>
                  <use href="${/*@__PURE__*/_(rP)}#icon-user"></use>
                </svg>
              </div>
              <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                  <use href="${/*@__PURE__*/_(rP)}#icon-user"></use>
                </svg>
              </div>
            </div>
            
          </a>
        </li>
    `}};class rC extends rT{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again";_generateMarkup(){return this._data.map(e=>rA.render(e,!1)).join("")}}var rD=new rC;class rH{_parentElement=document.querySelector(".search");getQuery(){return this._parentElement.querySelector(".search__field").value}addHandlerSearch(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault(),e(),this._clearInput()})}_clearInput(){this._parentElement.querySelector(".search__field").value=""}}var rR=new rH;class rz extends rT{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=Math.round(this._data.results.length/this._data.resultsPerPage);return(// We are on 1 page and there are pages
1===this._data.page&&e>1?`
          <button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">
              <span>Page ${this._data.page+1}</span>
                <svg class="search__icon">
                  <use href="${/*@__PURE__*/_(rP)}#icon-arrow-right"></use>
                </svg>
          </button>            
      `:this._data.page===e?`
              <button data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">
                  <svg class="search__icon">
                    <use href="${/*@__PURE__*/_(rP)}#icon-arrow-left"></use>
                  </svg>
                  <span>Page ${this._data.page-1}</span>
              </button>
             `:this._data.page>1&&this._data.page<e?`<button data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">
                  <svg class="search__icon">
                    <use href="${/*@__PURE__*/_(rP)}#icon-arrow-left"></use>
                  </svg>
                  <span>Page ${this._data.page-1}</span>
              </button>
                <button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">
                    <span>Page ${this._data.page+1}</span>
                      <svg class="search__icon">
                        <use href="${/*@__PURE__*/_(rP)}#icon-arrow-right"></use>
                      </svg>
                </button>            
              `:"")}}var rW=new rz;class rU extends rT{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks added. Find a nice recipe and bookmark it";handleRender(e){window.addEventListener("load",e)}_generateMarkup(){return 0===this._data.length?this.renderError(this._errorMessage):this._data.map(e=>rA.render(e,!1)).join("")}}var rG=new rU;class rB extends rT{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_btnUpload=document.querySelector(".upload__btn");_successMessage="You successfully added your recipe";constructor(){super(),this._addHandlerShowWindow(),this._closeModal();// this.handleSubmit();
}toggleWindow(){this._window.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_closeModal(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}handleSubmit(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}_generateMarkup(){}}var rY=new rB,rJ=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new L(o||[]),s=p,function(r,i){if(s===h)throw Error("Generator is already running");if(s===f){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=h;var u=d(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?f:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=f,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",f="completed",g={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function v(){}function m(){}function y(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(j([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=y.prototype=v.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,s)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function M(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(M,this),this.reset(!0)}function j(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=j,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),g}},e}({});try{regeneratorRuntime=rJ}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rJ:Function("r","regeneratorRuntime = r")(rJ)}const rQ=async()=>{try{let e=window.location.hash.slice(1);if(!e)return;rN.showSpinner(),rD.update(rO()),rG.update(rk.bookMarks),await rS(e),rN.render(rk.recipe),rG.update(rk.bookMarks)}catch(e){console.log("error",e),rN.renderError()}};rQ();const rV=async()=>{try{rD.showSpinner();let e=rR.getQuery();if(!e)return;await rM(e),rD.render(rO(1)),rW.render(rk.search)}catch(e){console.log(e)}},rK=async e=>{try{rY.showSpinner(),await rx(e),rN.render(rk.recipe),rY.renderMessage(),rG.render(rk.bookMarks),// change id in the url
window.history.pushState(null,"",`#${rk.recipe.id}`)// it allows us to change url without reloading the page
,setTimeout(()=>{rY.toggleWindow()},1500)}catch(e){console.log(e),rY.renderError(e)}// function that uploads recipe
};rG.handleRender(()=>{rG.render(rk.bookMarks)}),rN.handleRender(rQ),rR.addHandlerSearch(rV),rW.addHandlerClick(e=>{rD.render(rO(e)),rW.render(rk.search)}),rN.addHandlerUpdateServings(e=>{// Update the recipe servings in state
rL(e),rN.update(rk.recipe)}),rN.addHandlerAddBookMark(()=>{rk.recipe?.bookMarked?(rF(rk.recipe.id),rN.update(rk.recipe),rG.render(rk.bookMarks,!1)):(r$(rk.recipe),rN.update(rk.recipe),rG.render(rk.bookMarks))}),rY.handleSubmit(rK);//# sourceMappingURL=index.40d869d2.js.map

//# sourceMappingURL=index.40d869d2.js.map
