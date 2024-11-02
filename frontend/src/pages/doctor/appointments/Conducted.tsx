import { ReactElement, useEffect, useMemo, useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
import Sidebar from '../Sidebar';
import { Column } from 'react-table';
import TableHOC from '../../../components/TableHOC';

// Define the TypeScript type for an appointment
interface Appointment {
  id: number;
  patient: string;
  date: string;
  time: string;
  status: ReactElement;
}
const columns: Column<Appointment>[] = [
  { Header: 'Id', accessor: "id" },
  { Header: 'Patient', accessor: "patient" },
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
      id: i.id,
      patient: i.patient,
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
    <div>
    
    <div className='grid grid-cols-[20%_80%] h-screen'>
    <Sidebar />
    
    <div className='w-full px-8 mt-8'>
    <div className="flex items-center justify-between">
                    <h1 className=" text-2xl font-semibold">Pharma</h1>
                    <div className="h-12 w-64 bg-white rounded-md flex items-center justify-between px-4 font-normal">
        <input type="text" placeholder="Search" className="h-full placeholder:text-gray-500 w-[80%] rounded-md outline-none" />
        <VscSearch className=" z-20"/>
       </div>
                </div>
       
                <div className=' mt-4'>
          {Table()}
          </div>
    </div>

    
    </div>
    </div>
  );
};

export default Conducted;
