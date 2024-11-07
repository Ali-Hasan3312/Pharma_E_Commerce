import React, { ReactElement, useState } from 'react';
import { FaCog, FaUser } from 'react-icons/fa';
import { FcApproval } from 'react-icons/fc';
import {
    FiCalendar,
    FiFileText,
    FiHome,
    FiMessageSquare
} from 'react-icons/fi';
import { IoIosArrowDown, IoIosCheckmarkCircle } from 'react-icons/io';
import { MdArrowForwardIos, MdCancelPresentation } from 'react-icons/md';
import { PiFirstAidKitLight } from "react-icons/pi";
import { RiCalendarScheduleFill } from 'react-icons/ri';
import { TbBellRingingFilled } from 'react-icons/tb';
import logo from "../../assets/logo.png";
interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  notification?: number;
  subItems?: { label: string, icon: ReactElement }[];  // Add subItems to handle dropdown items
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, notification, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=''>
      <div
        className="flex items-center px-4 py-2 hover:bg-gray-100 rounded cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl mr-3">{icon}</span>
        <span className="flex-grow">{label}</span>
        {notification && (
          <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full">{notification}</span>
        )}
        {subItems && (
          <span className="ml-2">{isOpen ? <IoIosArrowDown className='text-lg' /> : <MdArrowForwardIos   />}</span>  // Toggle arrow indicator
        )}
      </div>
      {isOpen && subItems && (
        <div className=" mt-1 space-y-2 flex flex-col">
          {subItems.map((subItem, index) => (
            <div key={index} className="flex items-center gap-4 py-2 hover:bg-gray-100 px-4 cursor-pointer">
              <span className="">{subItem.label}</span>
              <span className="flex-grow">{subItem.icon}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const AdminSidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-white text-black flex flex-col">
      <div className="p-4 flex items-center justify-between cursor-pointer">
      <span className="text-2xl font-bold">Pharma</span>
      <img src={logo} className='h-16 w-24' alt="" />
      </div>
      <nav className="flex-grow space-y-2 overflow-y-scroll">   
        <SidebarItem icon={<FiHome />} label="Dashboard"  />
        <SidebarItem
          icon={<PiFirstAidKitLight />}
          label="Appointments"
          subItems={[ { label: 'All', icon: <FiCalendar /> },
            { label: 'Instant', icon: <TbBellRingingFilled /> },
            { label: 'Approved', icon: <FcApproval /> },
            { label: 'Scheduled', icon: <RiCalendarScheduleFill /> },
            { label: 'Conducted', icon: <IoIosCheckmarkCircle /> },
            { label: 'Cancelled', icon: <MdCancelPresentation /> },
          ]} 
        />
        {/* <div className="border-t border-gray-700 my-4"></div> */}
        <SidebarItem icon={<FaUser />} label="Patients" />
        <SidebarItem icon={<FiMessageSquare />} label="Prescriptions" />
        <SidebarItem icon={<FiFileText />} label="Invoice" />
        <SidebarItem icon={<FaCog />} label="Settings" />
      </nav>
    </div>
  );
};

export default AdminSidebar;
