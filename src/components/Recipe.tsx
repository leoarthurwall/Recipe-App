import { IRecipe } from "../IRecipe";

type Props = {
  recipe: IRecipe;
};

const Recipe: React.FC<Props> = ({ recipe }) => {
  return (
    <div>
      <h1>{recipe.recipe.label}</h1>
      <p>{recipe.recipe.ingredientLines}</p>
      <img src={recipe.recipe.image} alt={recipe.recipe.label}></img>
      <p>Total Time: {recipe.recipe.totalTime} mins</p>
       {recipe.recipe.yield.length <= 1 ? (<p>Serves {recipe.recipe.yield} person</p>):(<p>Serves {recipe.recipe.yield} people</p>)}
    </div>
  );
};

export default Recipe;
