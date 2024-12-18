import { useState } from "react";
import { FaCog, FaHome, FaUser } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
const DoctorSidebar = () => {
  
  const [homeSubmenuOpen, setHomeSubmenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (paths: string[]) => paths.includes(location.pathname);
  const toggleHomeSubmenu = () => setHomeSubmenuOpen(!homeSubmenuOpen);
  return (
    <div className="">
      {/* Sidebar */}
      <div className={`bg-white h-screen p-5 pt-8 duration-300`}>
        <div className="flex items-center justify-center gap-4">
          <img className="h-16 w-16 rounded-full object-cover" src="https://plus.unsplash.com/premium_photo-1661766569022-1b7f918ac3f3" alt="" />
          <div>
            <h3 className=" font-bold">Khalid Javed</h3>
            <span className="text-sm italic">Doctor</span>
          </div>
        </div>
        <ul className="mt-10">
          <li className="flex items-center p-2 gap-4 text-gray-800 hover:text-white hover:bg-dark-green rounded-md cursor-pointer" onClick={toggleHomeSubmenu}>
          <div className="flex items-center gap-4">
              <FaHome className="text-2xl" />
              <span>Appointments</span>
            </div>
          </li>
            <ul className="ml-8 mt-2 space-y-2 text-sm">
              <li className={`hover:text-white hover:bg-dark-green ${isActive(["/doctorDashboard"])? " bg-dark-green text-white" : "text-gray-800"} rounded-md p-2 cursor-pointer`}>
               <Link to={"/doctorDashboard"}> All Appointments</Link>
              </li>
              <li className={`${isActive(["/doctorDashboard/conducted"])? " bg-dark-green text-white" : "text-gray-800"} text-nowrap hover:text-white hover:bg-dark-green rounded-md p-2 cursor-pointer`}>
                <Link to={"/doctorDashboard/conducted"}>Conducted Appointments</Link>
              </li>
              <li className={`${isActive(["/doctorDashboard/scheduled"])? " bg-dark-green text-white" : "text-gray-800"} text-nowrap hover:text-white hover:bg-dark-green rounded-md p-2 cursor-pointer`}>
                <Link to={"/doctorDashboard/scheduled"}>Scheduled Appointments</Link>
              </li>
              <li className={`${isActive(["/doctorDashboard/instant"])? " bg-dark-green text-white" : "text-gray-800"} text-nowrap hover:text-white hover:bg-dark-green rounded-md p-2 cursor-pointer`}>
                <Link to={"/doctorDashboard/instant"}>Instant Appointments</Link>
              </li>
              <li className={`${isActive(["/doctorDashboard/approved"])? " bg-dark-green text-white" : "text-gray-800"} text-nowrap hover:text-white hover:bg-dark-green rounded-md p-2 cursor-pointer`}>
              <Link to={"/doctorDashboard/approved"}>Approved Appointments</Link>
              </li>
              <li className={`${isActive(["/doctorDashboard/cancelled"])? " bg-dark-green text-white" : "text-gray-800"} text-nowrap hover:text-white hover:bg-dark-green rounded-md p-2 cursor-pointer`}>
              <Link to={"/doctorDashboard/cancelled"}>Cancelled Appointments</Link>
              </li>
            </ul>
          <li className={`${isActive(["/doctorDashboard/patients"])? " bg-dark-green text-white" : "text-gray-800"} text-nowrap hover:text-white hover:bg-dark-green mt-4 rounded-md p-2 cursor-pointer`}>
            <Link className="flex items-center gap-4 px-2" to={"/doctorDashboard/patients"}>
            <FaUser className="text-2xl" />
           <span>Patients</span></Link>
          </li>
          <li className={`${isActive(["/doctorDashboard/prescriptionHistory"])? " bg-dark-green text-white" : "text-gray-800"} mt-2 text-nowrap hover:text-white hover:bg-dark-green rounded-md p-2 cursor-pointer`}>
          <Link className="flex items-center gap-4 px-2" to={"/doctorDashboard/prescriptionHistory"}>
            <MdOutlineHistory className="text-2xl" />
           <span>Prescription History</span>
           </Link>
          </li>
          <li className={`${isActive(["/doctorDashboard/settings"])? " bg-dark-green text-white" : "text-gray-800"} mt-2 text-nowrap hover:text-white hover:bg-dark-green rounded-md p-2 cursor-pointer`}>
          <Link className="flex items-center gap-4 px-2" to={"/doctorDashboard/settings"}>
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

export default DoctorSidebar;
