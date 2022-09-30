import { IRecipe } from "../../IRecipe";
import "./Recipe.css";
import RecipeRightUpper from "./RecipeRightUpper/RecipeRightUpper";

type Props = {
  recipe: IRecipe;
  key: number;
  query: string;
};

const Recipe: React.FC<Props> = ({ recipe, query }) => {
  //
  const {url, label, ingredientLines, totalTime, image } = recipe

  const totalCalories = recipe.calories;
  const totalYield = recipe.yield;
  const servingCalories = totalCalories / totalYield;

  // const url = recipe.url
  // const label = recipe.label
  // const ingredients = recipe.ingredientLines
  // const time = recipe.totalTime
  

  return (
      <>
    {query && (
      <div className="recipe-card" >
        <div className="recipe-container-left">
          <a className="recipe-link" href={url} target="blank">
            <img
              className="recipe-image"
              src={image}
              alt={label}
            ></img>
          </a>
        </div>
        <RecipeRightUpper propYield={totalYield} propTime={totalTime} propIngredients={ingredientLines} propLabel={label} propUrl={url} calories={servingCalories.toFixed()}/>
      </div> 
    )}
    </>
      
  );
};

export default Recipe;
