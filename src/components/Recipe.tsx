import { IRecipe } from '../model'

interface Props {
    recipesFound: IRecipe[]
}


const Recipe:React.FC<Props>  = ({recipesFound}) => {
  return (
    <div>
        <h1>Hi</h1>
        <p>Text</p>
        <img src="" alt="" />

    </div>
  )
}

export default Recipe