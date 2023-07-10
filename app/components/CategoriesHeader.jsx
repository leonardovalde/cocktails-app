import styles from './CategoriesHeader.module.css'
import SearchComponent from './SearchComponent'
// Esta es la cabezera del componente de la lista de cocteles segun la categoria
function CategoriesHeader ({ category }) {
  return (
    <div className={styles.pageHeader}>
        <h1 className={styles.pageHeaderTitle}><span>Categoria Seleccionada: </span>{String(category).replaceAll('_', ' ')}</h1>
        <SearchComponent/>
        <h1 className={styles.pageHeaderSubtitle}>Lista de cocteles</h1>
    </div>
  )
}

export default CategoriesHeader
