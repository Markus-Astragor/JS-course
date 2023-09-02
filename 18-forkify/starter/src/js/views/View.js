import icons from '../../img/icons.svg';

export default class View {
  _data;


  render(data) {

    if (!data || (Array.isArray(data)) && data.length === 0) return this.renderError();

    this._data = data;
    const markup = this._generateMarkup()
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    // this._buttonSearch.addEventListener('click', this._handleSearch)
  }


  showSpinner() {
    const markUpSpinner = `
      <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
      `
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUpSpinner);
  }

  renderError(message = this._errorMessage) {
    const markupError = `
      <div class="error">
        <div>
          <svg>
             <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
          <p>${message}</p>
       </div> 
    `
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markupError);
  }

  renderMessage(message = this._successMessage) {
    const markupMessage = `
      <div class="error">
        <div>
          <svg>
             <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
          <p>${message}</p>
       </div> 
    `
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markupMessage);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}