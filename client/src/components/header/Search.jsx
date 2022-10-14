import { InputBase, Box, List, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  background-color: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 10px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  padding: 5px;
  display: flex;
`;
const ListWrapper=styled(List)`
  position: absolute;
  background-color: #FFFFFF;
  color: #000;
  margin-top: 36px;
`
const Search = () => {
  const [text, setText] = useState("");

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const getText = (text) => {
    setText(text)
  };
  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        onChange={(e) => {
          getText(e.target.value);
        }}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon style={{ color: "#2874f0" }} />
      </SearchIconWrapper>
      {text && <ListWrapper>
        {
           products.filter(product=> product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
             <ListItem>
               <Link to={`/product/${product.id}`} style={{textDecoration:'none',color:'inherit'}} onClick={()=>setText('')} >
               {product.title.longTitle}
               </Link>
               </ListItem>
           ))
        }
       
        </ListWrapper>}
    </SearchContainer>
  );
};

export default Search;
