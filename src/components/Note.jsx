import React from 'react';

function Note({ id, name }) {

    return (
    <div>
        <label>
            <div>{name}</div>
            <input type="checkbox"></input>
        </label>
    </div>
    );
    }

export default Note;