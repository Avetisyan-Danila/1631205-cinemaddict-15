import AbstractView from './abstract.js';

const createNoFilmsTemplate = () => ('<h2 class="films-list__title">There are no movies in our database</h2>');

export default class NoTask extends AbstractView {
  getTemplate() {
    return createNoFilmsTemplate();
  }
}
