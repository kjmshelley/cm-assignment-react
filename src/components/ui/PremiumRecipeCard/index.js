import React, { useEffect, useState } from "react";

import Label from "../../core/Label";
import LabelImage from "../../core/LabelImage";
import Constants from "../../core/SVG/Constants";
import SVGImage from "../../core/SVG";
import {
  Card,
  CardHeader,
  CardBody
} from "../../core/Card";

import PremiumRecipe from "../PremiumRecipe";
import Rating from "../Rating";
import MealEnergy from "../MealEnergy";

import {
  timeConverter,
  convertCaloriesToKJ
} from "../../../util";

import "./styles/index.css";

export default function PremiumRecipeCard({ recipe, user }) {
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
    <div onClick={() => console.log(`Premium Recipe Card: ${title}`)}>
        <Card className="premium-recipe-card">
          <CardHeader
            className="premium-recipe-card-header"
            background={image}>
            
            <div className="premium-recipe-card-favorite">
              { isLiked ? <SVGImage variant={Constants.HEART_FILLED} /> : <SVGImage variant={Constants.HEART} /> }
            </div>
            { isPremium && <PremiumRecipe /> }
          </CardHeader>
          <CardBody className="premium-recipe-card-body">
              <div>
                <Label
                  text={title}
                  className="premium-recipe-card-title" />
                
                <div className="premium-recipe-card-user-ratings">
                  <Rating stars={starRatings} />
                  <Label
                    text={`${count} ratings`}
                    className="premium-recipe-card-ratings" />
                </div>
                
                <div className="premium-recipe-card-recipe-information">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <LabelImage
                      text={timeToCook}
                      labelStyles={{ color: "#393C40", marginLeft: "1px", marginRight: "5px" }}
                      variant={Constants.CLOCK} />
                    <LabelImage
                      text={foodEnergy}
                      labelStyles={{ color: "#393C40", marginLeft: "1px" }}
                      variant={Constants.FIRE} />
                  </div>
                  
                  <div>
                    <MealEnergy
                      styles={{ color: "#6F737A" }}
                      carbs={carbs}
                      protein={proteins}
                      fats={fats} />
                  </div>
                </div>
              </div>                
          </CardBody>
        </Card>
    </div>
  );
}

PremiumRecipeCard.defaultProps = {
  recipe: {},
  user: {},
  styles: {},
  onClick: () => {}
};
