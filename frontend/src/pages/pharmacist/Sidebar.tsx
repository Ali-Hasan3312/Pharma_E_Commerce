import { useState } from "react";
import { FaCog, FaHome, FaUser } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
const PharmacistSidebar = () => {
  const [homeSubmenuOpen, setHomeSubmenuOpen] = useState(false); // Controls Home submenu
  const location = useLocation();
  const isActive = (paths: string[]) => paths.includes(location.pathname);
  const toggleHomeSubmenu = () => setHomeSubmenuOpen(!homeSubmenuOpen);
  return (
    <div className="">
      {/* Sidebar */}
      <div className={`bg-white p-5 pt-8 duration-300`}>
        <div className="flex items-center justify-center gap-4">
          <img className="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1657551856874-d492ef8ecba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBoYXJtYWNpc3R8ZW58MHx8MHx8fDA%3D" alt="" />
          <div>
            <h3 className=" font-bold">Arslan</h3>
            <span className="text-sm italic">Pharmacist</span>
          </div>
        </div>
        <ul className="mt-10">
          <li className="flex items-center p-2 gap-4 text-gray-800 hover:text-white hover:bg-blue-500 rounded-md cursor-pointer" onClick={toggleHomeSubmenu}>
          <div className="flex items-center gap-4">
              <FaHome className="text-2xl" />
              <Link to={"/pharmacist"}>Dashboard</Link>
            </div>
              {/* <span>
                {homeSubmenuOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span> */}
          
          </li>
            <ul className="ml-8 mt-2 space-y-2 text-sm">
              <li className={`hover:text-white hover:bg-blue-500 ${isActive(["/pharmacist"])? " bg-blue-500 text-white" : "text-gray-800"} rounded-md p-2 cursor-pointer`}>
               <Link to={"/pharmacist"}> All Orders</Link>
              </li>
              <li className={`${isActive(["/pharmacist/delivered"])? " bg-blue-500 text-white" : "text-gray-800"} text-nowrap hover:text-white hover:bg-blue-500 rounded-md p-2 cursor-pointer`}>
                <Link to={"/pharmacist/delivered"}>Delivered</Link>
              </li>
              <li className={`${isActive(["/pharmacist/ready"])? " bg-blue-500 text-white" : "text-gray-800"} text-nowrap hover:text-white hover:bg-blue-500 rounded-md p-2 cursor-pointer`}>
                <Link to={"/pharmacist/ready"}>Ready To Ship</Link>
              </li>
              <li className={`${isActive(["/pharmacist/pending"])? " bg-blue-500 text-white" : "text-gray-800"} text-nowrap hover:text-white hover:bg-blue-500 rounded-md p-2 cursor-pointer`}>
                <Link to={"/pharmacist/pending"}>Pending</Link>
              </li>
             
              <li className={`${isActive(["/pharmacist/cancelled"])? " bg-blue-500 text-white" : "text-gray-800"} text-nowrap hover:text-white hover:bg-blue-500 rounded-md p-2 cursor-pointer`}>
              <Link to={"/pharmacist/cancelled"}>Cancelled</Link>
              </li>
            </ul>
          <li className={`${isActive(["/pharmacist/products"])? " bg-blue-500 text-white" : "text-gray-800"} text-nowrap hover:text-white hover:bg-blue-500 mt-4 rounded-md p-2 cursor-pointer`}>
            <Link className="flex items-center gap-4 px-2" to={"/pharmacist/products"}>
            <IoBagHandleSharp className="text-2xl" />
           <span>Products</span></Link>
          </li>
          <li className={`${isActive(["/pharmacist/users"])? " bg-blue-500 text-white" : "text-gray-800"} text-nowrap hover:text-white hover:bg-blue-500 mt-4 rounded-md p-2 cursor-pointer`}>
            <Link className="flex items-center gap-4 px-2" to={"/pharmacist/users"}>
            <FaUser className="text-2xl" />
           <span>Staff Members</span></Link>
          </li>
          <li className={`${isActive(["/pharmacist/payments"])? " bg-blue-500 text-white" : "text-gray-800"} text-nowrap hover:text-white hover:bg-blue-500 mt-4 rounded-md p-2 cursor-pointer`}>
            <Link className="flex items-center gap-4 px-2" to={"/pharmacist/payments"}>
            <MdOutlinePayment className="text-2xl" />
           <span>Payments</span></Link>
          </li>
         
          <li className={`${isActive(["/pharmacist/settings"])? " bg-blue-500 text-white" : "text-gray-800"} mt-2 text-nowrap hover:text-white hover:bg-blue-500 rounded-md p-2 cursor-pointer`}>
          <Link className="flex items-center gap-4 px-2" to={"/pharmacist/settings"}>
            <FaCog className="text-2xl" />
            <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
     
    </div>
  );
};

export default PharmacistSidebar;
