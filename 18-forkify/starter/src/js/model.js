import { API_KEY, API_URL, RESULTS_PER_PAGE } from './config.js';
import { getJSON, sendJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: RESULTS_PER_PAGE,
    page: 1
  },
  bookMarks: []
}

const createRecipeObject = (data) => {
  const { recipe } = data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceURL: recipe.soure_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }) // add property key if it exists
  }
}

export const loadRecipe = async (id) => {
  try {
    // const response = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=67ba5058-2d87-4be0-9da8-284779f91248');
    const responseData = await getJSON(`${API_URL}${id}?key=${API_KEY}`);
    state.recipe = createRecipeObject(responseData.data)

    console.log('state.recipe', state.recipe);

    if (state.bookMarks.some(bookMark => bookMark.id === id)) {
      state.recipe.bookMarked = true;
    } else {
      state.recipe.bookMarked = false;
    }

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
    state.search.page = 1;
  } catch (error) {
    throw error;
  }
}

export const getSearchResultsPage = (page = state.search.page) => {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = (page * state.search.resultsPerPage) - 1;
  return state.search.results.slice(start, end);
}

export const updateServings = (newServings) => {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = ing.quantity / state.recipe.servings * newServings;
  });

  state.recipe.servings = newServings;
}

const persistBookmark = () => {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookMarks));
}

export const addBookMark = (recipe) => {
  state.bookMarks.push(recipe);

  if (recipe.id === state.recipe.id) state.recipe.bookMarked = true;
  persistBookmark();
}

export const deleteBookMark = (id) => {
  const index = state.bookMarks.findIndex(el => el.id === id);
  state.bookMarks.splice(index, 1);

  if (state.recipe.id === id) state.recipe.bookMarked = false;
  persistBookmark();
}

const init = () => {
  const bookmarksStorage = localStorage.getItem('bookmarks');
  if (bookmarksStorage) state.bookMarks = JSON.parse(bookmarksStorage);
}

init();

export const uploadRecipe = async (newRecipe) => {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].replaceAll(' ', '').split(',');
        if (ingArr.length !== 3) throw new Error('Wrong ingredient format. Please use the correct format');
        const [quantity, unit, description] = ingArr;
        return {
          quantity: quantity ? +quantity : null, unit, description
        }
      })

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    }
    const data = await sendJSON(`${API_URL}?key=${API_KEY}`, recipe);
    state.recipe = createRecipeObject(data.data);
    addBookMark(state.recipe)
  }
  catch (err) {
    throw err;
  }


}