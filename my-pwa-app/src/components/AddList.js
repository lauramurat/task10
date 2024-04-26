import React, { useState, memo } from 'react';
import { useAdContext } from './AddContext';
import './AddList.css';

const AnnouncementItem = memo(({ announcement, editId, handleEdit, handleSaveEdit, handleDelete }) => {
    const [editedTitle, setEditedTitle] = useState(announcement.title);
    const [editedDescription, setEditedDescription] = useState(announcement.description);

    const handleTitleChange = (e) => {
        setEditedTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setEditedDescription(e.target.value);
    };

    return (
        <tr>
            <td>
                {editId === announcement.id ? (
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={handleTitleChange}
                    />
                ) : (
                    announcement.title
                )}
            </td>
            <td>
                {editId === announcement.id ? (
                    <input
                        type="text"
                        value={editedDescription}
                        onChange={handleDescriptionChange}
                    />
                ) : (
                    announcement.description
                )}
            </td>
            <td>
                {editId === announcement.id ? (
                    <button className="save-btn" onClick={() => handleSaveEdit(announcement.id, editedTitle, editedDescription)}>Сохранить</button>
                ) : (
                    <div>
                        <button className="edit-btn" onClick={() => handleEdit(announcement.id)}>Изменить</button>
                        <button className="delete-btn" onClick={() => handleDelete(announcement.id)}>Удалить</button>
                    </div>
                )}
            </td>
        </tr>
    );
});

const AnnouncementList = () => {
    const { announcements, deleteAnnouncement, updateAnnouncement } = useAdContext();
    const [editId, setEditId] = useState(null);

    const handleEdit = (announcementId) => {
        setEditId(announcementId);
    };

    const handleSaveEdit = (announcementId, newTitle, newDescription) => {
        updateAnnouncement(announcementId, { title: newTitle, description: newDescription });
        setEditId(null);
    };

    const handleDelete = (announcementId) => {
        deleteAnnouncement(announcementId);
    };

    return (
        <div className="announcement-list-container">
            <table className="announcement-table">
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {announcements.map((announcement) => (
                    <AnnouncementItem
                        key={announcement.id}
                        announcement={announcement}
                        editId={editId}
                        handleEdit={handleEdit}
                        handleSaveEdit={handleSaveEdit}
                        handleDelete={handleDelete}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AnnouncementList;