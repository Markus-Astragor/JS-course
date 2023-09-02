export const state = {
  recipe: {}
}

export const loadRecipe = async (id) => {
  try {
    // const response = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=67ba5058-2d87-4be0-9da8-284779f91248');
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=67ba5058-2d87-4be0-9da8-284779f91248`)
    const responseData = await response.json();

    if (!response.ok) throw new Error(`${responseData.data} ${responseData.status}`)

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
  }

}