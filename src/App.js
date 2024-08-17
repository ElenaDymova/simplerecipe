import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import RecipeList from "./components/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://api.spoonacular.com/recipes/random?number=5&apiKey=13708ddbb3f545e9b3f65a69846a6d5a'
      );
      if (!response.ok) {
        throw new Error('Something went wrong...');
      }
      const data = await response.json();
      setRecipes(data.recipes);
    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchRecipesHandler();
  }, [fetchRecipesHandler]);

  let content = <p>No recipes found</p>;

  if (recipes.length > 0) {
    content = <RecipeList recipes={recipes} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Uploading recipes...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchRecipesHandler}>Update recipes</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
