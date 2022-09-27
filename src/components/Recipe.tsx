import { IRecipe } from "../IRecipe";

// type Props = {
//    recipe: IRecipe
//    key: string
// }

// const Recipe: React.FC<Props> = ({recipe, key}) => {

const Recipe = (props: {recipe: IRecipe}) => {
    const { recipe } = props
  return (
    <div>
      <h1>{recipe.label}</h1>
      <img src={recipe.image} alt={recipe.label} />
      <p>Hello</p>
    </div>
  );
};

export default Recipe;
