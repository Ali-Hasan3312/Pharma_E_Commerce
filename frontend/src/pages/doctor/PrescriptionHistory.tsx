import { ReactElement, useEffect, useMemo, useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
import { Column } from 'react-table';
import TableHOC from '../../components/TableHOC';
import DoctorSidebar from './Sidebar';

// Define the TypeScript type for a prescription entry
interface Prescription {
  id: number;
  patient: string;
  doctor: string;
  date: string;
  medications: string;
  status: ReactElement;
}
const columns: Column<Prescription>[] = [
  { Header: 'Id', accessor: "id" },
  { Header: 'Patient', accessor: "patient" },
  { Header: 'Doctor', accessor: "doctor" },
  { Header: 'Date', accessor: "date" },
  { Header: 'Medications', accessor: "medications" },
  { Header: 'Status', accessor: "status" },
];


const PrescriptionHistory: React.FC = () => {
  // State to hold the list of prescriptions
  const [rows, setRows] = useState<Prescription[]>([]);

  useEffect(() => {
    // Simulated data (In practice, fetch from an API)
    const data = [
      { id: 1, patient: 'John Doe', doctor: 'Dr. Smith', date: '2024-10-15', medications: 'Ibuprofen, Paracetamol', status: 'Active' },
      { id: 2, patient: 'Jane Doe', doctor: 'Dr. Williams', date: '2024-09-20', medications: 'Amoxicillin', status: 'Expired' },
      { id: 3, patient: 'Alice Johnson', doctor: 'Dr. Clark', date: '2024-08-10', medications: 'Cough Syrup, Vitamin D', status: 'Expired' },
    ];
    setRows(data.map((i)=>({
      id: i.id,
  patient: i.patient,
  doctor: i.doctor,
  date: i.date,
  medications: i.medications,
  status: (<>
  <p className={`${i.status==="Active"? "text-green-500" : "text-red-500"}`}>{i.status}</p>
  </>),
    })))
  }, []);
  const Table = useMemo(()=> TableHOC<Prescription>(
    columns,
    rows,
    "All Patients",
    rows.length > 0
),[columns,rows])
  return (
    <div className="grid grid-cols-[20%_80%] h-screen">
      <DoctorSidebar />
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

export default PrescriptionHistory;
