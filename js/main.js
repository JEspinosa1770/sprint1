"use strict"

// Botón menu navegador

const toggle = document.getElementById('menu-toggle');
const closer = document.getElementById('menu-close');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  menu.classList.add('show');
  menu.classList.remove('hidden');
});

closer.addEventListener('click', () => {
  menu.classList.remove('show');
  menu.classList.add('hidden');
});

// Seleccion Bookmarks
const links = document.querySelectorAll('.menu1 a');
const contentImage = document.getElementById('content-image');
const contentText = document.getElementById('content-text');
const contentSubtitle = document.getElementById('content-subtitle');

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

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Remover clase activa de todos los enlaces
    links.forEach(l => l.classList.remove('active'));

    // Agregar clase activa al clicado
    link.classList.add('active');

    // Obtener ID del enlace
    const id = link.getAttribute('data-id');

    // Actualizar contenido
    contentImage.src = data[id].img;
    contentSubtitle.textContent = data[id].h2;
    contentText.textContent = data[id].text;
  });
});
// Fin seleccion Bookmarks

// Validación email
function validateEmail (element) {
  const emailInput = document.getElementById('emailInput');
  var errorMSG = document.getElementById('errorMSG').id;
console.log(errorMSG);
console.log(element.validity.valid);
  if (element.validity.valid) {
      element.classList.remove('invalid'); // Si es válido, quita la clase
      // errorMSG.style.display = 'none';
      // document.getElementById(errorMSG).style.display = 'none';
      document.querySelector(".error").style.display= "block"; 
  } else {
      element.classList.add('invalid'); // Si es inválido, añade la clase
      // errorMSG.style.display = 'block';
      // document.getElementById(errorMSG).style.display = 'flex';
      document.querySelector(".error").style.display= "none"; 
  };
}
    
    