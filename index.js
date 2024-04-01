// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,h=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,g=/\.0$/,d=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,w,"$1e"),e=p.call(e,d,"e"),e=p.call(e,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,h,"e-0$1"),r.alternate&&(e=p.call(e,y,"$1."),e=p.call(e,v,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var N=String.fromCharCode,A=isNaN,E=Array.isArray;function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,n,e,o,a,f,c,s,p,l,h,y,v;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,A(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,A(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!A(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=A(a)?String(e.arg):N(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=b(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,h=e.width,y=e.padRight,v=void 0,(v=h-l.length)<0?l:l=y?l+m(v):m(v)+l)),f+=e.arg||"",c+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function S(r){var t,n,e,i;for(n=[],i=0,e=k.exec(r);e;)(t=r.slice(i,k.lastIndex-e[0].length)).length&&n.push(t),n.push(I(e)),i=k.lastIndex,e=k.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function T(r){var t,n;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[S(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return U.apply(null,t)}var j=Object.prototype,x=j.toString,F=j.__defineGetter__,O=j.__defineSetter__,R=j.__lookupGetter__,V=j.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===x.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===x.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(R.call(r,t)||V.call(r,t)?(e=r.__proto__,r.__proto__=j,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,t,n.get),a&&O&&O.call(r,t,n.set),r};function G(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r,t,n){$(r,t,{configurable:!1,enumerable:!1,get:n})}function C(r){return"number"==typeof r}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return H&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString,M=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Z?Z.toStringTag:"",X=W()?function(r){var t,n,e,i,o;if(null==r)return L.call(r);n=r[q],o=q,t=null!=(i=r)&&M.call(i,o);try{r[q]=void 0}catch(t){return L.call(r)}return e=L.call(r),t?r[q]=n:delete r[q],e}:function(r){return L.call(r)},Y=Number,z=Y.prototype.toString,B=W();function D(r){return"object"==typeof r&&(r instanceof Y||(B?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function J(r){return C(r)||D(r)}function K(r){return C(r)&&r>0}function Q(r){return D(r)&&r.valueOf()>0}function rr(r){return K(r)||Q(r)}function tr(r){return r!=r}G(J,"isPrimitive",C),G(J,"isObject",D),G(rr,"isPrimitive",K),G(rr,"isObject",Q);var nr,er="function"==typeof Uint32Array,ir="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,t,n;if("function"!=typeof ir)return!1;try{t=new ir(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(er&&n instanceof Uint32Array||"[object Uint32Array]"===X(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ar,ur=nr,fr="function"==typeof Float64Array,cr="function"==typeof Float64Array?Float64Array:null,sr="function"==typeof Float64Array?Float64Array:void 0;ar=function(){var r,t,n;if("function"!=typeof cr)return!1;try{t=new cr([1,3.14,-3.14,NaN]),n=t,r=(fr&&n instanceof Float64Array||"[object Float64Array]"===X(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var pr,lr=ar,hr="function"==typeof Uint8Array,yr="function"==typeof Uint8Array?Uint8Array:null,vr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,t,n;if("function"!=typeof yr)return!1;try{t=new yr(t=[1,3.14,-3.14,256,257]),n=t,r=(hr&&n instanceof Uint8Array||"[object Uint8Array]"===X(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var gr,dr=pr,wr="function"==typeof Uint16Array,br="function"==typeof Uint16Array?Uint16Array:null,mr="function"==typeof Uint16Array?Uint16Array:void 0;gr=function(){var r,t,n;if("function"!=typeof br)return!1;try{t=new br(t=[1,3.14,-3.14,65536,65537]),n=t,r=(wr&&n instanceof Uint16Array||"[object Uint16Array]"===X(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Nr,Ar={uint16:gr,uint8:dr};(Nr=new Ar.uint16(1))[0]=4660;var Er=52===new Ar.uint8(Nr.buffer)[0],_r=!0===Er?1:0,Ur=new lr(1),kr=new ur(Ur.buffer);function Ir(r){return Ur[0]=r,kr[_r]}var Sr=!0===Er?1:0,Tr=new lr(1),jr=new ur(Tr.buffer);function xr(r,t){return Tr[0]=r,jr[Sr]=t>>>0,Tr[0]}var Fr=1023,Or=Y.NEGATIVE_INFINITY,Rr=.6931471803691238,Vr=1.9082149292705877e-10,$r=0x40000000000000,Gr=.3333333333333333,Pr=1048575,Cr=2146435072,Hr=1048576,Wr=1072693248;function Lr(r){var t,n,e,i,o,a,u,f,c,s,p,l;return 0===r?Or:tr(r)||r<0?NaN:(o=0,(n=Ir(r))<Hr&&(o-=54,n=Ir(r*=$r)),n>=Cr?r+r:(o+=(n>>20)-Fr|0,o+=(f=614244+(n&=Pr)&1048576|0)>>20|0,u=(r=xr(r,n|f^Wr))-1,(Pr&2+n)<3?0===u?0===o?0:o*Rr+o*Vr:(a=u*u*(.5-Gr*u),0===o?u-a:o*Rr-(a-o*Vr-u)):(f=n-398458|0,c=440401-n|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(t=.5*u*u,0===o?u-(t-s*(t+a)):o*Rr-(t-(s*(t+a)+o*Vr)-u)):0===o?u-s*(u-a):o*Rr-(s*(u-a)-o*Vr-u))))}var Mr=.5772156649015329,Zr=Math.floor;function qr(r){return Zr(r)===r}function Xr(r){return Math.abs(r)}var Yr=2147483647,zr=2146435072;function Br(r,t){var n,e,i,o;return i=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(n=.5*o))+(1-i-n+(o*e-r*t))}var Dr=-.16666666666666632,Jr=.00833333333332249,Kr=-.0001984126982985795,Qr=27557313707070068e-22,rt=-2.5050760253406863e-8,tt=1.58969099521155e-10;function nt(r,t){var n,e,i;return n=Jr+(i=r*r)*(Kr+i*Qr)+i*(i*i)*(rt+i*tt),e=i*r,0===t?r+e*(Dr+i*n):r-(i*(.5*t-e*n)-t-e*Dr)}var et,it,ot=1048575,at=!0===Er?0:1,ut=new lr(1),ft=new ur(ut.buffer);!0===Er?(et=1,it=0):(et=0,it=1);var ct={HIGH:et,LOW:it},st=new lr(1),pt=new ur(st.buffer),lt=ct.HIGH,ht=ct.LOW;function yt(r,t){return pt[lt]=r,pt[ht]=t,st[0]}var vt=Number.POSITIVE_INFINITY,gt=1023,dt=-1023,wt=-1074;function bt(r){return r===vt||r===Or}var mt,Nt,At=2147483648;!0===Er?(mt=1,Nt=0):(mt=0,Nt=1);var Et={HIGH:mt,LOW:Nt},_t=new lr(1),Ut=new ur(_t.buffer),kt=Et.HIGH,It=Et.LOW;function St(r,t,n,e){return _t[0]=r,t[e]=Ut[kt],t[e+n]=Ut[It],t}function Tt(r){return St(r,[0,0],1,0)}G(Tt,"assign",St);var jt=[0,0];function xt(r,t){var n,e;return Tt.assign(r,jt,1,0),n=jt[0],n&=Yr,e=Ir(t),yt(n|=e&=At,jt[1])}var Ft=22250738585072014e-324,Ot=4503599627370496;function Rt(r,t,n,e){return tr(r)||bt(r)?(t[e]=r,t[e+n]=0,t):0!==r&&Xr(r)<Ft?(t[e]=r*Ot,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}G((function(r){return Rt(r,[0,0],1,0)}),"assign",Rt);var Vt=2220446049250313e-31,$t=2148532223,Gt=[0,0],Pt=[0,0];function Ct(r,t){var n,e;return 0===t||0===r||tr(r)||bt(r)?r:(Rt(r,Gt,1,0),r=Gt[0],t+=Gt[1],t+=function(r){var t=Ir(r);return(t=(t&zr)>>>20)-Fr|0}(r),t<wt?xt(0,r):t>gt?r<0?Or:vt:(t<=dt?(t+=52,e=Vt):e=1,Tt.assign(r,Pt,1,0),n=Pt[0],n&=$t,e*yt(n|=t+Fr<<20,Pt[1])))}function Ht(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var Wt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Lt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Mt=16777216,Zt=5.960464477539063e-8,qt=Ht(20),Xt=Ht(20),Yt=Ht(20),zt=Ht(20);function Bt(r,t,n,e,i,o,a,u,f){var c,s,p,l,h,y,v,g,d;for(l=o,d=e[n],g=n,h=0;g>0;h++)s=Zt*d|0,zt[h]=d-Mt*s|0,d=e[g-1]+s,g-=1;if(d=Ct(d,i),d-=8*Zr(.125*d),d-=v=0|d,p=0,i>0?(v+=h=zt[n-1]>>24-i,zt[n-1]-=h<<24-i,p=zt[n-1]>>23-i):0===i?p=zt[n-1]>>23:d>=.5&&(p=2),p>0){for(v+=1,c=0,h=0;h<n;h++)g=zt[h],0===c?0!==g&&(c=1,zt[h]=16777216-g):zt[h]=16777215-g;if(i>0)switch(i){case 1:zt[n-1]&=8388607;break;case 2:zt[n-1]&=4194303}2===p&&(d=1-d,0!==c&&(d-=Ct(1,i)))}if(0===d){for(g=0,h=n-1;h>=o;h--)g|=zt[h];if(0===g){for(y=1;0===zt[o-y];y++);for(h=n+1;h<=n+y;h++){for(f[u+h]=Wt[a+h],s=0,g=0;g<=u;g++)s+=r[g]*f[u+(h-g)];e[h]=s}return Bt(r,t,n+=y,e,i,o,a,u,f)}}if(0===d)for(n-=1,i-=24;0===zt[n];)n-=1,i-=24;else(d=Ct(d,-i))>=Mt?(s=Zt*d|0,zt[n]=d-Mt*s|0,i+=24,zt[n+=1]=s):zt[n]=0|d;for(s=Ct(1,i),h=n;h>=0;h--)e[h]=s*zt[h],s*=Zt;for(h=n;h>=0;h--){for(s=0,y=0;y<=l&&y<=n-h;y++)s+=Lt[y]*e[h+y];Yt[n-h]=s}for(s=0,h=n;h>=0;h--)s+=Yt[h];for(t[0]=0===p?s:-s,s=Yt[0]-s,h=1;h<=n;h++)s+=Yt[h];return t[1]=0===p?s:-s,7&v}function Dt(r,t,n,e){var i,o,a,u,f,c,s;for((o=(n-3)/24|0)<0&&(o=0),u=n-24*(o+1),c=o-(a=e-1),s=a+4,f=0;f<=s;f++)qt[f]=c<0?0:Wt[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*qt[a+(f-c)];Xt[f]=i}return Bt(r,t,4,Xt,u,4,o,a,qt)}var Jt=Math.round,Kt=.6366197723675814,Qt=1.5707963267341256,rn=6077100506506192e-26,tn=6077100506303966e-26,nn=20222662487959506e-37,en=20222662487111665e-37,on=84784276603689e-45,an=2047;function un(r,t,n){var e,i,o,a,u;return o=r-(e=Jt(r*Kt))*Qt,a=e*rn,u=t>>20|0,n[0]=o-a,u-(Ir(n[0])>>20&an)>16&&(a=e*nn-((i=o)-(o=i-(a=e*tn))-a),n[0]=o-a,u-(Ir(n[0])>>20&an)>49&&(a=e*on-((i=o)-(o=i-(a=e*en))-a),n[0]=o-a)),n[1]=o-n[0]-a,e}var fn=0,cn=16777216,sn=1.5707963267341256,pn=6077100506506192e-26,ln=2*pn,hn=3*pn,yn=4*pn,vn=598523,gn=1072243195,dn=1073928572,wn=1074752122,bn=1074977148,mn=1075183036,Nn=1075388923,An=1075594811,En=1094263291,_n=[0,0,0],Un=[0,0];function kn(r,t){var n,e,i,o,a,u,f;if((i=Ir(r)&Yr|0)<=gn)return t[0]=r,t[1]=0,0;if(i<=wn)return(i&ot)===vn?un(r,i,t):i<=dn?r>0?(f=r-sn,t[0]=f-pn,t[1]=f-t[0]-pn,1):(f=r+sn,t[0]=f+pn,t[1]=f-t[0]+pn,-1):r>0?(f=r-2*sn,t[0]=f-ln,t[1]=f-t[0]-ln,2):(f=r+2*sn,t[0]=f+ln,t[1]=f-t[0]+ln,-2);if(i<=An)return i<=mn?i===bn?un(r,i,t):r>0?(f=r-3*sn,t[0]=f-hn,t[1]=f-t[0]-hn,3):(f=r+3*sn,t[0]=f+hn,t[1]=f-t[0]+hn,-3):i===Nn?un(r,i,t):r>0?(f=r-4*sn,t[0]=f-yn,t[1]=f-t[0]-yn,4):(f=r+4*sn,t[0]=f+yn,t[1]=f-t[0]+yn,-4);if(i<En)return un(r,i,t);if(i>=zr)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return ut[0]=r,ft[at]}(r),f=yt(i-((e=(i>>20)-1046)<<20|0),n),a=0;a<2;a++)_n[a]=0|f,f=(f-_n[a])*cn;for(_n[2]=f,o=3;_n[o-1]===fn;)o-=1;return u=Dt(_n,Un,e,o),r<0?(t[0]=-Un[0],t[1]=-Un[1],-u):(t[0]=Un[0],t[1]=Un[1],u)}var In=1072243195,Sn=1045430272,Tn=[0,0],jn=3.141592653589793,xn=2.5066282746310007;function Fn(r){return qr(r/2)}function On(r){return Fn(r>0?r-1:r+1)}var Rn=Math.sqrt,Vn=!0===Er?0:1,$n=new lr(1),Gn=new ur($n.buffer);function Pn(r,t){return $n[0]=r,Gn[Vn]=t>>>0,$n[0]}function Cn(r){return 0|r}var Hn=1072693247,Wn=1e300,Ln=1e-300,Mn=1048575,Zn=1048576,qn=1072693248,Xn=536870912,Yn=524288,zn=20,Bn=9007199254740992,Dn=.9617966939259756,Jn=.9617967009544373,Kn=-7.028461650952758e-9,Qn=[1,1.5],re=[0,.5849624872207642],te=[0,1.350039202129749e-8],ne=1.4426950408889634,ee=1.4426950216293335,ie=1.9259629911266175e-8,oe=.6931471805599453,ae=1048576,ue=1071644672,fe=20,ce=.6931471824645996,se=-1.904654299957768e-9,pe=1072693247,le=1105199104,he=1139802112,ye=1083179008,ve=1072693248,ge=1083231232,de=3230714880,we=31,be=1e300,me=1e-300,Ne=8008566259537294e-32,Ae=[0,0],Ee=[0,0];function _e(r,t){var n,e,i,o,a,u,f,c,s,p,l,h,y,v;if(tr(r)||tr(t))return NaN;if(Tt.assign(t,Ae,1,0),a=Ae[0],0===Ae[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Rn(r);if(-.5===t)return 1/Rn(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(bt(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Xr(r)<1==(t===vt)?0:vt}(r,t)}if(Tt.assign(r,Ae,1,0),o=Ae[0],0===Ae[1]){if(0===o)return function(r,t){return t===Or?vt:t===vt?0:t>0?On(t)?r:0:On(t)?xt(vt,r):vt}(r,t);if(1===r)return 1;if(-1===r&&On(t))return-1;if(bt(r))return r===Or?_e(-0,-t):t<0?0:vt}if(r<0&&!1===qr(t))return(r-r)/(r-r);if(i=Xr(r),n=o&Yr|0,e=a&Yr|0,f=a>>>we|0,u=(u=o>>>we|0)&&On(t)?-1:1,e>le){if(e>he)return function(r,t){return(Ir(r)&Yr)<=Hn?t<0?Wn*Wn:Ln*Ln:t>0?Wn*Wn:Ln*Ln}(r,t);if(n<pe)return 1===f?u*be*be:u*me*me;if(n>ve)return 0===f?u*be*be:u*me*me;l=function(r,t){var n,e,i,o,a,u,f;return o=(i=t-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*ie-o*ne)-((e=Pn(e=(a=ee*i)+u,0))-a),r[0]=e,r[1]=n,r}(Ee,i)}else l=function(r,t,n){var e,i,o,a,u,f,c,s,p,l,h,y,v,g,d,w,b,m,N,A,E;return m=0,n<Zn&&(m-=53,n=Ir(t*=Bn)),m+=(n>>zn)-Fr|0,n=(N=n&Mn|0)|qn|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=Zn),a=Pn(i=(w=(t=xr(t,n))-(c=Qn[A]))*(b=1/(t+c)),0),e=(n>>1|Xn)+Yn,f=xr(0,e+=A<<18),d=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=Pn(f=3+(o=a*a)+(d+=(u=b*(w-a*f-a*(t-(f-c))))*(a+i)),0),p=Pn(p=(w=a*f)+(b=u*f+(d-(f-3-o))*i),0),l=Jn*p,v=(h=Kn*p+(b-(p-w))*Dn+te[A])-((y=Pn(y=l+h+(s=re[A])+(g=m),0))-g-s-l),r[0]=y,r[1]=v,r}(Ee,i,n);if(h=(p=(t-(c=Pn(t,0)))*l[0]+t*l[1])+(s=c*l[0]),Tt.assign(h,Ae,1,0),y=Cn(Ae[0]),v=Cn(Ae[1]),y>=ye){if(0!=(y-ye|v))return u*be*be;if(p+Ne>h-s)return u*be*be}else if((y&Yr)>=ge){if(0!=(y-de|v))return u*me*me;if(p<=h-s)return u*me*me}return h=function(r,t,n){var e,i,o,a,u,f,c,s,p,l;return p=((s=r&Yr|0)>>fe)-Fr|0,c=0,s>ue&&(i=xr(0,((c=r+(ae>>p+1)>>>0)&~(ot>>(p=((c&Yr)>>fe)-Fr|0)))>>>0),c=(c&ot|ae)>>fe-p>>>0,r<0&&(c=-c),t-=i),r=Cn(r=Ir(f=1-((f=(o=(i=Pn(i=n+t,0))*ce)+(a=(n-(i-t))*oe+i*se))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<fe>>>0)>>fe<=0?Ct(f,c):xr(f,r)}(y,s,p),u*h}var Ue=Math.ceil;function ke(r){return r<0?Ue(r):Zr(r)}var Ie=.6931471803691238,Se=1.9082149292705877e-10,Te=1.4426950408889634,je=709.782712893384,xe=-745.1332191019411,Fe=1/(1<<28),Oe=-Fe;function Re(r){var t;return tr(r)||r===vt?r:r===Or?0:r>je?vt:r<xe?0:r>Oe&&r<Fe?1+r:function(r,t,n){var e,i,o,a;return Ct(1-(t-(e=r-t)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-(t=ke(r<0?Te*r-.5:Te*r+.5))*Ie,t*Se,t)}var Ve=143.01608;function $e(r){var t,n,e;return t=1+(t=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(t),n=Re(r),n=r>Ve?(e=_e(r,.5*r-.25))*(e/n):_e(r,r-.5)/n,xn*n*t}function Ge(r,t){return t/((1+Mr*r)*r)}function Pe(r){var t,n,e,i;if(qr(r)&&r<0||r===Or||tr(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===Or}(r)?Or:vt;if(r>171.61447887182297)return vt;if(r<-170.5674972726612)return 0;if((n=Xr(r))>33)return r>=0?$e(r):(t=0==(1&(e=Zr(n)))?-1:1,(i=n-e)>.5&&(i=n-(e+=1)),i=n*function(r){var t;if(t=Ir(r),(t&=Yr)<=In)return t<Sn?r:nt(r,0);if(t>=zr)return NaN;switch(3&kn(r,Tn)){case 0:return nt(Tn[0],Tn[1]);case 1:return Br(Tn[0],Tn[1]);case 2:return-nt(Tn[0],Tn[1]);default:return-Br(Tn[0],Tn[1])}}(jn*i),t*jn/(Xr(i)*$e(n)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return Ge(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return Ge(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(t=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),t/n)}(r-=2)}function Ce(r,t,n,e){return tr(r)||tr(t)||tr(n)||tr(e)||t<=0||n<=0?NaN:r<=e?0:Re(-_e((r-e)/n,-t))}function He(r){return function(){return r}}function We(r,t,n,e){return tr(r)||tr(t)||tr(n)||tr(e)||t<=0||n<=0?NaN:r<=e?Or:-_e((r-e)/n,-t)}function Le(r,t,n,e){var i;return tr(r)||tr(t)||tr(n)||tr(e)||t<=0||n<=0?NaN:r<=e?Or:(i=(r-e)/n,Lr(t/n)-(1+t)*Lr(i)-_e(i,-t))}function Me(r,t,n){return tr(r)||tr(t)||tr(n)||r<=0||t<=0?He(NaN):function(e){var i;return tr(e)?NaN:e<=n?Or:(i=(e-n)/t,Lr(r/t)-(1+r)*Lr(i)-_e(i,-r))}}function Ze(r,t,n,e){return tr(r)||tr(t)||tr(n)||tr(e)||t<=0||n<=0?NaN:Re(Le(r,t,n,e))}function qe(r,t,n,e){return tr(r)||tr(t)||tr(n)||tr(e)||r<0||r>1||t<=0||n<=0?NaN:e+n*_e(-Lr(r),-1/t)}function Xe(){var r,t=arguments,n="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function Ye(){var r,t,n;if(!(this instanceof Ye))return 0===arguments.length?new Ye:new Ye(arguments[0],arguments[1],arguments[2]);if(arguments.length){if(t=arguments[1],n=arguments[2],!K(r=arguments[0]))throw new TypeError(Xe("10R7d",r));if(!K(t))throw new TypeError(Xe("10R91",t));if(!C(n)||tr(n))throw new TypeError(Xe("10R8p",n))}else r=1,t=1,n=0;return $(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!K(t))throw new TypeError(Xe("10R8k",t));r=t}}),$(this,"s",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!K(r))throw new TypeError(Xe("10R8k",r));t=r}}),$(this,"m",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!C(r)||tr(r))throw new TypeError(Xe("10R8d",r));n=r}}),this}return G(Ce,"factory",(function(r,t,n){return tr(r)||tr(t)||tr(n)||r<=0||t<=0?He(NaN):function(e){return tr(e)?NaN:e<=n?0:Re(-_e((e-n)/t,-r))}})),G(We,"factory",(function(r,t,n){return tr(r)||tr(t)||tr(n)||r<=0||t<=0?He(NaN):function(e){return tr(e)?NaN:e<=n?Or:-_e((e-n)/t,-r)}})),G(Le,"factory",Me),G(Ze,"factory",(function(r,t,n){var e;return tr(r)||tr(t)||tr(n)||r<=0||t<=0?He(NaN):(e=Me(r,t,n),function(i){return tr(i)?NaN:Re(e(i,r,t,n))})})),G(qe,"factory",(function(r,t,n){return tr(r)||tr(t)||tr(n)||r<=0||t<=0?He(NaN):function(e){return tr(e)||e<0||e>1?NaN:n+t*_e(-Lr(e),-1/r)}})),P(Ye.prototype,"entropy",(function(){return r=this.alpha,t=this.s,n=this.m,tr(r)||tr(t)||tr(n)||r<=0||t<=0?NaN:1+Mr/r+Mr+Lr(t/r);var r,t,n})),P(Ye.prototype,"kurtosis",(function(){return r=this.alpha,t=this.s,n=this.m,tr(r)||tr(t)||tr(n)||r<=0||t<=0?NaN:r<=4?vt:(i=Pe(1-1/r),o=Pe(1-2/r),a=Pe(1-3/r),e=(Pe(1-4/r)-4*a*i+3*o*o)/_e(o-i*i,2),e-=6);var r,t,n,e,i,o,a})),P(Ye.prototype,"mean",(function(){return r=this.alpha,t=this.s,n=this.m,tr(r)||tr(t)||tr(n)||r<=0||t<=0?NaN:r<=1?vt:n+t*Pe(1-1/r);var r,t,n})),P(Ye.prototype,"median",(function(){return r=this.alpha,t=this.s,n=this.m,tr(r)||tr(t)||tr(n)||r<=0||t<=0?NaN:n+t*_e(oe,-1/r);var r,t,n})),P(Ye.prototype,"mode",(function(){return r=this.alpha,t=this.s,n=this.m,tr(r)||tr(t)||tr(n)||r<=0||t<=0?NaN:n+t*_e(1+(e=1/r),-e);var r,t,n,e})),P(Ye.prototype,"skewness",(function(){return r=this.alpha,t=this.s,n=this.m,tr(r)||tr(t)||tr(n)||r<=0||t<=0?NaN:r<=3?vt:(e=(i=Pe(1-1/r))*i,o=Pe(1-2/r),(Pe(1-3/r)-3*o*i+2*e*i)/_e(o-e,1.5));var r,t,n,e,i,o})),P(Ye.prototype,"stdev",(function(){return r=this.alpha,t=this.s,n=this.m,tr(r)||tr(t)||tr(n)||r<=0||t<=0?NaN:r<=2?vt:(e=Pe(1-1/r),i=Pe(1-2/r),t*Rn(i-e*e));var r,t,n,e,i})),P(Ye.prototype,"variance",(function(){return r=this.alpha,t=this.s,n=this.m,tr(r)||tr(t)||tr(n)||r<=0||t<=0?NaN:r<=2?vt:(e=Pe(1-1/r),t*t*(Pe(1-2/r)-e*e));var r,t,n,e})),G(Ye.prototype,"cdf",(function(r){return Ce(r,this.alpha,this.s,this.m)})),G(Ye.prototype,"logcdf",(function(r){return We(r,this.alpha,this.s,this.m)})),G(Ye.prototype,"logpdf",(function(r){return Le(r,this.alpha,this.s,this.m)})),G(Ye.prototype,"pdf",(function(r){return Ze(r,this.alpha,this.s,this.m)})),G(Ye.prototype,"quantile",(function(r){return qe(r,this.alpha,this.s,this.m)})),Ye},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).Frechet=t();
//# sourceMappingURL=index.js.map
