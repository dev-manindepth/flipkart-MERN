import axios from "axios";
import { GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS } from "../constants/productConstant";

const URL='http://localhost:8000';

export const getProducts=()=> async(dispatch)=>{
    try{
       const {data}= await axios.get(`${URL}/products`);
       dispatch({type:GET_PRODUCTS_SUCCESS,payload:data})
    }catch(err){
        dispatch({type:GET_PRODUCTS_FAIL,payload:err.message})
    }
}