// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.1-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-entropy@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-kurtosis@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-mean@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-median@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-mode@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-skewness@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-stdev@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-variance@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-cdf@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-logcdf@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-logpdf@v0.1.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-pdf@v0.1.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-quantile@v0.1.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function y(){var s,e,o;if(!(this instanceof y))return 0===arguments.length?new y:new y(arguments[0],arguments[1],arguments[2]);if(arguments.length){if(e=arguments[1],o=arguments[2],!i(s=arguments[0]))throw new TypeError(g("10R7d,HT",s));if(!i(e))throw new TypeError(g("10R91,Hc",e));if(!r(o)||n(o))throw new TypeError(g("10R8p,HM",o))}else s=1,e=1,o=0;return t(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new TypeError(g("10R8k,HE",t));s=t}}),t(this,"s",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!i(t))throw new TypeError(g("10R8k,HE",t));e=t}}),t(this,"m",{configurable:!1,enumerable:!0,get:function(){return o},set:function(t){if(!r(t)||n(t))throw new TypeError(g("10R8d,H8",t));o=t}}),this}e(y.prototype,"entropy",(function(){return o(this.alpha,this.s,this.m)})),e(y.prototype,"kurtosis",(function(){return h(this.alpha,this.s,this.m)})),e(y.prototype,"mean",(function(){return d(this.alpha,this.s,this.m)})),e(y.prototype,"median",(function(){return m(this.alpha,this.s,this.m)})),e(y.prototype,"mode",(function(){return p(this.alpha,this.s,this.m)})),e(y.prototype,"skewness",(function(){return a(this.alpha,this.s,this.m)})),e(y.prototype,"stdev",(function(){return f(this.alpha,this.s,this.m)})),e(y.prototype,"variance",(function(){return l(this.alpha,this.s,this.m)})),s(y.prototype,"cdf",(function(t){return c(t,this.alpha,this.s,this.m)})),s(y.prototype,"logcdf",(function(t){return j(t,this.alpha,this.s,this.m)})),s(y.prototype,"logpdf",(function(t){return u(t,this.alpha,this.s,this.m)})),s(y.prototype,"pdf",(function(t){return v(t,this.alpha,this.s,this.m)})),s(y.prototype,"quantile",(function(t){return b(t,this.alpha,this.s,this.m)}));export{y as default};
//# sourceMappingURL=index.mjs.map
