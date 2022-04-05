import LabelImage from "../../core/LabelImage";
import SVGContants from "../../core/SVG/Constants";

import "./styles/index.css";

export default function MealEnergy({ carbs, protein, fats, styles }) {
  return (
    <div className="meal-energy" style={styles}>
        <LabelImage
          variant={SVGContants.MACRO_RED}
          text={carbs}
          styles={{ marginRight: "7px" }}
          labelStyles={{fontSize: "14px" }}
          svgStyles={{ marginBottom: "3px" }} />

        <LabelImage
          variant={SVGContants.MACRO_BLUE}
          text={protein}
          styles={{ marginRight: "7px" }}
          labelStyles={{fontSize: "14px" }}
          svgStyles={{ marginBottom: "3px" }} />

        <LabelImage
          variant={SVGContants.MACRO_YELLOW}
          text={fats}
          styles={{ marginRight: "7px" }}
          labelStyles={{fontSize: "14px" }}
          svgStyles={{ marginBottom: "3px" }} />
    </div>
  );
}

MealEnergy.defaultProps = {
    styles: {},
    carbs: "",
    protein: "",
    fats: ""
};

