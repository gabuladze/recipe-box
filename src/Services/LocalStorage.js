const storageName = '_gabuladze_recipes';

const LocalStorage = {
    save(recipe) {
        // Save an empty array in local storage if it is empty
        if (!localStorage.getItem(storageName)) localStorage.setItem(storageName, JSON.stringify([]));

        let newRecipe = {
            name: recipe.name,
            ingredients: recipe.ingredients
        }

        // Add a new recipe to array
        let recipes = JSON.parse(localStorage.getItem(storageName)).concat(newRecipe);

        // Save to local storage
        localStorage.setItem(storageName, JSON.stringify(recipes));
    },

    get(name = null) {
        // Get the string containing all objects & parse it
        let recipes = JSON.parse(localStorage.getItem(storageName)) || [];

        // If no name return all recipes
        if (!name) {
            return recipes;
        } else {
            let filteredRecipes = recipes.filter(recipe => {
                return recipe.name === name;
            });

            return filteredRecipes[0];
        }
    },

    deleteRecipe(name) {
        // Get the string containing all objects & parse it
        let recipes = JSON.parse(localStorage.getItem(storageName));

        // Remove the item from array
        let newRecipes = recipes.filter(recipe => {
            return recipe.name !== name;
        });

        // Save to local storage
        localStorage.setItem(storageName, JSON.stringify(newRecipes));
    },

    update(recipeName) {
        // Get the string containing all objects & parse it
        let recipes = JSON.parse(localStorage.getItem(storageName));


    }
};

export default LocalStorage;