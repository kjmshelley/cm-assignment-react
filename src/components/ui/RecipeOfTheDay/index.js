import React, { useEffect, useState } from "react";

import Label from "../../core/Label";
import Button from "../../core/Button";
import MacroWhite from "../../core/SVG/MacroWhite";
import {
  Card,
  CardBody
} from "../../core/Card";

import Rating from "../Rating";
import MealEnergy from "../MealEnergy";

import {
  timeConverter,
  convertCaloriesToKJ
} from "../../../util";

import "./styles/index.css";

export default function RecipeOfTheDay({ recipe, user }) {
  const [image, setImage] = useState("");
  const [starRatings, setStarRatings] = useState(0);
  const [count, setCount] = useState(0);
  const [isPremium, setIsPremium] = useState(false);
  const [title, setTitle] = useState("");
  const [timeToCook, setTimeToCook] = useState("");
  const [foodEnergy, setFoodEnergy] = useState("");
  const [carbs, setCarbs] = useState("");
  const [proteins, setProtein] = useState("");
  const [fats, setFats] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // the below logic is a little sloppy. I would do it differently if I was using typescript
    if (recipe.title) {
      setTitle(recipe.title);
    }
    if (Array.isArray(recipe.images) && recipe.images.length > 0) {
      setImage(recipe.images[0].url || "");
    }
    if (recipe.rating && recipe.rating.score) {
      setStarRatings(recipe.rating.score);
    }
    if (recipe.rating && recipe.rating.count) {
      setCount(recipe.rating.count);
    }
    if (recipe.isPremium) {
      setIsPremium(recipe.isPremium);
    }
    if (recipe.preparationTimeMinutes) {
      setTimeToCook(timeConverter(recipe.preparationTimeMinutes));
    }
    if (recipe.details && recipe.details.energy) {
      const energyUnits = (user && user.energyUnits === "kJ") ? "kJ" : "calories";
      setFoodEnergy(`${convertCaloriesToKJ(recipe.details.energy)} ${energyUnits}`);
    }

    if (recipe.details && recipe.details.nutrients && recipe.details.units) {
      setCarbs(`${recipe.details.nutrients.carbs} ${recipe.details.units.carbs}`);
      setProtein(`${recipe.details.nutrients.proteins} ${recipe.details.units.proteins}`);
      setFats(`${recipe.details.nutrients.fats} ${recipe.details.units.fats}`);
    }

    if (user && Array.isArray(user.likedRecipes)) {
      setIsLiked(user.likedRecipes.includes(recipe.id));
    }
  }, [recipe, user]);

  return (
    <div onClick={() => console.log(`Recipe Of The Day: ${title}`)}>
        <Card
          className="recipe-card"
          background={image}>
            <div className="overlay" />
            <CardBody className="recipe-card-body">
              <div>
                <Label
                  text={"RECIPE OF THE DAY"}
                  className="recipe-card-recipe-of-day" />
                
                <Label
                  text={title}
                  className="recipe-card-title" />

                <Rating stars={starRatings} />
                
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Label
                    text={timeToCook} 
                    className="recipe-card-time-to-cook" />
                  
                  <MacroWhite
                    styles={{ paddingTop: "6px", marginLeft: "5px", marginRight: "5px" }} />

                  <Label
                    text={foodEnergy}
                    className="recipe-card-food-energy" />
                </div>
              </div>

                <div className="recipe-card-bottom">
                  <MealEnergy
                    styles={{ color: "#FFF", paddingTop: "15px" }}
                    carbs={carbs}
                    protein={proteins}
                    fats={fats} />

                  <Button
                    text={"Learn More"}
                    className="recipe-card-learn-more"
                    onClick={() => { console.log(`Learn more about ${recipe.title}`)}} />
                </div>
            </CardBody>
        </Card>
    </div>
  );
}


RecipeOfTheDay.defaultProps = {
  recipe: {},
  styles: {},
  onClick: () => {}
};
