const storageName = '_gabuladze_recipes';

const LocalStorage = {
    save(recipe) {
        // Save an empty array in local storage if it is empty
        if (!localStorage.getItem(storageName)) localStorage.setItem(storageName, JSON.stringify([]));
        let recipes = JSON.parse(localStorage.getItem(storageName));

        let newRecipe = {
            id: recipes.length + 1,
            name: recipe.name,
            ingredients: recipe.ingredients
        }

        // Add a new recipe to array
        recipes = recipes.concat(newRecipe);

        // Save to local storage
        localStorage.setItem(storageName, JSON.stringify(recipes));
    },

    get(id = null) {
        // Get the string containing all objects & parse it
        let recipes = JSON.parse(localStorage.getItem(storageName)) || [];

        // If no id return all recipes
        if (!id) {
            return recipes;
        } else {
            let filteredRecipes = recipes.filter(recipe => {
                return recipe.id == id;
            });
            
            if (filteredRecipes.length === 1) return filteredRecipes[0];
        }
    },

    deleteRecipe(id) {
        // Get the string containing all objects & parse it
        let recipes = JSON.parse(localStorage.getItem(storageName));

        // Remove the item from array
        let newRecipes = recipes.filter(recipe => {
            return recipe.id !== id;
        });

        // Save to local storage
        localStorage.setItem(storageName, JSON.stringify(newRecipes));
    },

    update(recipe) {
        // Get the string containing all objects & parse it
        let recipes = JSON.parse(localStorage.getItem(storageName));

        // update recipe
        recipes.map(r => {
            if (r.id === recipe.id) {
                r.name = recipe.name;
                r.ingredients = recipe.ingredients;
                return r;
            }
        });
    }
};

export default LocalStorage;