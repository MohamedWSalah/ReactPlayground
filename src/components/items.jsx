import React, { Component, useState } from 'react';
import TodoItem from './common/TodoListItem';

function Items()
{
    const [text,setText] = useState("2222");

    return(
        <div className="m-2">
            <center>
                <TodoItem paraText="ONEEEE"/>

                <TodoItem paraText="ONEEEE"/>

                <TodoItem paraText="ONEEEE"/>
            </center>
        </div>
    )
}

export default Items;