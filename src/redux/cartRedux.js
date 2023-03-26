import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicRequest, userRequest } from "../axios";

export const addOrUpdateCart = createAsyncThunk(`/carts/`, async (cart) => {
  const response = await userRequest.post("/carts", cart);
  return response.data;
});

export const getCart = createAsyncThunk(`/carts/get`, async (userId) => {
  const response = await userRequest.get(`/carts/${userId}`);
  return response.data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    apiCallRequired: false,
  },

  reducers: {
    addProduct: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.products.find(
        (item) => item._id === newItem._id
      );
      state.apiCallRequired = true;
      if (!existingItem) {
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.total) + Number(newItem.price);
        state.total += newItem.price;
      }
    },

    clearCart: (state) => {
      state.apiCallRequired = true;
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
  extraReducers: {
    [getCart.pending]: (state, action) => {
      state.isFetching = true;
    },
    [getCart.fulfilled]: (state, { payload }) => {
      state.products = payload.products;
      state.total = payload.totalPrice;
      state.quantity = payload.totalQuantity;
    },
    [getCart.rejected]: (state, action) => {},
  },
});

export const { addProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
