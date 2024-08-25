import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Example logic for generating recommendations based on favorites
    const favoriteRecipes = state.recipes.filter(recipe => 
      state.favorites.includes(recipe.id)
    );

    const favoriteCategories = [...new Set(favoriteRecipes.map(recipe => recipe.category))];
    
    const recommended = state.recipes.filter(recipe =>
      favoriteCategories.includes(recipe.category) && !state.favorites.includes(recipe.id)
    );

    return { recommendations: recommended };
  }),

  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) => set({ searchTerm: term }, false, 'setSearchTerm'),

  filterRecipes: () => set(state => {
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return { filteredRecipes: filtered };
  }),

  initialize: (initialRecipes) => set({
    recipes: initialRecipes,
    filteredRecipes: initialRecipes,
  }, false, 'initialize'),


  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
 

 deleteRecipe: (id) => set((state) => ({
  recipes: state.recipes.filter((recipe) => recipe.id !== id),
})),

updateRecipe: (updatedRecipe) => set((state) => ({
  recipes: state.recipes.map((recipe) =>
    recipe.id === updatedRecipe.id ? updatedRecipe : recipe
  ),
})),

setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;


