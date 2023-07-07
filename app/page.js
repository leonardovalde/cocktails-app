import CategoryPage from './category/[category]/page'
export default function Home () {
  return (
    <>
      <CategoryPage params={{ category: 'Ordinary_Drink' }}/>
    </>
  )
}
