import React from 'react';
import Note from "./Note";

// Map notes to return list of notes
const NoteList = ({ notes, toggleNote }) => {
    return (
        <div>
            {notes.map(note => (
                <Note 
                    key={note.id} 
                    toggleNote={toggleNote} 
                    {...note} 
                />
            ))}
        </div>
        );
    }

export default NoteList;
