import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetching the data from the local JSON file
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      setRecipes(data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Recipe Collection</h1>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-3">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

