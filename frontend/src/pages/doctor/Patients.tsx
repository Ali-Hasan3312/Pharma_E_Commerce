import { useState, useEffect, useMemo } from 'react';
import Sidebar from './Sidebar';
import { VscSearch } from 'react-icons/vsc';
import { Column } from 'react-table';
import TableHOC from '../../components/TableHOC';

// Define the TypeScript type for a patient
interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  contact: string;
}
const columns: Column<Patient>[] = [
  { Header: 'Id', accessor: "id" },
  { Header: 'Name', accessor: "name" },
  { Header: 'Age', accessor: "age" },
  { Header: 'Gender', accessor: "gender" },
  { Header: 'Contact', accessor: "contact" },
];

const AllPatients: React.FC = () => {
  // State to hold the list of patients
  const [rows, setRows] = useState<Patient[]>([]);

  useEffect(() => {
    // Simulated data (In practice, fetch from an API)
    const data = [
      { id: 1, name: 'John Doe', age: 35, gender: 'Male', contact: '+1234567890' },
      { id: 2, name: 'Jane Smith', age: 28, gender: 'Female', contact: '+0987654321' },
      { id: 3, name: 'Alex Johnson', age: 42, gender: 'Other', contact: '+1122334455' },
    ];
    setRows(data.map((i)=>({
      id: i.id,
      name: i.name,
      age: i.age,
      gender: i.gender,
      contact: i.contact
    })))
  }, []);
  const Table = useMemo(()=> TableHOC<Patient>(
    columns,
    rows,
    "All Patients",
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

export default AllPatients;
