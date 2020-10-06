import React, { useState, useRef, useEffect } from 'react';
import NoteList from "./components/NoteList";
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const App = () => {
    const [notes, SetNotes] = useState([]);
    const noteTextRef = useRef();

    const toggleNote = (id) => {
        const newNotes = [...notes];
        const note = newNotes.find(note => note.id === id);
        note.complete = !note.complete;
        SetNotes(newNotes);
    }

    const handleAddNote = (e) => {
        e.preventDefault();
        const newNote = noteTextRef.current.value;
        if(newNote === "") {
            return null;
        } else {
            SetNotes(prevNotes => {
                return [...prevNotes, {id: uuidv4(), name: newNote, complete: false}];
            })
        }
        noteTextRef.current.value = null;
    }

    const handleClearNotes = (e) => {
        e.preventDefault();
        const newNotes = notes.filter(note => !note.complete);
        SetNotes(newNotes);
    }

    return (
        <div className="App">
            <header className="App-header">
                <form>
                    <h3>Notes App</h3>
                    <input type="text" ref={noteTextRef}></input>
                    <button onClick={handleAddNote}>Add Note</button>
                    <button onClick={handleClearNotes}>Clear Notes</button>
                    <NoteList initialNotes={notes} toggleNote={toggleNote}/>
                </form>
            </header>
        </div>
    );
}

export default App;
