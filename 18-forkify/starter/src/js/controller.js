const recipeContainer = document.querySelector('.recipe');

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
    // const response = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=67ba5058-2d87-4be0-9da8-284779f91248');
    const response = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=67ba5058-2d87-4be0-9da8-284779f91248')
    const responseData = await response.json();
    let { recipe } = responseData.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceURL: recipe.soure_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    }

    console.log(recipe);
  } catch (error) {
    console.log('error', error);
  }
}

getRecipes()