## Project Overview and Planning (I)
1. User stories:

- As a user i want to search for recipes so that i can find new ideas for meals
- As a user i want to bookmaek recipes
- As a user i want to watch saved recipes
- As a user i want to change quantity of servings so that i can cook a meal for different kind of people
- As a user i want to add my own recipe to this app

2. Features:

1. As a user i want to search for recipes so that i can find new ideas for meals
- Search functionality input field to send requests to API with searched keywords
- Display results with pagination
- Display recipe with cooking time, servings and ingredients

2. Update the number of servings: 

- Change servings functionalit, update all ingredients accorfing to current number of servings

3. Bookmark recipes:
- Bookmarking functionality: display list of saved recipes

4. Create my own recipes:
- User can upload their own recipes
- User recipes will be automatically bookmarked
- User can only access their own recipes not recipes from other users

5. See my own recipes when i leave the page:

- Store bookmark data in the browser using local storage
- On page load receive all recipes which were bookmarked


## The MVC Architecture
Why worry about architecture?

- Structure Like a house, software needs a structure: the way we organize our code 
- Mainatability a project is never done! We need to be able to easily change it in the future
- Expandability we  need to be able to add new features  

Architecture which has these three aspects is called perfect architecture

- We can use well-established architecture pattern called MVC, MVP, Flux
- We can use frameworks which can care of us about architecure like: React, Angular, Vue

### Components of any architecture
1. Business logic: 
 - code that solves the actual business problem
 - directly related to what business does and what it needs 
 - Example: sending messages, storing transactions, calculating taxes
2. State
 - Essantially stores all the data about the application
 - Should be the 'single source of truth'
 - UI should be kept in sync with the state
 - State libraries exist(redux)
3. HTTP library
 - Making and receiveing AJAX requests 
 - Optional but always necessary in real-world app
4. Application logic(router)
 - Code that is only concerned about the implementation of application itself
 - Handles navigation and UI events
5. Presentation logic
 - Essantially displays application state
 - Code that is responsible for visible part

### MVC (Model View Controller) 

1. Model:
- Business Logic
- state
- Http library
2. Controller 
- Application logic (bridge between model and views which don't know about one another)


final interesting tricks:
window.history.pushState(state, 'title', `hash change`) // it allows us to change url without reloading the page

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