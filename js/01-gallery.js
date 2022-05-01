import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const element = galleryItems.map((image) => '<div class="gallery__item"><a class="gallery__link" href="'+image.original+'" > <img class="gallery__image" src="'+image.preview+'" data-source="'+image.original+'" alt="'+image.description+'"/></a></div>').join('');
gallery.insertAdjacentHTML('beforeEnd', element);
  
  
document.querySelector(".gallery__link").addEventListener("click", function (event) {
  event.preventDefault()
  //basicLightbox.create(`
	//	<img width="1400" height="900" src="${event.original}">
	//`).show()
  console.log(event)
})