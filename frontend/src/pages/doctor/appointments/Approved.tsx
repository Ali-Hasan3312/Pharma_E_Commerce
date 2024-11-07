import { ReactElement, useEffect, useMemo, useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CiSettings } from 'react-icons/ci';
import { FiUser } from 'react-icons/fi';
import { GrLogout } from 'react-icons/gr';
import { VscSearch } from 'react-icons/vsc';
import { Column } from 'react-table';
import TableHOC from '../../../components/TableHOC';

// Define the TypeScript type for an approved appointment
interface ApprovedAppointment {
  image: ReactElement;
  patient: string;
  description: string;
  age:string;
  status: ReactElement;
}

const columns: Column<ApprovedAppointment>[] = [
  { Header: 'Patient Image', accessor: "image" },
  { Header: 'Patient Name', accessor: "patient" },
  { Header: 'Age', accessor: "age" },
  { Header: 'Description', accessor: "description" },
  { Header: 'Change Status', accessor: "status" },
];
const ApprovedAppointments: React.FC = () => {
  const [rows, setRows] = useState<ApprovedAppointment[]>([]);
  // State to hold the list of approved appointments
  
  useEffect(() => {
    // Simulated data (In practice, fetch from an API)
    const data = [
      { id: 1, age: "30", description: "Request from Alice Brown for a follow-up consultation", image: "https://images.unsplash.com/photo-1508243771214-6e95d137426b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fHww", patient: 'Alice Brown', date: '2024-11-05', time: '9:00 AM', status: 'Confirmed' },
      { id: 2, age: "45", description: "Request from Mark Davis for a routine check-up", image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", patient: 'Mark Davis', date: '2024-11-06', time: '1:30 PM', status: 'Completed' },
      { id: 3, age: "29", description: "Request from Lisa White to review test results", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", patient: 'Lisa White', date: '2024-11-07', time: '4:00 PM', status: 'Cancelled' },
    ];
    
    setRows(data.map((i)=>({
      image: <img className="h-16 w-16 rounded-full mx-auto object-cover" src={i.image} alt="" />,
      patient: i.patient,
      age:i.age,
      description: i.description,
      status: (
       <select className="border-2 border-dark-green p-2 text-dark-green rounded-sm">
        <option >Approved</option>
        <option >Cancel</option>
       </select>
      )
    })))
  }, []);
  const Table = useMemo(()=> TableHOC<ApprovedAppointment>(
    columns,
    rows,
    "Approved Appointments",
    rows.length > 0
),[columns,rows])

  return (
    <div className="w-full  p-8 bg-custom-sky">
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
    
   <div className='mt-8'>
    {Table()}
   </div>
   
    </div>
  );
};

export default ApprovedAppointments;
