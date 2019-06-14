import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  // EDAMAM.COM
  const APP_ID = "b03c371c";
  const APP_KEY = "a8c02ff57c9bdd20ac24efaa671655cd";
  // request exemple => const exampleReq = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
  

  const [recipes, setRecipes] = useState([]); // state
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken'); // state pour changer de recipe

  const req = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes(); // pour utiliser la fonction getRecipes
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(req);
    const data = await response.json();
    setRecipes(data.hits); // setState
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    //console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search); // pour rechercher le recipe designé dans l'input
    setSearch(''); // pour vider l'input
  }

  return (
    <div className="App">
      <h1 style={{textAlign:"center", paddingTop:"30px", fontSize:"30px", color:"white"}}>My Recipes App</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          key={recipe.recipe.label}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
