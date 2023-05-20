(()=>{"use strict";const t=document.querySelector('[data-modal="abrir"]'),e=document.querySelector('[data-modal="fechar"]'),n=document.querySelector('[data-modal="container"]');function o(t){t.preventDefault(),n.classList.toggle("ativo")}function i(t,e,n){const o=document.documentElement,i="data-outside";function s(c){t.contains(c.target)||(t.removeAttribute(i),e.forEach((t=>{o.removeEventListener(t,s)})),n())}t.hasAttribute(i)||(e.forEach((t=>{setTimeout((()=>{o.addEventListener(t,s)}))})),t.setAttribute(i,""))}t&&e&&n&&(t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",(function(t){t.target===this&&o(t)}))),new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollInToView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.classActive="active"}toggleAccordion(t){t.classList.toggle(this.classActive),t.nextElementSibling.classList.toggle(this.classActive)}addClass(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addClass()),this}}('[data-anime="accordion"] dt').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.classActive="active"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.classActive)}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.classActive,e)}addEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addEvent())}}('[data-tab="menu"] li','[data-tab="content"] section').init(),function(){const t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*window.innerHeight;function n(){t.forEach((t=>{(t.getBoundingClientRect().top-e<0||t.classList.contains("active"))&&t.classList.add("active")}))}t.length&&(n(),window.addEventListener("scroll",n))}(),function(){const t=document.querySelectorAll("[data-tooltip]"),e={handleEvent(t){this.tooltipBox.style.top=`${t.pageY+20}px`,this.tooltipBox.style.left=`${t.pageX+20}px`}},n={handleEvent(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",n),this.element.removeEventListener("mousemove",e)}};function o(){const t=function(t){const e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),e}(this);e.tooltipBox=t,this.addEventListener("mousemove",e),n.tooltipBox=t,n.element=this,this.addEventListener("mouseleave",n)}t.forEach((t=>{t.addEventListener("mouseover",o)}))}(),function(){function t(t){t.preventDefault(),this.classList.toggle("ativo"),i(this,["touchstart","click"],(()=>{this.classList.remove("ativo")}))}document.querySelectorAll("[data-dropdown]").forEach((e=>{["touchstart","click"].forEach((n=>{e.addEventListener(n,t)}))}))}(),function(){const t=document.querySelector('[data-menu="button"'),e=document.querySelector('[data-menu="list"'),n=["click","touchstart"];function o(){t.classList.add("active"),e.classList.add("active"),i(e,n,(()=>{t.classList.remove("active"),e.classList.remove("active")}))}t&&n.forEach((e=>{t.addEventListener(e,o)}))}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),o=new Date,i=o.getDay(),s=o.getHours(),c=-1!==e.indexOf(i),a=s>=n[0]&&s<n[1];c&&a&&t.classList.add("aberto")}(),async function(t){try{const t=await fetch("./animaisapi.json"),e=await t.json(),n=document.querySelector(".numeros-grid");e.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3><span data-numero>${t.total}</span>`,e}(t);n.appendChild(e)})),function(){let t;const e=document.querySelector(".numeros");t=new MutationObserver((function(e){e[0].target.classList.contains("active")&&(t.disconnect(),document.querySelectorAll("[data-numero]").forEach((t=>{const e=+t.innerText,n=Math.floor(e/100);let o=0;const i=setInterval((()=>{o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(i))}),25*Math.random())})))})),t.observe(e,{attributes:!0})}()}catch(t){console.log(t)}}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".bitcoin-preco").innerText=(1e4/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(t)}))})();