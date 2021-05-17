import React, { useEffect, useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Message from './components/Message'
import axios from 'axios'

export default function Store() {

  const [shoppingCart, setShoppingCart] = useState(0)
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)
  const [alertInfo, setAlertInfo] = useState({ message: null, type: null })

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

  const handleItemClick = useCallback((index) => {

    setItems(items.map((item, i) => {
      return (index === i ? {...item, inCart: !items[i].inCart} : { ...item })
    }))
    setAlertInfo(
      { 
        message: `Item ${items[index].blend_name} has been ${items[index].inCart ? 'removed from' : 'added to'} the cart.`,
        type: items[index].inCart ? 'error' : 'success'
      }
    )
    setOpen(true)
    setShoppingCart((count) => items[index].inCart ? count - 1 : count + 1)
  }, [items])

  return (
    <div>
      <Navbar shoppingCart={ shoppingCart }/>
      <ProductList items={ items } handleItemClick={ handleItemClick }/>
      { open && <Message open={ open } setOpen={ setOpen } { ...alertInfo } /> }
    </div>
  )
}
