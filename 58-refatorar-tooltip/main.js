(()=>{"use strict";function t(t,e,o){const i=document.documentElement,n="data-outside";function s(a){t.contains(a.target)||(t.removeAttribute(n),e.forEach((t=>{i.removeEventListener(t,s)})),o())}t.hasAttribute(n)||(e.forEach((t=>{setTimeout((()=>{i.addEventListener(t,s)}))})),t.setAttribute(n,""))}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollInToView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.classActive="active"}toggleAccordion(t){t.classList.toggle(this.classActive),t.nextElementSibling.classList.toggle(this.classActive)}addClass(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addClass()),this}}('[data-anime="accordion"] dt').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.classActive="active"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.classActive)}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.classActive,e)}addEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addEvent())}}('[data-tab="menu"] li','[data-tab="content"] section').init(),new class{constructor(t,e,o){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.containerModal=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.clicarForaModal=this.clicarForaModal.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}addEventModal(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clicarForaModal)}clicarForaModal(t){t.target===this.containerModal&&this.toggleModal(t)}init(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addEventModal(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-200+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave(t){this.tooltipBox.remove(),t.currentTarget.removeEventListener("mouseleave",this.onMouseLeave),t.currentTarget.removeEventListener("mousemove",this.onMouseMove)}criarTooltipBox(t){const e=document.createElement("div"),o=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=o,document.body.appendChild(e),this.tooltipBox=e}onMouseOver(t){this.criarTooltipBox(t.currentTarget),t.currentTarget.addEventListener("mousemove",this.onMouseMove),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave)}addTooltipEvents(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addTooltipEvents(),this}}("[data-tooltip]").init(),function(){const t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*window.innerHeight;function o(){t.forEach((t=>{(t.getBoundingClientRect().top-e<0||t.classList.contains("active"))&&t.classList.add("active")}))}t.length&&(o(),window.addEventListener("scroll",o))}(),function(){function e(e){e.preventDefault(),this.classList.toggle("ativo"),t(this,["touchstart","click"],(()=>{this.classList.remove("ativo")}))}document.querySelectorAll("[data-dropdown]").forEach((t=>{["touchstart","click"].forEach((o=>{t.addEventListener(o,e)}))}))}(),function(){const e=document.querySelector('[data-menu="button"'),o=document.querySelector('[data-menu="list"'),i=["click","touchstart"];function n(){e.classList.add("active"),o.classList.add("active"),t(o,i,(()=>{e.classList.remove("active"),o.classList.remove("active")}))}e&&i.forEach((t=>{e.addEventListener(t,n)}))}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),o=t.dataset.horario.split(",").map(Number),i=new Date,n=i.getDay(),s=i.getHours(),a=-1!==e.indexOf(n),c=s>=o[0]&&s<o[1];a&&c&&t.classList.add("aberto")}(),async function(t){try{const t=await fetch("./animaisapi.json"),e=await t.json(),o=document.querySelector(".numeros-grid");e.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3><span data-numero>${t.total}</span>`,e}(t);o.appendChild(e)})),function(){let t;const e=document.querySelector(".numeros");t=new MutationObserver((function(e){e[0].target.classList.contains("active")&&(t.disconnect(),document.querySelectorAll("[data-numero]").forEach((t=>{const e=+t.innerText,o=Math.floor(e/100);let i=0;const n=setInterval((()=>{i+=o,t.innerText=i,i>e&&(t.innerText=e,clearInterval(n))}),25*Math.random())})))})),t.observe(e,{attributes:!0})}()}catch(t){console.log(t)}}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".bitcoin-preco").innerText=(1e4/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(t)}))})();