/* eslint-env jest */
import React from 'react'
import 'isomorphic-fetch'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchComponent from '@/app/components/SearchComponent'

test('renders SearchCocktailPreview components when input is entered', async () => {
  render(<SearchComponent />)

  const inputElement = screen.getByPlaceholderText('Buscar coctel')
  fireEvent.change(inputElement, { target: { value: 'margarita' } })
  await waitFor(() => {
    const cocktailElements = screen.queryAllByText('Strawberry Margarita')
    expect(cocktailElements.length).toBeGreaterThan(0)
    expect(cocktailElements).toEqual(expect.arrayContaining([expect.objectContaining({ textContent: 'Strawberry Margarita' })]))
  })
})
