import { ReactElement, useEffect, useMemo, useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { Column } from "react-table";
import TableHOC from "../../components/TableHOC";
import PharmacistSidebar from "./Sidebar";
interface DataType {
    user: string;
    amount: number;
    discount: number;
    quantity : number;
    status: ReactElement;
    action: ReactElement;
}

const columns: Column<DataType>[] = [
    { Header: 'User', accessor: "user" },
    { Header: 'Amount', accessor: "amount" },
    { Header: 'Discount', accessor: "discount" },
    { Header: 'Quantity', accessor: "quantity" },
    { Header: 'Status', accessor: "status" },
    { Header: 'Action', accessor: "action" },
];

const Data = [
   {
    id: "1",
    user: "Shahwaiz",
    amount: 300,
    discount: 20,
    quantity: 1,
    status: "Processing",
   },
   {
    id: "2",
    user: "Mubariz",
    amount: 500,
    discount: 40,
    quantity: 1,
    status: "Processing",
   },
   {
    id: "3",
    user: "Shah Nawaz",
    amount: 330,
    discount: 15,
    quantity: 1,
    status: "Recieved",
   },
  
];
const Payments = () => {

const [rows, setRows] = useState<DataType[]>([]);

useEffect(() => {
    if (Data) {
        setRows(
            Data.map((i) => ({
                user: i.user,
                amount: i.amount,
                discount: i.discount,
                quantity: i.quantity,
                status: (<div className={`${i.status==="Processing"? "text-red-500" : "text-green-500   "}`}>{i.status}</div>),
                action: (
                    <Link
                    to={`/pharmacist/payment/${i.id}`}
                    className="bg-blue-300 hover:bg-inherit hover:text-black transition-all p-1 rounded-lg text-blue-700"
                >
                    View
                </Link>
                ),
            }))
        );
    }
}, []);

const Table = useMemo(()=> TableHOC<DataType>(
    columns,
    rows,
    "All Payments",
    rows.length > 0
),[columns,rows])


  return (
    <div className="grid grid-cols-[20%_80%]">
    <PharmacistSidebar />
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

export default Payments