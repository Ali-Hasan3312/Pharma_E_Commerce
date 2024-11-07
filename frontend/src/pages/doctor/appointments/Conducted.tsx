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
import { CgProfile } from "react-icons/cg";
interface Appointment {
  patient: ReactElement;
  name: string;
  date: string;
  time: string;
  status: ReactElement;
}
const columns: Column<Appointment>[] = [
  { Header: 'Patient', accessor: "patient" },
  { Header: 'Name', accessor: "name" },
  { Header: 'Date', accessor: "date" },
  { Header: 'Time', accessor: "time" },
  { Header: 'Status', accessor: "status" },
];

const Conducted: React.FC = () => {
  // State to hold the list of conducted appointments
  const [rows, setRows] = useState<Appointment[]>([]);
  useEffect(() => {
    // Simulated data (in real implementation, fetch from an API)
    const data = [
      { id: 1, patient: 'John Doe', date: '2024-10-28', time: '10:00 AM', status: 'Completed' },
      { id: 2, patient: 'Jane Smith', date: '2024-10-27', time: '2:00 PM', status: 'Completed' },
      { id: 3, patient: 'Alice Johnson', date: '2024-10-26', time: '11:30 AM', status: 'Completed' },
    ];
    setRows(data.map((i)=>({
      patient: (<><div className='flex justify-center text-3xl'>
        <CgProfile />
        </div></>),
      name: i.patient,
      date: i.date,
      time: i.time,
      status: (
        <div className={`${i.status==="Completed"? "text-green-700" : ""} ${i.status==="No-Show"? "text-orange-600" : ""} ${i.status==="Cancelled"? "text-red-600" : ""}`}>{i.status}</div>
      )
    })))
  }, []);
  const Table = useMemo(()=> TableHOC<Appointment>(
    columns,
    rows,
    "Conducted Appointments",
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
   
   <div className="mt-8">
    {Table()}
   </div>
   
    </div>
  );
};

export default Conducted;
