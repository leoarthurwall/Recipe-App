import { IRecipe } from "../IRecipe";
import "./Recipe.css";
import { ClockIcon, FireIcon, UserIcon } from "@heroicons/react/24/solid";
type Props = {
  recipe: IRecipe;
};

const Recipe: React.FC<Props> = ({ recipe }) => {

  let totalCalories = recipe.recipe.calories
  let totalYield = recipe.recipe.yield
  let servingCalories = totalCalories / totalYield
  console.log(servingCalories)
  return (
    <div className="recipe-container">
      <div className="recipe-container-left">
        <a className="recipe-link" href={recipe.recipe.url} target="blank">
          <img
            className="recipe-image"
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
          ></img>
        </a>
      </div>
      <div className="recipe-container-right">
        <div className="recipe-right-upper">
          <a className="recipe-link" href={recipe.recipe.url} target="blank">
            <h1 className="recipe-name">{recipe.recipe.label}</h1>
          </a>
          <h3 className="recipe-ingredient-header">Ingredients:</h3>
          <ul className="recipe-ingredient-list">
            {recipe.recipe.ingredientLines.map((ingredient: string) => (
              <li className="recipe-ingredient-item">{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="recipe-right-lower">
          <div className="recipe-icon-box">
            <FireIcon className="recipe-icon" />
            <p className="calorie-icon-text">
               Calories: {servingCalories.toFixed()}

            </p>
          </div>
          {recipe.recipe.totalTime > 0 && (
            <div className="recipe-icon-box">
              <ClockIcon className="recipe-icon" />
              <p className="clock-icon-text">{recipe.recipe.totalTime} mins</p>
            </div>
          )}

          <div className="recipe-icon-box">
            <UserIcon className="recipe-icon" />
            <p className="yield-icon-text">Serves {recipe.recipe.yield}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
