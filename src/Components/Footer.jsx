import React from 'react'
import { styled} from "@mui/material/styles";
import { Box } from '@mui/system';
import {
    AppBar,
    Avatar,
    Badge,
    Button,
    Container,
    InputBase,
    Link,
    Toolbar,
    Typography,
  } from "@mui/material";

const FooterWrapper = styled(Box)`
  position:relative;
  background-color: #95A6BF;
  flex-direction: column;
  color: white;
`

const ArrowLine = styled('img')`
width: 100%;
margin-top: 70px;

`

const BrandLogo = styled('img')`
  height: 120px;
  width: 240px;
  margin: 0 50px;

  @media screen and (max-width:950px){
    height: 60px;
  width: 120px;
  
}
`;






const Footer = () => {
  return (
    <>
    <FooterWrapper>
    <ArrowLine src='assets/Line2.png' alt='ArrowLine' />

    <Box sx={{display: 'flex', justifyContent:'space-between'}}>

    <Box>
    <Typography sx={{fontSize:'25px', padding: '25px 25px 5px 25px'}}>Terms & Conditions | License | Help</Typography>
    <Typography sx= {{fontSize:'20px', padding:'2px 25px 25px 25px'}}>&copy; 2022 Moonsat Technology</Typography>
    </Box>
    
    <BrandLogo src='assets/moonsat1.png' alt='Brand Logo' />
    </Box>
    
    

    
    </FooterWrapper>
    
    </>
  )
}

export default Footer