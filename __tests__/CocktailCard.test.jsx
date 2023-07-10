/* eslint-env jest */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import CocktailCard from '@/app/components/CocktailCard'

test('renders content', () => {
  const cocktail = {
    strDrink: '155 Belmont',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg',
    idDrink: '15346'
  }
  const component = render(<CocktailCard cocktail={cocktail}/>)
  expect(component.container).toHaveTextContent('155 Belmont')
})
