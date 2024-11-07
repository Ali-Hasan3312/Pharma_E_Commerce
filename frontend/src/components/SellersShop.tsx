import React from 'react';
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router';
const stores = [
  { name: 'MediLife Pharmacy', logo: logo },
  { name: 'WellCare Hub', logo: logo },
  { name: 'HealthPlus Store', logo: '💊' },
  { name: 'GreenCure Pharma', logo: '🌿' },
  { name: 'PillPoint Center', logo: '📦' },
  { name: 'HeartBeat Pharmacy', logo: '❤️' },
  { name: 'CureMax Depot', logo: '⚕️' },
  { name: 'SafeMeds', logo: '🛡️' },
  { name: 'VitalHub', logo: '🏥' },
  { name: 'GoodHealth Supplies', logo: '💙' },
];

const SellersShop: React.FC = () => {
  const navigate = useNavigate();
  const ScrollToTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  } 
  const handleClick = () => {
    navigate('/shop/products');
    ScrollToTop()
  };
  return (
    <div className=" py-16">
      <h1 className="md:text-3xl text-xl max-sm:text-center uppercase font-bold px-16">
        Shop By Sellers
      </h1>
      <ul className=" grid grid-cols-3 md:grid-cols-5 mt-4 divide-gray-300">
        {stores.map((store, index) => (
          <li key={index} className="flex items-center flex-col">
             <img src={logo} onClick={handleClick} className='md:w-48 w-36 cursor-pointer' alt="" />
            <span onClick={handleClick} className="md:text-base text-sm font-medium cursor-pointer">{store.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellersShop;
