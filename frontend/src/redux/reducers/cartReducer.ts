import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartReducerInitialState } from "../types/reducer-types";
import { CartItem, ShippingInfo } from "../types/types";

const initialState: CartReducerInitialState = {
    loading: false,
    cartItems: [],
    subtotal: 0,
    tax: 0,
    shippingCharges: 0,
    discount: 0,
    total: 0,
    orderItems: [],
    shippingInfo: {
      name: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
    },
  };

  export const cartReducer = createSlice({
    name: "cartReducer",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>)=>{
            state.loading = true;
            const index = state.cartItems.findIndex(
                (i) => i.id === action.payload.id
              );
              if (index !== -1) state.cartItems[index] = action.payload;
      else state.cartItems.push(action.payload);
      state.loading = false;
      console.log(state.cartItems[index])
        },
        removeCartItem: (state, action: PayloadAction<string>) => {
            state.loading = true;
            state.cartItems = state.cartItems.filter(
              (i) => i.id !== action.payload
            );
            state.loading = false;
          },
          calculatePrice: (state) => {
            const subtotal = state.cartItems.reduce((total, item) => {
              const itemPrice = item.price || 0;
              const itemQuantity = item.quantity || 0;  
              return total + itemPrice * itemQuantity;
            }, 0);
            
            state.subtotal = subtotal;
            state.total = subtotal;
          },    
          discountApplied: (state, action: PayloadAction<number>) => {
            state.discount = action.payload;
          },
          saveShippingInfo: (state, action: PayloadAction<ShippingInfo>) => {
            state.shippingInfo = action.payload;
          },
          resetCart: () => initialState,  
    }
  });

  export const {
    addToCart,
    removeCartItem,
    calculatePrice,
    discountApplied,
    saveShippingInfo,
    resetCart,
  } = cartReducer.actions;