'use client'
import styles from './SearchComponent.module.css'
import { useCocktailByName } from '../hooks/useCoctails'
import { useEffect, useState } from 'react'
import SearchCocktailPreview from './SearchCocktailPreview'
function SearchComponent () {
  const [visible, setVisible] = useState(false)
  const [search, setSearch] = useState('')
  const [foundList, setFoundList] = useState([])
  useEffect(() => {
    if (search) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [foundList, visible])
  const handleInput = async (event) => {
    setSearch(event.target.value)
    setFoundList(event.target.value ? await useCocktailByName(event.target.value) : null)
  }
  return (
    <form className={styles.searchForm}>
      <input type="text" placeholder="Buscar coctel" value={search} onChange={handleInput}></input>
      {
        visible
          ? <div className={styles.listDiv}>
            <ul>
              {foundList
                ? foundList.map((cocktail, i) => (
                <li key={i}>
                  <SearchCocktailPreview cocktail={cocktail}/>
                </li>
                ))
                : <></>}
            </ul>
          </div>
          : <></>
      }
    </form>
  )
}

export default SearchComponent
