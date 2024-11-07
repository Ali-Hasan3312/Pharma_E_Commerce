import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SiMastercard } from "react-icons/si";
import React from 'react';
import { CiSettings } from "react-icons/ci";
import { FiAlertCircle, FiCheckSquare, FiClipboard, FiFileText, FiSearch, FiUser } from 'react-icons/fi';
import { GrLogout } from "react-icons/gr";
const AdminDashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Search Bar */}
      <div className="flex items-center justify-between bg-white p-4 rounded-md shadow">
       <div className='flex items-center'>
       <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search (Ctrl+/)"
          className="w-full outline-none"
        />
       </div>
       <Popover>
<PopoverTrigger>
        <img className='h-12 w-12 rounded-full' src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png" alt="" />
        </PopoverTrigger>
  <PopoverContent className="flex justify-center w-[180px] mr-4 mt-2">
    <div className="flex flex-col justify-center">
        <div className="flex items-center gap-4 cursor-pointer w-[150px] px-2 transition-all duration-200 py-2 hover:bg-gray-100">
            <img className="h-10 w-10 rounded-full" src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png" alt="" />
            <div className="flex flex-col">
                <h2 className="text-sm">John Doe</h2>
                <span className="text-xs text-gray-500">Admin</span>
            </div>
        </div>
        <hr className="mt-2" />
        <div className="flex items-center text-sm mt-2 gap-4 text-gray-700 cursor-pointer w-[150px] px-2 transition-all duration-200 py-2 hover:bg-gray-100">
            <FiUser className="text-lg" />
            <span>My Profile</span>
        </div>
        <div className="flex items-center text-sm gap-4 text-gray-700 cursor-pointer w-[150px] px-2 transition-all duration-200 py-2 hover:bg-gray-100">
            <CiSettings className="text-lg" />
            <span>Settings</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer rounded justify-center text-sm mt-2 bg-blue-500 text-white py-2">
            <span>Logout</span>
            <GrLogout  className="text-lg" />
        </div>
    </div>
  </PopoverContent>
</Popover>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <SummaryCard icon={<FiAlertCircle />} title="Pending Payment" count="56" />
        <SummaryCard icon={<FiClipboard />} title="Completed" count="12,689" />
        <SummaryCard icon={<FiCheckSquare />} title="Refunded" count="124" />
        <SummaryCard icon={<FiFileText />} title="Failed" count="32" />
      </div>
      {/* Order Table */}
      <div className="bg-white mt-6 rounded-md shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <input
            type="text"
            placeholder="Search Order"
            className="w-48 p-2 bg-gray-100 rounded-md outline-none"
          />
        </div>
        <table className="min-w-full text-gray-600">
          <thead className="bg-gray-100 text-center">
            <tr>
              <th className="p-4">Order</th>
              <th className="p-4">Date</th>
              <th className="p-4">Customers</th>
              <th className="p-4">Payment</th>
              <th className="p-4">Status</th>
              <th className="p-4">Method</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example rows, you can map through data */}
            <OrderRow
              order="#6979"
              date="Apr 15, 2023, 10:21"
              customer="Cristine Easom"
              email="ceasomw@theguardian.com"
              paymentStatus="Pending"
              deliveryStatus="Delivered"
              method="MasterCard"
              methodIcon="mastercard"
              lastDigits="2356"
            />
            <OrderRow
              order="#6624"
              date="Apr 17, 2023, 6:43"
              customer="Fayre Screech"
              email="fscreechs@army.mil"
              paymentStatus="Failed"
              deliveryStatus="Delivered"
              method="MasterCard"
              methodIcon="mastercard"
              lastDigits="2077"
            />
            <OrderRow
  order="#8325"
  date="June 3, 2023, 14:37"
  customer="Ava Linwood"
  email="ava.linwood@example.com"
  paymentStatus="Pending"
  deliveryStatus="Processing"
  method="PayPal"
  methodIcon="paypal"
  lastDigits="N/A"
/>
<OrderRow
  order="#9908"
  date="July 12, 2023, 09:47"
  customer="Kiran Patel"
  email="kpatel@domain.com"
  paymentStatus="Failed"
  deliveryStatus="Pending"
  method="Amex"
  methodIcon="amex"
  lastDigits="8732"
/>
<OrderRow
  order="#4857"
  date="Aug 30, 2023, 18:53"
  customer="Nia Faulkner"
  email="nia.faulkner@example.com"
  paymentStatus="Completed"
  deliveryStatus="Shipped"
  method="Apple Pay"
  methodIcon="apple-pay"
  lastDigits="N/A"
/>
<OrderRow
  order="#2741"
  date="Sep 14, 2023, 10:25"
  customer="Felix Monroe"
  email="felix.monroe@example.com"
  paymentStatus="Completed"
  deliveryStatus="Delivered"
  method="Discover"
  methodIcon="discover"
  lastDigits="1234"
/>
           
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const SummaryCard: React.FC<{ icon: React.ReactNode; title: string; count: string }> = ({ icon, title, count }) => (
  <div className="flex items-center p-4 bg-white rounded-md shadow">
    <div className="p-2 bg-gray-200 rounded-md mr-4">{icon}</div>
    <div>
      <p className="text-lg font-semibold">{count}</p>
      <p className="text-gray-500">{title}</p>
    </div>
  </div>
);

const OrderRow: React.FC<{
  order: string;
  date: string;
  customer: string;
  email: string;
  paymentStatus: string;
  deliveryStatus: string;
  method: string;
  methodIcon: string;
  lastDigits: string;
}> = ({ order, date, customer, email, paymentStatus, deliveryStatus, lastDigits }) => (
  <tr className="hover:bg-gray-50">
    <td className="p-4 text-blue-500 font-semibold">{order}</td>
    <td className="p-4">{date}</td>
    <td className="p-4">
      <div className="flex items-center flex-col space-x-2">
        <span className="font-semibold">{customer}</span>
        <span className="text-sm text-gray-500">{email}</span>
      </div>
    </td>
    <td className="p-4">
      <span className={`px-2 py-1 rounded-full text-sm ${paymentStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' : paymentStatus === 'Failed' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
        {paymentStatus}
      </span>
    </td>
    <td className="p-4">
      <span className={`px-2 py-1 rounded-full text-sm ${deliveryStatus === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
        {deliveryStatus}
      </span>
    </td>   
    <td className="p-4">
      <span><SiMastercard className="text-red-500" /> •••• {lastDigits}</span>
    </td>
    <td className="p-4">
      <Popover>
<PopoverTrigger>
      <button className="text-gray-500 hover:text-gray-800"><BsThreeDotsVertical /></button>

        </PopoverTrigger>
  <PopoverContent className="flex justify-center w-[180px] mr-4 mt-2">
   <div className="flex flex-col justify-center">
   <button>Delete</button>
   </div>
  </PopoverContent>
</Popover>
    </td>
  </tr>
);

export default AdminDashboard;
