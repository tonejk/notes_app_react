import React, { useState } from 'react';
import Note from "./Note";

const NoteList = ({ initialNotes }) => {

    return (
        <div>
            {initialNotes.map(note => (
                <Note key={note.id} {...note} />
            ))}
        </div>
        );
    }

export default NoteList;
