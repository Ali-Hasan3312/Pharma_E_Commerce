import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { user } from "../assets/users";
const DoctorNavbar = () => {
    const location = useLocation();
    const [isOpen,setIsOpen] = useState(false)
    const [userActive, setUserActive] = useState(true)
    const isActive = (paths: string[]) => paths.includes(location.pathname);
    
    
    
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
    <div className="bg-white w-full px-8 flex justify-between items-center">
        <img className="w-40" src={logo} alt="Logo" />
        <div className="flex gap-8 text-lg font-semibold">
          <Link
            className={`hover:text-dark-green transition-all duration-300 ${
              isActive(["/doctor/all"]) ? "text-dark-green" : "text-black"
            }`}
            to={"/doctor/all"}
          >
            All Appointments
          </Link>
          <Link
            className={`hover:text-dark-green transition-all duration-300 ${
              isActive(["/approved", "/shop/products"]) ? "text-dark-green" : "text-black"
            }`}
            to={"/doctor/approved"}
          >
            All Patients
          </Link>
        
          <Link
            className={`hover:text-dark-green transition-all duration-300 ${
              isActive(["/prescriptions"]) ? "text-dark-green" : "text-black"
            }`}
            to={"/doctor/prescriptions"}
          >
            Prescription History
          </Link>
        
        </div>
       {userActive? (<>
      <div onClick={toggleDropdown} className=" cursor-pointer flex items-center gap-2" >
       <img className="w-10 h-10 rounded-full object-cover" src={user.Image} alt="" />
       <span className=" text-lg">Dr. Salim</span>
       </div>
       {isOpen ? (
         <div  className="absolute top-28 right-8 rounded bg-white z-50 shadow-lg p-4 flex flex-col gap-2">
           <Link className="hover:text-dark-green transition-all duration-300" to={`/doctorDashboard/Settings/${user.id}`}>Settings</Link>
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
  )
}

export default DoctorNavbar