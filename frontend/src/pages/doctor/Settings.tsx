import { FaRegAddressBook } from "react-icons/fa"
import { LuUser2 } from "react-icons/lu"
import { MdCall, MdLockOutline, MdOutlineMailOutline } from "react-icons/md"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CiSettings } from 'react-icons/ci';
import { FiUser } from 'react-icons/fi';
import { GrLogout } from 'react-icons/gr';
import { VscSearch } from 'react-icons/vsc';
import { useLocation } from "react-router"
import DoctorSidebar from "./Sidebar"
import PharmacistSidebar from "../pharmacist/Sidebar"
type ImageProps = {
  image:string
}
const Settings = ({image}:ImageProps) => {
  
  return (
    <div className="bg-custom-sky w-full">
     
      <div className="px-8 mt-8">
      <div className="flex items-center justify-between bg-white py-1 shadow px-2">
    <div className="h-12 w-64 bg-white rounded-md flex items-center justify-between px-4 font-normal">
<VscSearch className=" z-20"/>
<input type="text" placeholder="Search" className="h-full placeholder:text-gray-500 w-[80%] rounded-md outline-none" />
</div>
<Popover>

<PopoverTrigger>
      <div>
        <img className="h-12 w-12 rounded-full" src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png" alt="" />
      </div>
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
<div className="flex items-center gap-2 cursor-pointer rounded justify-center text-sm mt-2 bg-dark-green text-white py-2">
<span>Logout</span>
<GrLogout  className="text-lg" />
</div>
</div>
</PopoverContent>
</Popover>
    </div>
      
         <div className="grid grid-cols-2">
         <div className="h-[660px] w-[530px] bg-white rounded-md mt-8">
              <div className="h-16 w-full border border-b border-gray-300 rounded-t-md flex items-center px-4 text-xl font-medium">
                <h1>Personal Information</h1>
              </div>
              <div className="h-24 w-[90%] flex gap-8 mt-12 items-center mx-auto">
                <div>
                  <img
                    src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png"
                    className="rounded-md"
                    alt="User"
                  />
                </div>
                <div className="flex flex-col gap-4 items-start w-[70%] justify-center">
                  <p className="text-base">
                    Max file size is 5MB, Minimum dimension: 150x150. Suitable files are .jpg & .png
                  </p>
                  <input
                   type="file"
                   
                  />
                
                </div>
              </div>
              <div className="mt-16 w-[90%] mx-auto grid grid-cols-2">
                <div className="flex flex-col gap-4">
                  <label className="text-base">Full Name</label>
                  <div className="relative w-full">
                    <input
                      type="text"
                      className="h-12 w-[220px] rounded-md border border-gray-300 outline-none px-8"
                    />
                    <LuUser2 className="absolute left-2 top-4 text-gray-500 text-lg" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <label className="text-base">Email Address</label>
                  <div className="relative w-[100%]">
                    <input
                      type="email"
                      readOnly={true}
                      className="h-12 w-[220px] rounded-md border border-gray-300 outline-none px-8"
                    />
                    <MdOutlineMailOutline className="absolute left-2 top-4 text-gray-500 text-lg" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  <label className="text-base">Phone number</label>
                  <div className="relative w-[100%]">
                    <input
                      type="text"
                      className="h-12 w-[220px] rounded-md border border-gray-300 outline-none px-8"
                    />
                    <MdCall className="absolute left-2 top-4 text-gray-500 text-lg" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  <label className="text-base">Date of birth</label>
                  <div className="relative w-[100%]">
                    <input
                     type="date"
                      className="h-12 appearance-none w-[220px] rounded-md border border-gray-300 outline-none px-2"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  <label className="text-base">Address</label>
                  <div className="relative w-[100%]">
                    <input
                      type="text"
                      className="h-12 w-[455px] rounded-md border border-gray-300 outline-none px-8"
                    />
                    <FaRegAddressBook className="absolute left-2 top-4 text-gray-500 text-lg" />
                  </div>
                  <button
                  
                    className="h-14 rounded w-36 font-medium text-lg text-white bg-dark-green hover:bg-white hover:border hover:border-dark-green hover:text-dark-green transition-all duration-300"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
         <div className=" h-[660px] w-[530px] bg-white rounded-md mt-8">
         <div className=" h-16 w-full border border-b border-gray-300 rounded-t-md flex items-center px-4 text-2xl font-medium">
         <h1>Change Email</h1>
         </div>
       
         <div className="mt-8 w-[90%] mx-auto grid grid-cols-1 gap-4">
        <div className="flex flex-col gap-4 w-full">
            <label className="text-base">Current Email</label>
            <div className="relative w-[100%]">
            <input type="email"
            placeholder="Current email" className="h-12 w-[455px] rounded-md border border-gray-300 outline-none px-8" />
            <MdOutlineMailOutline className="absolute left-2 top-4 text-gray-500 text-lg" />
            </div>
          </div>
        <div className="flex flex-col gap-4 w-full">
            <label className="text-base">Password</label>
            <div className="relative w-[100%]">
            <input type="password"
            placeholder="Password" className="h-12 w-[455px] rounded-md border border-gray-300 outline-none px-8" />
            <MdOutlineMailOutline className="absolute left-2 top-4 text-gray-500 text-lg" />
            </div>
          </div>
        <div className="flex flex-col gap-4 w-full">
            <label className="text-base">New Email</label>
            <div className="relative w-[100%]">
            <input
            type="email" placeholder="New email" className="h-12 w-[455px] rounded-md border border-gray-300 outline-none px-8" />
            <MdOutlineMailOutline className="absolute left-2 top-4 text-gray-500 text-lg" />
            </div>
          </div>
        <div className="flex flex-col gap-4 w-full">
            <label className="text-base">New Email Again</label>
            <div className="relative w-[100%]">
            <input
            type="email" placeholder="New email again" className="h-12 w-[455px] rounded-md border border-gray-300 outline-none px-8" />
            <MdOutlineMailOutline className="absolute left-2 top-4 text-gray-500 text-lg" />
            </div>
          </div>
          <button
          className="h-14 rounded w-36 font-medium text-lg text-white bg-dark-green hover:bg-white hover:border hover:border-dark-green hover:text-dark-green transition-all duration-300">Change Email</button>
         </div>
          </div>
         <div className=" h-[420px] w-[530px] bg-white lg:ml-8 sm:ml-0 rounded-md mt-8">
         <div className=" h-16 w-full border border-b border-gray-300 rounded-t-md flex items-center px-4 text-2xl font-medium">
         <h1>Change Password</h1>
         </div>
       
         <div className="mt-8 w-[90%] mx-auto grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 w-full">
            <label className="text-base">Current Password</label>
            <div className="relative w-[100%]">
            <input
            type="password" placeholder="Current password" className="h-12 w-[220px] rounded-md border border-gray-300 outline-none px-8" />
            <MdLockOutline className="absolute left-2 top-4 text-gray-500 text-lg" />
            </div>
          </div>  
        <div className="flex flex-col gap-4 w-full">
            <label className="text-base">New Password</label>
            <div className="relative w-[100%]">
            <input
            type="password" placeholder="New password" className="h-12 w-[220px] rounded-md border border-gray-300 outline-none px-8" />
            <MdLockOutline className="absolute left-2 top-4 text-gray-500 text-lg" />
            </div>
          </div>  
        <div className="flex flex-col gap-4 w-full">
            <label className="text-base">New Password Again</label>
            <div className="relative w-[100%]">
            <input
            type="password" placeholder="Password again" className="h-12 w-[220px] rounded-md border border-gray-300 outline-none px-8" />
            <MdLockOutline className="absolute left-2 top-4 text-gray-500 text-lg" />
            </div>
          </div>  
         </div>
          <button
          className="h-14 mt-6 ml-6 rounded px-4 font-medium text-lg text-white bg-dark-green hover:bg-white hover:border hover:border-dark-green hover:text-dark-green transition-all duration-300">Change Password</button>
         <div className="h-12 mt-6"></div>
          </div>
         </div>
         </div>
    </div>
  )
}



export default Settings