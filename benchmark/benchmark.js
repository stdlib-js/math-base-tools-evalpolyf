/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var uniform = require( '@stdlib/random-array-uniform' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var pkg = require( './../package.json' ).name;
var evalpolyf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var coefs;
	var opts;
	var x;
	var v;
	var i;

	opts = {
		'dtype': 'float32'
	};
	coefs = [
		uniform( 10, 0.0, 100.0, opts ),
		uniform( 10, 0.0, 100.0, opts ),
		uniform( 10, 0.0, 100.0, opts )
	];
	x = uniform( 10, 0.0, 100.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = evalpolyf( coefs[ i%coefs.length ], x[ i%x.length ] );
		if ( isnan( v ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
