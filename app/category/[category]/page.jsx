import { useCocktailsByCategory } from '../../hooks/useCoctails'
import CocktailCard from '@/app/components/CocktailCard'
async function CategoryPage ({ params }) {
  const cocktails = await useCocktailsByCategory(params.category)
  return (
    <div className='cocktailsContainer'>
      {cocktails.map(cocktail => (
        <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </div>
  )
}

export default CategoryPage
