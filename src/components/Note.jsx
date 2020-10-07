import React from 'react';
import '../App.css';

function Note({ id, noteText, complete, toggleNoteComplete }) {

    const handleNoteClick = () => {
        toggleNoteComplete(id);
    }

    return (
    <div className="Note-container">
        <label className="Note">
            {noteText}
            <input 
                type="checkbox" 
                defaultChecked={complete} 
                onChange={handleNoteClick} 
            />
        </label>
    </div>
    );
}

export default Note;