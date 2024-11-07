
import { FcApproval } from "react-icons/fc";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiCalendarScheduleFill, RiFirstAidKitFill } from "react-icons/ri";
import { TbBellRingingFilled } from "react-icons/tb";
import Dashboard from './Dashboard';

const DashboardItems = [
    {
        icon: <RiFirstAidKitFill className='text-dark-green text-3xl' />,
        id: 1,
        bgColor: "bg-blue-500",
        title: "Total Appointments",
        count: 100
        
    },
    {
        icon: <TbBellRingingFilled className='text-dark-green text-3xl' />,
        id: 2,
        bgColor: "bg-green-500",
        title: "Instant Appointments",
        count: 20
        
    },
    {
        icon: <FcApproval className='text-dark-green text-3xl' />,
        id: 3,
        bgColor: "bg-yellow-500",
        title: "Approved Appointments",
        count: 50
        
    },
    {
        icon: <RiCalendarScheduleFill className='text-dark-green text-3xl' />,
        id: 4,
        bgColor: "bg-orange-500",
        title: "Scheduled Appointments",
        count: 30
    },
    {
        icon: <IoIosCheckmarkCircle className='text-dark-green text-3xl' />,
        id: 5,
        bgColor: "bg-purple-500",
        title: "Conducted Appointments",
        count: 70
    },
  
]


const DoctorHome = () => {
    return (
       
                     <Dashboard name='John Doe' items={DashboardItems} />
                     
             
    );
};



export default DoctorHome;
