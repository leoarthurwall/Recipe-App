import { IRecipe } from "../IRecipe";
import "./Recipe.css";

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
          <p className="recipe-time">
            Total Time: {recipe.recipe.totalTime} mins
          </p>
          {recipe.recipe.yield.length <= 1 ? (
            <p className="recipe-serving">
              Serves {recipe.recipe.yield} person
            </p>
          ) : (
            <p className="recipe-serving">
              Serves {recipe.recipe.yield} people
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
