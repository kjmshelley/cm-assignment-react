/*
    Carb Core (v.0.0.1): SVG.js
    Created by Jason Shelley
    Created on 04/04/2022

    Purpose:
        This is a basic component to display svgs.
        SVGs are split out into other files and the variant property will decide which svg to display.
        This is setup is similar to the factory pattern.
*/
import React, { useEffect, useState } from 'react';
import Heart from "./Heart";
import HeartFilled from "./HeartFilled";
import Star from "./Star";
import StarFilled from "./StarFilled";
import StarHalf from "./StarHalf";
import Clock from "./Clock";
import Fire from "./Fire";
import MacroRed from "./MacroRed";
import MacroBlue from "./MacroBlue";
import MacroYellow from "./MacroYellow";
import Trophy from "./Trophy";
import Constants from './Constants';
import "./styles/index.css";

export default function SVGImage({ variant, styles }) {
  const [type, setType] = useState("");
  useEffect(() => {
      switch (variant) {
        case Constants.HEART:
            setType(<Heart styles={styles} />);
            break;
        case Constants.HEART_FILLED:
            setType(<HeartFilled styles={styles} />);
            break;
        case Constants.STAR:
            setType(<Star styles={styles} />);
            break;
        case Constants.STAR_FILLED:
            setType(<StarFilled styles={styles} />);
            break;
        case Constants.STAR_HALF:
            setType(<StarHalf styles={styles} />);
            break;
        case Constants.CLOCK:
          setType(<Clock styles={styles} />);
          break;
        case Constants.FIRE:
          setType(<Fire styles={styles} />);
          break;
        case Constants.MACRO_RED:
          setType(<MacroRed styles={styles} />);
          break;
        case Constants.MACRO_BLUE:
          setType(<MacroBlue styles={styles} />);
          break;
        case Constants.MACRO_YELLOW:
          setType(<MacroYellow styles={styles} />);
          break;
        case Constants.TROPHY:
            setType(<Trophy styles={styles} />);
            break;
        default:
            setType(null);
      }
  }, [variant, styles])

  return (
    <div title="svg">{type}</div>
  )
}

SVGImage.defaultProps = {
  variant: "",
  styles: {}
}