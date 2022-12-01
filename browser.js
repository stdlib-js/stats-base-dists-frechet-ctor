// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,e=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,o=n.__lookupGetter__,f=n.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,a){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((s="value"in a)&&(o.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=a.value,r.__proto__=c):r[t]=a.value),l="get"in a,p="set"in a,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,t,a.get),p&&u&&u.call(r,t,a.set),r};function c(r,t,n){a(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function s(r,t,n){a(r,t,{configurable:!1,enumerable:!1,get:n})}function l(r){return"number"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var h=Object.prototype.toString,v=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"",m=y()?function(r){var t,n,e,i,u;if(null==r)return h.call(r);n=r[b],u=b,t=null!=(i=r)&&v.call(i,u);try{r[b]=void 0}catch(t){return h.call(r)}return e=h.call(r),t?r[b]=n:delete r[b],e}:function(r){return h.call(r)},N=Number,w=N.prototype.toString,d=y();function g(r){return"object"==typeof r&&(r instanceof N||(d?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Number]"===m(r)))}function A(r){return l(r)||g(r)}function _(r){return l(r)&&r>0}function U(r){return g(r)&&r.valueOf()>0}function j(r){return _(r)||U(r)}function E(r){return r!=r}c(A,"isPrimitive",l),c(A,"isObject",g),c(j,"isPrimitive",_),c(j,"isObject",U);var T,O="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,S="function"==typeof Uint32Array?Uint32Array:void 0;T=function(){var r,t,n;if("function"!=typeof I)return!1;try{t=new I(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(O&&n instanceof Uint32Array||"[object Uint32Array]"===m(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?S:function(){throw new Error("not implemented")};var F,V=T,H="function"==typeof Float64Array,M="function"==typeof Float64Array?Float64Array:null,P="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,t,n;if("function"!=typeof M)return!1;try{t=new M([1,3.14,-3.14,NaN]),n=t,r=(H&&n instanceof Float64Array||"[object Float64Array]"===m(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?P:function(){throw new Error("not implemented")};var G,k=F,L="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,W="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var r,t,n;if("function"!=typeof x)return!1;try{t=new x(t=[1,3.14,-3.14,256,257]),n=t,r=(L&&n instanceof Uint8Array||"[object Uint8Array]"===m(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")};var q,C=G,Y="function"==typeof Uint16Array,R="function"==typeof Uint16Array?Uint16Array:null,z="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var r,t,n;if("function"!=typeof R)return!1;try{t=new R(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Y&&n instanceof Uint16Array||"[object Uint16Array]"===m(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B,D={uint16:q,uint8:C};(B=new D.uint16(1))[0]=4660;var J=52===new D.uint8(B.buffer)[0],K=!0===J?1:0,Q=new k(1),X=new V(Q.buffer);function Z(r){return Q[0]=r,X[K]}var $=!0===J?1:0,rr=new k(1),tr=new V(rr.buffer);function nr(r,t){return rr[0]=r,tr[$]=t>>>0,rr[0]}var er=1023,ir=N.NEGATIVE_INFINITY,ur=.6931471803691238,or=1.9082149292705877e-10,fr=1048575;function ar(r){var t,n,e,i,u,o,f,a,c,s,l,p;return 0===r?ir:E(r)||r<0?NaN:(u=0,(n=Z(r))<1048576&&(u-=54,n=Z(r*=0x40000000000000)),n>=2146435072?r+r:(u+=(n>>20)-er|0,u+=(a=614244+(n&=fr)&1048576|0)>>20|0,f=(r=nr(r,n|1072693248^a))-1,(fr&2+n)<3?0===f?0===u?0:u*ur+u*or:(o=f*f*(.5-.3333333333333333*f),0===u?f-o:u*ur-(o-u*or-f)):(a=n-398458|0,c=440401-n|0,i=(l=(p=(s=f/(2+f))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=e+i,(a|=c)>0?(t=.5*f*f,0===u?f-(t-s*(t+o)):u*ur-(t-(s*(t+o)+u*or)-f)):0===u?f-s*(f-o):u*ur-(s*(f-o)-u*or-f))))}var cr=.5772156649015329,sr=Math.floor;function lr(r){return sr(r)===r}function pr(r){return Math.abs(r)}function yr(r,t){var n,e,i,u;return i=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(i=1-(n=.5*u))+(1-i-n+(u*e-r*t))}var hr=-.16666666666666632;function vr(r,t){var n,e,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),e=i*r,0===t?r+e*(hr+i*n):r-(i*(.5*t-e*n)-t-e*hr)}var br,mr,Nr=!0===J?0:1,wr=new k(1),dr=new V(wr.buffer);!0===J?(br=1,mr=0):(br=0,mr=1);var gr={HIGH:br,LOW:mr},Ar=new k(1),_r=new V(Ar.buffer),Ur=gr.HIGH,jr=gr.LOW;function Er(r,t){return _r[Ur]=r,_r[jr]=t,Ar[0]}var Tr=Number.POSITIVE_INFINITY;function Or(r){return r===Tr||r===ir}var Ir,Sr,Fr=2147483647;!0===J?(Ir=1,Sr=0):(Ir=0,Sr=1);var Vr={HIGH:Ir,LOW:Sr},Hr=new k(1),Mr=new V(Hr.buffer),Pr=Vr.HIGH,Gr=Vr.LOW;function kr(r,t,n,e){return Hr[0]=r,t[e]=Mr[Pr],t[e+n]=Mr[Gr],t}function Lr(r){return kr(r,[0,0],1,0)}c(Lr,"assign",kr);var xr=[0,0];function Wr(r,t){var n,e;return Lr.assign(r,xr,1,0),n=xr[0],n&=Fr,e=Z(t),Er(n|=e&=2147483648,xr[1])}function qr(r,t,n,e){return E(r)||Or(r)?(t[e]=r,t[e+n]=0,t):0!==r&&pr(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}c((function(r){return qr(r,[0,0],1,0)}),"assign",qr);var Cr=[0,0],Yr=[0,0];function Rr(r,t){var n,e;return 0===t||0===r||E(r)||Or(r)?r:(qr(r,Cr,1,0),t+=Cr[1],t+=function(r){var t=Z(r);return(t=(2146435072&t)>>>20)-er|0}(r=Cr[0]),t<-1074?Wr(0,r):t>1023?r<0?ir:Tr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Lr.assign(r,Yr,1,0),n=Yr[0],n&=2148532223,e*Er(n|=t+er<<20,Yr[1])))}function zr(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var Br=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Dr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Jr=16777216,Kr=5.960464477539063e-8,Qr=zr(20),Xr=zr(20),Zr=zr(20),$r=zr(20);function rt(r,t,n,e,i,u,o,f,a){var c,s,l,p,y,h,v,b,m;for(p=u,m=e[n],b=n,y=0;b>0;y++)s=Kr*m|0,$r[y]=m-Jr*s|0,m=e[b-1]+s,b-=1;if(m=Rr(m,i),m-=8*sr(.125*m),m-=v=0|m,l=0,i>0?(v+=y=$r[n-1]>>24-i,$r[n-1]-=y<<24-i,l=$r[n-1]>>23-i):0===i?l=$r[n-1]>>23:m>=.5&&(l=2),l>0){for(v+=1,c=0,y=0;y<n;y++)b=$r[y],0===c?0!==b&&(c=1,$r[y]=16777216-b):$r[y]=16777215-b;if(i>0)switch(i){case 1:$r[n-1]&=8388607;break;case 2:$r[n-1]&=4194303}2===l&&(m=1-m,0!==c&&(m-=Rr(1,i)))}if(0===m){for(b=0,y=n-1;y>=u;y--)b|=$r[y];if(0===b){for(h=1;0===$r[u-h];h++);for(y=n+1;y<=n+h;y++){for(a[f+y]=Br[o+y],s=0,b=0;b<=f;b++)s+=r[b]*a[f+(y-b)];e[y]=s}return rt(r,t,n+=h,e,i,u,o,f,a)}}if(0===m)for(n-=1,i-=24;0===$r[n];)n-=1,i-=24;else(m=Rr(m,-i))>=Jr?(s=Kr*m|0,$r[n]=m-Jr*s|0,i+=24,$r[n+=1]=s):$r[n]=0|m;for(s=Rr(1,i),y=n;y>=0;y--)e[y]=s*$r[y],s*=Kr;for(y=n;y>=0;y--){for(s=0,h=0;h<=p&&h<=n-y;h++)s+=Dr[h]*e[y+h];Zr[n-y]=s}for(s=0,y=n;y>=0;y--)s+=Zr[y];for(t[0]=0===l?s:-s,s=Zr[0]-s,y=1;y<=n;y++)s+=Zr[y];return t[1]=0===l?s:-s,7&v}function tt(r,t,n,e){var i,u,o,f,a,c,s;for((u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(o=e-1),s=o+4,a=0;a<=s;a++)Qr[a]=c<0?0:Br[c],c+=1;for(a=0;a<=4;a++){for(i=0,c=0;c<=o;c++)i+=r[c]*Qr[o+(a-c)];Xr[a]=i}return rt(r,t,4,Xr,f,4,u,o,Qr)}var nt=Math.round;function et(r,t,n){var e,i,u,o,f;return u=r-1.5707963267341256*(e=nt(.6366197723675814*r)),o=6077100506506192e-26*e,f=t>>20|0,n[0]=u-o,f-(Z(n[0])>>20&2047)>16&&(o=20222662487959506e-37*e-((i=u)-(u=i-(o=6077100506303966e-26*e))-o),n[0]=u-o,f-(Z(n[0])>>20&2047)>49&&(o=84784276603689e-45*e-((i=u)-(u=i-(o=20222662487111665e-37*e))-o),n[0]=u-o)),n[1]=u-n[0]-o,e}var it=1.5707963267341256,ut=6077100506506192e-26,ot=2*ut,ft=3*ut,at=4*ut,ct=[0,0,0],st=[0,0];function lt(r,t){var n,e,i,u,o,f,a;if((i=2147483647&Z(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?et(r,i,t):i<=1073928572?r>0?(a=r-it,t[0]=a-ut,t[1]=a-t[0]-ut,1):(a=r+it,t[0]=a+ut,t[1]=a-t[0]+ut,-1):r>0?(a=r-2*it,t[0]=a-ot,t[1]=a-t[0]-ot,2):(a=r+2*it,t[0]=a+ot,t[1]=a-t[0]+ot,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?et(r,i,t):r>0?(a=r-3*it,t[0]=a-ft,t[1]=a-t[0]-ft,3):(a=r+3*it,t[0]=a+ft,t[1]=a-t[0]+ft,-3):1075388923===i?et(r,i,t):r>0?(a=r-4*it,t[0]=a-at,t[1]=a-t[0]-at,4):(a=r+4*it,t[0]=a+at,t[1]=a-t[0]+at,-4);if(i<1094263291)return et(r,i,t);if(i>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return wr[0]=r,dr[Nr]}(r),a=Er(i-((e=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)ct[o]=0|a,a=16777216*(a-ct[o]);for(ct[2]=a,u=3;0===ct[u-1];)u-=1;return f=tt(ct,st,e,u),r<0?(t[0]=-st[0],t[1]=-st[1],-f):(t[0]=st[0],t[1]=st[1],f)}var pt=[0,0],yt=3.141592653589793;function ht(r){return lr(r/2)}function vt(r){return ht(r>0?r-1:r+1)}var bt=Math.sqrt,mt=!0===J?0:1,Nt=new k(1),wt=new V(Nt.buffer);function dt(r,t){return Nt[0]=r,wt[mt]=t>>>0,Nt[0]}function gt(r){return 0|r}var At=1048576,_t=[1,1.5],Ut=[0,.5849624872207642],jt=[0,1.350039202129749e-8],Et=.6931471805599453,Tt=1048575,Ot=1048576,It=1083179008,St=1e300,Ft=1e-300,Vt=[0,0],Ht=[0,0];function Mt(r,t){var n,e,i,u,o,f,a,c,s,l,p,y,h,v;if(E(r)||E(t))return NaN;if(Lr.assign(t,Vt,1,0),o=Vt[0],0===Vt[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return bt(r);if(-.5===t)return 1/bt(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Or(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:pr(r)<1==(t===Tr)?0:Tr}(r,t)}if(Lr.assign(r,Vt,1,0),u=Vt[0],0===Vt[1]){if(0===u)return function(r,t){return t===ir?Tr:t===Tr?0:t>0?vt(t)?r:0:vt(t)?Wr(Tr,r):Tr}(r,t);if(1===r)return 1;if(-1===r&&vt(t))return-1;if(Or(r))return r===ir?Mt(-0,-t):t<0?0:Tr}if(r<0&&!1===lr(t))return(r-r)/(r-r);if(i=pr(r),n=u&Fr|0,e=o&Fr|0,a=o>>>31|0,f=(f=u>>>31|0)&&vt(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(Z(r)&Fr)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===a?f*St*St:f*Ft*Ft;if(n>1072693248)return 0===a?f*St*St:f*Ft*Ft;p=function(r,t){var n,e,i,u,o,f;return n=(o=1.9259629911266175e-8*(i=t-1)-i*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=dt(e=(u=1.4426950216293335*i)+o,0))-u),r[0]=e,r[1]=n,r}(Ht,i)}else p=function(r,t,n){var e,i,u,o,f,a,c,s,l,p,y,h,v,b,m,N,w,d,g,A,_;return d=0,n<At&&(d-=53,n=Z(t*=9007199254740992)),d+=(n>>20)-er|0,n=1072693248|(g=1048575&n|0),g<=235662?A=0:g<767610?A=1:(A=0,d+=1,n-=At),o=dt(i=(N=(t=nr(t,n))-(c=_t[A]))*(w=1/(t+c)),0),e=524288+(n>>1|536870912),a=nr(0,e+=A<<18),m=(u=i*i)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=dt(a=3+(u=o*o)+(m+=(f=w*(N-o*a-o*(t-(a-c))))*(o+i)),0),v=(y=-7.028461650952758e-9*(l=dt(l=(N=o*a)+(w=f*a+(m-(a-3-u))*i),0))+.9617966939259756*(w-(l-N))+jt[A])-((h=dt(h=(p=.9617967009544373*l)+y+(s=Ut[A])+(b=d),0))-b-s-p),r[0]=h,r[1]=v,r}(Ht,i,n);if(y=(l=(t-(c=dt(t,0)))*p[0]+t*p[1])+(s=c*p[0]),Lr.assign(y,Vt,1,0),h=gt(Vt[0]),v=gt(Vt[1]),h>=It){if(0!=(h-It|v))return f*St*St;if(l+8008566259537294e-32>y-s)return f*St*St}else if((h&Fr)>=1083231232){if(0!=(h-3230714880|v))return f*Ft*Ft;if(l<=y-s)return f*Ft*Ft}return y=function(r,t,n){var e,i,u,o,f,a,c,s,l,p;return l=((s=r&Fr|0)>>20)-er|0,c=0,s>1071644672&&(i=nr(0,((c=r+(Ot>>l+1)>>>0)&~(Tt>>(l=((c&Fr)>>20)-er|0)))>>>0),c=(c&Tt|Ot)>>20-l>>>0,r<0&&(c=-c),t-=i),r=gt(r=Z(a=1-((a=(u=.6931471824645996*(i=dt(i=n+t,0)))+(o=(n-(i-t))*Et+-1.904654299957768e-9*i))*(e=a-(i=a*a)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=o-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Rr(a,c):nr(a,r)}(h,s,l),f*y}var Pt=Math.ceil;function Gt(r){return r<0?Pt(r):sr(r)}var kt=1.4426950408889634,Lt=1/(1<<28);function xt(r){var t;return E(r)||r===Tr?r:r===ir?0:r>709.782712893384?Tr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Lt?1+r:function(r,t,n){var e,i,u,o;return Rr(1-(t-(e=r-t)*(u=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),n)}(r-.6931471803691238*(t=Gt(r<0?kt*r-.5:kt*r+.5)),1.9082149292705877e-10*t,t)}function Wt(r){var t,n,e;return t=1+(t=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(t),n=xt(r),2.5066282746310007*(n=r>143.01608?(e=Mt(r,.5*r-.25))*(e/n):Mt(r,r-.5)/n)*t}function qt(r,t){return t/((1+cr*r)*r)}function Ct(r){var t,n,e,i;if(lr(r)&&r<0||r===ir||E(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===ir}(r)?ir:Tr;if(r>171.61447887182297)return Tr;if(r<-170.5674972726612)return 0;if((n=pr(r))>33)return r>=0?Wt(r):(t=0==(1&(e=sr(n)))?-1:1,(i=n-e)>.5&&(i=n-(e+=1)),i=n*function(r){var t;if(t=Z(r),(t&=2147483647)<=1072243195)return t<1045430272?r:vr(r,0);if(t>=2146435072)return NaN;switch(3&lt(r,pt)){case 0:return vr(pt[0],pt[1]);case 1:return yr(pt[0],pt[1]);case 2:return-vr(pt[0],pt[1]);default:return-yr(pt[0],pt[1])}}(yt*i),t*yt/(pr(i)*Wt(n)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return qt(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return qt(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(t=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),t/n)}(r-=2)}function Yt(r,t,n,e){return E(r)||E(t)||E(n)||E(e)||t<=0||n<=0?NaN:r<=e?0:xt(-Mt((r-e)/n,-t))}function Rt(r){return function(){return r}}function zt(r,t,n,e){return E(r)||E(t)||E(n)||E(e)||t<=0||n<=0?NaN:r<=e?ir:-Mt((r-e)/n,-t)}function Bt(r,t,n,e){var i;return E(r)||E(t)||E(n)||E(e)||t<=0||n<=0?NaN:r<=e?ir:(i=(r-e)/n,ar(t/n)-(1+t)*ar(i)-Mt(i,-t))}function Dt(r,t,n){return E(r)||E(t)||E(n)||r<=0||t<=0?Rt(NaN):function(e){var i;return E(e)?NaN:e<=n?ir:(i=(e-n)/t,ar(r/t)-(1+r)*ar(i)-Mt(i,-r))}}function Jt(r,t,n,e){return E(r)||E(t)||E(n)||E(e)||t<=0||n<=0?NaN:xt(Bt(r,t,n,e))}function Kt(r,t,n,e){return E(r)||E(t)||E(n)||E(e)||r<0||r>1||t<=0||n<=0?NaN:e+n*Mt(-ar(r),-1/t)}function Qt(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function Xt(){var r,t,n;if(!(this instanceof Xt))return 0===arguments.length?new Xt:new Xt(arguments[0],arguments[1],arguments[2]);if(arguments.length){if(t=arguments[1],n=arguments[2],!_(r=arguments[0]))throw new TypeError(Qt("0V77v",r));if(!_(t))throw new TypeError(Qt("invalid argument. Scale parameter must be a number. Value: `%s`.",t));if(!l(n)||E(n))throw new TypeError(Qt("invalid argument. Location parameter must be a number. Value: `%s`.",n))}else r=1,t=1,n=0;return a(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!_(t))throw new TypeError(Qt("invalid assignment. Must be a positive number. Value: `%s`.",t));r=t}}),a(this,"s",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!_(r))throw new TypeError(Qt("invalid assignment. Must be a positive number. Value: `%s`.",r));t=r}}),a(this,"m",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!l(r)||E(r))throw new TypeError(Qt("invalid assignment. Must be a number. Value: `%s`.",r));n=r}}),this}return c(Yt,"factory",(function(r,t,n){return E(r)||E(t)||E(n)||r<=0||t<=0?Rt(NaN):function(e){return E(e)?NaN:e<=n?0:xt(-Mt((e-n)/t,-r))}})),c(zt,"factory",(function(r,t,n){return E(r)||E(t)||E(n)||r<=0||t<=0?Rt(NaN):function(e){return E(e)?NaN:e<=n?ir:-Mt((e-n)/t,-r)}})),c(Bt,"factory",Dt),c(Jt,"factory",(function(r,t,n){var e;return E(r)||E(t)||E(n)||r<=0||t<=0?Rt(NaN):(e=Dt(r,t,n),function(i){return E(i)?NaN:xt(e(i,r,t,n))})})),c(Kt,"factory",(function(r,t,n){return E(r)||E(t)||E(n)||r<=0||t<=0?Rt(NaN):function(e){return E(e)||e<0||e>1?NaN:n+t*Mt(-ar(e),-1/r)}})),s(Xt.prototype,"entropy",(function(){return r=this.alpha,t=this.s,n=this.m,E(r)||E(t)||E(n)||r<=0||t<=0?NaN:1+cr/r+cr+ar(t/r);var r,t,n})),s(Xt.prototype,"kurtosis",(function(){return r=this.alpha,t=this.s,n=this.m,E(r)||E(t)||E(n)||r<=0||t<=0?NaN:r<=4?Tr:(i=Ct(1-1/r),u=Ct(1-2/r),o=Ct(1-3/r),e=(Ct(1-4/r)-4*o*i+3*u*u)/Mt(u-i*i,2),e-=6);var r,t,n,e,i,u,o})),s(Xt.prototype,"mean",(function(){return r=this.alpha,t=this.s,n=this.m,E(r)||E(t)||E(n)||r<=0||t<=0?NaN:r<=1?Tr:n+t*Ct(1-1/r);var r,t,n})),s(Xt.prototype,"median",(function(){return r=this.alpha,t=this.s,n=this.m,E(r)||E(t)||E(n)||r<=0||t<=0?NaN:n+t*Mt(Et,-1/r);var r,t,n})),s(Xt.prototype,"mode",(function(){return r=this.alpha,t=this.s,n=this.m,E(r)||E(t)||E(n)||r<=0||t<=0?NaN:n+t*Mt(1+(e=1/r),-e);var r,t,n,e})),s(Xt.prototype,"skewness",(function(){return r=this.alpha,t=this.s,n=this.m,E(r)||E(t)||E(n)||r<=0||t<=0?NaN:r<=3?Tr:(e=(i=Ct(1-1/r))*i,u=Ct(1-2/r),(Ct(1-3/r)-3*u*i+2*e*i)/Mt(u-e,1.5));var r,t,n,e,i,u})),s(Xt.prototype,"stdev",(function(){return r=this.alpha,t=this.s,n=this.m,E(r)||E(t)||E(n)||r<=0||t<=0?NaN:r<=2?Tr:(e=Ct(1-1/r),i=Ct(1-2/r),t*bt(i-e*e));var r,t,n,e,i})),s(Xt.prototype,"variance",(function(){return r=this.alpha,t=this.s,n=this.m,E(r)||E(t)||E(n)||r<=0||t<=0?NaN:r<=2?Tr:(e=Ct(1-1/r),t*t*(Ct(1-2/r)-e*e));var r,t,n,e})),c(Xt.prototype,"cdf",(function(r){return Yt(r,this.alpha,this.s,this.m)})),c(Xt.prototype,"logcdf",(function(r){return zt(r,this.alpha,this.s,this.m)})),c(Xt.prototype,"logpdf",(function(r){return Bt(r,this.alpha,this.s,this.m)})),c(Xt.prototype,"pdf",(function(r){return Jt(r,this.alpha,this.s,this.m)})),c(Xt.prototype,"quantile",(function(r){return Kt(r,this.alpha,this.s,this.m)})),Xt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).Frechet=t();
//# sourceMappingURL=browser.js.map
