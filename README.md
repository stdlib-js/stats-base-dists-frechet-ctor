<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Fréchet

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fréchet distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import Frechet from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-ctor@esm/index.mjs';
```

#### Frechet( \[alpha, s, m] )

Returns a [Fréchet][frechet-distribution] distribution object.

```javascript
var frechet = new Frechet();

var mu = frechet.mean;
// returns Infinity
```

By default, `alpha = 1.0`, `s = 1.0`, and `m = 0.0`. To create a distribution having a different `alpha` (shape), `s` (scale), and `m` (location), provide the corresponding arguments.

```javascript
var frechet = new Frechet( 2.0, 4.0, 3.5 );

var mu = frechet.mean;
// returns ~10.59
```

* * *

## frechet

An [Fréchet][frechet-distribution] distribution object has the following properties and methods...

### Writable Properties

#### frechet.alpha

Shape parameter of the distribution. `alpha` **must** be a positive number.

```javascript
var frechet = new Frechet();

var alpha = frechet.alpha;
// returns 1.0

frechet.alpha = 0.5;

alpha = frechet.alpha;
// returns 0.5
```

#### frechet.s

Scale parameter of the distribution. `s` **must** be a positive number.

```javascript
var frechet = new Frechet( 2.0, 4.0, 1.5 );

var s = frechet.s;
// returns 4.0

frechet.s = 3.0;

s = frechet.s;
// returns 3.0
```

#### frechet.m

Location parameter of the distribution.

```javascript
var frechet = new Frechet( 2.0, 2.0, 4.0 );

var m = frechet.m;
// returns 4.0

frechet.m = 3.0;

m = frechet.m;
// returns 3.0
```

* * *

### Computed Properties

#### Frechet.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var frechet = new Frechet( 4.0, 12.0, 2.0 );

var entropy = frechet.entropy;
// returns ~2.82
```

#### Frechet.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var frechet = new Frechet( 4.0, 12.0, 2.0 );

var kurtosis = frechet.kurtosis;
// returns Infinity
```

#### Frechet.prototype.mean

Returns the [expected value][expected-value].

```javascript
var frechet = new Frechet( 4.0, 12.0, 2.0 );

var mu = frechet.mean;
// returns ~16.705
```

#### Frechet.prototype.median

Returns the [median][median].

```javascript
var frechet = new Frechet( 4.0, 12.0, 2.0 );

var median = frechet.median;
// returns ~15.151
```

#### Frechet.prototype.mode

Returns the [mode][mode].

```javascript
var frechet = new Frechet( 4.0, 12.0, 2.0 );

var mode = frechet.mode;
// returns ~13.349
```

#### Frechet.prototype.skewness

Returns the [skewness][skewness].

```javascript
var frechet = new Frechet( 4.0, 12.0, 2.0 );

var skewness = frechet.skewness;
// returns ~5.605
```

#### Frechet.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var frechet = new Frechet( 4.0, 12.0, 2.0 );

var s = frechet.stdev;
// returns ~6.245
```

#### Frechet.prototype.variance

Returns the [variance][variance].

```javascript
var frechet = new Frechet( 4.0, 12.0, 2.0 );

var s2 = frechet.variance;
// returns ~38.996
```

* * *

### Methods

#### Frechet.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var frechet = new Frechet( 2.0, 4.0, 3.0 );

var y = frechet.cdf( 2.5 );
// returns 0.0
```

#### Frechet.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var frechet = new Frechet( 2.0, 4.0, 3.0 );

var y = frechet.logcdf( 2.5 );
// returns -Infinity
```

#### Frechet.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var frechet = new Frechet( 2.0, 4.0, 3.0 );

var y = frechet.logpdf( 5.5 );
// returns ~-1.843
```

#### Frechet.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var frechet = new Frechet( 2.0, 4.0, 3.0 );

var y = frechet.pdf( 5.5 );
// returns ~0.158
```

#### Frechet.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var frechet = new Frechet( 2.0, 4.0, 3.0 );

var y = frechet.quantile( 0.5 );
// returns ~7.804

y = frechet.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Frechet from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-ctor@esm/index.mjs';

var frechet = new Frechet( 2.0, 4.0, 3.0 );

var mu = frechet.mean;
// returns ~10.09

var median = frechet.median;
// returns ~7.804

var s2 = frechet.variance;
// returns Infinity

var y = frechet.cdf( 2.5 );
// returns 0.0

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-frechet-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-frechet-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-frechet-ctor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-frechet-ctor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-frechet-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-frechet-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-frechet-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-frechet-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-frechet-ctor/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-frechet-ctor/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-frechet-ctor/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-frechet-ctor/main/LICENSE

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[median]: https://en.wikipedia.org/wiki/Median

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
