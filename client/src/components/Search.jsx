import { InputBase ,Box} from "@mui/material";
import {styled} from '@mui/material/styles'
import React from "react";
import SearchIcon from '@mui/icons-material/Search'

const SearchContainer=styled(Box)`
    background-color: #fff ;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`
const InputSearchBase=styled(InputBase)`
    padding-left: 10px;
    width: 100%;
`

const SearchIconWrapper = styled(Box)`
  padding: 5px;
`;
const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for products, brands and more" />
      <SearchIconWrapper>
          <SearchIcon style={{color: "#2874f0"}}/>
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default Search;
