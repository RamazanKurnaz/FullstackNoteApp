import React, { useState } from 'react';

function NotCards({ notes, activeNoteId }) {
    const [selectedNoteId, setSelectedNoteId] = useState(null);

    const handleNoteClick = (id) => {
        setSelectedNoteId(id);
    };
   
    const isBlurred = (noteId) => {
        return (activeNoteId || selectedNoteId) && 
               noteId !== activeNoteId && 
               noteId !== selectedNoteId;
    };

    return (
        <div className="note-container">
            {notes.map(note => (
                <div
                    key={note.id}
                    className={`note-card ${isBlurred(note.id) ? 'blur' : ''}`}
                    onClick={() => handleNoteClick(note.id)}
                >
                    {note.content}
                </div>
            ))}
        </div>
    );
}

export default NotCards;