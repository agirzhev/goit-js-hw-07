import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const element = galleryItems.map((image) => '<div class="gallery__item"><a class="gallery__link" href="'+image.original+'" > <img class="gallery__image" src="'+image.preview+'" data-source="'+image.original+'" alt="'+image.description+'"/></a></div>').join('');
gallery.insertAdjacentHTML('beforeEnd', element);
  
  
gallery.addEventListener("click", onclick);
  
function onclick(event) {
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    
    const instance = basicLightbox.create(`
        <img src="${event.target.dataset}"/> 
`)
    instance.show();
}


document.addEventListener("keydown", closeModal);

function closeModal(event) {
  //console.log('123123')
  if (event.code === "Escape") {

    instance.close();
      window.removeEventListener('keydown', closeModal);
  }
}     
