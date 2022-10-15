import { Box, Button,Badge, Typography } from "@mui/material";
import React from "react";
import {  ShoppingCart } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import LoginDialog from "../login/LoginDialog";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  alignItems: "center",
  "& > *": {
    marginRight: "40px !important",

    fontSize: "16px",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)`
  color: #2874f0;
  background-color: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: bold;
  height: 32;
`;

const CustomButton = () => {
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);

  const {cartItems} = useSelector(state=>state.cart)
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="container" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}

      <Typography style={{ width: 135 }}>Become a seller</Typography>
      <Typography>More</Typography>
      <Container to='/cart'>
        <Badge  badgeContent={cartItems?.length} color="secondary">
        <ShoppingCart />
        </Badge>
        <Typography style={{marginLeft:10}}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButton;
