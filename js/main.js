"use strict"

// Botón menu navegador
const toggle = document.getElementById('menu-toggle');
const closer = document.getElementById('menu-close');
const menu = document.getElementById('nav-menu');

// Función para abrir el menú
const openMenu = () => {
    menu.classList.add('flex');
    menu.classList.remove('hidden');
    menu.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
};

// Función para cerrar el menú
const closeMenu = () => {
    menu.classList.remove('flex');
    menu.classList.add('hidden');
    menu.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
};

// Eventos
toggle.addEventListener('click', openMenu);
closer.addEventListener('click', closeMenu);

// Cerrar con la tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
        closeMenu();
    }
});

// Seleccion Bookmarks
const links = document.querySelectorAll('.menu1 a');
const contentImage = document.getElementById('content-image');
const contentText = document.getElementById('content-text');
const contentSubtitle = document.getElementById('content-subtitle');

const active_class = 'active-underline';

const data = {
  1: {
    img: 'img/illustration-features-tab-1.svg',
    h2: 'Bookmark in one click',
    text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.'
  },
  2: {
    img: 'img/illustration-features-tab-2.svg',
    h2: 'Intelligent search',
    text: 'Our powerfull search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
  },
  3: {
    img: 'img/illustration-features-tab-3.svg',
    h2: 'Share your bookmarks',
    text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
  }
};

function activateLink(linkElement) {
  links.forEach(l => l.classList.remove('active'));
  linkElement.classList.add('active');
  const allUnderlines = document.querySelectorAll('.js-underline');
  allUnderlines.forEach(span => span.classList.remove(active_class));
  const currentUnderline = linkElement.querySelector('.js-underline');
  if (currentUnderline) {
      currentUnderline.classList.add(active_class);
  }
  
  const id = linkElement.getAttribute('data-id');
  contentImage.src = data[id].img;
  contentSubtitle.textContent = data[id].h2;
  contentText.textContent = data[id].text;
}

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    activateLink(link);
  });
}
);
if (links.length > 0) {
    activateLink(links[0]);
}
// Fin seleccion Bookmarks

// Validación email
const validateEmail = () => {
    const emailInput = document.getElementById('emailInput');
    const errorContainer = document.getElementById('errorContainer');
    const errorIcon = document.getElementById('errorIcon');
    const errorMessage = document.getElementById('errorMessage');

    const emailValue = emailInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        // Si el email NO es válido:
        emailInput.classList.remove('border-white', 'border-2');
        emailInput.classList.add('border-red-400', 'border-4');
        errorIcon.classList.remove('hidden');
        errorContainer.classList.remove('hidden');
        return false;
    } else {
        // Si el email SÍ es válido:
        emailInput.classList.remove('border-red-400', 'border-4');
        emailInput.classList.add('border-white', 'border-2');
        errorIcon.classList.add('hidden');
        errorContainer.classList.add('hidden');
       console.log("¡Email válido! Enviando contacto...");
        return true;
    }
};

