import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('Редактирование существующего объявления', () => {
    const { getByText, getByLabelText } = render(<App />);

    const titleInput = getByLabelText('Title:');
    const descriptionInput = getByLabelText('description:');
    const addButton = getByText('Add');

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.click(addButton);

    const editButton = getByText('Edit');
    fireEvent.click(editButton);

    const editTitleInput = getByLabelText('Title:');
    const editDescriptionInput = getByLabelText('description:');
    const saveButton = getByText('Save');

    fireEvent.change(editTitleInput, { target: { value: 'Updated Title' } });
    fireEvent.change(editDescriptionInput, { target: { value: 'Updated Description' } });
    fireEvent.click(saveButton);

    expect(getByText('Updated Title')).toBeInTheDocument();
    expect(getByText('Updated Description')).toBeInTheDocument();
});
