import { useState, useEffect, ReactElement, useMemo } from 'react';
import Sidebar from '../Sidebar';
import { VscSearch } from 'react-icons/vsc';
import { Column } from 'react-table';
import TableHOC from '../../../components/TableHOC';

// Define the TypeScript type for an instant appointment
interface InstantAppointment {
  id: number;
  patient: string;
  date: string;
  time: string;
  status: ReactElement;
}
const columns: Column<InstantAppointment>[] = [
  { Header: 'Id', accessor: "id" },
  { Header: 'Patient', accessor: "patient" },
  { Header: 'Date', accessor: "date" },
  { Header: 'Time', accessor: "time" },
  { Header: 'Status', accessor: "status" },
];

const InstantAppointments: React.FC = () => {
  // State to hold the list of instant appointments
  const [rows, setRows] = useState<InstantAppointment[]>([]);

  useEffect(() => {
    // Simulated data (In practice, fetch from an API)
    const data = [
      { id: 1, patient: 'John Smith', date: '2024-11-01', time: '10:00 AM', status: 'Confirmed' },
      { id: 2, patient: 'Emma Johnson', date: '2024-11-02', time: '11:30 AM', status: 'In Progress' },
      { id: 3, patient: 'Sophia Williams', date: '2024-11-03', time: '2:00 PM', status: 'Pending' },
    ];
    setRows(data.map((i)=>({
      id: i.id,
      patient: i.patient,
      date: i.date,
      time: i.time,
      status: (
        <div className={`${i.status==="Confirmed"? "text-green-700" : ""} ${i.status==="In Progress"? "text-orange-600" : ""} ${i.status==="Pending"? "text-red-600" : ""}`}>{i.status}</div>
      )
    })))
  }, []);
  const Table = useMemo(()=> TableHOC<InstantAppointment>(
    columns,
    rows,
    "Instant Appointments",
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

export default InstantAppointments;
