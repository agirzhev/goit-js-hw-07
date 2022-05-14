import { galleryItems } from './gallery-items.js';
// Change code below this line

//import * as basicLightbox from 'basiclightbox'

const gallery = document.querySelector(".gallery");

const element = galleryItems.map((image) => '<div class="gallery__item modal"><a class="gallery__link" href="'+image.original+'" > <img class="gallery__image" src="'+image.preview+'" data-source="'+image.original+'" alt="'+image.description+'"/></a></div>').join('');
gallery.insertAdjacentHTML('beforeEnd', element);
  
  
gallery.addEventListener("click", onclick);
  
function onclick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
    
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}"/> 
`, {
    onShow: instance => { window.addEventListener('keydown', onEscPress); },
    onClose: instance => { window.removeEventListener('keydown', onEscPress); }
  });
  instance.show();
  
  function onEscPress(event) {
  if (event.code === "Escape") {
    instance.close();
      window.removeEventListener('keydown', onEscPress);
  }
}
}