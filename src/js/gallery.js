import refs from './refs';
import showLightbox from './lightbox';
import galleryItem from '../templates/gallery-item.hbs';

function updateGalleryMarkup(images) {
  const markup = galleryItem(images);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function startListeningOnGalleryClick() {
  refs.gallery.addEventListener('click', handleOnGalleryClick);
}

function stopListeningOnGalleryClick() {
  refs.gallery.removeEventListener('click', handleOnGalleryClick);
}

function handleOnGalleryClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const image = event.target;
  const imageURLForLightbox = image.dataset.src;

  showLightbox(imageURLForLightbox);
}

export {
  updateGalleryMarkup,
  startListeningOnGalleryClick,
  stopListeningOnGalleryClick,
};