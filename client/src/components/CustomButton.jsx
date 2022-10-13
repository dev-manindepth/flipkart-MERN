import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { ShoppingCart } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  align-items: center;
  & > button , p, & > div{
      margin-right: 40px;
      font-size: 16px;
  }
`;
const Container=styled(Box)`
    display: flex;
`
const LoginButton=styled(Button)`
    color:#2874f0;
    background-color: #fff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: bold;
    height: 32;
`

const CustomButton = () => {
  return (
    <Wrapper>
      <LoginButton variant="container">Login</LoginButton>
      <Typography style={{width:135}}>Become a seller</Typography>
      <Typography>More</Typography>
      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
    </Wrapper>
  );
};

export default CustomButton;
