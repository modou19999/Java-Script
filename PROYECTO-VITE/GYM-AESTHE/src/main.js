import './style.css';
import javascriptLogo from './assets/javascript.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import { setupCounter } from './counter.js';
import { initHeader } from './components/header.js';
import { initClases } from './components/clases.js';
import { initContact } from './componentes/contacto.js';
import { initFooter } from './componentes/footer.js';

initHeader();
initClases();
initContact();
initFooter();

const menu = document.getElementById('menu');
const menuList = document.getElementById('menu-list');

menu.addEventListener('click', (e) => {
  e.stopPropagation();
  menuList.classList.toggle('active');
});

document.body.addEventListener('click', () => {
  menu.classList.remove('active');
});
