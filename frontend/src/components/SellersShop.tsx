import React from 'react';
import logo from "../assets/logo.png"
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
  return (
    <div className=" py-16">
      <h1 className="text-3xl uppercase font-bold px-16">
        Shop By Sellers
      </h1>
      <ul className=" grid grid-cols-5 mt-4 divide-gray-300">
        {stores.map((store, index) => (
          <li key={index} className="flex items-center flex-col">
             <img src={logo} className='w-48 cursor-pointer' alt="" />
            <span className="text-base font-medium cursor-pointer">{store.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellersShop;
