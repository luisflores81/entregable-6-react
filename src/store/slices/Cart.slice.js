import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getToken from "../../Utils/getToken";
const url = "https://e-commerce-api-v2.academlo.tech/api/v1";

const cart = createSlice({
  name: 'cart',
  initialState: [], 
  reducers: {
    setCart: (value, action)  => action.payload,
     addCart: (state, action) => {value.push(action.
      payload)}, 
      delCart: (value, action) => value.filter(prod => prod.id !== action.payload),
    }
});

export const { setCart, addCart, delCart } = cart.actions;

export default cart.reducer;

export const getCartCartThunk = (path) =>  (dispatch) => {
  const url =`${urlBase}${path}`;
  axios.get(url,getToken())
  .then(res=> dispatch(setCart(res.data)))
     .catch(err => console.log(err))
 }
 export const postCartThunk = (path) => (dispatch) => {
  const url =`${urlBase}${path}`;
  axios.post(url, getToken())
     .then(res => dispatch(addCerd(res.data)))
     .catch(err => console.log(err))
     }
 
     export const deleteCartThunk = (path) => (dispatch) => {
      const url =`${urlBase}${path}${id}`;
      axios.delete(url, getToken())

.then (() => {
 dispatch(delCart(id))
})
.catch(err => console.log(err))
   }          
      
        