import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const element = galleryItems.map((image) => '<a class="gallery__item" href="'+image.original+'" > <img class="gallery__image" src="'+image.preview+'" alt="'+image.description+'"/></a>').join('');
gallery.insertAdjacentHTML('beforeEnd', element);
  
  
gallery.addEventListener("click", onclick);
  
function onclick(event) {
  console.log(event)

  let ligthBox = new SimpleLightbox('.gallery a');
gallery.on(show.SimpleLightbox, function () {
  gallery.defaultOptions.captionDelay = 250;
  gallery.defaultOptions.captionsData = '1111'
});
}

document.addEventListener("keydown", closeModal);

function closeModal(event) {
  //console.log('123123')
  if (event.code === "Escape") {

    let ligthBox = new SimpleLightbox('.gallery a');
  gallery.on(closed.SimpleLightbox);
  }
}  
