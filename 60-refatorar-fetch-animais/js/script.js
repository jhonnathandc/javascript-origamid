import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabMenu from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import fetchAnimais from "./modules/fetch-animais.js";
import animation from "./modules/animacao.js";
import initDropdown from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabmenu = new TabMenu('[data-tab="menu"] li', '[data-tab="content"] section');
tabmenu.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tootltip = new Tooltip("[data-tooltip]");
tootltip.init();

fetchAnimais("./animaisapi.json", ".numeros-grid");

animation();
initDropdown();
initMenuMobile();
initFuncionamento();
initFetchBitcoin();
