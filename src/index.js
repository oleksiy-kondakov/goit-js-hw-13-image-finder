import './scss/main.scss';
import refs from './js/refs';
import apiService from './js/api-service';
import {
  updateGalleryMarkup,
  startListeningOnGalleryClick,
  stopListeningOnGalleryClick,
} from './js/gallery';
import {
  showNotice,
  showSuccessMessage,
  showErrorMessage,
} from './js/notifications';
import scroll from './js/scroll';

refs.form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  refs.gallery.innerHTML = '';

  stopListeningOnGalleryClick();

  const form = event.currentTarget;

  apiService.query = form.elements.query.value;

  apiService.resetPage();

  fetchImages();

  startListeningOnGalleryClick();

  form.reset();
}

refs.button.addEventListener('click', fetchImages);

function fetchImages() {
  refs.button.classList.add('is-hidden');

  apiService
    .fetchImages()
    .then(images => {
      if (images.length === 0) {
        showNotice();

        return;
      }

      showSuccessMessage();
      updateGalleryMarkup(images);
      refs.button.classList.remove('is-hidden');
      scroll();
    })
    .catch(({ message }) => showErrorMessage(message));
}