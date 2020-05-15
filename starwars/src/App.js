import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character.js"
import {Button, Flexus} from "./styles.js"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

        //start of API state\\
  const [movieData, setMovieData] = useState([])
       //page state for stretch \\
  const [pageNumber, setPageNumber] = useState(1)

  //``````````````````````````AXIOS promise``````````````````````````\\

    useEffect(() => { 
    axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`) // pg # added as sprint 

      .then(response => {
        
        //console.log(response)

        setMovieData(response.data.results)
        
        console.log(`${movieData} is our data`)
       
      })
      .catch(error => {
        console.log('dunn goofed')
      })

  }, [pageNumber])
  //``````````````````````````END OF AXIOS PROMISE``````````````````````````\\

  //``````````````````````````PAGE FUNCTIONS``````````````````````````\\
  const nextPage = () => {
    if (pageNumber === 31){
      return setPageNumber(1)
    }
    else

    setPageNumber(pageNumber + 1)

  }
  const previousPage = () => {
    if (pageNumber === 0) {
      setPageNumber(1)
    } else {
      setPageNumber(pageNumber - 1)
    }

  }
// /``````````````````````````END OF PAGE FUNCTIONS``````````````````````````\\

//``````````````````````````START OF APP + STYLES``````````````````````````\\
  return (
    
    <div className="App">
      <h1 className="Header">Characters</h1>

      <Flexus space = 'space-evenly'> 
      <Button onClick={previousPage}>Previous Page</Button>
    
      <Button onClick={nextPage}>Next Page</Button>
      </Flexus>
      
    {/* adding character component */}

    <Flexus> 
      {movieData.map(character => {
        return <Character key={character.id} info={character} />
      })}
      </Flexus >
       <Flexus space = 'space-evenly'> 
      <Button onClick={previousPage}>Previous Page</Button>
    
      <Button onClick={nextPage}>Next Page</Button>
      </Flexus>

    </div>
  
  );
}
//``````````````````````````FIN``````````````````````````\\

export default App;