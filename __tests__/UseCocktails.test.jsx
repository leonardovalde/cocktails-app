/* eslint-env jest */
import 'isomorphic-fetch'
import fetchMock from 'jest-fetch-mock'
import { useCategories } from '../app/hooks/useCoctails'

describe('useCategories', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  test('returns categories list', async () => {
    const mockCategories = [
      { strCategory: 'Ordinary Drink' },
      { strCategory: 'Cocktail' },
      { strCategory: 'Shake' },
      { strCategory: 'Other / Unknown' },
      { strCategory: 'Cocoa' },
      { strCategory: 'Shot' },
      { strCategory: 'Coffee / Tea' },
      { strCategory: 'Homemade Liqueur' },
      { strCategory: 'Punch / Party Drink' },
      { strCategory: 'Beer' },
      { strCategory: 'Soft Drink' }
    ]

    fetchMock.mockResponseOnce(JSON.stringify({ drinks: mockCategories }))

    const categories = await useCategories()

    expect(categories).toEqual(mockCategories)
  })
})
