import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import RecipeView from './views/recipeView.js';
import resultsViews from './views/resultsViews.js';
import SearchView from './views/searchView.js';
import paginationView from './views/paginationView.js';
import bookMarkView from './views/bookMarkView.js';
import addRecipeView from './views/addRecipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

if (module.hot) {
  module.hot.accept();
}

const getRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    RecipeView.showSpinner();

    resultsViews.update(model.getSearchResultsPage());
    bookMarkView.update(model.state.bookMarks);

    await model.loadRecipe(id);

    // rendering recipe

    RecipeView.render(model.state.recipe);

    bookMarkView.update(model.state.bookMarks);

  } catch (error) {
    console.log('error', error);
    RecipeView.renderError();
  }
}

getRecipes();

const controlSearch = async () => {
  try {
    resultsViews.showSpinner()
    const query = SearchView.getQuery();

    if (!query) return;

    await model.loadSearch(query);

    // Rendering results
    resultsViews.render(model.getSearchResultsPage(1));

    // Render pagination

    paginationView.render(model.state.search)
  } catch (error) {
    console.log(error);
  }
}

const paginationController = (page) => {
  resultsViews.render(model.getSearchResultsPage(page));
  paginationView.render(model.state.search)
}

const controlServings = (newServings) => {

  // Update the recipe servings in state
  model.updateServings(newServings);

  // Update the recipe view
  RecipeView.update(model.state.recipe);
}


const controlAddBookMark = () => {
  // delete bookmark
  if (model.state.recipe?.bookMarked) {
    model.deleteBookMark(model.state.recipe.id);
    RecipeView.update(model.state.recipe)
    bookMarkView.render(model.state.bookMarks, false);
  }
  // add bookMark
  else {
    model.addBookMark(model.state.recipe);
    RecipeView.update(model.state.recipe)

    // display it
    bookMarkView.render(model.state.bookMarks);
  }
}


const controlBookmarks = () => {
  bookMarkView.render(model.state.bookMarks);
}

const controlAddRecipe = async (newRecipe) => {
  try {
    addRecipeView.showSpinner();

    await model.uploadRecipe(newRecipe);
    // render recie
    RecipeView.render(model.state.recipe);
    // close modal

    // success message
    addRecipeView.renderMessage();

    // render bookMarkView
    bookMarkView.render(model.state.bookMarks);

    // change id in the url
    window.history.pushState(null, '', `#${model.state.recipe.id}`) // it allows us to change url without reloading the page

    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000)
  } catch (error) {
    console.log(error);
    addRecipeView.renderError(error)
  }
  // function that uploads recipe
}

const init = () => {
  bookMarkView.handleRender(controlBookmarks);
  RecipeView.handleRender(getRecipes); //  THis is the subscriber. publisher and subscriber method
  SearchView.addHandlerSearch(controlSearch);
  paginationView.addHandlerClick(paginationController);
  RecipeView.addHandlerUpdateServings(controlServings);
  RecipeView.addHandlerAddBookMark(controlAddBookMark);
  addRecipeView.handleSubmit(controlAddRecipe);
}

init();