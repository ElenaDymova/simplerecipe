import styles from './Recipe.module.css'

const Recipe = (props) => {

  return (
    <li className={styles.recipe}>
      <h2>{props.recipe.title}</h2>
      <p className={styles.time}>cooking time: {props.recipe.readyInMinutes} minutes</p>
      <img src={props.recipe.image} alt={props.recipe.type} />
      <p className={styles.ingredient}>Ingredients: {props.recipe.extendedIngredients.map(ingredient => ingredient.name).join(', ')}</p>
      <div dangerouslySetInnerHTML={{ __html: props.recipe.instructions }} />
      {/* <p>{props.recipe.instructions}</p> */}
    </li>
  );
};

export default Recipe;
