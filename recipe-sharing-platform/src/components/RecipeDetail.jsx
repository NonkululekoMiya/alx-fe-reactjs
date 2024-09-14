import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      const foundRecipe = data.find(recipe => recipe.id === parseInt(id));
      setRecipe(foundRecipe);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-lg mb-4">{recipe.summary}</p>
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          {/* Example ingredients, replace with actual data */}
          <li>1 cup of ingredient</li>
          <li>2 tablespoons of another ingredient</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-2">Cooking Instructions</h2>
        <ol className="list-decimal list-inside">
          {/* Example instructions, replace with actual data */}
          <li>Preheat the oven to 375°F.</li>
          <li>Mix all ingredients in a bowl.</li>
          <li>Bake for 20 minutes or until done.</li>
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
