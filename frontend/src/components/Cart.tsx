import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, calculatePrice, removeCartItem } from "../redux/reducers/cartReducer";
import { RootState } from "../redux/store";
import { CartItem } from "../redux/types/types";
import { useNavigate } from "react-router";
import { useEffect } from "react";
const Cart = () => {

  const {cartItems, total} = useSelector((state: RootState)=>state.cartReducer)
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  const incrementHandler = (cartItem: CartItem) => {
    if (cartItem.quantity >= cartItem.stock) return;
    dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity + 1 }));
  };
  const decrementHandler = (cartItem: CartItem) => {
    if (cartItem.quantity <= 1) return;
    dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity - 1 }));
  };
  const removeHandler = (productId: string) => {
    dispatch(removeCartItem(productId));
  };
  useEffect(() => {
      
    dispatch(calculatePrice());
  }, [cartItems]);
 
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center  mb-8">
          Shopping Cart
        </h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item, index) => (
                <div
                key={`${item.id}-${index}`}
                  className="flex items-center bg-white p-6 rounded-lg shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      ${item.price} x {item.quantity}
                    </p>
                     <button
                      onClick={() => removeHandler(item.id)}
                      className="text-red-500 mt-2 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                  <div className='flex items-center gap-4 justify-center mb-4'>
                 <button onClick={()=>decrementHandler(item)} className=' text-lg'><FiMinus /></button>
                 <span className="px-2">{item.quantity}</span>
                  <button onClick={()=>incrementHandler(item)} className=' text-lg'><FiPlus /></button>
                </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${total}</span>
              </div>
              <div className="flex justify-between mb-6">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span>${total}</span>
              </div>  
              <button onClick={()=>navigate("/shipping")} className="w-full bg-dark-green text-white py-2 rounded-md hover:bg-opacity-80 transition duration-300 mb-4">
                Proceed to Checkout
              </button>
              <button onClick={()=>navigate("/shop/products")} className="w-full bg-gray-300 text-black py-2 rounded-md hover:bg-gray-400 transition duration-300">
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600">
            Your cart is empty. Start adding products!
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
