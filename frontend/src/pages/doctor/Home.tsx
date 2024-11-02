import Dashboard from './Dashboard';
import Sidebar from './Sidebar';

const DashboardItems = [
    {
        id: 1,
        bgColor: "bg-blue-500",
        title: "Total Appointments",
        count: 100
        
    },
    {
        id: 2,
        bgColor: "bg-green-500",
        title: "Instant Appointments",
        count: 20
        
    },
    {
        id: 3,
        bgColor: "bg-yellow-500",
        title: "Approved Appointments",
        count: 50
        
    },
    {
        id: 4,
        bgColor: "bg-orange-500",
        title: "Scheduled Appointments",
        count: 30
        
    },
    {
        id: 5,
        bgColor: "bg-purple-500",
        title: "Conducted Appointments",
        count: 70
        
    },
  
]
const DoctorHome = () => {
    return (
        <div className='grid grid-cols-[20%_80%] h-screen'>
            <Sidebar />
            <div className='w-full p-6'>
                
                 <Dashboard name='Khalid Javed' items={DashboardItems} />
            </div>
        </div>
    );
};



export default DoctorHome;
