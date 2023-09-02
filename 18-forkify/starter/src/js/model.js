import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: []
  }
}



export const loadRecipe = async (id) => {
  try {
    // const response = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=67ba5058-2d87-4be0-9da8-284779f91248');
    const responseData = await getJSON(`${API_URL}${id}?key=67ba5058-2d87-4be0-9da8-284779f91248`);

    const { recipe } = responseData.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceURL: recipe.soure_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    }
    console.log(state.recipe);
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const loadSearch = async (query) => {
  try {
    state.search.query = query;
    const responseData = await getJSON(`${API_URL}?search=${query}`);
    state.search.results = responseData.data.recipes.map(rec => {
      return {
        id: rec.id,
        image: rec.image_url,
        publisher: rec.publisher,
        title: rec.title,
      }
    })
  } catch (error) {
    throw error;
  }
}
