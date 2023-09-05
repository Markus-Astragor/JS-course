import View from "./View.js";
import previewView from "./previewView.js";
import icons from '../../img/icons.svg';


class BookMarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks added. Find a nice recipe and bookmark it';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('')
  }
}

export default new BookMarkView();