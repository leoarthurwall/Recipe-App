import "../Recipe.css";
import { ClockIcon, FireIcon, UserIcon } from "@heroicons/react/24/solid";
import { ReactElement } from "react";

type Props = {
  calories: string;
  propUrl: string;
  propLabel: string;
  propIngredients: any;
  propTime: number;
  propYield: number;
};



const RecipeRightUpper: React.FC<Props>  = (Props):ReactElement => {
    const {propYield, propUrl, propLabel, propIngredients, propTime, calories } = Props

  return (
    <div className="recipe-container-right">
          <div className="recipe-right-upper">
            <a className="recipe-link" href={propUrl} target="blank">
              <h1 className="recipe-name">{propLabel}</h1>
            </a>
            <h3 className="recipe-ingredient-header">Ingredients:</h3>
            <ul className="recipe-ingredient-list">
              {propIngredients.map((ingredient: string, index: number) => (
                <li className="recipe-ingredient-item" key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="recipe-right-lower">
            <div className="recipe-icon-box">
              <FireIcon className="recipe-icon" />
              <p className="calorie-icon-text">
                {calories} Kcal
              </p>
            </div>
            {propTime > 0 && (
              <div className="recipe-icon-box">
                <ClockIcon className="recipe-icon" />
                <p className="clock-icon-text">
                  {propTime} mins
                </p>
              </div>
            )}

            <div className="recipe-icon-box">
              <UserIcon className="recipe-icon" />
              <p className="yield-icon-text">Serves {propYield}</p>
            </div>
          </div>
        </div>
  )
}

export default RecipeRightUpper