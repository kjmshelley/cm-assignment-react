import SVGContants from "../../core/SVG/Constants";
import SVGImage from "../../core/SVG";
import { round } from "../../../util";

import "./styles/index.css";

function translateRatingToStar(ratingAmount) {
  const [whole, half, remaining] = round(ratingAmount);
  const wholeStars = [...Array(whole).keys()].map(x => <SVGImage key={`star_filled_${x}`} variant={SVGContants.STAR_FILLED} />);
  const halfStar = [...Array(half).keys()].map(x => <SVGImage key={`star_half_${x}`} variant={SVGContants.STAR_HALF} />);
  const remainingStars = [...Array(remaining).keys()].map(x => <SVGImage key={`star_${x}`} variant={SVGContants.STAR} />);
  return [].concat(wholeStars, halfStar, remainingStars);
}

export default function Rating({ stars }) {
  return (
    <div className="rating" title="rating">
    {translateRatingToStar(stars)}
    </div>
  );
}

Rating.defaultProps = {
    stars: 0.0
};