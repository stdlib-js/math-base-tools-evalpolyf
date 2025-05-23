<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# evalpolyf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate a [polynomial][polynomial] using single-precision floating-point arithmetic.

<section class="intro">

A [polynomial][polynomial] in a variable `x` can be expressed as

<!-- <equation class="equation" label="eq:polynomial" align="center" raw="c_nx^n + c_{n-1}x^{n-1} + \ldots + c_1x^1 + c_0 = \sum_{i=0}^{n} c_ix^i" alt="Polynomial expression."> -->

```math
c_nx^n + c_{n-1}x^{n-1} + \ldots + c_1x^1 + c_0 = \sum_{i=0}^{n} c_ix^i
```

<!-- <div class="equation" align="center" data-raw-text="c_nx^n + c_{n-1}x^{n-1} + \ldots + c_1x^1 + c_0 = \sum_{i=0}^{n} c_ix^i" data-equation="eq:polynomial">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/evalpoly/docs/img/equation_polynomial.svg" alt="Polynomial expression.">
    <br>
</div> -->

<!-- </equation> -->

where `c_n, c_{n-1}, ..., c_0` are constants.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-tools-evalpolyf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var evalpolyf = require( '@stdlib/math-base-tools-evalpolyf' );
```

#### evalpolyf( c, x )

Evaluates a [polynomial][polynomial] having coefficients `c` and degree `n` at a value `x`, where `n = c.length-1`.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var v = evalpolyf( new Float32Array( [ 3.0, 2.0, 1.0 ] ), 10 ); // => 3*10^0 + 2*10^1 + 1*10^2
// returns 123.0
```

The coefficients should be ordered in **ascending** degree, thus matching summation notation.

#### evalpolyf.factory( c )

Uses code generation to in-line coefficients and return a function for evaluating a [polynomial][polynomial] using single-precision floating-point arithmetic.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var polyval = evalpolyf.factory( new Float32Array( [ 3.0, 2.0, 1.0 ] ) );

var v = polyval( 10.0 ); // => 3*10^0 + 2*10^1 + 1*10^2
// returns 123.0

v = polyval( 5.0 ); // => 3*5^0 + 2*5^1 + 1*5^2
// returns 38.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For hot code paths in which coefficients are invariant, a compiled function will be more performant than `evalpolyf()`.
-   While code generation can boost performance, its use may be problematic in browser contexts enforcing a strict [content security policy][mdn-csp] (CSP). If running in or targeting an environment with a CSP, avoid using code generation.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var uniform = require( '@stdlib/random-base-uniform' );
var evalpolyf = require( '@stdlib/math-base-tools-evalpolyf' );

// Create an array of random coefficients:
var coef = discreteUniform( 10, -100, 100, {
    'dtype': 'float32'
});

// Evaluate the polynomial at random values:
var v;
var i;
for ( i = 0; i < 100; i++ ) {
    v = uniform( 0.0, 100.0 );
    console.log( 'f(%d) = %d', v, evalpolyf( coef, v ) );
}

// Generate an `evalpolyf` function:
var polyval = evalpolyf.factory( coef );
for ( i = 0; i < 100; i++ ) {
    v = uniform( -50.0, 50.0 );
    console.log( 'f(%d) = %d', v, polyval( v ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-tools-evalpolyf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-tools-evalpolyf

[test-image]: https://github.com/stdlib-js/math-base-tools-evalpolyf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-tools-evalpolyf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-tools-evalpolyf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-tools-evalpolyf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-tools-evalpolyf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-tools-evalpolyf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-tools-evalpolyf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-tools-evalpolyf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-tools-evalpolyf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-tools-evalpolyf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-tools-evalpolyf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-tools-evalpolyf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-tools-evalpolyf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-tools-evalpolyf/main/LICENSE

[polynomial]: https://en.wikipedia.org/wiki/Polynomial

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

</section>

<!-- /.links -->
