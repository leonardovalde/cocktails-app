import CocktailHeader from '@/app/components/CocktailHeader'
import { useCocktailById } from '@/app/hooks/useCoctails'

async function CocktailDetails ({ params }) {
  const CocktailDetails = await useCocktailById(params.id)
  const ingredients = getIngredients(CocktailDetails[0])
  return (
    <div>
      <CocktailHeader cocktailName={CocktailDetails[0].strDrink} />
      <section className='cocktailDescriptionContainer'>
        <div className='left-description'>
          <h2 >Detalles de coctel</h2>
          <img src={CocktailDetails[0].strDrinkThumb}></img>
        </div>
        <div className='right-description'>
          <h2 >{CocktailDetails[0].strDrink}</h2>
          <ul className='cocktailTags'>
            <li className='categoryCocktailDetails'>
              {CocktailDetails[0].strCategory}
            </li>
            <li className='alcoholicCocktailDetails'>
              {CocktailDetails[0].strAlcoholic}
            </li>
            <li className='glassCocktailDetails'>
              {CocktailDetails[0].strGlass}
            </li>
          </ul>
          <h3>Instrucciones</h3>
          <p>{CocktailDetails[0].strInstructions}</p>
          <h3>Lista de Ingredientes</h3>
          <ul className='ingredientList'>
            {ingredients.map(ingredient => (
              <li key={ingredient.ingredient} className='ingredientDescription'>
                {ingredient.ingredient} <span className='ingredientMeasure'>{ingredient.measure}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
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
