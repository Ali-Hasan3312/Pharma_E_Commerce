import { CartItem, ShippingInfo } from "./types";



export interface CartReducerInitialState {
  loading: boolean;
  cartItems: CartItem[];
  orderItems: CartItem[];
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  shippingInfo: ShippingInfo;
}