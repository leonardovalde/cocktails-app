// Este metodo hace la peticion de la lista de categorias
export async function useCategories () {
  const categories = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list').then(
    res => res.json()
  )
  return categories.drinks
}
// Este metodo hace la peticion de la lista de cocteles segun el nombre de la categoria
export async function useCocktailsByCategory (category) {
  const cocktails = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${String(category).replace('-', '/')}`).then(
    res => res.json()
  )
  return cocktails.drinks
}
// Este metodo entrega los detalles de un coctel segun la informacion
export async function useCocktailById (id) {
  const cocktails = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(
    res => res.json()
  )
  return cocktails.drinks
}
// Este metodo entrega los detalles de un coctel segun su nombre
export async function useCocktailByName (name) {
  const cocktails = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`).then(
    res => res.json()
  )
  return cocktails.drinks
}
