import React from 'react';
import './App.css';
import { AnnouncementProvider } from './components/AddContext';
import AnnouncementList from './components/AddList';
import AddForm from './components/AddForm';

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