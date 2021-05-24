import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Store from '../Store'

test('workflow for adding and removing items to the cart', async () => {
  render(<Store />)

  // Initially there should be no cart count
  const cartCount = screen.getByTestId('cart-count')
  expect(cartCount).not.toBeVisible()

  // There should be 5 list items  
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
  
  // The cart count should contain one item  
  expect(cartCount).toHaveTextContent('1')

  // Remove the item from the cart
  userEvent.click(cartButton)

  // The button should reflect the add to cart state 
  expect(screen.queryByRole('button', { pressed: true })).not.toBeInTheDocument()

  // The cart count should go back to not visible
  expect(cartCount).not.toBeVisible()

  // The added alert should disappear
  await waitFor(() => {
    expect(addedAlert).not.toBeInTheDocument()
  })

  // The removed alert should appear
  const remvoedAlert = screen.getByRole('alert')
  expect(remvoedAlert).toHaveTextContent('removed')
  expect(remvoedAlert).toHaveTextContent('Pumpkin-spice Treat')
  expect(remvoedAlert).toHaveStyle('background-color: #f44336')

})
