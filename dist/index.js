"use strict";var s=function(l,e){return function(){return e||l((e={exports:{}}).exports,e),e.exports}};var v=s(function(q,_){
var N={BLOCK_SIZE_IN_BYTES:64,BLOCK_SIZE_IN_ELEMENTS:8};_.exports=N
});var I=s(function(C,f){
var u=require('@stdlib/ndarray-base-bytes-per-element/dist'),S=v();function c(l,e,B,b,L){var E,n,t,a,i,r;return E=u(l),n=u(e),t=u(B),a=u(b),i=u(L),E===null||n===null||t===null||a===null||i===null?S.BLOCK_SIZE_IN_ELEMENTS:(r=E,n>r&&(r=n),t>r&&(r=t),a>r&&(r=a),i>r&&(r=i),S.BLOCK_SIZE_IN_BYTES/r|0)}f.exports=c
});var o=I();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
