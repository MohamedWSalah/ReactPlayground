import React, { Component } from 'react';

function TodoItem(props)
{
    const {paraText} = props;
    return(
        <div>
            <input type="checkbox"/>
            <p>{paraText}</p>
            <hr/>
        </div>
    )
}

export default TodoItem;