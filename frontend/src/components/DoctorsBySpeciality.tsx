// src/components/DoctorsBySpeciality.js
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const doctors = [
    { 
      id: 1, 
      name: "Dilgam Mammadov", 
      speciality: "Internal Medicine", 
      experience: "15+ Years of Experience", 
      image: "https://images.unsplash.com/photo-1580281658626-ee379f3cce93?w=500&auto=format&fit=crop&q=60", 
      rating: 4.5 
    },
    { 
      id: 2, 
      name: "Ayesha Khan", 
      speciality: "Cardiologist", 
      experience: "10 Years of Experience", 
      image: "https://plus.unsplash.com/premium_photo-1661766743908-ca87957f4bb2?w=500", 
      rating: 4.7 
    },
    { 
      id: 3, 
      name: "Farhan Ahmed", 
      speciality: "Orthopedic Surgeon", 
      experience: "8 Years of Experience", 
      image: "https://plus.unsplash.com/premium_photo-1681966945670-fc90dbc58631?w=500", 
      rating: 4.2 
    },
    { 
      id: 4, 
      name: "Zainab Ali", 
      speciality: "Pediatrician", 
      experience: "5 Years of Experience", 
      image: "https://plus.unsplash.com/premium_photo-1673953510160-6d722ad05912?w=500", 
      rating: 4.8 
    },
    { 
      id: 5, 
      name: "Omer Bashir", 
      speciality: "General Practitioner", 
      experience: "20+ Years of Experience", 
      image: "https://plus.unsplash.com/premium_photo-1723514536306-26fe5c4adeb7?w=500", 
      rating: 4.6 
    },
    { 
      id: 6, 
      name: "Sara Iqbal", 
      speciality: "Dermatologist", 
      experience: "12 Years of Experience", 
      image: "https://plus.unsplash.com/premium_photo-1681966531074-0957dc900a5f?w=500", 
      rating: 4.3 
    },
    { 
      id: 7, 
      name: "Khalid Javed", 
      speciality: "Neurosurgeon", 
      experience: "18 Years of Experience", 
      image: "https://plus.unsplash.com/premium_photo-1661766569022-1b7f918ac3f3?w=500", 
      rating: 4.9 
    },
    { 
      id: 8, 
      name: "Nida Shah", 
      speciality: "Gynecologist", 
      experience: "7 Years of Experience", 
      image: "https://plus.unsplash.com/premium_photo-1681996428751-93e0294fe98d?w=500", 
      rating: 4.4 
    },
  ];
  
  
  

const DoctorsBySpeciality = () => {
  return (
    <div className="py-16">
      <h1 className="text-3xl text-center mt-2 uppercase font-bold px-16">
        All Specialized Doctors
      </h1>
      <ul className="grid grid-cols-4 gap-8 mt-16 divide-gray-300">
        {doctors.map((doctor) => (
          <li key={doctor.id} className="">
            <Link to={`/doctor/${doctor.id}`} className="flex items-center gap-2 flex-col" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img
                src={doctor.image}
                className="w-24 h-24 rounded-full object-cover cursor-pointer"
                alt={doctor.name}
              />
              <span className="text-base font-semibold">{doctor.name}</span>
              <span className="text-sm text-gray-700">{doctor.experience}</span>
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStarHalfAlt className="text-yellow-500" />
                {doctor.rating}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorsBySpeciality;
