import styles from './SearchCocktailPreview.module.css'
import Link from 'next/link'
function SearchCocktailPreview (cocktail) {
  return (
        <Link href={`/cocktail/${cocktail.cocktail.idDrink}`} >
            <div className={styles.SearchCocktailContainer} id='search-cocktail-preview'>
                <div className={styles.SearchCocktailDetails}>
                    <h1>{cocktail.cocktail.strDrink}</h1>
                    <ul>
                        <li className={styles.categoryCocktailDetails}>{cocktail.cocktail.strCategory}</li>
                        <li className={styles.alcoholicCocktailDetails}>{cocktail.cocktail.strAlcoholic}</li>
                        <li className={styles.glassCocktailDetails}>{cocktail.cocktail.strGlass}</li>
                    </ul>
                </div>
                <img src={cocktail.cocktail.strDrinkThumb} />
            </div>
        </Link>
  )
}

export default SearchCocktailPreview
