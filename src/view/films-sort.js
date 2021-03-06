import AbstractView from './abstract.js';
import {SortType} from '../const.js';

const createFilmsSortTemplate = () => (
  `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active" data-sort-type="${SortType.DEFAULT}">Sort by default</a></li>
    <li><a href="#" class="sort__button" data-sort-type="${SortType.DATE}">Sort by date</a></li>
    <li><a href="#" class="sort__button" data-sort-type="${SortType.RATING}">Sort by rating</a></li>
  </ul>`
);

export default class FilmsSort extends AbstractView {
  constructor() {
    super();

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createFilmsSortTemplate();
  }

  _sortTypeChangeHandler(evt) {
    const sortLinks = document.querySelectorAll('.sort__button');

    if (evt.target.tagName !== 'A') {
      return;
    }

    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);

    if (!evt.target.classList.contains('sort__button--active')) {
      sortLinks.forEach((link) => {
        link.classList.remove('sort__button--active');
      });

      evt.target.classList.add('sort__button--active');
    }
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener('click', this._sortTypeChangeHandler);
  }
}
