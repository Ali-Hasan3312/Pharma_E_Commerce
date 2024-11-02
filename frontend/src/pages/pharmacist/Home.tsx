import Dashboard from '../doctor/Dashboard';
import Sidebar from './Sidebar';

const DashboardItems = [
    {
        id: 1,
        bgColor: "bg-blue-500",
        title: "Total Orders",
        count: 100
        
    },
    {
        id: 2,
        bgColor: "bg-green-500",
        title: "Delivered Orders",
        count: 20
        
    },
    {
        id: 3,
        bgColor: "bg-yellow-500",
        title: "Ready To Ship",
        count: 50
        
    },
    {
        id: 4,
        bgColor: "bg-orange-500",
        title: "Pending",
        count: 30
        
    },
    {
        id: 5,
        bgColor: "bg-purple-500",
        title: "Cancelled",
        count: 7
        
    },
  
]
const PharmacistHome = () => {
    return (
        <div className='grid grid-cols-[20%_80%]'>
            <Sidebar />
            <div className='w-full p-6'>
                
                 <Dashboard name='Arslan' items={DashboardItems} />
            </div>
        </div>
    );
};



export default PharmacistHome;
