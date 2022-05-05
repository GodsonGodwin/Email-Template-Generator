import React from "react";
import {AppBar, Link, Toolbar} from "@mui/material";
import { styled} from "@mui/material/styles";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box } from "@mui/system";


const ToolbarWrapper = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: #C5BFBF;
  box-shadow: none;
`;

const BrandLogo = styled('img')`
  height: 85px;
  width: 158px;

  @media screen and (max-width:950px){
    height: 60px;
  width: 120px;
  
}
`;

const IconWrapper = styled(Box)`
  display: flex;
  align-items: center;
`;

const IconButton = styled(Box)`
  display: flex;
  align-items: center;
`;

const Icon = styled(Link)`
  margin-right: 15px;
  color: white;
  cursor: pointer
`;



const NavBar = () => {

  return (
    <>
      <AppBar >
        <ToolbarWrapper >
          <BrandLogo src='assets/moonsat1.png' alt='Brand Logo' />
        
          <IconWrapper>
              <IconButton>
                
                <Icon>
                <FacebookRoundedIcon fontSize="large" />
                </Icon>

                <Icon>
                  <InstagramIcon fontSize="large" />
                </Icon>

                <Icon>
                  <TwitterIcon fontSize="large" />
                </Icon>
              </IconButton>
          </IconWrapper>

        </ToolbarWrapper>
      </AppBar>

    </>
  );
};

export default NavBar;

