import React from 'react'
import { styled} from "@mui/material/styles";
import { Box } from '@mui/system';
import {Typography,
} from "@mui/material";

const ShowCaseWrapper = styled(Box)`

  background-color: #C5BFBF;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #1e4d94;
`
const TextHeader = styled(Typography)`
margin-top: 12rem;
margin-left: 12rem; 
font-size:70px; 
font-weight:bold;
position: relative;

@media screen and (max-width:950px){
  font-size:40px; 
  margin-left: 4rem; 
  
}

`

const TextParagraph = styled(Typography)`
margin-top: 1rem;
margin-left: 27rem; 
color: #2C3F5B;
font-size:40px; 
font-weight: 600;
position: relative;

@media screen and (max-width:950px){
  font-size:25px; 
  margin-left: 7rem; 
  margin-top: 0.7rem;
}

`

const ShowCaseImage = styled('img')`
position: absolute;
margin-top: 200px;
height: 60%;
width: 65%;
right: 0;

@media screen and (max-width:950px){
height: 40%;
width: 100%;
margin: 150px auto;
opacity: 0.4;
  
}

`
const ArrowLine = styled('img')`
height: 2%;
width: 10%;
margin-top: -65px;
margin-left: 15rem;

@media screen and (max-width:950px){
display: none;
}


`


const ShowCase = () => {
  return (
    <>
    <ShowCaseWrapper>
    
    <ShowCaseImage src='assets/templateBackground.png' alt='Brand Logo' />
    <TextHeader variant="h2" >Create Your Dynamic <br /> Email Template</TextHeader>
    <TextParagraph variant="h2" >Fully customize, responsive <br /> and flexible</TextParagraph>
    <ArrowLine src='assets/Line1.png' alt='ArrowLine' />
    
    </ShowCaseWrapper>
    </>
  )
}

export default ShowCase