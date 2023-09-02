import * as model from './model.js';
import RecipeView from './views/recipeView.js';
import resultsViews from './views/resultsViews.js';
import SearchView from './views/searchView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');
const searchInput = document.querySelector('.search__field');


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
    resultsViews.render(model.state.search.results);
  } catch (error) {
    console.log(error);
  }
}

const init = () => {
  RecipeView.handleRender(getRecipes); //  THis is the subscriber. publisher and subscriber method
  SearchView.addHandlerSearch(controlSearch);
}

init();