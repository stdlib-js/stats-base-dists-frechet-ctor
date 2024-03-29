/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var defineProperty = require( '@stdlib/utils-define-property' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var isPositive = require( '@stdlib/assert-is-positive-number' ).isPrimitive;
var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var entropy = require( '@stdlib/stats-base-dists-frechet-entropy' );
var kurtosis = require( '@stdlib/stats-base-dists-frechet-kurtosis' );
var mean = require( '@stdlib/stats-base-dists-frechet-mean' );
var median = require( '@stdlib/stats-base-dists-frechet-median' );
var mode = require( '@stdlib/stats-base-dists-frechet-mode' );
var skewness = require( '@stdlib/stats-base-dists-frechet-skewness' );
var stdev = require( '@stdlib/stats-base-dists-frechet-stdev' );
var variance = require( '@stdlib/stats-base-dists-frechet-variance' );
var cdf = require( '@stdlib/stats-base-dists-frechet-cdf' );
var logcdf = require( '@stdlib/stats-base-dists-frechet-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-frechet-logpdf' );
var pdf = require( '@stdlib/stats-base-dists-frechet-pdf' );
var quantile = require( '@stdlib/stats-base-dists-frechet-quantile' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated CDF
*/
function frechetCDF( x ) {
	return cdf( x, this.alpha, this.s, this.m );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function frechetLogCDF( x ) {
	return logcdf( x, this.alpha, this.s, this.m );
}

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function frechetLogPDF( x ) {
	return logpdf( x, this.alpha, this.s, this.m );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function frechetPDF( x ) {
	return pdf( x, this.alpha, this.s, this.m );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function frechetQuantile( p ) {
	return quantile( p, this.alpha, this.s, this.m );
}


// MAIN //

/**
* Fréchet distribution constructor.
*
* @constructor
* @param {number} [alpha=0.0] - shape parameter
* @param {number} [s=1.0] - scale parameter
* @param {number} [m=0.0] - location parameter
* @throws {TypeError} `alpha` must be a positive number
* @throws {TypeError} `s` must be a positive number
* @returns {Frechet} distribution instance
*
* @example
* var frechet = new Frechet( 1.0, 1.0, 0.25 );
*
* var y = frechet.cdf( 0.8 );
* // returns ~0.162
*
* var mu = frechet.mean;
* // returns Infinity
*/
function Frechet() {
	var alpha;
	var s;
	var m;
	if ( !(this instanceof Frechet) ) {
		if ( arguments.length === 0 ) {
			return new Frechet();
		}
		return new Frechet( arguments[ 0 ], arguments[ 1 ], arguments[ 2 ] );
	}
	if ( arguments.length ) {
		alpha = arguments[ 0 ];
		s = arguments[ 1 ];
		m = arguments[ 2 ];
		if ( !isPositive( alpha ) ) {
			throw new TypeError( format( 'invalid argument. Shape parameter must be a positive number. Value: `%s`.', alpha ) );
		}
		if ( !isPositive( s ) ) {
			throw new TypeError( format( 'invalid argument. Scale parameter must be a number. Value: `%s`.', s ) );
		}
		if ( !isNumber( m ) || isnan( m ) ) {
			throw new TypeError( format( 'invalid argument. Location parameter must be a number. Value: `%s`.', m ) );
		}
	} else {
		alpha = 1.0;
		s = 1.0;
		m = 0.0;
	}
	defineProperty( this, 'alpha', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return alpha;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			alpha = value;
		}
	});
	defineProperty( this, 's', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return s;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			s = value;
		}
	});
	defineProperty( this, 'm', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return m;
		},
		'set': function set( value ) {
			if ( !isNumber( value ) || isnan( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a number. Value: `%s`.', value ) );
			}
			m = value;
		}
	});
	return this;
}

/**
* Fréchet distribution differential entropy.
*
* @name entropy
* @memberof Frechet.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var frechet = new Frechet( 4.0, 12.0, 2.0 );
*
* var v = frechet.entropy;
* // returns ~2.82
*/
setReadOnlyAccessor( Frechet.prototype, 'entropy', function get() {
	return entropy( this.alpha, this.s, this.m );
});

/**
* Fréchet distribution excess kurtosis.
*
* @name kurtosis
* @memberof Frechet.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var frechet = new Frechet( 4.0, 12.0, 2.0 );
*
* var v = frechet.kurtosis;
* // returns Infinity
*/
setReadOnlyAccessor( Frechet.prototype, 'kurtosis', function get() {
	return kurtosis( this.alpha, this.s, this.m );
});

/**
* Fréchet distribution expected value.
*
* @name mean
* @memberof Frechet.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var frechet = new Frechet( 4.0, 12.0, 2.0 );
*
* var v = frechet.mean;
* // returns ~16.705
*/
setReadOnlyAccessor( Frechet.prototype, 'mean', function get() {
	return mean( this.alpha, this.s, this.m );
});

/**
* Fréchet distribution median.
*
* @name median
* @memberof Frechet.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var frechet = new Frechet( 4.0, 12.0, 2.0 );
*
* var v = frechet.median;
* // returns ~15.151
*/
setReadOnlyAccessor( Frechet.prototype, 'median', function get() {
	return median( this.alpha, this.s, this.m );
});

/**
* Fréchet distribution mode.
*
* @name mode
* @memberof Frechet.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var frechet = new Frechet( 4.0, 12.0, 2.0 );
*
* var v = frechet.mode;
* // returns ~13.349
*/
setReadOnlyAccessor( Frechet.prototype, 'mode', function get() {
	return mode( this.alpha, this.s, this.m );
});

/**
* Fréchet distribution skewness.
*
* @name skewness
* @memberof Frechet.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var frechet = new Frechet( 4.0, 12.0, 2.0 );
*
* var v = frechet.skewness;
* // returns ~5.605
*/
setReadOnlyAccessor( Frechet.prototype, 'skewness', function get() {
	return skewness( this.alpha, this.s, this.m );
});

/**
* Fréchet distribution standard deviation.
*
* @name stdev
* @memberof Frechet.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var frechet = new Frechet( 4.0, 12.0, 2.0 );
*
* var v = frechet.stdev;
* // returns ~6.245
*/
setReadOnlyAccessor( Frechet.prototype, 'stdev', function get() {
	return stdev( this.alpha, this.s, this.m );
});

/**
* Fréchet distribution variance.
*
* @name variance
* @memberof Frechet.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var frechet = new Frechet( 4.0, 12.0, 2.0 );
*
* var v = frechet.variance;
* // returns ~38.996
*/
setReadOnlyAccessor( Frechet.prototype, 'variance', function get() {
	return variance( this.alpha, this.s, this.m );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Frechet.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var frechet = new Frechet( 2.0, 4.0, 3.0 );
*
* var v = frechet.cdf( 12.0 );
* // returns ~0.821
*/
setReadOnly( Frechet.prototype, 'cdf', frechetCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @name logcdf
* @memberof Frechet.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var frechet = new Frechet( 2.0, 4.0, 3.0 );
*
* var v = frechet.logcdf( 12.0 );
* // returns ~-0.1975
*/
setReadOnly( Frechet.prototype, 'logcdf', frechetLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @name logpdf
* @memberof Frechet.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var frechet = new Frechet( 2.0, 4.0, 3.0 );
*
* var v = frechet.logpdf( 2.0 );
* // returns -Infinity
*/
setReadOnly( Frechet.prototype, 'logpdf', frechetLogPDF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Frechet.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var frechet = new Frechet( 2.0, 4.0, 3.0 );
*
* var v = frechet.pdf( 5.5 );
* // returns ~0.158
*/
setReadOnly( Frechet.prototype, 'pdf', frechetPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Frechet.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var frechet = new Frechet( 2.0, 4.0, 3.0 );
*
* var v = frechet.quantile( 0.5 );
* // returns ~7.804
*/
setReadOnly( Frechet.prototype, 'quantile', frechetQuantile );


// EXPORTS //

module.exports = Frechet;
