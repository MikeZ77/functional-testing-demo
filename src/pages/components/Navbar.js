import React from 'react'
import {AppBar, Toolbar, Badge} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'


export default function Navbar({ shoppingCart }) {
  return (
  <AppBar position="static" style={{alignItems: 'flex-end'}}>
    <Toolbar>
      <Badge badgeContent={shoppingCart} color="secondary" invisible={ shoppingCart || true }>
        <ShoppingCartIcon />
      </Badge>
    </Toolbar>
  </AppBar>
  )
}
