import React, { useEffect } from 'react';
import useRecipeStore from './recipeStore'; // Adjust the path as needed

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations(); // Generate recommendations on component mount
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => useRecipeStore.getState().addFavorite(recipe.id)}>Add to Favorites</button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
