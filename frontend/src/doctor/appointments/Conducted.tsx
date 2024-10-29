import { useEffect, useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
import Sidebar from '../Sidebar';

// Define the TypeScript type for an appointment
interface Appointment {
  id: number;
  patient: string;
  date: string;
  time: string;
  status: 'Completed' | 'Pending' | 'Cancelled';
}

const Conducted: React.FC = () => {
  // State to hold the list of conducted appointments
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  useEffect(() => {
    // Simulated data (in real implementation, fetch from an API)
    const data: Appointment[] = [
      { id: 1, patient: 'John Doe', date: '2024-10-28', time: '10:00 AM', status: 'Completed' },
      { id: 2, patient: 'Jane Smith', date: '2024-10-27', time: '2:00 PM', status: 'Completed' },
      { id: 3, patient: 'Alice Johnson', date: '2024-10-26', time: '11:30 AM', status: 'Completed' },
    ];
    setAppointments(data);
  }, []);

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
         <div className=" mt-6">
      <h1 className="text-2xl font-semibold mb-6">Conducted Appointments</h1>
    </div>
         <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Patient Name</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Time</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{appointment.id}</td>
                <td className="px-6 py-4">{appointment.patient}</td>
                <td className="px-6 py-4">{appointment.date}</td>
                <td className="px-6 py-4">{appointment.time}</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {appointment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    
    </div>
    </div>
  );
};

export default Conducted;
