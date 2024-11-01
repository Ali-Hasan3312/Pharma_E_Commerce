import { VscSearch } from "react-icons/vsc";

interface DashboardCardProps{
    id: number;
    count: number;
    title: string;
    bgColor: string;
 }
 type DashboardProps = {
    items: DashboardCardProps[];
    name: string;
  };
const Dashboard = ({items,name}: DashboardProps) => {
   
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
                    <h1 className=" text-2xl">Hi, {name} Welcome Back!</h1>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
                    {items.map((item)=> (<div key={item.id}>
                    <DashboardCard id={item.id} title={item.title} count={item.count} bgColor={item.bgColor} />
                    </div>))}
                   
                </div>
                </div>
          
  )
}
const DashboardCard = ({ title, count, bgColor }: DashboardCardProps) => {
    return (
        <div className={`h-[130px] pt-6 text-white rounded-lg text-center shadow-md ${bgColor}`}>
           <div className="flex flex-col gap-3">
           <p className='mt-2 text-lg'>{title}</p>
           <h2 className='text-2xl font-bold'>{count}</h2>
           </div>
        </div>
    );
};

export default Dashboard