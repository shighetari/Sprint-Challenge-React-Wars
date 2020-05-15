import React, { useState, useEffect } from 'react';
import { Tile, Container } from '../styles.js'

// Write your Character component here
 const Character = (props) => {
    // console.log(props)
    // console.log(props.info)
    return (
  
      <div className='character'>
         <Container>  
     
        <Tile frania = 'crimson' > 
        <div className='name'>   {props.info.name} </div>
        </Tile>
        
        <div className='app-logo'> <img src={props.info.image} /></div>  
         
        <p>Gender: {props.info.gender}</p>
        <p>Species: {props.info.species}</p>
        <p>Status: {props.info.status}</p>
        <p>Created: {props.info.created}</p>
        <p>location: {props.info.location.name}</p>
        </Container>   
      
      </div>
    
    )
  }
  export default Character