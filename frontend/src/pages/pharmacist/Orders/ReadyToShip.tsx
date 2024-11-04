import { ReactElement, useEffect, useMemo, useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
import { Column } from 'react-table';
import p1 from "../../../assets/images/Products/Antiseptic Cream.jpeg";
import p2 from "../../../assets/images/Products/Aspirin Tablets.jpeg";
import p3 from "../../../assets/images/Products/Blood Pressure Monitor.jpeg";
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
    { id: 1, items: 1, product: "Antiseptic Cream", price: 330, photo: p1 },
    { id: 2, items: 4, product: "Aspirin Tablets", price: 730, photo: p2 },
    { id: 3, items: 1, product: "Blood Pressure Monitor", price: 4700, photo: p3 },
];

const ReadyToShip = () => {
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
                       
                        <select>
                            <option>Ready to ship</option>
                            <option>Shipped</option>
                            <option>Processing</option>
                            <option>Delivered</option>
                        </select>
                    ),
                }))
            );
        }
    }, []);
   
    const Table = useMemo(()=> TableHOC<DataType>(
        columns,
        rows,
        "Ready To Ship",
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

export default ReadyToShip;
