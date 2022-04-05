/*
    Carb Core (v.0.0.1): Button.js
    Created by Jason Shelley
    Created on 04/04/2022

    Purpose:
        This is a label image
*/
import React from 'react';
import LabelImage from "../../core/LabelImage";
import Constants from "../../core/SVG/Constants";
import "./styles/index.css";

export default function PremiumRecipe({ styles, text }) {
  return (
    <div className="premium-recipe" style={styles}>
        <LabelImage
            text={text}
            labelStyles={{ color: "#FFF", fontWeight: "600", lineHeight: "12px", fontSize: "12px" }}
            variant={Constants.TROPHY} />
    </div>
  )
}

PremiumRecipe.defaultProps = {
  text: "Premium Recipe",
  styles: {}
};
