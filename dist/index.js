"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=u(function(T,i){"use strict";var o=require("@stdlib/number-float64-base-to-float32");function q(e,r){var f,t;if(t=e.length,t<2||r===0)return t===0?0:e[0];for(t-=1,f=o(o(e[t]*r)+e[t-1]),t-=2;t>=0;)f=o(o(f*r)+e[t]),t-=1;return f}i.exports=q});var v=u(function(c,l){"use strict";var _=require("@stdlib/number-float64-base-to-float32"),h=require("@stdlib/array-float32"),x=require("@stdlib/function-ctor"),F=n();function g(e){var r,f,t,a;if(e=new h(e),e.length>500)return y;if(r="return function evalpolyf(x){",f=e.length,f===0)r+="return 0.0;";else if(f===1)r+="return "+e[0]+";";else{for(r+="if(x===0.0){return "+e[0]+";}",r+="return f64_to_f32("+e[0],t=f-1,a=1;a<f;a++)r+="+f64_to_f32(x*",a<t&&(r+="f64_to_f32("),r+=e[a];for(a=0;a<2*t;a++)r+=")";r+=";"}return r+="}",r+="//# sourceURL=evalpolyf.factory.js",new x("f64_to_f32",r)(_);function y(p){return F(e,p)}}l.exports=g});var w=require("@stdlib/utils-define-nonenumerable-read-only-property"),s=n(),m=v();w(s,"factory",m);module.exports=s;
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
//# sourceMappingURL=index.js.map
