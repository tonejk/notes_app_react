import React, { useState, useRef, useEffect } from 'react';
import NoteList from "./components/NoteList";
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const App = () => {
    const initialState = JSON.parse(window.localStorage.getItem("notes"));
    const [notes, SetNotes] = useState(initialState || []);
    const noteTextRef = useRef();

    // Save notes to localStorage
    useEffect(() => {
        window.localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes])

    // Toggle note complete (checkbox)
    const toggleNoteComplete = (id, complete) => {
        const newNotes = [...notes];
        const note = newNotes.find(note => note.id === id);
        note.complete = !complete;
        SetNotes(newNotes);
    }

    // Add new note
    const handleAddNote = (e) => {
        e.preventDefault();
        const newNote = noteTextRef.current.value;
        if(newNote === "") {
            return null;
        } else {
            SetNotes(prevNotes => {
                return [...prevNotes, {id: uuidv4(), noteText: newNote, complete: false}];
            })
        }
        noteTextRef.current.value = null;
    }

    // Clear completed (checked) notes
    const handleClearNotes = (e) => {
        e.preventDefault();
        const newNotes = notes.filter(note => !note.complete);
        SetNotes(newNotes);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h3>Notes App</h3>
            </header>
            <form className="Notes-form">
                <label>
                <input type="text" ref={noteTextRef} name="noteText"></input>
                </label>

                <div>
                <button onClick={handleAddNote}>Add note</button>
                <button onClick={handleClearNotes}>Clear notes</button>
                </div>

                
                <NoteList 
                    notes={notes} 
                    toggleNoteComplete={toggleNoteComplete}/>
            </form>
        </div>
    );
}

export default App;
