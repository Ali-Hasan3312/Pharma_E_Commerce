import { VscSearch } from "react-icons/vsc";

interface DashboardCardProps{
    count: number;
    title: string;
    bgColor: string;
 }
const Dashboard = () => {
    const totalAppointments = 100;
    const instantAppointments = 20;
    const approvedAppointments = 50;
    const scheduledAppointments = 30;
    const conductedAppointments = 70;
  return (
               <div className="">
                <div className="flex items-center justify-between">
                    <h1 className=" text-2xl font-semibold">Pharma</h1>
                    <div className="h-12 w-64 bg-white rounded-md flex items-center justify-between px-4 font-normal">
        <input type="text" placeholder="Search" className="h-full placeholder:text-gray-500 w-[80%] rounded-md outline-none" />
        <VscSearch className=" z-20"/>
       </div>
                </div>
                <div className=" mt-4">
                    <h1 className=" text-2xl">Hi, Khalid Javed Welcome Back!</h1>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
                    <DashboardCard 
                        title="Total Appointments" 
                        count={totalAppointments} 
                        bgColor="bg-blue-500" 
                    />
                    <DashboardCard 
                        title="Instant Appointments" 
                        count={instantAppointments} 
                        bgColor="bg-green-500" 
                    />
                    <DashboardCard 
                        title="Approved Appointments" 
                        count={approvedAppointments} 
                        bgColor="bg-yellow-500" 
                    />
                    <DashboardCard 
                        title="Scheduled Appointments" 
                        count={scheduledAppointments} 
                        bgColor="bg-orange-500" 
                    />
                    <DashboardCard 
                        title="Conducted Appointments" 
                        count={conductedAppointments} 
                        bgColor="bg-purple-500" 
                    />
                </div>
                </div>
          
  )
}
const DashboardCard = ({ title, count, bgColor }: DashboardCardProps) => {
    return (
        <div className={`p-6 text-white rounded-lg shadow-md ${bgColor}`}>
            <h2 className='text-2xl font-bold'>{count}</h2>
            <p className='mt-2'>{title}</p>
        </div>
    );
};

export default Dashboard