import { ReactElement, useEffect, useMemo, useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { Column } from 'react-table';
import p3 from "../../../assets/images/Products/Cough Syrup.jpeg";
import p1 from "../../../assets/images/Products/Eye Drops.jpeg";
import p2 from "../../../assets/images/Products/vitamin c.jpeg";
import TableHOC from '../../../components/TableHOC';
import PharmacistSidebar from '../Sidebar';
interface DataType {
    id: number;
    photo: ReactElement;
    items: number;
    product: string;
    price: number;
    action: ReactElement;
}

const columns: Column<DataType>[] = [
    { Header: 'Id', accessor: "id" },
    { Header: 'Photo', accessor: "photo" },
    { Header: 'Items', accessor: "items" },
    { Header: 'Product', accessor: "product" },
    { Header: 'Price', accessor: "price" },
    { Header: 'Action', accessor: "action" },
];

const Orders = [
    { id: 1, items: 2, product: "Eye Drops", price: 330, photo: p1 },
    { id: 2, items: 3, product: "Vitamin C Tablets", price: 730, photo: p2 },
    { id: 3, items: 1, product: "Cough Syrup", price: 470, photo: p3 },
];

const DeliveredOrders = () => {
    const [rows, setRows] = useState<DataType[]>([]);

    useEffect(() => {
        if (Orders) {
            setRows(
                Orders.map((i) => ({
                    photo: <img src={i.photo} alt={`${i.product} photo`} className="h-16 w-16" />,
                    id: i.id,
                    items: i.items,
                    product: i.product,
                    price: i.price,
                    action: (
                        <Link
                            to={`/admin/product/${i.id}`}
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
        "Delivered Orders",
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
    );
};

export default DeliveredOrders;
