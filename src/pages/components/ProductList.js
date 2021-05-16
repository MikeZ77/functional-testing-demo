import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

export default function ProductList({ items, setShoppingCart }) {
  return (
    <div style={{maxWidth: '25%', margin: 'auto', backgroundColor: 'white', marginTop: '4%'}}> 
    {console.log(items)}
      <List dense={ true }>
        {
          items.map((item) => (
            <ListItem>
              <ListItemText
                primary={ item.blend_name }
                secondary={ item.notes }
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <AddShoppingCartIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))
        }
      </List>
    </div>
  )
}
