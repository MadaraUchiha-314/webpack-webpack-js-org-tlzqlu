!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var o=r();for(var t in o)("object"==typeof exports?exports:e)[t]=o[t]}}(self,(()=>(()=>{"use strict";var e,r,o,t,n={44:(e,r,o)=>{o.a(e,(async(e,t)=>{try{async function n(){const e={version:"1.2.3"},r=e.version;return console.log(e),console.log(r),{reactVersion:r}}o.r(r),o.d(r,{doSomething:()=>n});const a=await n();document.getElementById("remote-a").innerHTML="remote-a says"+JSON.stringify(a),t()}catch(c){t(c)}}),1)}},a={};function c(e){var r=a[e];if(void 0!==r)return r.exports;var o=a[e]={exports:{}};return n[e](o,o.exports,c),o.exports}return e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",r="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",t=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(n,a,c)=>{var f;c&&((f=[]).d=-1);var i,p,s,u=new Set,y=n.exports,d=new Promise(((e,r)=>{s=r,p=e}));d[r]=y,d[e]=e=>(f&&e(f),u.forEach(e),d.catch((e=>{}))),n.exports=d,a((n=>{var a;i=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var a=[];a.d=0,n.then((e=>{c[r]=e,t(a)}),(e=>{c[o]=e,t(a)}));var c={};return c[e]=e=>e(a),c}}var f={};return f[e]=e=>{},f[r]=n,f})))(n);var c=()=>i.map((e=>{if(e[o])throw e[o];return e[r]})),p=new Promise((r=>{(a=()=>r(c)).r=0;var o=e=>e!==f&&!u.has(e)&&(u.add(e),e&&!e.d&&(a.r++,e.push(a)));i.map((r=>r[e](o)))}));return a.r?p:c()}),(e=>(e?s(d[o]=e):p(y),t(f)))),f&&f.d<0&&(f.d=0)},c.d=(e,r)=>{for(var o in r)c.o(r,o)&&!c.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},c.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c(44)})()));