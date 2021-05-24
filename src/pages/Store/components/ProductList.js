import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

function ProductList({ items, handleItemClick }) {
  return (
    <div style={{maxWidth: '25%', margin: 'auto', backgroundColor: 'white', marginTop: '4%'}}> 
      <List dense={ true }>
        {
          items.map((item, i) => (
            <ListItem key={item.uid}>
              <ListItemText
                primary={ item.blend_name }
                secondary={ item.notes }
              />
              <ListItemSecondaryAction>
                <IconButton onClick={ () => handleItemClick(i) } edge='end' aria-pressed={ item.inCart }>
                  {item.inCart ? <RemoveShoppingCartIcon /> : <AddShoppingCartIcon />}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))
        }
      </List>
    </div>
  )
}

export default  React.memo(ProductList)
