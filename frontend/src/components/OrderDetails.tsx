import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { OrderItem } from "../redux/types/types";

const OrderDetails = () => {
 let status = "Processing"
 const { discount, tax, total, subtotal, cartItems} = useSelector((state: RootState)=> state.cartReducer)
 const {name, address, city, state, country, pinCode } = useSelector((state: RootState)=> state.cartReducer.shippingInfo)
 console.log("Cart Items",cartItems)
  return (
    <main className="">
     
     <div className="flex items-start gap-8 py-28 justify-center">
      <section className={`p-8 bg-white rounded shadow-gray-700 shadow-sm ${cartItems.length>0? " opacity-100" : " opacity-0"}`}>
        <h2 className="tracking-wider uppercase text-center font-semibold">Order Items</h2>
        {cartItems.map((i) => (
          <ProductCard
            key={i.id} // Add the key prop here
            name={i.name}
            image={i.image}
            price={i.price}
            quantity={i.quantity}
            id={i.id}
            
          />
        ))}
      </section>
      <article className="relative p-8 w-96 bg-white rounded shadow-gray-700 shadow-sm">
        <h1 className="text-center tracking-wider font-bold uppercase">Order Info</h1>
        <h5 className="mt-8 ml-2 text-lg font-semibold">User Info</h5>
        <p className="m-1">Name: {name}</p>
        <p className="m-1">
          Address: {`${address}, ${city}, ${state}, ${country} ${pinCode}`}
        </p>
        <h5 className="mt-8 ml-2 text-lg font-semibold">Amount Info</h5>
        <p className="m-1">Subtotal: {subtotal}</p>
        <p className="m-1">Shipping Charges: Free</p>
        <p className="m-1">Tax: {tax}</p>
        <p className="m-1">Discount: {discount}</p>
        <p className="m-1">Total: {total}</p>
        <h5 className="mt-8 ml-2 text-lg font-semibold">Status Info</h5>
        <p className="m-1">
          Status: {" "}
          <span
            className={
              status === "Delivered"
                ? `text-purple-500`
                : status === "Shipped"
                  ? "text-green-500"
                  : "text-red-500"
            }
          >
            {status}
          </span>
        </p>
      </article>
     </div>
    
    </main>
  )
}

const ProductCard = ({
  name,
  image,
  price,
  quantity,
  id,
}: OrderItem) => (
  <div className="mt-6 ">
    <div className="flex gap-8 items-center">
    <img className="w-[80px] mx-auto" src={`${image}`} alt={name} />
    <div className=" mt-4 flex flex-col justify-center">
    <Link to={`/product/${id}`}>{name}</Link>
    <span className=" text-sm">
      ₹{price} X {quantity} = ₹{price * quantity}
    </span>
    </div>
    </div>
    <hr className=" mt-2" />  
  </div>
);

export default OrderDetails;
