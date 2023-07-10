/* eslint-env jest */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import CategoriesBar from '@/app/components/CategoriesBar'

test('renders content', () => {
  const list = [
    {
      strCategory: 'Ordinary Drink'
    },
    {
      strCategory: 'Cocktail'
    },
    {
      strCategory: 'Shake'
    },
    {
      strCategory: 'Other / Unknown'
    },
    {
      strCategory: 'Cocoa'
    },
    {
      strCategory: 'Shot'
    },
    {
      strCategory: 'Coffee / Tea'
    },
    {
      strCategory: 'Homemade Liqueur'
    },
    {
      strCategory: 'Punch / Party Drink'
    },
    {
      strCategory: 'Beer'
    },
    {
      strCategory: 'Soft Drink'
    }
  ]

  const component = render(<CategoriesBar list={list}/>)
  expect(component.container).toHaveTextContent(list[0].strCategory)
})
