import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as r}from"./assets/vendor-651d7991.js";const t=document.querySelector(".form");function m(i){i.preventDefault();const o=t.delay.value,s=t.state.value;new Promise((e,l)=>{setTimeout(()=>{s==="fulfilled"?e(o):l(o)},o)}).then(e=>r.success({backgroundColor:"rgb(89, 161, 13)",titleSize:"16px",titleColor:"rgb(255, 255, 255)",messageColor:"rgb(255, 255, 255)",title:"OK",position:"topRight",message:`✅ Fulfilled promise in ${e}ms`})).catch(e=>r.error({backgroundColor:"rgb(239, 64, 64)",titleSize:"16px",titleColor:"rgb(255, 255, 255)",messageColor:"rgb(255, 255, 255)",title:"Error",position:"topRight",message:`❌Rejected promise in ${e}ms`}))}t.addEventListener("submit",m);t.addEventListener("submit",()=>{t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
