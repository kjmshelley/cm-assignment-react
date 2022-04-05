import React, { useEffect, useState } from "react";

import { get } from "../../api";
import './styles/index.css';
import PremiumRecipeCard from '../ui/PremiumRecipeCard';
import RecipeOfTheDay from "../ui/RecipeOfTheDay";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState({});

  const getUser = () => {
    (async () => {
      const [status, data] = await get("/user");
      if (status === 200) {
        setUser(data);
      }
    })();
  }

  const getRecipes = () => {
    (async () => {
      const [status, data] = await get("/recipes");
      if (status === 200) {
        setRecipes(data);
      }
    })();
  };

  useEffect(() => {
    getRecipes();
    getUser();
  }, []);

  return (
    <div className="app">
      <div className="parent">
        <div className="premium-recipe-card-column">
          <h1 style={{ textAlign: "center" }}>Premium Recipe Card</h1>
          {recipes.map((r, i) => {
            if (!r.isPremium) return <div key={`premium-recipe-card-${r.id}`} />;
            return (
              <div key={`premium-recipe-card-${r.id}`} style={{ marginBottom: "15px", marginLeft: "25%" }}>
                <PremiumRecipeCard recipe={r} user={user} />
              </div>
            )
          })}
        </div>
        <hr />
        <div className="recipe-of-the-day-column">
          <h1 style={{ textAlign: "center" }}>Recipe Of The Day</h1>
          {recipes.map((r, i) => {
            return (
              <div key={`recipe-of-the-day-${r.id}`} style={{ marginBottom: "15px", marginLeft: "25%" }}>
                <RecipeOfTheDay recipe={r} user={user} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
