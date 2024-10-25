import lungs from "../assets/images/Speciality Icons/lungs.png"
import liver from "../assets/images/Speciality Icons/liver.png"
import heart from "../assets/images/Speciality Icons/cardiac.png"
import diabities from "../assets/images/Speciality Icons/diabates.png"
import digestion from "../assets/images/Speciality Icons/digestion.png"
import bones from "../assets/images/Speciality Icons/bones.png"
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom"
const specialities = [
    { name: 'Lungs', logo: lungs  },
    { name: 'Liver', logo: liver },
    { name: 'Cardiac', logo: heart },
    { name: 'Diabities', logo: diabities },
    { name: 'Digestive Disorder', logo: digestion },
    { name: 'Bones & Joints', logo: bones },
   
  ];
  const appointments = [
    {
      name: "Dilgam Mammadov",
      experience: "15+ Years of Experience",
      image: "https://images.unsplash.com/photo-1580281658626-ee379f3cce93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxkb2N0b3J8ZW58MHx8MHx8fDA%3D",
      rating: 4.5,
    },
    {
      name: "Ayesha Khan",
      experience: "10 Years of Experience",
      image: "https://plus.unsplash.com/premium_photo-1661766743908-ca87957f4bb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxkb2N0b3J8ZW58MHx8MHx8fDA%3D",
      rating: 4.7,
    },
    {
      name: "Farhan Ahmed",
      experience: "8 Years of Experience",
      image: "https://plus.unsplash.com/premium_photo-1681966945670-fc90dbc58631?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxkb2N0b3J8ZW58MHx8MHx8fDA%3D",
      rating: 4.2,
    },
    {
      name: "Zainab Ali",
      experience: "5 Years of Experience",
      image: "https://plus.unsplash.com/premium_photo-1673953510160-6d722ad05912?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxkb2N0b3J8ZW58MHx8MHx8fDA%3D",
      rating: 4.8,
    },
    {
      name: "Omer Bashir",
      experience: "20+ Years of Experience",
      image: "https://plus.unsplash.com/premium_photo-1723514536306-26fe5c4adeb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.6,
    },
    {
      name: "Sara Iqbal",
      experience: "12 Years of Experience",
      image: "https://plus.unsplash.com/premium_photo-1681966531074-0957dc900a5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxkb2N0b3J8ZW58MHx8MHx8fDA%3D",
      rating: 4.3,
    },
    {
      name: "Khalid Javed",
      experience: "18 Years of Experience",
      image: "https://plus.unsplash.com/premium_photo-1661766569022-1b7f918ac3f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.9,
    },
    {
      name: "Nida Shah",
      experience: "7 Years of Experience",
      image: "https://plus.unsplash.com/premium_photo-1681996428751-93e0294fe98d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.4,
    },
  ];
  
const DoctorsSpeciality = () => {
  return (
    <div className=" py-16">
    <h1 className="text-3xl mt-2 uppercase font-bold px-16">
      Doctors By Specialty
    </h1>
    <ul className=" grid grid-cols-4 gap-8 mt-10 divide-gray-300">
      {specialities.map((store, index) => (
        <li key={index} className="flex items-center relative flex-col">
          <div className=" h-24 w-24 bg-white flex items-center justify-center rounded-full">
          <img src={store.logo} className='w-16' alt="" />
          </div>
          <span className="text-base font-medium">{store.name}</span>
          <Link to={"/doctors"} className=" absolute w-[50%] h-full top-0"></Link>
        </li>
      ))}
    </ul>
    <div className=" mt-16">
    <h1 className="text-3xl mt-2 uppercase font-bold px-16">
      Appointments By Doctors
    </h1>
    <ul className=" grid grid-cols-4 gap-8 mt-10 divide-gray-300">
      {appointments.map((doctor, index) => (
        <li key={index} className="flex items-center gap-2 flex-col">
          <img src={doctor.image} className='w-24 h-24 rounded-full object-cover cursor-pointer' alt="" />
          <span className="text-base font-semibold cursor-pointer">{doctor.name}</span>
          <span className="text-sm text-gray-700">{doctor.experience}</span>
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStarHalfAlt className="text-yellow-500" />
          {doctor.rating}</span>
        </li>
      ))}
    </ul>
    </div>
  </div>
  )
}

export default DoctorsSpeciality