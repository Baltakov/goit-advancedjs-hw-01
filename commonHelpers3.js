import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l as s}from"./assets/vendor-78be7656.js";const e=document.querySelector(".feedback-form"),o="feedback-form-state";function l(a){const t={email:e.elements.email.value,message:e.elements.message.value};localStorage.setItem(o,JSON.stringify(t))}function m(){const a=localStorage.getItem(o);if(a){const t=JSON.parse(a);e.elements.email.value=t.email,e.elements.message.value=t.message}}function n(a){a.preventDefault();const t={email:e.elements.email.value,message:e.elements.message.value};t.email&&t.message?(console.log(t),localStorage.removeItem(o),e.reset()):alert("Please fill in both fields before submitting.")}e.addEventListener("input",s(l,500));window.addEventListener("DOMContentLoaded",m);e.addEventListener("submit",n);
//# sourceMappingURL=commonHelpers3.js.map
