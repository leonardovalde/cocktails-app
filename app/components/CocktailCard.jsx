import Link from 'next/link'
import styles from './CocktailCard.module.css'
// Este componente hace referencia al componente que nos muestra la imagen del coctel y el nombre en la lista segun categoria
function CocktailCard ({ cocktail }) {
  return (
    <Link href={`/cocktail/${cocktail.idDrink}`}>
      <div className={styles.cardContainer}>
        <img
          className={styles.cocktailImage}
          src={cocktail.strDrinkThumb}
        ></img>
        <p className={styles.cocktailName}>{cocktail.strDrink}</p>
      </div>
    </Link>
  )
}

export default CocktailCard
