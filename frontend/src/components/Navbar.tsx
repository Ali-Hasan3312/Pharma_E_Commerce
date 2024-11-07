import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { user } from "../assets/users";
import { RootState } from "../redux/store";
const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (paths: string[]) => paths.includes(location.pathname);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [userActive, setUserActive] = useState<boolean>(true);
  const { cartItems } = useSelector((state: RootState) => state.cartReducer);

  const toggleDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleOutsideClick = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const logoutHandler = () => {
    setUserActive(false);
    toast.success("Logged Out Successfully");
  };

  return (
    <>
      {isActive(["/doctorDashboard/conducted"]) ? (
        <></>
      ) : (
        <nav className="w-full">
          <div className="py-2 flex text-sm md:text-lg px-4 md:px-24 justify-between text-white font-semibold items-center w-full bg-dark-green">
            <div className="flex items-center gap-8">
              <span>555-0198</span>
              <span>123 Maple Street, Springfield, IL 62701</span>
            </div>
            <div>
              <span>24/7 Service</span>
            </div>
          </div>
          
          {/* Main Navbar */}
          <div className="bg-white px-8 flex justify-between items-center">
            <img className="w-40" src={logo} alt="Logo" />

           

            {/* Links for Desktop */}
            <div className="hidden sm:flex gap-8 text-xl font-semibold">
              <Link className={`hover:text-dark-green transition-all duration-300 ${isActive(["/"]) ? "text-dark-green" : "text-black"}`} to={"/"}>Home</Link>
              <Link className={`hover:text-dark-green transition-all duration-300 ${isActive(["/shop", "/shop/products"]) ? "text-dark-green" : "text-black"}`} to={"/shop"}>Shop</Link>
              <Link className={`hover:text-dark-green transition-all duration-300 ${isActive(["/doctors"]) ? "text-dark-green" : "text-black"}`} to={"/doctors"}>Doctors</Link>
              <Link className={`hover:text-dark-green transition-all duration-300 ${isActive(["/appointments"]) ? "text-dark-green" : "text-black"}`} to={"/appointments"}>Appointments</Link>
              <Link className={`hover:text-dark-green transition-all duration-300 ${isActive(["/orderDetails"]) ? "text-dark-green" : "text-black"}`} to={"/orderDetails"}>Orders</Link>
              <Link className={`hover:text-dark-green transition-all duration-300 ${isActive(["/about"]) ? "text-dark-green" : "text-black"}`} to={"/about"}>About</Link>
              <Link className={`hover:text-dark-green transition-all duration-300 ${isActive(["/contact"]) ? "text-dark-green" : "text-black"}`} to={"/contact"}>Contact</Link>
              <Link className={`hover:text-dark-green transition-all duration-300 ${isActive(["/cart"]) ? "text-dark-green" : "text-black"}`} to={"/cart"}>Cart ({cartItems.length})</Link>
            </div>

            {/* User Avatar and Login/Register */}
            {userActive ? (
              <div onClick={toggleDropdown} className="hidden cursor-pointer md:flex items-center gap-2">
                <img onClick={logoutHandler} className="w-10 h-10 rounded-full object-cover" src={user.Image} alt="" />
                <span className="text-lg">Usman</span>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-4">
                <Link to={"/login"} className="bg-dark-green px-4 py-2 text-white rounded-md">Login</Link>
                <Link to={"/register"} className="bg-dark-green px-4 py-2 text-white rounded-md">Register</Link>
              </div>
            )}

             {/* Mobile Hamburger Icon */}
             <div className="sm:hidden" onClick={toggleSidebar}>
              {sidebarOpen ? <FaTimes className="text-2xl cursor-pointer" /> : <FaBars className="text-2xl cursor-pointer" />}
            </div>
          </div>
          {/* Sidebar for Mobile */}
          <div className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 shadow-lg sm:hidden`}>
            <div className="flex justify-end p-4">
              <FaTimes className="text-2xl cursor-pointer" onClick={toggleSidebar} />
            </div>
            <div className="flex flex-col items-start gap-6 p-6 text-xl font-semibold">
                            {/* User or Login/Register in Sidebar */}
                            {userActive ? (
                <div onClick={toggleDropdown} className="cursor-pointer flex items-center gap-2">
                  <img className="w-10 h-10 rounded-full object-cover" src={user.Image} alt="" />
                  <span className="text-lg">Usman</span>
                </div>
              ) : (
                <div className="flex flex-col items-start gap-4 mt-4">
                  <Link to={"/login"} className="bg-dark-green px-4 py-2 text-white rounded-md" onClick={toggleSidebar}>Login</Link>
                  <Link to={"/register"} className="bg-dark-green px-4 py-2 text-white rounded-md" onClick={toggleSidebar}>Register</Link>
                </div>
              )}
              <Link onClick={toggleSidebar} className={`hover:text-dark-green transition-all duration-300 ${isActive(["/"]) ? "text-dark-green" : "text-black"}`} to={"/"}>Home</Link>
              <Link onClick={toggleSidebar} className={`hover:text-dark-green transition-all duration-300 ${isActive(["/shop", "/shop/products"]) ? "text-dark-green" : "text-black"}`} to={"/shop"}>Shop</Link>
              <Link onClick={toggleSidebar} className={`hover:text-dark-green transition-all duration-300 ${isActive(["/doctors"]) ? "text-dark-green" : "text-black"}`} to={"/doctors"}>Doctors</Link>
              <Link onClick={toggleSidebar} className={`hover:text-dark-green transition-all duration-300 ${isActive(["/appointments"]) ? "text-dark-green" : "text-black"}`} to={"/appointments"}>Appointments</Link>
              <Link onClick={toggleSidebar} className={`hover:text-dark-green transition-all duration-300 ${isActive(["/orderDetails"]) ? "text-dark-green" : "text-black"}`} to={"/orderDetails"}>Orders</Link>
              <Link onClick={toggleSidebar} className={`hover:text-dark-green transition-all duration-300 ${isActive(["/about"]) ? "text-dark-green" : "text-black"}`} to={"/about"}>About</Link>
              <Link onClick={toggleSidebar} className={`hover:text-dark-green transition-all duration-300 ${isActive(["/contact"]) ? "text-dark-green" : "text-black"}`} to={"/contact"}>Contact</Link>
              <Link onClick={toggleSidebar} className={`hover:text-dark-green transition-all duration-300 ${isActive(["/cart"]) ? "text-dark-green" : "text-black"}`} to={"/cart"}>Cart ({cartItems.length})</Link>

            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
