import SearchComponent from './SearchComponent'
import styles from './CocktailHeader.module.css'
// Esta es la cabezera del componente de la descripcion de un coctel en especifico
function CocktailHeader ({ cocktailName }) {
  return (
        <div className={styles.pageHeader}>
            <h1 className={styles.pageHeaderTitle}><span>Coctel Seleccionado: </span>{cocktailName}</h1>
            <SearchComponent/>
        </div>
  )
}

export default CocktailHeader
