import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as r}from"./assets/vendor-651d7991.js";const o=document.querySelector(".form");function m(i){i.preventDefault();const t=o.delay.value,s=o.state.value;new Promise((e,l)=>{setTimeout(()=>{s==="fulfilled"?e(t):l(t)},t)}).then(e=>r.success({backgroundColor:"rgb(89, 161, 13)",titleSize:"16px",titleColor:"rgb(255, 255, 255)",messageColor:"rgb(255, 255, 255)",title:"OK",position:"topRight",message:`✅ Fulfilled promise in ${e}ms`})).catch(e=>r.error({backgroundColor:"rgb(239, 64, 64)",titleSize:"16px",titleColor:"rgb(255, 255, 255)",messageColor:"rgb(255, 255, 255)",title:"Error",position:"topRight",message:`❌Rejected promise in ${e}ms`}))}o.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers2.js.map