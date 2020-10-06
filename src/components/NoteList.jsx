import React from 'react';
import Note from "./Note";

const NoteList = ({ initialNotes, toggleNote }) => {

    return (
        <div>
            {initialNotes.map(note => (
                <Note key={note.id} toggleNote={toggleNote} {...note} />
            ))}
        </div>
        );
    }

export default NoteList;
