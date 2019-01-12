import React from 'react';

function UserInput(props) {
    const style = {
        color: 'red',
        fontStyle: 'italic'
    }

    return (
        <div>
            <h3 style={style}>Input field styled with inline CSS</h3>
            <input onChange={props.changeName} value={props.name} type='text' />
        </div>
    )
}

export default UserInput;