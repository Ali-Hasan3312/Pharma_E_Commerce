import { ReactElement, useEffect, useMemo, useState } from "react";
import { Column } from "react-table";
import TableHOC from "../../components/TableHOC";
import { VscSearch } from "react-icons/vsc";
import Sidebar from "./Sidebar";
import { MdDelete } from "react-icons/md";
interface DataType {
    photo: ReactElement;
    name: string;
    gender: string;
    email: string;
    role: string;
    action: ReactElement;
}

const columns: Column<DataType>[] = [
    { Header: 'Photo', accessor: "photo" },
    { Header: 'Name', accessor: "name" },
    { Header: 'Gender', accessor: "gender" },
    { Header: 'Email', accessor: "email" },
    { Header: 'Role', accessor: "role" },
    { Header: 'Action', accessor: "action" },
];

const Data = [
   {
    photo: "https://plus.unsplash.com/premium_photo-1682434389560-96d533a6a10a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    Name: "Mubariz",
    Gender: "Male",
    Email: "sarim@gmail.com",
    Role: "Admin",
   },
   {
    photo: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    Name: "Saim",
    Gender: "Male",
    Email: "saim@gmail.com",
    Role: "Manager",
   },
   {
    photo: "https://plus.unsplash.com/premium_photo-1682431956407-ead76b412a42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdvbWVufGVufDB8fDB8fHww",
    Name: "Sara",
    Gender: "Female",
    Email: "sara@gmail.com",
    Role: "Moderator",
   },
];
const Users = () => {

const [rows, setRows] = useState<DataType[]>([]);

useEffect(() => {
    if (Data) {
        setRows(
            Data.map((i) => ({
                photo: <img src={i.photo} className="h-16 w-16 rounded-full object-cover" />,
                name: i.Name,
                gender: i.Gender,
                email: i.Email,
                role: i.Role,
                action: (
                   <div className="flex justify-center">
                    <MdDelete className="text-2xl text-red-600 hover:opacity-70 cursor-pointer transition-all duration-300" />
                   </div>
                ),
            }))
        );
    }
}, []);

const Table = useMemo(()=> TableHOC<DataType>(
    columns,
    rows,
    "All Staff",
    rows.length > 0
),[columns,rows])


  return (
    <div className="grid grid-cols-[20%_80%]">
    <Sidebar />
    <div className="px-8 mt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Pharma</h1>
        <div className="h-12 w-64 bg-white rounded-md flex items-center justify-between px-4 font-normal">
          <input
            type="text"
            placeholder="Search"
            className="h-full placeholder:text-gray-500 w-[80%] rounded-md outline-none"
          />
          <VscSearch className="z-20" />
        </div>
      </div>
     

     
      <div className=' mt-4'>
      {Table()}
      </div>
      
    </div>
  </div>
  )
}

export default Users