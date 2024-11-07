import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ReactElement } from "react";
import { CiSettings } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { GrLogout } from "react-icons/gr";
import { VscSearch } from "react-icons/vsc";
  
interface DashboardCardProps{
    id: number;
    count: number;
    title: string;
    bgColor: string;
    icon: ReactElement;
 }
 type DashboardProps = {
    items: DashboardCardProps[];
    name: string;
  };
const Dashboard = ({items,name}: DashboardProps) => {
   
    
   
  return (
               <div className="w-[100vw]  p-8 bg-custom-sky">
                <div className="flex items-center justify-between bg-white py-1 shadow px-2">
                <div className="h-12 w-64 bg-white rounded-md flex items-center justify-between px-4 font-normal">
        <VscSearch className=" z-20"/>
        <input type="text" placeholder="Search" className="h-full placeholder:text-gray-500 w-[80%] rounded-md outline-none" />
        </div>
        <Popover>

  <PopoverTrigger>

                  <div>
                    <img className="h-12 w-12 rounded-full" src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png" alt="" />
                  </div>
  </PopoverTrigger>
  <PopoverContent className="flex justify-center w-[180px] mr-4 mt-2">
    <div className="flex flex-col justify-center">
        <div className="flex items-center gap-4 cursor-pointer w-[150px] px-2 transition-all duration-200 py-2 hover:bg-gray-100">
            <img className="h-10 w-10 rounded-full" src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png" alt="" />
            <div className="flex flex-col">
                <h2 className="text-sm">John Doe</h2>
                <span className="text-xs text-gray-500">Admin</span>
            </div>
        </div>
        <hr className="mt-2" />
        <div className="flex items-center text-sm mt-2 gap-4 text-gray-700 cursor-pointer w-[150px] px-2 transition-all duration-200 py-2 hover:bg-gray-100">
            <FiUser className="text-lg" />
            <span>My Profile</span>
        </div>
        <div className="flex items-center text-sm gap-4 text-gray-700 cursor-pointer w-[150px] px-2 transition-all duration-200 py-2 hover:bg-gray-100">
            <CiSettings className="text-lg" />
            <span>Settings</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer rounded justify-center text-sm mt-2 bg-dark-green text-white py-2">
            <span>Logout</span>
            <GrLogout  className="text-lg" />
        </div>
    </div>
  </PopoverContent>
</Popover>
                </div>
                <div className=" mt-4">
                    <h1 className=" text-2xl">Hi, {name} Welcome Back!</h1>
                </div>
               
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-8'>
                    {items.map((item)=> (<div key={item.id}>
                    <DashboardCard icon={item.icon} id={item.id} title={item.title} count={item.count} bgColor={item.bgColor} />
                    </div>))}
                </div>
                </div>
  )
}
const DashboardCard = ({ title, count,icon }: DashboardCardProps) => {
    return (
        <div className={`h-[160px] pt-6 text-black rounded-lg text-center shadow-md bg-light-green`}>
           <div className="flex flex-col gap-3">
          <div className="flex flex-col items-center justify-center gap-3">
          {icon}
          <p className='mt-2 text-lg'>{title}</p>
          </div>
           <h2 className='text-2xl font-bold'>{count}</h2>
           </div>
        </div>
    );
};

export default Dashboard