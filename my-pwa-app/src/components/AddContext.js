import React, { createContext, useState, useContext } from 'react';
import './AddContext.css';

const AnnouncementContext = createContext();

export const useAdContext = () => useContext(AnnouncementContext);

export const AnnouncementProvider = ({ children }) => {
    const [announcements, setAnnouncements] = useState([]);

    const addAnnouncement = (newAnnouncement) => {
        setAnnouncements([...announcements, newAnnouncement]);
    };

    const updateAnnouncement = (announcementId, newData) => {
        setAnnouncements(
            announcements.map((announcement) =>
                announcement.id === announcementId ? { ...announcement, ...newData } : announcement
            )
        );
    };

    const deleteAnnouncement = (announcementId) => {
        setAnnouncements(announcements.filter((announcement) => announcement.id !== announcementId));
    };

    return (
        <AnnouncementContext.Provider
            value={{ announcements, addAnnouncement, updateAnnouncement, deleteAnnouncement }}
        >
            {children}
        </AnnouncementContext.Provider>
    );
};