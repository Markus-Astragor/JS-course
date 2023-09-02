import * as model from './model.js';
import RecipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');
const searchInput = document.querySelector('.search__field');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



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
  }
}

getRecipes();

['hashchange', 'load'].forEach(e => window.addEventListener(e, getRecipes));