import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { VscSearch } from 'react-icons/vsc';

// Define the TypeScript type for a patient
interface Patient {
  id: number;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  contact: string;
}

const AllPatients: React.FC = () => {
  // State to hold the list of patients
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    // Simulated data (In practice, fetch from an API)
    const data: Patient[] = [
      { id: 1, name: 'John Doe', age: 35, gender: 'Male', contact: '+1234567890' },
      { id: 2, name: 'Jane Smith', age: 28, gender: 'Female', contact: '+0987654321' },
      { id: 3, name: 'Alex Johnson', age: 42, gender: 'Other', contact: '+1122334455' },
    ];
    setPatients(data);
  }, []);

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
        <div className="mt-6">
          <h1 className="text-2xl font-semibold mb-6">All Patients</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Age</th>
                <th className="px-6 py-3 text-left">Gender</th>
                <th className="px-6 py-3 text-left">Contact</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{patient.id}</td>
                  <td className="px-6 py-4">{patient.name}</td>
                  <td className="px-6 py-4">{patient.age}</td>
                  <td className="px-6 py-4">{patient.gender}</td>
                  <td className="px-6 py-4">{patient.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllPatients;
