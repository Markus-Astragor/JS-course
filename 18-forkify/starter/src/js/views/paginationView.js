import View from "./View.js";
import icons from '../../img/icons.svg';


class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);;
    })
  }

  _generateMarkup() {
    const numPages = Math.round(this._data.results.length / this._data.resultsPerPage);

    // We are on 1 page and there are pages
    if (this._data.page === 1 && numPages > 1) {
      return `
          <button data-goto="${this._data.page + 1}" class="btn--inline pagination__btn--next">
              <span>Page ${this._data.page + 1}</span>
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-right"></use>
                </svg>
          </button>            
      `;
    }

    // We are on the last page
    if (this._data.page === numPages) {
      return `
              <button data-goto="${this._data.page - 1}" class="btn--inline pagination__btn--prev">
                  <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                  </svg>
                  <span>Page ${this._data.page - 1}</span>
              </button>
             `;
    }

    // We are on page 2 and there are pages (move right move left)
    if (this._data.page > 1 && this._data.page < numPages) {
      return `<button data-goto="${this._data.page - 1}" class="btn--inline pagination__btn--prev">
                  <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                  </svg>
                  <span>Page ${this._data.page - 1}</span>
              </button>
                <button data-goto="${this._data.page + 1}" class="btn--inline pagination__btn--next">
                    <span>Page ${this._data.page + 1}</span>
                      <svg class="search__icon">
                        <use href="${icons}#icon-arrow-right"></use>
                      </svg>
                </button>            
              `;
    }

    // We are on page 1 and there aren't any pages
    return '';
  }
}

export default new PaginationView();