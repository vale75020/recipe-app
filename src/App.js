import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
  // EDAMAM.COM
  const APP_ID = 'b03c371c';
  const APP_KEY = 'a8c02ff57c9bdd20ac24efaa671655cd';
  //request exemple 
  // const exampleReq = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
  // real request
  const req = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  
  useEffect(() => {
    //console.log("effect has been run");
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
     <form className="search-form">
       <input className="search-bar" type="text" />
       <button className="search-button" type="submit">Search</button>
     </form>
    </div>
  );
}

export default App;
