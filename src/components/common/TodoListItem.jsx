import React, { Component, useState } from 'react';

function TodoItem(props)
{
    const {paraText} = props;
    const [checkBox,setCheckBox] = useState(true);
    const changeCheckBox = () => {setCheckBox(!checkBox); console.log(checkBox)}
    
    return(
        <div>
            <input type="checkbox" onClick={changeCheckBox}/>
            <p style={checkBox?{color:'black'}:{color:'red'}}>{paraText}</p>
            <hr/>
        </div>
    )
}

export default TodoItem;