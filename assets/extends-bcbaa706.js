import{r as y}from"./index-e63ce150.js";var p={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l;function O(){if(l)return s;l=1;var u=y,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function _(i,r,m){var e,a={},f=null,c=null;m!==void 0&&(f=""+m),r.key!==void 0&&(f=""+r.key),r.ref!==void 0&&(c=r.ref);for(e in r)o.call(r,e)&&!v.hasOwnProperty(e)&&(a[e]=r[e]);if(i&&i.defaultProps)for(e in r=i.defaultProps,r)a[e]===void 0&&(a[e]=r[e]);return{$$typeof:t,type:i,key:f,ref:c,props:a,_owner:d.current}}return s.Fragment=n,s.jsx=_,s.jsxs=_,s}var x;function j(){return x||(x=1,p.exports=O()),p.exports}var b=j();function R(){return R=Object.assign?Object.assign.bind():function(u){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(u[o]=n[o])}return u},R.apply(null,arguments)}export{R as _,b as j,j as r};
