import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { user } from "../assets/users";
import { RootState } from "../redux/store";
const Navbar = () => {
  const location = useLocation();
  const isActive = (paths: string[]) => paths.includes(location.pathname);
  const [isOpen,setIsOpen] = useState(false)
  const [userActive, setUserActive] = useState(true)
  const {cartItems} = useSelector((state: RootState)=>state.cartReducer)
  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleOutsideClick = () => {
      setIsOpen(false);
    };

    // Close the dropdown when clicking outside
    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);
  const logoutHandler = ()=>{
    setUserActive(false)
    toast.success("Logged Out Successfully")
  }
  return (
    <>
    {isActive(["/doctorDashboard/conducted"])? (<></>) : (<><nav className="w-full">
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
      <div className="bg-white px-8 flex justify-between items-center">
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
              isActive(["/orderDetails"]) ? "text-dark-green" : "text-black"
            }`}
            to={"/orderDetails"}
          >
            Orders
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
       {userActive? (<>
      <div onClick={toggleDropdown} className=" cursor-pointer flex items-center gap-2" >
       <img className="w-10 h-10 rounded-full object-cover" src={user.Image} alt="" />
       <span className=" text-lg">Usman</span>
       </div>
       {isOpen ? (
         <div  className="absolute top-28 right-8 rounded bg-white z-50 shadow-lg p-4 flex flex-col gap-2">
           <Link className="hover:text-dark-green transition-all duration-300" to={`/userSettings/${user.id}`}>Settings</Link>
           <Link onClick={logoutHandler} className="hover:text-dark-green transition-all duration-300" to={"/"}>Logout</Link>
          </div>
        ) : null}
       </>) : (
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
       )}
      </div>
    </nav></>)}
    
    </>
  );
};

export default Navbar;
