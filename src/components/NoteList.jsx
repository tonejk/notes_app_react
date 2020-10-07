import React from 'react';
import Note from "./Note";

const NoteList = ({ notes, toggleNoteComplete }) => {
    return (
        <div>
            {notes.map(note => (
                <Note 
                    key={note.id} 
                    toggleNoteComplete={toggleNoteComplete} 
                    {...note} 
                />
            ))}
        </div>
        );
    }

export default NoteList;
