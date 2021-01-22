import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { notice, success, error } from '@pnotify/core';
import { defaults } from '@pnotify/core';

defaults.mode = 'dark';

function showNotice() {
  notice({
    title:
      'По вашему запросу изображений не найдено. Пожалуйста, уточните запрос',
    delay: 2000,
  });
}

function showSuccessMessage() {
  success({
    title: 'По вашему запросу найдены изображения',
    delay: 2000,
  });
}

function showErrorMessage(err) {
  error({
    title: `${err}`,
    delay: 2000,
  });
}

export { showNotice, showSuccessMessage, showErrorMessage };