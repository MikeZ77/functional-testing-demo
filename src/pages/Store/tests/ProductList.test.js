import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Store from '../Store'

test('displays the product list', async () => {
  render(<Store />)
})
