import React from 'react';
import './UserOutput.css';

function UserOutput(props) {
    return (
        <div>
            <h3>Output Field</h3>
        <p>Username: {props.username}'s Assignment 1</p>
        <p className='UserOutput'>Stylesheet import</p>
        </div>
    )
}

export default UserOutput;
