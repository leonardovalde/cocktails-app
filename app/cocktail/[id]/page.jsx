import { useCocktailById } from '@/app/hooks/useCoctails'

async function CocktailDetails ({ params }) {
  const CocktailDetails = await useCocktailById(params.id)
  const ingredients = getIngredients(CocktailDetails[0])
  return (
    <div>
      <h2 className='text-3xl'>Detalles de coctel</h2>
      <img className='w-52' src={CocktailDetails[0].strDrinkThumb}></img>
      <h2 className='text-3xl'>{CocktailDetails[0].strDrink}</h2>
      <span>{CocktailDetails[0].strCategory}</span>
      <span>{CocktailDetails[0].strAlcoholic}</span>
      <span>{CocktailDetails[0].strGlass}</span>
      <h2 className='text-3xl'>Instrucciones</h2>
      <p>{CocktailDetails[0].strInstructions}</p>
      <h2 className='text-3xl'>Lista de Ingredientes</h2>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient.ingredient}>
            {ingredient.ingredient} - {ingredient.measure}
          </li>
        ))}
      </ul>

    </div>
  )
}

function getIngredients (CocktailDetails) {
  const ingredients = []
  for (let i = 1; i <= 15; i++) {
    const cocktailIngredient = `strIngredient${i}`
    const cocktailMesure = `strMeasure${i}`
    if (CocktailDetails[cocktailIngredient]) {
      ingredients.push({
        ingredient: CocktailDetails[cocktailIngredient],
        measure: CocktailDetails[cocktailMesure]
      })
    } else i = 16
  }
  return ingredients
}

export default CocktailDetails
