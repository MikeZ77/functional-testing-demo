import React, { useEffect, useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Message from './components/Message'
import axios from 'axios'

export default function Store() {

  const [shoppingCart, setShoppingCart] = useState(0)
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get('https://random-data-api.com/api/coffee/random_coffee?size=20')
        setItems(data.data.map(item => ({ ...item, inCart: false })))
      }catch(error) {
        console.error(error)
      }
    })()
  }, [])

  const handleItemClick = useCallback((item) => {
    setShoppingCart((count) => count + 1)
    setOpen(true)
  }, [])

  return (
    <div>
      <Navbar shoppingCart={ shoppingCart }/>
      <ProductList items={ items } handleItemClick={ handleItemClick }/>
      { open && <Message open={ open } setOpen={ setOpen } message={ 'Test!' } type={ 'success' }/> }
    </div>
  )
}
