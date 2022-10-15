import { Box, Button, styled } from "@mui/material";
import React from "react";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import { useState } from "react";

const LeftContainer = styled(Box)(({theme})=>({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('lg')]:{
    padding:'20px 40px'
  }
}))
  


const Image = styled("img")({
  width: "95%",
  padding: "15px",
});
const StyledButton = styled(Button)(({theme})=>({

  width: '48%',
  height: '50px',
  borderRadius: '2px',
  [theme.breakpoints.down('lg')]:{
    width:'46%'
  },
  [theme.breakpoints.down('sm')]:{
    width:'48%'
  }
}))

const ActionItem = ({ product }) => {
  const [quantity,setQuantity]=useState(1);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const addItemToCart=()=>{
    const {id}=product
    dispatch(addToCart(id,quantity))
    navigate('/cart')
  }
  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={product.detailUrl} alt={product.title.shortTitle} />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
        onClick={()=>addItemToCart()}
      >
        <Cart /> Add to Cart
      </StyledButton>
      <StyledButton variant="contained" style={{ background: "#fb541b" }}>
        <Flash /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
