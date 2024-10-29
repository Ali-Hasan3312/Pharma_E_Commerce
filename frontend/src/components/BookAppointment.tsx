// src/pages/BookAppointment.tsx
import { useParams } from 'react-router-dom';
import doctors from '../assets/doctors';

const BookAppointment: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get doctor ID from the URL
  const doctor = doctors.find(
    (doc) => doc.id === parseInt(id || '')
  ); // Find the selected doctor

  if (!doctor) return <div>Doctor not found</div>; // Handle if no doctor is found

  return (
    <div className="flex flex-col items-center p-8">
     

      {/* Doctor Information */}
      <div className="text-center mb-8">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold">{doctor.name}</h2>
        <p className="text-gray-600">{doctor.speciality}</p>
       
      </div>
      <h1 className="text-3xl font-bold mb-6">Book Appointment</h1>

      {/* Booking Form */}
      <form className="w-full max-w-md bg-white p-6 rounded-md shadow-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          placeholder="Your Phone Number"
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="time"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Reason for Appointment"
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
