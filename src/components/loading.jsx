import React, { Component } from 'react';

function Loading(props)
{
    if(props.isLoading)
    {
        return(
            <center><h1 style={{color:"red",fontSize:'50px'}}>Loading...</h1></center>
        )
    } 

}

export default Loading;