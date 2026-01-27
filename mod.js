// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function t(t){return n[t]||null}var l=64,u=8;function i(n,i,o,a,r){var e,f,c,b,p,v;return e=t(n),f=t(i),c=t(o),b=t(a),p=t(r),null===e||null===f||null===c||null===b||null===p?u:(f>(v=e)&&(v=f),c>v&&(v=c),b>v&&(v=b),p>v&&(v=p),l/v|0)}export{i as default};
//# sourceMappingURL=mod.js.map
