// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,h=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,g=/\.0$/,d=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,w,"$1e"),e=p.call(e,d,"e"),e=p.call(e,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,h,"e-0$1"),r.alternate&&(e=p.call(e,y,"$1."),e=p.call(e,v,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function m(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}var N=String.fromCharCode,A=Array.isArray;function E(r){return r!=r}function _(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function U(r){var n,t,e,o,a,f,c,s,p,l,h,y,v;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))f+=e;else{if(n=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,E(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):N(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=b(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,h=e.width,y=e.padRight,v=void 0,(v=h-l.length)<0?l:l=y?l+m(v):m(v)+l)),f+=e.arg||"",c+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function I(r){var n,t,e,i;for(t=[],i=0,e=k.exec(r);e;)(n=r.slice(i,k.lastIndex-e[0].length)).length&&t.push(n),t.push(S(e)),i=k.lastIndex,e=k.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function T(r){var n,t;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[I(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return U.apply(null,n)}var j=Object.prototype,x=j.toString,F=j.__defineGetter__,O=j.__defineSetter__,R=j.__lookupGetter__,V=j.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===x.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===x.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,n)||V.call(r,n)?(e=r.__proto__,r.__proto__=j,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,n,t.get),a&&O&&O.call(r,n,t.set),r};function G(r,n,t){$(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function P(r,n,t){$(r,n,{configurable:!1,enumerable:!1,get:t})}function C(r){return"number"==typeof r}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return H&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString,M=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Z?Z.toStringTag:"",X=W()?function(r){var n,t,e,i,o;if(null==r)return L.call(r);t=r[q],o=q,n=null!=(i=r)&&M.call(i,o);try{r[q]=void 0}catch(n){return L.call(r)}return e=L.call(r),n?r[q]=t:delete r[q],e}:function(r){return L.call(r)},Y=Number,z=Y.prototype.toString,B=W();function D(r){return"object"==typeof r&&(r instanceof Y||(B?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function J(r){return C(r)||D(r)}function K(r){return C(r)&&r>0}function Q(r){return D(r)&&r.valueOf()>0}function rr(r){return K(r)||Q(r)}function nr(r){return r!=r}G(J,"isPrimitive",C),G(J,"isObject",D),G(rr,"isPrimitive",K),G(rr,"isObject",Q);var tr,er="function"==typeof Uint32Array,ir="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,n,t;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(er&&t instanceof Uint32Array||"[object Uint32Array]"===X(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ar,ur=tr,fr="function"==typeof Float64Array,cr="function"==typeof Float64Array?Float64Array:null,sr="function"==typeof Float64Array?Float64Array:void 0;ar=function(){var r,n,t;if("function"!=typeof cr)return!1;try{n=new cr([1,3.14,-3.14,NaN]),t=n,r=(fr&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var pr,lr=ar,hr="function"==typeof Uint8Array,yr="function"==typeof Uint8Array?Uint8Array:null,vr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,n,t;if("function"!=typeof yr)return!1;try{n=new yr(n=[1,3.14,-3.14,256,257]),t=n,r=(hr&&t instanceof Uint8Array||"[object Uint8Array]"===X(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var gr,dr=pr,wr="function"==typeof Uint16Array,br="function"==typeof Uint16Array?Uint16Array:null,mr="function"==typeof Uint16Array?Uint16Array:void 0;gr=function(){var r,n,t;if("function"!=typeof br)return!1;try{n=new br(n=[1,3.14,-3.14,65536,65537]),t=n,r=(wr&&t instanceof Uint16Array||"[object Uint16Array]"===X(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Nr,Ar={uint16:gr,uint8:dr};(Nr=new Ar.uint16(1))[0]=4660;var Er=52===new Ar.uint8(Nr.buffer)[0],_r=!0===Er?1:0,Ur=new lr(1),kr=new ur(Ur.buffer);function Sr(r){return Ur[0]=r,kr[_r]}var Ir=!0===Er?1:0,Tr=new lr(1),jr=new ur(Tr.buffer);function xr(r,n){return Tr[0]=r,jr[Ir]=n>>>0,Tr[0]}var Fr=1023,Or=Y.NEGATIVE_INFINITY,Rr=.6931471803691238,Vr=1.9082149292705877e-10,$r=0x40000000000000,Gr=.3333333333333333,Pr=1048575,Cr=2146435072,Hr=1048576,Wr=1072693248;function Lr(r){var n,t,e,i,o,a,u,f,c,s,p,l;return 0===r?Or:nr(r)||r<0?NaN:(o=0,(t=Sr(r))<Hr&&(o-=54,t=Sr(r*=$r)),t>=Cr?r+r:(o+=(t>>20)-Fr|0,o+=(f=614244+(t&=Pr)&1048576|0)>>20|0,u=(r=xr(r,t|f^Wr))-1,(Pr&2+t)<3?0===u?0===o?0:o*Rr+o*Vr:(a=u*u*(.5-Gr*u),0===o?u-a:o*Rr-(a-o*Vr-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-s*(n+a)):o*Rr-(n-(s*(n+a)+o*Vr)-u)):0===o?u-s*(u-a):o*Rr-(s*(u-a)-o*Vr-u))))}var Mr=.5772156649015329,Zr=Math.floor;function qr(r){return Zr(r)===r}function Xr(r){return Math.abs(r)}var Yr=2147483647,zr=2146435072;function Br(r,n){var t,e,i,o;return i=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*e-r*n))}var Dr=-.16666666666666632,Jr=.00833333333332249,Kr=-.0001984126982985795,Qr=27557313707070068e-22,rn=-2.5050760253406863e-8,nn=1.58969099521155e-10;function tn(r,n){var t,e,i;return t=Jr+(i=r*r)*(Kr+i*Qr)+i*(i*i)*(rn+i*nn),e=i*r,0===n?r+e*(Dr+i*t):r-(i*(.5*n-e*t)-n-e*Dr)}var en,on,an=1048575,un=!0===Er?0:1,fn=new lr(1),cn=new ur(fn.buffer);!0===Er?(en=1,on=0):(en=0,on=1);var sn={HIGH:en,LOW:on},pn=new lr(1),ln=new ur(pn.buffer),hn=sn.HIGH,yn=sn.LOW;function vn(r,n){return ln[hn]=r,ln[yn]=n,pn[0]}var gn=Number.POSITIVE_INFINITY,dn=1023,wn=-1023,bn=-1074;function mn(r){return r===gn||r===Or}var Nn,An,En=2147483648;!0===Er?(Nn=1,An=0):(Nn=0,An=1);var _n={HIGH:Nn,LOW:An},Un=new lr(1),kn=new ur(Un.buffer),Sn=_n.HIGH,In=_n.LOW;function Tn(r,n,t,e){return Un[0]=r,n[e]=kn[Sn],n[e+t]=kn[In],n}function jn(r){return Tn(r,[0,0],1,0)}G(jn,"assign",Tn);var xn=[0,0];function Fn(r,n){var t,e;return jn.assign(r,xn,1,0),t=xn[0],t&=Yr,e=Sr(n),vn(t|=e&=En,xn[1])}var On=22250738585072014e-324,Rn=4503599627370496;function Vn(r,n,t,e){return nr(r)||mn(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Xr(r)<On?(n[e]=r*Rn,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}G((function(r){return Vn(r,[0,0],1,0)}),"assign",Vn);var $n=2220446049250313e-31,Gn=2148532223,Pn=[0,0],Cn=[0,0];function Hn(r,n){var t,e;return 0===n||0===r||nr(r)||mn(r)?r:(Vn(r,Pn,1,0),r=Pn[0],n+=Pn[1],n+=function(r){var n=Sr(r);return(n=(n&zr)>>>20)-Fr|0}(r),n<bn?Fn(0,r):n>dn?r<0?Or:gn:(n<=wn?(n+=52,e=$n):e=1,jn.assign(r,Cn,1,0),t=Cn[0],t&=Gn,e*vn(t|=n+Fr<<20,Cn[1])))}function Wn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ln=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Mn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Zn=16777216,qn=5.960464477539063e-8,Xn=Wn(20),Yn=Wn(20),zn=Wn(20),Bn=Wn(20);function Dn(r,n,t,e,i,o,a,u,f){var c,s,p,l,h,y,v,g,d;for(l=o,d=e[t],g=t,h=0;g>0;h++)s=qn*d|0,Bn[h]=d-Zn*s|0,d=e[g-1]+s,g-=1;if(d=Hn(d,i),d-=8*Zr(.125*d),d-=v=0|d,p=0,i>0?(v+=h=Bn[t-1]>>24-i,Bn[t-1]-=h<<24-i,p=Bn[t-1]>>23-i):0===i?p=Bn[t-1]>>23:d>=.5&&(p=2),p>0){for(v+=1,c=0,h=0;h<t;h++)g=Bn[h],0===c?0!==g&&(c=1,Bn[h]=16777216-g):Bn[h]=16777215-g;if(i>0)switch(i){case 1:Bn[t-1]&=8388607;break;case 2:Bn[t-1]&=4194303}2===p&&(d=1-d,0!==c&&(d-=Hn(1,i)))}if(0===d){for(g=0,h=t-1;h>=o;h--)g|=Bn[h];if(0===g){for(y=1;0===Bn[o-y];y++);for(h=t+1;h<=t+y;h++){for(f[u+h]=Ln[a+h],s=0,g=0;g<=u;g++)s+=r[g]*f[u+(h-g)];e[h]=s}return Dn(r,n,t+=y,e,i,o,a,u,f)}}if(0===d)for(t-=1,i-=24;0===Bn[t];)t-=1,i-=24;else(d=Hn(d,-i))>=Zn?(s=qn*d|0,Bn[t]=d-Zn*s|0,i+=24,Bn[t+=1]=s):Bn[t]=0|d;for(s=Hn(1,i),h=t;h>=0;h--)e[h]=s*Bn[h],s*=qn;for(h=t;h>=0;h--){for(s=0,y=0;y<=l&&y<=t-h;y++)s+=Mn[y]*e[h+y];zn[t-h]=s}for(s=0,h=t;h>=0;h--)s+=zn[h];for(n[0]=0===p?s:-s,s=zn[0]-s,h=1;h<=t;h++)s+=zn[h];return n[1]=0===p?s:-s,7&v}function Jn(r,n,t,e){var i,o,a,u,f,c,s;for((o=(t-3)/24|0)<0&&(o=0),u=t-24*(o+1),c=o-(a=e-1),s=a+4,f=0;f<=s;f++)Xn[f]=c<0?0:Ln[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*Xn[a+(f-c)];Yn[f]=i}return Dn(r,n,4,Yn,u,4,o,a,Xn)}var Kn=Math.round,Qn=.6366197723675814,rt=1.5707963267341256,nt=6077100506506192e-26,tt=6077100506303966e-26,et=20222662487959506e-37,it=20222662487111665e-37,ot=84784276603689e-45,at=2047;function ut(r,n,t){var e,i,o,a,u;return o=r-(e=Kn(r*Qn))*rt,a=e*nt,u=n>>20|0,t[0]=o-a,u-(Sr(t[0])>>20&at)>16&&(a=e*et-((i=o)-(o=i-(a=e*tt))-a),t[0]=o-a,u-(Sr(t[0])>>20&at)>49&&(a=e*ot-((i=o)-(o=i-(a=e*it))-a),t[0]=o-a)),t[1]=o-t[0]-a,e}var ft=0,ct=16777216,st=1.5707963267341256,pt=6077100506506192e-26,lt=2*pt,ht=3*pt,yt=4*pt,vt=598523,gt=1072243195,dt=1073928572,wt=1074752122,bt=1074977148,mt=1075183036,Nt=1075388923,At=1075594811,Et=1094263291,_t=[0,0,0],Ut=[0,0];function kt(r,n){var t,e,i,o,a,u,f;if((i=Sr(r)&Yr|0)<=gt)return n[0]=r,n[1]=0,0;if(i<=wt)return(i&an)===vt?ut(r,i,n):i<=dt?r>0?(f=r-st,n[0]=f-pt,n[1]=f-n[0]-pt,1):(f=r+st,n[0]=f+pt,n[1]=f-n[0]+pt,-1):r>0?(f=r-2*st,n[0]=f-lt,n[1]=f-n[0]-lt,2):(f=r+2*st,n[0]=f+lt,n[1]=f-n[0]+lt,-2);if(i<=At)return i<=mt?i===bt?ut(r,i,n):r>0?(f=r-3*st,n[0]=f-ht,n[1]=f-n[0]-ht,3):(f=r+3*st,n[0]=f+ht,n[1]=f-n[0]+ht,-3):i===Nt?ut(r,i,n):r>0?(f=r-4*st,n[0]=f-yt,n[1]=f-n[0]-yt,4):(f=r+4*st,n[0]=f+yt,n[1]=f-n[0]+yt,-4);if(i<Et)return ut(r,i,n);if(i>=zr)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return fn[0]=r,cn[un]}(r),f=vn(i-((e=(i>>20)-1046)<<20|0),t),a=0;a<2;a++)_t[a]=0|f,f=(f-_t[a])*ct;for(_t[2]=f,o=3;_t[o-1]===ft;)o-=1;return u=Jn(_t,Ut,e,o),r<0?(n[0]=-Ut[0],n[1]=-Ut[1],-u):(n[0]=Ut[0],n[1]=Ut[1],u)}var St=1072243195,It=1045430272,Tt=[0,0],jt=3.141592653589793,xt=2.5066282746310007;function Ft(r){return qr(r/2)}function Ot(r){return Ft(r>0?r-1:r+1)}var Rt=Math.sqrt,Vt=!0===Er?0:1,$t=new lr(1),Gt=new ur($t.buffer);function Pt(r,n){return $t[0]=r,Gt[Vt]=n>>>0,$t[0]}function Ct(r){return 0|r}var Ht=1072693247,Wt=1e300,Lt=1e-300,Mt=1048575,Zt=1048576,qt=1072693248,Xt=536870912,Yt=524288,zt=20,Bt=9007199254740992,Dt=.9617966939259756,Jt=.9617967009544373,Kt=-7.028461650952758e-9,Qt=[1,1.5],re=[0,.5849624872207642],ne=[0,1.350039202129749e-8],te=1.4426950408889634,ee=1.4426950216293335,ie=1.9259629911266175e-8,oe=.6931471805599453,ae=1048576,ue=1071644672,fe=20,ce=.6931471824645996,se=-1.904654299957768e-9,pe=1072693247,le=1105199104,he=1139802112,ye=1083179008,ve=1072693248,ge=1083231232,de=3230714880,we=31,be=1e300,me=1e-300,Ne=8008566259537294e-32,Ae=[0,0],Ee=[0,0];function _e(r,n){var t,e,i,o,a,u,f,c,s,p,l,h,y,v;if(nr(r)||nr(n))return NaN;if(jn.assign(n,Ae,1,0),a=Ae[0],0===Ae[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Rt(r);if(-.5===n)return 1/Rt(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(mn(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Xr(r)<1==(n===gn)?0:gn}(r,n)}if(jn.assign(r,Ae,1,0),o=Ae[0],0===Ae[1]){if(0===o)return function(r,n){return n===Or?gn:n===gn?0:n>0?Ot(n)?r:0:Ot(n)?Fn(gn,r):gn}(r,n);if(1===r)return 1;if(-1===r&&Ot(n))return-1;if(mn(r))return r===Or?_e(-0,-n):n<0?0:gn}if(r<0&&!1===qr(n))return(r-r)/(r-r);if(i=Xr(r),t=o&Yr|0,e=a&Yr|0,f=a>>>we|0,u=(u=o>>>we|0)&&Ot(n)?-1:1,e>le){if(e>he)return function(r,n){return(Sr(r)&Yr)<=Ht?n<0?Wt*Wt:Lt*Lt:n>0?Wt*Wt:Lt*Lt}(r,n);if(t<pe)return 1===f?u*be*be:u*me*me;if(t>ve)return 0===f?u*be*be:u*me*me;l=function(r,n){var t,e,i,o,a,u,f;return o=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(u=i*ie-o*te)-((e=Pt(e=(a=ee*i)+u,0))-a),r[0]=e,r[1]=t,r}(Ee,i)}else l=function(r,n,t){var e,i,o,a,u,f,c,s,p,l,h,y,v,g,d,w,b,m,N,A,E;return m=0,t<Zt&&(m-=53,t=Sr(n*=Bt)),m+=(t>>zt)-Fr|0,t=(N=t&Mt|0)|qt|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,t-=Zt),a=Pt(i=(w=(n=xr(n,t))-(c=Qt[A]))*(b=1/(n+c)),0),e=(t>>1|Xt)+Yt,f=xr(0,e+=A<<18),d=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=Pt(f=3+(o=a*a)+(d+=(u=b*(w-a*f-a*(n-(f-c))))*(a+i)),0),p=Pt(p=(w=a*f)+(b=u*f+(d-(f-3-o))*i),0),l=Jt*p,v=(h=Kt*p+(b-(p-w))*Dt+ne[A])-((y=Pt(y=l+h+(s=re[A])+(g=m),0))-g-s-l),r[0]=y,r[1]=v,r}(Ee,i,t);if(h=(p=(n-(c=Pt(n,0)))*l[0]+n*l[1])+(s=c*l[0]),jn.assign(h,Ae,1,0),y=Ct(Ae[0]),v=Ct(Ae[1]),y>=ye){if(0!=(y-ye|v))return u*be*be;if(p+Ne>h-s)return u*be*be}else if((y&Yr)>=ge){if(0!=(y-de|v))return u*me*me;if(p<=h-s)return u*me*me}return h=function(r,n,t){var e,i,o,a,u,f,c,s,p,l;return p=((s=r&Yr|0)>>fe)-Fr|0,c=0,s>ue&&(i=xr(0,((c=r+(ae>>p+1)>>>0)&~(an>>(p=((c&Yr)>>fe)-Fr|0)))>>>0),c=(c&an|ae)>>fe-p>>>0,r<0&&(c=-c),n-=i),r=Ct(r=Sr(f=1-((f=(o=(i=Pt(i=t+n,0))*ce)+(a=(t-(i-n))*oe+i*se))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<fe>>>0)>>fe<=0?Hn(f,c):xr(f,r)}(y,s,p),u*h}var Ue=Math.ceil;function ke(r){return r<0?Ue(r):Zr(r)}var Se=.6931471803691238,Ie=1.9082149292705877e-10,Te=1.4426950408889634,je=709.782712893384,xe=-745.1332191019411,Fe=1/(1<<28),Oe=-Fe;function Re(r){var n;return nr(r)||r===gn?r:r===Or?0:r>je?gn:r<xe?0:r>Oe&&r<Fe?1+r:function(r,n,t){var e,i,o,a;return Hn(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-(n=ke(r<0?Te*r-.5:Te*r+.5))*Se,n*Ie,n)}var Ve=143.01608;function $e(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=Re(r),t=r>Ve?(e=_e(r,.5*r-.25))*(e/t):_e(r,r-.5)/t,xt*t*n}function Ge(r,n){return n/((1+Mr*r)*r)}function Pe(r){var n,t,e,i;if(qr(r)&&r<0||r===Or||nr(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===Or}(r)?Or:gn;if(r>171.61447887182297)return gn;if(r<-170.5674972726612)return 0;if((t=Xr(r))>33)return r>=0?$e(r):(n=0==(1&(e=Zr(t)))?-1:1,(i=t-e)>.5&&(i=t-(e+=1)),i=t*function(r){var n;if(n=Sr(r),(n&=Yr)<=St)return n<It?r:tn(r,0);if(n>=zr)return NaN;switch(3&kt(r,Tt)){case 0:return tn(Tt[0],Tt[1]);case 1:return Br(Tt[0],Tt[1]);case 2:return-tn(Tt[0],Tt[1]);default:return-Br(Tt[0],Tt[1])}}(jt*i),n*jt/(Xr(i)*$e(t)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return Ge(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return Ge(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}function Ce(r){return Ft(r>0?r-1:r+1)}var He=1072693247,We=1e300,Le=1e-300,Me=1048575,Ze=1048576,qe=1072693248,Xe=536870912,Ye=524288,ze=20,Be=9007199254740992,De=.9617966939259756,Je=.9617967009544373,Ke=-7.028461650952758e-9,Qe=[1,1.5],ri=[0,.5849624872207642],ni=[0,1.350039202129749e-8],ti=1.4426950408889634,ei=1.4426950216293335,ii=1.9259629911266175e-8,oi=1048576,ai=1071644672,ui=20,fi=.6931471824645996,ci=-1.904654299957768e-9,si=1072693247,pi=1105199104,li=1139802112,hi=1083179008,yi=1072693248,vi=1083231232,gi=3230714880,di=31,wi=1e300,bi=1e-300,mi=8008566259537294e-32,Ni=[0,0],Ai=[0,0];function Ei(r,n){var t,e,i,o,a,u,f,c,s,p,l,h,y,v;if(nr(r)||nr(n))return NaN;if(jn.assign(n,Ni,1,0),a=Ni[0],0===Ni[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Rt(r);if(-.5===n)return 1/Rt(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(mn(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Xr(r)<1==(n===gn)?0:gn}(r,n)}if(jn.assign(r,Ni,1,0),o=Ni[0],0===Ni[1]){if(0===o)return function(r,n){return n===Or?gn:n===gn?0:n>0?Ce(n)?r:0:Ce(n)?Fn(gn,r):gn}(r,n);if(1===r)return 1;if(-1===r&&Ce(n))return-1;if(mn(r))return r===Or?Ei(-0,-n):n<0?0:gn}if(r<0&&!1===qr(n))return(r-r)/(r-r);if(i=Xr(r),t=o&Yr|0,e=a&Yr|0,f=a>>>di|0,u=(u=o>>>di|0)&&Ce(n)?-1:1,e>pi){if(e>li)return function(r,n){return(Sr(r)&Yr)<=He?n<0?We*We:Le*Le:n>0?We*We:Le*Le}(r,n);if(t<si)return 1===f?u*wi*wi:u*bi*bi;if(t>yi)return 0===f?u*wi*wi:u*bi*bi;l=function(r,n){var t,e,i,o,a,u,f;return o=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(u=i*ii-o*ti)-((e=Pt(e=(a=ei*i)+u,0))-a),r[0]=e,r[1]=t,r}(Ai,i)}else l=function(r,n,t){var e,i,o,a,u,f,c,s,p,l,h,y,v,g,d,w,b,m,N,A,E;return m=0,t<Ze&&(m-=53,t=Sr(n*=Be)),m+=(t>>ze)-Fr|0,t=(N=t&Me|0)|qe|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,t-=Ze),a=Pt(i=(w=(n=xr(n,t))-(c=Qe[A]))*(b=1/(n+c)),0),e=(t>>1|Xe)+Ye,f=xr(0,e+=A<<18),d=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=Pt(f=3+(o=a*a)+(d+=(u=b*(w-a*f-a*(n-(f-c))))*(a+i)),0),p=Pt(p=(w=a*f)+(b=u*f+(d-(f-3-o))*i),0),l=Je*p,v=(h=Ke*p+(b-(p-w))*De+ni[A])-((y=Pt(y=l+h+(s=ri[A])+(g=m),0))-g-s-l),r[0]=y,r[1]=v,r}(Ai,i,t);if(h=(p=(n-(c=Pt(n,0)))*l[0]+n*l[1])+(s=c*l[0]),jn.assign(h,Ni,1,0),y=Ct(Ni[0]),v=Ct(Ni[1]),y>=hi){if(0!=(y-hi|v))return u*wi*wi;if(p+mi>h-s)return u*wi*wi}else if((y&Yr)>=vi){if(0!=(y-gi|v))return u*bi*bi;if(p<=h-s)return u*bi*bi}return h=function(r,n,t){var e,i,o,a,u,f,c,s,p,l;return p=((s=r&Yr|0)>>ui)-Fr|0,c=0,s>ai&&(i=xr(0,((c=r+(oi>>p+1)>>>0)&~(an>>(p=((c&Yr)>>ui)-Fr|0)))>>>0),c=(c&an|oi)>>ui-p>>>0,r<0&&(c=-c),n-=i),r=Ct(r=Sr(f=1-((f=(o=(i=Pt(i=t+n,0))*fi)+(a=(t-(i-n))*oe+i*ci))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<ui>>>0)>>ui<=0?Hn(f,c):xr(f,r)}(y,s,p),u*h}function _i(r,n,t,e){return nr(r)||nr(n)||nr(t)||nr(e)||n<=0||t<=0?NaN:r<=e?0:Re(-Ei((r-e)/t,-n))}function Ui(r){return function(){return r}}function ki(r,n,t,e){return nr(r)||nr(n)||nr(t)||nr(e)||n<=0||t<=0?NaN:r<=e?Or:-Ei((r-e)/t,-n)}function Si(r,n,t,e){var i;return nr(r)||nr(n)||nr(t)||nr(e)||n<=0||t<=0?NaN:r<=e?Or:(i=(r-e)/t,Lr(n/t)-(1+n)*Lr(i)-Ei(i,-n))}function Ii(r,n,t){return nr(r)||nr(n)||nr(t)||r<=0||n<=0?Ui(NaN):function(e){var i;return nr(e)?NaN:e<=t?Or:(i=(e-t)/n,Lr(r/n)-(1+r)*Lr(i)-Ei(i,-r))}}function Ti(r,n,t,e){return nr(r)||nr(n)||nr(t)||nr(e)||n<=0||t<=0?NaN:Re(Si(r,n,t,e))}function ji(r,n,t,e){return nr(r)||nr(n)||nr(t)||nr(e)||r<0||r>1||n<=0||t<=0?NaN:e+t*Ei(-Lr(r),-1/n)}function xi(){var r,n=arguments,t="https://stdlib.io/e/"+n[0]+"?";for(r=1;r<n.length;r++)t+="&arg[]="+encodeURIComponent(n[r]);return t}function Fi(){var r,n,t;if(!(this instanceof Fi))return 0===arguments.length?new Fi:new Fi(arguments[0],arguments[1],arguments[2]);if(arguments.length){if(n=arguments[1],t=arguments[2],!K(r=arguments[0]))throw new TypeError(xi("10R7d",r));if(!K(n))throw new TypeError(xi("10R91",n));if(!C(t)||nr(t))throw new TypeError(xi("10R8p",t))}else r=1,n=1,t=0;return $(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!K(n))throw new TypeError(xi("10R8k",n));r=n}}),$(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!K(r))throw new TypeError(xi("10R8k",r));n=r}}),$(this,"m",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!C(r)||nr(r))throw new TypeError(xi("10R8d",r));t=r}}),this}return G(_i,"factory",(function(r,n,t){return nr(r)||nr(n)||nr(t)||r<=0||n<=0?Ui(NaN):function(e){return nr(e)?NaN:e<=t?0:Re(-Ei((e-t)/n,-r))}})),G(ki,"factory",(function(r,n,t){return nr(r)||nr(n)||nr(t)||r<=0||n<=0?Ui(NaN):function(e){return nr(e)?NaN:e<=t?Or:-Ei((e-t)/n,-r)}})),G(Si,"factory",Ii),G(Ti,"factory",(function(r,n,t){var e;return nr(r)||nr(n)||nr(t)||r<=0||n<=0?Ui(NaN):(e=Ii(r,n,t),function(i){return nr(i)?NaN:Re(e(i,r,n,t))})})),G(ji,"factory",(function(r,n,t){return nr(r)||nr(n)||nr(t)||r<=0||n<=0?Ui(NaN):function(e){return nr(e)||e<0||e>1?NaN:t+n*Ei(-Lr(e),-1/r)}})),P(Fi.prototype,"entropy",(function(){return r=this.alpha,n=this.s,t=this.m,nr(r)||nr(n)||nr(t)||r<=0||n<=0?NaN:1+Mr/r+Mr+Lr(n/r);var r,n,t})),P(Fi.prototype,"kurtosis",(function(){return r=this.alpha,n=this.s,t=this.m,nr(r)||nr(n)||nr(t)||r<=0||n<=0?NaN:r<=4?gn:(i=Pe(1-1/r),o=Pe(1-2/r),a=Pe(1-3/r),e=(Pe(1-4/r)-4*a*i+3*o*o)/Ei(o-i*i,2),e-=6);var r,n,t,e,i,o,a})),P(Fi.prototype,"mean",(function(){return r=this.alpha,n=this.s,t=this.m,nr(r)||nr(n)||nr(t)||r<=0||n<=0?NaN:r<=1?gn:t+n*Pe(1-1/r);var r,n,t})),P(Fi.prototype,"median",(function(){return r=this.alpha,n=this.s,t=this.m,nr(r)||nr(n)||nr(t)||r<=0||n<=0?NaN:t+n*Ei(oe,-1/r);var r,n,t})),P(Fi.prototype,"mode",(function(){return r=this.alpha,n=this.s,t=this.m,nr(r)||nr(n)||nr(t)||r<=0||n<=0?NaN:t+n*Ei(1+(e=1/r),-e);var r,n,t,e})),P(Fi.prototype,"skewness",(function(){return r=this.alpha,n=this.s,t=this.m,nr(r)||nr(n)||nr(t)||r<=0||n<=0?NaN:r<=3?gn:(e=(i=Pe(1-1/r))*i,o=Pe(1-2/r),(Pe(1-3/r)-3*o*i+2*e*i)/Ei(o-e,1.5));var r,n,t,e,i,o})),P(Fi.prototype,"stdev",(function(){return r=this.alpha,n=this.s,t=this.m,nr(r)||nr(n)||nr(t)||r<=0||n<=0?NaN:r<=2?gn:(e=Pe(1-1/r),i=Pe(1-2/r),n*Rt(i-e*e));var r,n,t,e,i})),P(Fi.prototype,"variance",(function(){return r=this.alpha,n=this.s,t=this.m,nr(r)||nr(n)||nr(t)||r<=0||n<=0?NaN:r<=2?gn:(e=Pe(1-1/r),n*n*(Pe(1-2/r)-e*e));var r,n,t,e})),G(Fi.prototype,"cdf",(function(r){return _i(r,this.alpha,this.s,this.m)})),G(Fi.prototype,"logcdf",(function(r){return ki(r,this.alpha,this.s,this.m)})),G(Fi.prototype,"logpdf",(function(r){return Si(r,this.alpha,this.s,this.m)})),G(Fi.prototype,"pdf",(function(r){return Ti(r,this.alpha,this.s,this.m)})),G(Fi.prototype,"quantile",(function(r){return ji(r,this.alpha,this.s,this.m)})),Fi},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).Frechet=n();
//# sourceMappingURL=index.js.map
