import React, { Component } from 'react';

function Button(props)
{
    const {className, text, onClickFunc} = props;
    return(
        <button className={className} onClick={onClickFunc}>{text}</button>
    )
}

export default Button;