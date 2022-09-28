import { IRecipe } from "../IRecipe";

type Props = {
  recipe: IRecipe;
};

const Recipe: React.FC<Props> = ({ recipe }) => {
  return (
    <div>
      <h1>{recipe.recipe.label}</h1>
      <img src={recipe.recipe.image} alt={recipe.recipe.label}></img>
    </div>
  );
};

export default Recipe;
