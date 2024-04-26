import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AnnouncementProvider } from '../components/AddContext';
import AddForm from '../components/AddForm';

test('AddForm добавляет объявление при отправке формы', async () => { // Обратите внимание на async
    const { getByLabelText, getByText } = render(
        <AnnouncementProvider>
            <AddForm />
        </AnnouncementProvider>
    );

    const titleInput = getByLabelText('Title:');
    const descriptionInput = getByLabelText('description:');
    const submitButton = getByText('Add');

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(getByText('Test Title')).toBeInTheDocument();
        expect(getByText('Test Description')).toBeInTheDocument();
    });
});
