import React from 'react'
import { styled} from "@mui/material/styles";
import { Box } from '@mui/system';
import {Button} from "@mui/material";

const SectionWrapper = styled(Box)`
  position:relative;
  background-color: #95A6BF;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #1e4d94;
  
`

const TemplateBox = styled(Box)`
height: 55rem;
right: 0;
width: 65rem;
float: right;
border-radius: 50px;
background-color: #2C3F5B;
position: absolute;
top: -70px;

@media screen and (max-width:950px){
    height: 100vh;
    width: 100%;
  display: flex;
  flex-direction: row;
  top: -200px;
}

`

const TemplateStyle1 = styled('img')`
height: 30rem;
width: 45rem;
border-radius: 50px;
background-color: #2C3F5B;
position: absolute;
top: 200px;
right: 45rem;

&:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }

@media screen and (max-width:950px){
    height: 30%;
    width: 70%;
    top: 30px;
    right: 0;
    margin: 0 auto;
    position: relative;
}

`

const TemplateStyle2 = styled('img')`
position: absolute;
margin-top: 50px;
height: 35%;
border-radius: 50px;
width: 50%;
right: 80px;

&:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width:950px){
    height: 30%;
    width: 70%;
    top: 250px;
    right: 4rem;
    margin: 0 auto;
    position: absolute;
}

`

const TemplateStyle3 = styled('img')`
position: absolute;
margin-top: 400px;
height: 35%;
width: 50%;
right: 80px;

&:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width:950px){
    height: 25%;
    width: 65%;
    top: 470px;
    right: 4rem;
    margin: 0 auto;
    position: absolute;
  }

`

const ButtonWrapper = styled(Box)`
position: absolute;
bottom: 30px;
left: 23rem;

@media screen and (max-width:950px){
   display:none;
  }
`
const MobileButton = styled(Box)`
display: none;

@media screen and (max-width:950px){
    position: absolute;
   display:flex;
   bottom: 140px;
   right: 20px;

  }

`



const TemplateDisplay = () => {
  return (
    <>
    <SectionWrapper>
    <TemplateBox>
        
        <TemplateStyle1 src='assets/template1.jpg' alt='template' />
        <TemplateStyle2 src='assets/template2.png' alt='template' />
        <TemplateStyle3 src='assets/template3.png' alt='template' />
        
        <ButtonWrapper>
        <Button variant='contained' size='large' sx={{fontSize:'30px', backgroundColor:'#5E85C0', borderRadius:'30px', fontWeight:'600'}}> Generate Template</Button>
        </ButtonWrapper>
    </TemplateBox>

    <MobileButton>
        <Button variant='contained' size='medium' sx={{fontSize:'15px', backgroundColor:'#5E85C0', borderRadius:'15px', fontWeight:'600'}}> Generate Template</Button>
        </MobileButton>
    </SectionWrapper>
    
    </>
  )
}

export default TemplateDisplay