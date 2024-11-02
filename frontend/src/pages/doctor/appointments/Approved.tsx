import { useState, useEffect, ReactElement, useMemo } from 'react';
import Sidebar from '../Sidebar';
import { VscSearch } from 'react-icons/vsc';
import { Column } from 'react-table';
import TableHOC from '../../../components/TableHOC';

// Define the TypeScript type for an approved appointment
interface ApprovedAppointment {
  id: number;
  patient: string;
  date: string;
  time: string;
  status: ReactElement;
}

const columns: Column<ApprovedAppointment>[] = [
  { Header: 'Id', accessor: "id" },
  { Header: 'Patient', accessor: "patient" },
  { Header: 'Date', accessor: "date" },
  { Header: 'Time', accessor: "time" },
  { Header: 'Status', accessor: "status" },
];
const ApprovedAppointments: React.FC = () => {
  const [rows, setRows] = useState<ApprovedAppointment[]>([]);
  // State to hold the list of approved appointments
  
  useEffect(() => {
    // Simulated data (In practice, fetch from an API)
    const data = [
      { id: 1, patient: 'Olivia Davis', date: '2024-11-01', time: '8:30 AM', status: 'Approved' },
      { id: 2, patient: 'Liam Wilson', date: '2024-11-02', time: '12:00 PM', status: 'Checked-In' },
      { id: 3, patient: 'Ethan Martinez', date: '2024-11-03', time: '4:00 PM', status: 'Completed' },
    ];
    setRows(data.map((i)=>({
      id: i.id,
      patient: i.patient,
      date: i.date,
      time: i.time,
      status: (
        <div className={`${i.status==="Approved"? "text-green-600" : ""} ${i.status==="Checked-In"? "text-orange-600" : ""} ${i.status==="Rejected"? "text-red-600" : ""}`}>{i.status}</div>
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

export default ApprovedAppointments;
