import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
const DoctorHome = () => {
    return (
        <div className='grid grid-cols-[20%_80%] h-screen'>
            <Sidebar />
            <div className='w-full p-6'>
                
                 <Dashboard />
            </div>
        </div>
    );
};



export default DoctorHome;
