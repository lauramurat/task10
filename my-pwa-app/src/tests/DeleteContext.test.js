import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('Удаление существующего объявления', () => {
    const { getByText, queryByText } = render(<App />);

    const titleInput = getByLabelText('Title:');
    const descriptionInput = getByLabelText('description:');
    const addButton = getByText('Add');

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.click(addButton);

    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);

    expect(queryByText('Test Title')).not.toBeInTheDocument();
    expect(queryByText('Test Description')).not.toBeInTheDocument();
});
