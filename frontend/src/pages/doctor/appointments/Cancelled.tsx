import { useState, useEffect, ReactElement, useMemo } from 'react';
import Sidebar from '../Sidebar';
import { VscSearch } from 'react-icons/vsc';
import { Column } from 'react-table';
import TableHOC from '../../../components/TableHOC';

// Define the TypeScript type for a cancelled appointment
interface CancelledAppointment {
  id: number;
  patient: string;
  date: string;
  time: string;
  status: ReactElement;
}
const columns: Column<CancelledAppointment>[] = [
  { Header: 'Id', accessor: "id" },
  { Header: 'Patient', accessor: "patient" },
  { Header: 'Date', accessor: "date" },
  { Header: 'Time', accessor: "time" },
  { Header: 'Status', accessor: "status" },
];

const CancelledAppointments: React.FC = () => {
  // State to hold the list of cancelled appointments
  const [rows, setRows] = useState<CancelledAppointment[]>([]);

  useEffect(() => {
    // Simulated data (In practice, fetch from an API)
    const data = [
      { id: 1, patient: 'Michael Brown', date: '2024-11-01', time: '9:00 AM', status: 'Cancelled' },
      { id: 2, patient: 'Emily Clark', date: '2024-11-02', time: '12:30 PM', status: 'No-Show' },
      { id: 3, patient: 'Daniel Lee', date: '2024-11-03', time: '3:00 PM', status: 'Rescheduled' },
    ];
    setRows(data.map((i)=>({
      id: i.id,
      patient: i.patient,
      date: i.date,
      time: i.time,
      status: (
        <div className={`${i.status==="Rescheduled"? "text-green-600" : ""} ${i.status==="No-Show"? "text-orange-600" : ""} ${i.status==="Cancelled"? "text-red-600" : ""}`}>{i.status}</div>
      )
    })))
  }, []);
  const Table = useMemo(()=> TableHOC<CancelledAppointment>(
    columns,
    rows,
    "Cancelled Appointments",
    rows.length > 0
),[columns,rows])

  return (
    <div className="grid grid-cols-[20%_80%] h-screen">
      <Sidebar />
      <div className="px-8 mt-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Pharma</h1>
          <div className="h-12 w-64 bg-white rounded-md flex items-center justify-between px-4 font-normal">
            <input
              type="text"
              placeholder="Search"
              className="h-full placeholder:text-gray-500 w-[80%] rounded-md outline-none"
            />
            <VscSearch className="z-20" />
          </div>
        </div>
       
        <div className=' mt-4'>
          {Table()}
          </div>
       
      </div>
    </div>
  );
};

export default CancelledAppointments;
