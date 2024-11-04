import { ReactElement, useEffect, useMemo, useState } from "react";
import { Column } from "react-table";
import productsData from "../../assets/products";
import { Link } from "react-router-dom";
import TableHOC from "../../components/TableHOC";
import { VscSearch } from "react-icons/vsc";
import PharmacistSidebar from "./Sidebar";
interface DataType {
    image: ReactElement;
    name: string;
    price: number;
    stock : number;
    action: ReactElement;
}

const columns: Column<DataType>[] = [
    { Header: 'Image', accessor: "image" },
    { Header: 'Name', accessor: "name" },
    { Header: 'Price', accessor: "price" },
    { Header: 'Stock', accessor: "stock" },
    { Header: 'Action', accessor: "action" },
];


const Products = () => {
    const [rows, setRows] = useState<DataType[]>([]);
    useEffect(() => {
        if (productsData) {
            setRows(
                productsData.map((i) => ({
                    image: <img src={i.image} className="h-16 w-16 rounded-full object-cover" />,
                    name: i.name,
                    price: i.price,
                    stock: i.stock,
                    action: (
                        <Link
                        to={`/pharmacist/products/${i.id}`}
                        className="bg-blue-300 hover:bg-inherit hover:text-black transition-all p-1 rounded-lg text-blue-700"
                    >
                        Manage
                    </Link>
                    ),
                }))
            );
        }
    }, []);
    const Table = useMemo(()=> TableHOC<DataType>(
        columns,
        rows,
        "All Products",
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

export default Products