import React, { useEffect, useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import axios from 'axios'

export default function Store() {

  const [shoppingCart, setShoppingCart] = useState(0)
  const [items, setItems] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get('https://random-data-api.com/api/coffee/random_coffee?size=20')
        setItems(data.data)
      }catch(error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <div>
      <Navbar shoppingCart={ shoppingCart }/>
      <ProductList items={ items } setShoppingCart={ setShoppingCart }/>
    </div>
  )
}
