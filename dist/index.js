"use strict";var g=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var l=g(function(A,c){
var p=require('@stdlib/utils-define-property/dist'),o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),h=require('@stdlib/assert-is-positive-number/dist').isPrimitive,m=require('@stdlib/assert-is-number/dist').isPrimitive,f=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/stats-base-dists-frechet-entropy/dist'),y=require('@stdlib/stats-base-dists-frechet-kurtosis/dist'),d=require('@stdlib/stats-base-dists-frechet-mean/dist'),q=require('@stdlib/stats-base-dists-frechet-median/dist'),b=require('@stdlib/stats-base-dists-frechet-mode/dist'),w=require('@stdlib/stats-base-dists-frechet-skewness/dist'),E=require('@stdlib/stats-base-dists-frechet-stdev/dist'),P=require('@stdlib/stats-base-dists-frechet-variance/dist'),T=require('@stdlib/stats-base-dists-frechet-cdf/dist'),V=require('@stdlib/stats-base-dists-frechet-logcdf/dist'),F=require('@stdlib/stats-base-dists-frechet-logpdf/dist'),k=require('@stdlib/stats-base-dists-frechet-pdf/dist'),D=require('@stdlib/stats-base-dists-frechet-quantile/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function L(e){return T(e,this.alpha,this.s,this.m)}function M(e){return V(e,this.alpha,this.s,this.m)}function x(e){return F(e,this.alpha,this.s,this.m)}function C(e){return k(e,this.alpha,this.s,this.m)}function O(e){return D(e,this.alpha,this.s,this.m)}function r(){var e,i,n;if(!(this instanceof r))return arguments.length===0?new r:new r(arguments[0],arguments[1],arguments[2]);if(arguments.length){if(e=arguments[0],i=arguments[1],n=arguments[2],!h(e))throw new TypeError(a('10R7d',e));if(!h(i))throw new TypeError(a('10R91',i));if(!m(n)||f(n))throw new TypeError(a('10R8p',n))}else e=1,i=1,n=0;return p(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!h(t))throw new TypeError(a('10R8k',t));e=t}}),p(this,"s",{configurable:!1,enumerable:!0,get:function(){return i},set:function(t){if(!h(t))throw new TypeError(a('10R8k',t));i=t}}),p(this,"m",{configurable:!1,enumerable:!0,get:function(){return n},set:function(t){if(!m(t)||f(t))throw new TypeError(a('10R8d',t));n=t}}),this;}s(r.prototype,"entropy",function(){return v(this.alpha,this.s,this.m)});s(r.prototype,"kurtosis",function(){return y(this.alpha,this.s,this.m)});s(r.prototype,"mean",function(){return d(this.alpha,this.s,this.m)});s(r.prototype,"median",function(){return q(this.alpha,this.s,this.m)});s(r.prototype,"mode",function(){return b(this.alpha,this.s,this.m)});s(r.prototype,"skewness",function(){return w(this.alpha,this.s,this.m)});s(r.prototype,"stdev",function(){return E(this.alpha,this.s,this.m)});s(r.prototype,"variance",function(){return P(this.alpha,this.s,this.m)});o(r.prototype,"cdf",L);o(r.prototype,"logcdf",M);o(r.prototype,"logpdf",x);o(r.prototype,"pdf",C);o(r.prototype,"quantile",O);c.exports=r
});var R=l();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
