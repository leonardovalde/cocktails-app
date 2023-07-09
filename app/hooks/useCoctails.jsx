export async function useCategories () {
  const categories = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list').then(
    res => res.json()
  )
  return categories.drinks
}
export async function useCocktailsByCategory (category) {
  const cocktails = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${String(category).replace('-', '/')}`).then(
    res => res.json()
  )
  return cocktails.drinks
}

export async function useCocktailById (id) {
  const cocktails = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(
    res => res.json()
  )
  return cocktails.drinks
}

export async function useCocktailByName (name) {
  const cocktails = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`).then(
    res => res.json()
  )
  return cocktails.drinks
}
