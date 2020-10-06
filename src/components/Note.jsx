import React from 'react';

// Return note with checkbox and handle checkbox change
function Note({ id, noteText, complete, toggleNote }) {

    const handleNoteClick = () => {
        toggleNote(id);
    }

    return (
    <div>
        <label>
            <div>{noteText}</div>
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