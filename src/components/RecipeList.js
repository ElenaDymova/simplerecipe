import styles from './RecipeList.module.css'

import Recipe from "./Recipe";

const RecipeList = (props) => {
    return(
      <ul className={styles.recipelist}>
        {props.recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe}/>
        ))}
      </ul>
    )
}

export default RecipeList;