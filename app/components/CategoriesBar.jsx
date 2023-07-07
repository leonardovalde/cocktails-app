'use client'
import Link from 'next/link'
import Categories from '../mocks/categories.json'
import styles from './CategoriesBar.module.css'
import { useState, useEffect } from 'react'
function CategoriesBar () {
  const CategoryList = Categories.drinks
  const [categorySelected, setCategorySelected] = useState(CategoryList[0].strCategory)
  useEffect(() => { console.log(categorySelected) }, [categorySelected])
  return (
        <nav className={styles.categoriesnav}>
            <h1>Categorías</h1>
            <ul>
                {CategoryList.map((category, i) => {
                  return category.strCategory === categorySelected
                    ? <li style={{ fontSize: '18px', transition: 'font-size 0.3s' }} key={i}>
                            <Link
                                onClick={() => {
                                  setCategorySelected(category.strCategory)
                                }}
                                href={`/category/${String(category.strCategory)
                                    .replace('/', '-')
                                    .replaceAll(' ', '_')}`}
                                category={category.strCategory}>
                                {category.strCategory}
                            </Link>
                        </li>
                    : <li key={i}>
                            <Link
                                onClick={() => {
                                  setCategorySelected(category.strCategory)
                                }}
                                href={`/category/${String(category.strCategory)
                                    .replace('/', '-')
                                    .replaceAll(' ', '_')}`}
                                category={category.strCategory}>
                                {category.strCategory}
                            </Link>
                        </li>
                })}
            </ul>
        </nav>
  )
}

export default CategoriesBar
