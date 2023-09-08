import View from "./View.js";
import previewView from "./previewView.js";


class BookMarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks added. Find a nice recipe and bookmark it';

  handleRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    if (this._data.length === 0) {
      return this.renderError(this._errorMessage);
    } else {
      return this._data.map(result => previewView.render(result, false)).join('')
    }

  }
}

export default new BookMarkView();