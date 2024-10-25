import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
const Navbar = () => {
  const location = useLocation();

  
  const isActive = (paths: string[]) => paths.includes(location.pathname);
  const {cartItems} = useSelector((state: RootState)=>state.cartReducer)
  return (
    <nav className="w-full">
      {/* Top Bar */}
      <div className="py-2 flex px-24 justify-between text-white font-semibold items-center w-full bg-dark-green">
        <div className="flex items-center gap-8">
          <span>555-0198</span>
          <span>123 Maple Street, Springfield, IL 62701</span>
        </div>
        <div>
          <span>Monday-Saturday: 9 am - 11:30 pm</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white px-16 flex justify-between items-center">
        <img className="w-40" src={logo} alt="Logo" />
        <div className="flex gap-8 text-xl font-semibold">
          <Link
            className={`hover:text-dark-green transition-all duration-300 ${
              isActive(["/"]) ? "text-dark-green" : "text-black"
            }`}
            to={"/"}
          >
            Home
          </Link>
          <Link
            className={`hover:text-dark-green transition-all duration-300 ${
              isActive(["/shop", "/shop/products"]) ? "text-dark-green" : "text-black"
            }`}
            to={"/shop"}
          >
            Shop
          </Link>
          <Link
            className={`hover:text-dark-green transition-all duration-300 ${
              isActive(["/doctors"]) ? "text-dark-green" : "text-black"
            }`}
            to={"/doctors"}
          >
            Doctors
          </Link>
          <Link
            className={`hover:text-dark-green transition-all duration-300 ${
              isActive(["/appointments"]) ? "text-dark-green" : "text-black"
            }`}
            to={"/appointments"}
          >
            Appointments
          </Link>
          <Link
            className={`hover:text-dark-green transition-all duration-300 ${
              isActive(["/about"]) ? "text-dark-green" : "text-black"
            }`}
            to={"/about"}
          >
            About
          </Link>
          <Link
            className={`hover:text-dark-green transition-all duration-300 ${
              isActive(["/contact"]) ? "text-dark-green" : "text-black"
            }`}
            to={"/contact"}
          >
            Contact
          </Link>
          <Link
            className={`hover:text-dark-green transition-all duration-300 ${
              isActive(["/cart"]) ? "text-dark-green" : "text-black"
            }`}
            to={"/cart"}
          >
            Cart ({cartItems.length})
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to={"/login"}
            className="bg-dark-green px-4 py-2 text-white rounded-md"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="bg-dark-green px-4 py-2 text-white rounded-md"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
