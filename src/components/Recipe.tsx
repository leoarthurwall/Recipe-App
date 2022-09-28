import { IRecipe } from "../IRecipe";
import "./Recipe.css";
import { ClockIcon, UserIcon } from "@heroicons/react/24/solid";
type Props = {
  recipe: IRecipe;
};

const Recipe: React.FC<Props> = ({ recipe }) => {
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
          <div className="recipe-time">
            <ClockIcon className="clock-icon" />
            <p className="clock-icon-text">{recipe.recipe.totalTime}</p>
          </div>
          <div className="recipe-yield">
            <UserIcon className="yield-icon" />
            <p className="yield-icon-text">{recipe.recipe.yield}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
