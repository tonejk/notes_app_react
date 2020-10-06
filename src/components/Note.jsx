import React from 'react';

function Note({ id, name, complete, toggleNote }) {

    const handleNoteClick = () => {
        toggleNote(id);
    }

    return (
    <div>
        <label>
            <div>{name}</div>
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