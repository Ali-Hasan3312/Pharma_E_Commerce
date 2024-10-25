// src/pages/DoctorDetails.js
import { useParams } from 'react-router-dom';
import doctors from '../assets/doctors';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id!));
  if (!doctor) return <div>Doctor not found</div>;

  return (
    <div className='flex flex-col gap-2 justify-center items-center ' style={{ textAlign: 'center', padding: '20px' }}>
     <div className='flex gap-2 justify-center items-center'>
     <div className='flex flex-col gap-2 justify-center items-center  p-4'>
      <img
        src={doctor.image}
        alt={doctor.name}
        className=' object-cover'
        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
      />
      <h1 className=' mt-2'>{doctor.name}</h1>
      <p>{doctor.experience} of Experience</p>
      <p className='flex items-center'><span>Rating:</span>
      <span className='flex items-center'>
      <FaStar className="text-yellow-500" />
      <FaStar className="text-yellow-500" />
      <FaStar className="text-yellow-500" />
      <FaStar className="text-yellow-500" />
      <FaStarHalfAlt className="text-yellow-500" />
      </span>
         {doctor.rating}</p>
      <p>Speciality: {doctor.speciality}</p>
      </div>
      <div className='flex flex-col gap-2 w-[500px] justify-center items-center  p-4'>
        
        <p>{doctor.bio}</p>
        <p>Charges: {doctor.Charges} $</p>
        <p>Availability: {doctor.availability}</p>
        <p>Location: {doctor.location}</p>
        <p>Phone: {doctor.phone}</p>
        <p>Email: {doctor.email}</p>
      </div>
     </div>
     <div className='flex items-center gap-24 text-white mt-6'>
     <button className=' py-2 bg-dark-green px-4 rounded'>Book Now</button>
     <button className='py-2 bg-dark-green px-4 rounded'>Book Later</button>
     </div>
    </div>
  );
};  

export default DoctorDetails;
