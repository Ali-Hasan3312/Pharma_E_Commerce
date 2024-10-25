
export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
    description: string;
    stock: number;
  };
  
  export type ShippingInfo = {
    name:string;
    address: string;
    city: string;
    state: string;
    country: string;
    pinCode: string;
  };
  
  export type CartItem = {
    id: string;
    image: string;
    name: string;
    price: number;
    quantity: number;
    stock: number;
  };
  export type OrderItem = Omit<CartItem, "stock"> & { id: string };
  
  export type Order = {
    orderItems: OrderItem[];
    shippingInfo: ShippingInfo;
    subtotal: number;
    tax: number;
    shippingCharges: number;
    discount: number;
    total: number;
    status: string;
   
  };