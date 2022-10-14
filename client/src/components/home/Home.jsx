import { Box,styled } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import Banner from "./Banner";
import Navbar from "./Navbar";


const Component=styled(Box)`
    padding: 10px;
    background-color: #F2F2F2;
`
const Home = () => {
 const {products}= useSelector(state=> state.getProducts)
 console.log(products);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  return (
    <>
      <Navbar />
      <Component>
        <Banner />
      </Component>
    </>
  );
};

export default Home;
