import { useState } from 'react';
import { user } from "../assets/users";
import p15 from "../assets/images/Products/Eye Drops.jpeg"
import p8 from "../assets/images/Products/Hand Sanitizer.jpeg"
import prescriptionImg from "../assets/images/Blank-Prescription-Template.jpg"
const UserSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // Example data for order history, upcoming appointments, appointment history, and prescription history
  const orderHistory = [
    { id: 15,
      item: 'Eye Drops',
      price: 6.49,
      image: p15,
      description: 'Relieves dry and irritated eyes.',
      quantity: 1,
      stock: 10,
      date: '2024-10-01',
      status: 'Delivered' },
    { id: 8,
      item: 'Hand Sanitizer',
      price: 2.99,
      image: p8,
      description: 'Kills 99.9% of germs and bacteria.',
      quantity: 1,
      stock: 10,
      date: '2024-09-15', 
      status: 'Pending' },
  ];

  const upcomingAppointments = [
    { id: 1, date: '2024-10-30', time: '10:00 AM', doctor: 'Dr. Smith', image: "https://images.unsplash.com/photo-1580281658626-ee379f3cce93?w=500&auto=format&fit=crop&q=60", Disease: "Liver" },
    { id: 2, date: '2024-11-05', time: '02:00 PM', doctor: 'Dr. Jane Doe', image: "https://plus.unsplash.com/premium_photo-1723514536306-26fe5c4adeb7?w=500", Disease: "Heart" },
  ];

  const appointmentHistory = [
    { id: 1, date: '2024-08-20', doctor: 'Sara Iqbal',AppointmentType: "Dermatologist", status: 'Conducted', image: "https://plus.unsplash.com/premium_photo-1681966531074-0957dc900a5f?w=500" },
    { id: 2, date: '2024-09-10', doctor: 'Khalid Javed',AppointmentType : "Neurosurgeon", status: 'Cancelled', image: "https://plus.unsplash.com/premium_photo-1661766569022-1b7f918ac3f3?w=500" },
  ];

  const prescriptionHistory = [
    { id: 1, date: '2024-09-12', prescribedBy: "Dilgam Mammadev",  dosage: '500mg', image: prescriptionImg },
    { id: 2, date: '2024-09-15', prescribedBy: "Khalid Javed", dosage: '250mg', image: prescriptionImg },
  ];

  return (
    <div className="p-6  min-h-screen">
      <div className="mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">User Settings</h2>

        <div className="flex border-b mb-6">
          {['profile', 'orders', 'appointments', 'appointmentHistory', 'prescriptions'].map((tab) => (
            <button
              key={tab}
              className={`flex-1 p-2 text-center ${activeTab === tab ? 'border-b-2 border-indigo-500 font-semibold' : 'text-gray-500'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'profile' && 'Edit Profile'}
              {tab === 'orders' && 'Order History'}
              {tab === 'appointments' && 'Upcoming Appointments'}
              {tab === 'appointmentHistory' && 'Appointment History'}
              {tab === 'prescriptions' && 'Prescription History'}
            </button>
          ))}
        </div>

        {/* Content for Each Tab */}
        <div className="p-4">
          {activeTab === 'profile' && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your name"
                    value={user.name}
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    value={user.email}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Password</label>
                  <input
                    type="password"
                    value={user.password}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your password"
                  />
                </div>
                <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
                  Save Changes
                </button>
              </form>
            </div>
          )}
          {activeTab === 'orders' && (
  <div>
    <h3 className="text-xl font-semibold mb-4">Order History</h3>
    {orderHistory.length === 0 ? (
      <p className="text-gray-600">You have no orders yet.</p>
    ) : (
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2 text-center">Item</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Quantity</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Price</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Date</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {orderHistory.map((order) => (
            <tr key={order.id} className="border-b hover:bg-gray-50">
              <td className="border border-gray-200 px-4 py-2 flex items-center gap-4">
                <img className="h-20 w-20 object-cover" src={order.image} alt={order.item} />
                <span>{order.item}</span>
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">{order.quantity}</td>
              <td className="border border-gray-200 px-4 py-2 text-center">${order.price.toFixed(2)}</td>
              <td className="border border-gray-200 px-4 py-2 text-center">{order.date}</td>
              <td className="border border-gray-200 px-4 py-2 text-center">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
)}

          {activeTab === 'appointments' && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Upcoming Appointments</h3>
              {upcomingAppointments.length === 0 ? (
                <p className="text-gray-600">You have no upcoming appointments.</p>
              ) : (
                <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2 text-center">Doctor</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Disease Type</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Date</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Time</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {upcomingAppointments.map((appointment) => (
            <tr key={appointment.id} className="border-b hover:bg-gray-50">
              <td className="border border-gray-200 px-4 py-2 flex items-center gap-4">
                <img className="h-20 w-20 rounded-full object-cover" src={appointment.image} alt={appointment.doctor} />
                <span>{appointment.doctor}</span>
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">{appointment.Disease}</td>
             
              <td className="border border-gray-200 px-4 py-2 text-center">{appointment.date}</td>
              <td className="border border-gray-200 px-4 py-2 text-center">{appointment.time}</td>
              <td className="border border-gray-200 px-4 py-2 text-center">Pending</td>
            </tr>
          ))}
        </tbody>
      </table>
              )}
            </div>
          )}

          {activeTab === 'appointmentHistory' && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Appointment History</h3>
              {appointmentHistory.length === 0 ? (
                <p className="text-gray-600">You have no past appointments.</p>
              ) : (
                <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2 text-center">Doctor</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Appointment Type</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Date</th>
          
            <th className="border border-gray-200 px-4 py-2 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointmentHistory.map((appointment) => (
            <tr key={appointment.id} className="border-b hover:bg-gray-50">
              <td className="border border-gray-200 px-4 py-2 flex items-center gap-4">
                <img className="h-20 w-20 rounded-full object-cover" src={appointment.image} alt={appointment.doctor} />
                <span>{appointment.doctor}</span>
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">{appointment.AppointmentType}</td>
             
              <td className="border border-gray-200 px-4 py-2 text-center">{appointment.date}</td>
            
              <td className="border border-gray-200 px-4 py-2 text-center">{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
              )}
            </div>
          )}

          {activeTab === 'prescriptions' && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Prescription History</h3>
              {prescriptionHistory.length === 0 ? (
                <p className="text-gray-600">No prescriptions available.</p>
              ) : (
                <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2 text-center">Image</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Prescribed By</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Dosage</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Date</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Action</th>
          
          </tr>
        </thead>
        <tbody>
          {prescriptionHistory.map((prescription) => (
            <tr key={prescription.id} className="border-b hover:bg-gray-50">
              <td className="border border-gray-200 px-4 py-2 flex items-center justify-center gap-4">
                <img className="h-40 w-28 object-cover" src={prescription.image} alt={prescription.prescribedBy} />
               
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">{prescription.prescribedBy}</td>
             
              <td className="border border-gray-200 px-4 py-2 text-center">{prescription.dosage}</td>
              <td className="border border-gray-200 px-4 py-2 text-center">{prescription.date}</td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                <button className='py-2 px-4 bg-indigo-500 rounded text-white'>View</button>
              </td>
            
            </tr>
          ))}
        </tbody>
      </table>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
