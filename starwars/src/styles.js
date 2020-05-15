import styled from 'styled-components'


//``````````````````````````start of style functions which I didn't use for this``````````````````````````\\

export default {
    bigtextboi: { fontSize: '1.3em', color: 'red'},
    funkySpan: {color: 'crimson' },
    biggreen: {color: 'purple', fontWeight: 'bold', fontSize: '1.4rem'},
}
//``````````````````````````end of style functions``````````````````````````\\

//Flexus wrap for main body + buttons\\
export const Flexus = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: ${props => props.space || 'center'}; ;
align-items:center;
`
//end of flexus\\

//start of custom Button\\
export const Button = styled.div `
  display: inline-block;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 10px;
  box-shadow: 0 9px #999;
  transition-duration: 0.4s;
  
  
/* added hover effects */
  &:hover {background-color: #3e8e41}

&:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
`
// end of custom button\\

//start of name text style\\
export const Tile = styled.div`
color: ${props => props.frania || 'red'}; 
font-size: 1.3rem;
font-family: Comic Sans MS;

`
//end of name style\\

//start of container style\\
export const Container = styled.div`
background-color: lightgoldenrodyellow;
border-radius: 5%;
/* padding: 0%; */


`
//end of container style\\
