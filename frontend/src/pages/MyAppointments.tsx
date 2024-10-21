
const MyAppointments = () => {
  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      date: '2024-10-25',
      time: '10:30 AM',
      status: 'Confirmed',
    },
    {
      id: 2,
      doctor: 'Dr. Michael Brown',
      date: '2024-11-01',
      time: '02:00 PM',
      status: 'Pending',
    },
    {
      id: 3,
      doctor: 'Dr. Emma Wilson',
      date: '2024-11-05',
      time: '09:00 AM',
      status: 'Cancelled',
    },
  ];

  return (
    <div className="min-h-screen pt-16 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          My Appointments
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-dark-green text-white">
                <th className="py-3 px-4">Doctor</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr
                  key={appointment.id}
                  className="border-b hover:bg-gray-100 transition duration-300"
                >
                  <td className="py-3 px-4 text-center">{appointment.doctor}</td>
                  <td className="py-3 px-4 text-center">{appointment.date}</td>
                  <td className="py-3 px-4 text-center">{appointment.time}</td>
                  <td
                    className={`py-3 px-4 text-center font-semibold ${
                      appointment.status === 'Confirmed'
                        ? 'text-green-600'
                        : appointment.status === 'Pending'
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    }`}
                  >
                    {appointment.status}
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

export default MyAppointments;
