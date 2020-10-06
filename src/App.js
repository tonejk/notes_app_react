import React, { useState, useRef, useEffect } from 'react';
import NoteList from "./components/NoteList";
import './App.css';

const App = () => {
    const [notes, SetNotes] = useState([]);
    const noteTextRef = useRef();

    const handleAddNote = (e) => {
        e.preventDefault();
        const newNote = noteTextRef.current.value;
        if(newNote === "") {
            return null;
        } else {
            SetNotes(prevNotes => {
                return [...prevNotes, {id: 1, name: newNote, complete: false}];
            })
        }
        noteTextRef.current.value = null;
    }

    return (
        <div className="App">
            <header className="App-header">
                <form>
                    <h3>Notes App</h3>
                    <input type="text" ref={noteTextRef}></input>
                    <button onClick={handleAddNote}>Add Note</button>
                    <button>Clear Notes</button>
                    <NoteList initialNotes={notes}/>
                </form>
            </header>
        </div>
    );
}

export default App;
