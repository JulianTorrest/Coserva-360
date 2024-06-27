import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ItemList from './ItemList';

test('renders Item List and allows deletion', async () => {
  render(<ItemList />);

  const deleteButtons = await screen.findAllByText(/delete/i);
  fireEvent.click(deleteButtons[0]);

  expect(deleteButtons[0]).not.toBeInTheDocument();
});
