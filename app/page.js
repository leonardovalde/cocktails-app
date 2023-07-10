import CategoryPage from './category/[category]/page'
// Este componente inicialmente carga la lista de cocteles para la categoria Ordinary_Drink
export default function Home () {
  return (
    <>
      <CategoryPage params={{ category: 'Ordinary_Drink' }}/>
    </>
  )
}
