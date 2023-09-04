import * as model from './model.js';
import RecipeView from './views/recipeView.js';
import resultsViews from './views/resultsViews.js';
import SearchView from './views/searchView.js';
import paginationView from './views/paginationView.js';

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
    console.log('id', id);

    if (!id) return;

    RecipeView.showSpinner();

    // const response = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=67ba5058-2d87-4be0-9da8-284779f91248');
    await model.loadRecipe(id);

    // rendering recipe

    RecipeView.render(model.state.recipe);

    controlServings();


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
    console.log('model', model.state.search.results);

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

  RecipeView.render(model.state.recipe);
}

const init = () => {
  RecipeView.handleRender(getRecipes); //  THis is the subscriber. publisher and subscriber method
  SearchView.addHandlerSearch(controlSearch);
  paginationView.addHandlerClick(paginationController);
  // RecipeView.addHandlerUpdateServings(controlServings);
}

init();