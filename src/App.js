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
        window.localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    // Toggle note complete (checkbox)
    const toggleNote = (id) => {
        const newNotes = [...notes];
        const note = newNotes.find(note => note.id === id);
        note.complete = !note.complete;
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
                <form>
                    <h3>Notes App</h3>
                    <input type="text" ref={noteTextRef}></input>
                    <button onClick={handleAddNote}>Add Note</button>
                    <button onClick={handleClearNotes}>Clear Notes</button>
                    <NoteList 
                        notes={notes} 
                        toggleNote={toggleNote}/>
                </form>
            </header>
        </div>
    );
}

export default App;
