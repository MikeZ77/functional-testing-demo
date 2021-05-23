import React, { useEffect, useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Message from './components/Message'
import axios from 'axios'

export default function Store() {

  const [shoppingCart, setShoppingCart] = useState(0)
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)
  const [snacks, setSnacks] = useState([])
  const [currentSnack, setCurrentSnack] = useState(false)
  const [currentMessage, setCurrentMessage] = useState({})

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get('https://random-data-api.com/api/coffee/random_coffee?size=5')
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

    setShoppingCart((count) => items[index].inCart ? count - 1 : count + 1)

    setSnacks((snack) => [...snack, {
      message: `Item ${items[index].blend_name} has been ${items[index].inCart ? 'removed from' : 'added to'} the cart.`,
      type: items[index].inCart ? 'error' : 'success'
    }])
  }, [items])

  useEffect(() => {
    if (snacks.length && !currentSnack) {
      setCurrentMessage(snacks[0])
      setSnacks((snack) => snack.slice(1))
      setCurrentSnack(true)
      setOpen(true)
    } else if (snacks.length && currentSnack && open) {
      setOpen(false)
    }
  }, [snacks, open, currentSnack])

  return (
    <div>
      <Navbar shoppingCart={ shoppingCart }/>
      <ProductList items={ items } handleItemClick={ handleItemClick }/>
      <Message open={ open } setOpen={ setOpen } setCurrentSnack={ setCurrentSnack } { ...currentMessage } /> 
    </div>
  )
}
