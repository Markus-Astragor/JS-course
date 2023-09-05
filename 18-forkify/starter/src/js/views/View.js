import icons from '../../img/icons.svg';

export default class View {
  _data;


  render(data) {
    this._data = data;
    const markup = this._generateMarkup()
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDom = document.createRange().createContextualFragment(newMarkup); // converts string to real dom objects
    const newElements = Array.from(newDom.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      console.log(curEl, newEl.isEqualNode(curEl));


      // updates changed text
      if (!newEl.isEqualNode(curEl) && newEl?.firstChild.nodeValue.trim() !== '') {
        curEl.textContent = newEl.textContent;
      }

      // updates changed attribute
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => {
          curEl.setAttribute(attr.name, attr.value);
        })
      }
    })
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