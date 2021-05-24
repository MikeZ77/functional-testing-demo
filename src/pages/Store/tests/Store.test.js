import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Store from '../Store'


test('workflow for adding and removing items to the cart', async () => {
  render(<Store />)

  // There should be 10 list items  
  const itemList = await screen.findAllByRole('listitem')
  expect(itemList).toHaveLength(5)

  // Add the first item to the cart
  const cartButton = screen.getAllByRole('button')[0]
  userEvent.click(cartButton)

  // The button should reflect the remove from cart state
  expect(screen.getByRole('button', { pressed: true })).toBeInTheDocument()

  // The added alert should appear
  const addedAlert = screen.getByRole('alert')
  expect(addedAlert).toHaveTextContent('added')
  expect(addedAlert).toHaveTextContent('Pumpkin-spice Treat')
  expect(addedAlert).toHaveStyle('background-color: #4caf50')


})
