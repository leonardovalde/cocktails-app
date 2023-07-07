import styles from './CategoriesHeader.module.css'
import SearchComponent from './SearchComponent'
function CategoriesHeader ({ category }) {
  return (
    <div className={styles.pageHeader}>
        <h1>Categoria Seleccionada:{category}</h1>
        <SearchComponent/>
    </div>
  )
}

export default CategoriesHeader
