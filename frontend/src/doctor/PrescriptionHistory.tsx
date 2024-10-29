import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { VscSearch } from 'react-icons/vsc';

// Define the TypeScript type for a prescription entry
interface Prescription {
  id: number;
  patient: string;
  doctor: string;
  date: string;
  medications: string;
  status: 'Active' | 'Expired';
}

const PrescriptionHistory: React.FC = () => {
  // State to hold the list of prescriptions
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);

  useEffect(() => {
    // Simulated data (In practice, fetch from an API)
    const data: Prescription[] = [
      { id: 1, patient: 'John Doe', doctor: 'Dr. Smith', date: '2024-10-15', medications: 'Ibuprofen, Paracetamol', status: 'Active' },
      { id: 2, patient: 'Jane Doe', doctor: 'Dr. Williams', date: '2024-09-20', medications: 'Amoxicillin', status: 'Expired' },
      { id: 3, patient: 'Alice Johnson', doctor: 'Dr. Clark', date: '2024-08-10', medications: 'Cough Syrup, Vitamin D', status: 'Expired' },
    ];
    setPrescriptions(data);
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
          <h1 className="text-2xl font-semibold mb-6">Prescription History</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Patient Name</th>
                <th className="px-6 py-3 text-left">Doctor</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Medications</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map((prescription) => (
                <tr key={prescription.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{prescription.id}</td>
                  <td className="px-6 py-4">{prescription.patient}</td>
                  <td className="px-6 py-4">{prescription.doctor}</td>
                  <td className="px-6 py-4">{prescription.date}</td>
                  <td className="px-6 py-4">{prescription.medications}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        prescription.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {prescription.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionHistory;
