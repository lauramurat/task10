import React from 'react';
import './App.css';
import { AnnouncementProvider } from './AddContext';
import AnnouncementList from './AddList';
import AddForm from './AddForm';

const App = () => {
    return (
        <AnnouncementProvider>
            <div>
                <AddForm />
                <AnnouncementList />
            </div>
        </AnnouncementProvider>
    );
};

export default App;