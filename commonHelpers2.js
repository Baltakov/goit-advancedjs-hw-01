import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{P as n,l as r}from"./assets/vendor-78be7656.js";const t=new n(document.getElementById("vimeo-player")),o="videoplayer-current-time";t.on("timeupdate",r(async function(e){const a=await t.getCurrentTime();localStorage.setItem(o,a)},1e3));window.addEventListener("DOMContentLoaded",async()=>{const e=localStorage.getItem(o);e&&await t.setCurrentTime(e)});
//# sourceMappingURL=commonHelpers2.js.map
