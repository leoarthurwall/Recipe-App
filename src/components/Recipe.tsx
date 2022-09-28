import { IRecipe } from "../IRecipe";

type Props = {
  recipe: IRecipe;
};

const Recipe: React.FC<Props> = ({ recipe }) => {
  console.log(recipe.recipe.ingredientLines[0].split(", "));
  return (
    <div className="recipe-container">
      <div className="recipe-container-left">
        <img
          className="recipe-image"
          src={recipe.recipe.image}
          alt={recipe.recipe.label}
        ></img>
      </div>
      <div className="recipe-right">
        <div className="recipe-right-upper">
          <h1 className="recipe-name">{recipe.recipe.label}</h1>
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
