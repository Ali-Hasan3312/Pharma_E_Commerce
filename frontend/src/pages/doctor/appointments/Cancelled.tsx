import { useState, useEffect, ReactElement, useMemo } from 'react';
import Sidebar from '../Sidebar';
import { VscSearch } from 'react-icons/vsc';
import { Column } from 'react-table';
import TableHOC from '../../../components/TableHOC';

// Define the TypeScript type for a cancelled appointment
interface CancelledAppointment {
  image: ReactElement;
  patient: string;
  description: string;
  age:string;
  status: ReactElement;
}
const columns: Column<CancelledAppointment>[] = [
  { Header: 'Patient Image', accessor: "image" },
  { Header: 'Patient Name', accessor: "patient" },
  { Header: 'Age', accessor: "age" },
  { Header: 'Description', accessor: "description" },
  { Header: 'Change Status', accessor: "status" },
];

const CancelledAppointments: React.FC = () => {
  // State to hold the list of cancelled appointments
  const [rows, setRows] = useState<CancelledAppointment[]>([]);

  useEffect(() => {
    // Simulated data (In practice, fetch from an API)
    const data = [
      { id: 1, age: "34", description: "Appointment request from Michael Anderson for a dental check-up", image: "https://images.unsplash.com/photo-1551918120-9738d9bcd3e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", patient: 'Michael Anderson', date: '2024-10-25', time: '3:00 PM', status: 'Cancelled' },
      { id: 2, age: "28", description: "Consultation request from Sarah Lee for allergy test results", image: "https://images.unsplash.com/photo-1594824476967-b7ef4a94e6c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", patient: 'Sarah Lee', date: '2024-10-28', time: '11:00 AM', status: 'Cancelled' },
      { id: 3, age: "41", description: "Check-up request from David Kim for hypertension follow-up", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", patient: 'David Kim', date: '2024-10-30', time: '9:30 AM', status: 'Cancelled' },
      { id: 4, age: "52", description: "Physical examination request from Jessica Brown", image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", patient: 'Jessica Brown', date: '2024-11-01', time: '1:00 PM', status: 'Cancelled' },
      { id: 5, age: "36", description: "Follow-up appointment request from Robert Johnson for blood work review", image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", patient: 'Robert Johnson', date: '2024-11-03', time: '4:45 PM', status: 'Cancelled' },
    ];
    setRows(data.map((i)=>({
      image: <img className="h-16 w-16 rounded-full mx-auto object-cover" src={i.image} alt="" />,
      patient: i.patient,
      age:i.age,
      description: i.description,
      status: (
        <div className={`${i.status==="Completed"? "text-green-700" : ""} ${i.status==="No-Show"? "text-orange-600" : ""} ${i.status==="Cancelled"? "text-red-600" : ""}`}>{i.status}</div>

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
