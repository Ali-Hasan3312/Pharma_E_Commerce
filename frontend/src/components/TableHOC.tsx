import { useId } from 'react';
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';
import { Column, TableOptions, useTable, useSortBy, usePagination } from 'react-table';

function TableHOC<T extends Object>(
    columns: Column<T>[],
    data: T[],
    heading: string,
    showPagination: boolean = false
) {
    return function HOC() {
        const uniqueId = useId()
        const options: TableOptions<T> = {
            columns,
            data,
            initialState: {
                pageSize: 10
            },
        }

        const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, nextPage, pageCount, state: { pageIndex }, previousPage, canNextPage, canPreviousPage } = useTable(options, useSortBy, usePagination);

        return (
            <div className='bg-white shadow-md rounded-lg w-full '>
                <h2 className='mx-0 py-2 text-white w-full text-center bg-dark-green mb-8 tracking-[0.2rem] uppercase font-semibold'>{heading}</h2>
                <table role="table" {...getTableProps()} className='table border-collapse w-full'>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()} key={uniqueId} className=' shadow'>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())} key={column.id} className=' p-2 text-center font-bold text-base  pb-8 px-4'>
                                        {column.render("Header")}
                                        {column.isSorted && (
                                            <span>{column.isSortedDesc ? (<AiOutlineSortDescending />) : (<AiOutlineSortAscending />)}</span>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, rowIndex) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} key={rowIndex} className=' shadow'>
                                    {row.cells.map((cell, cellIndex) => (
                                        <td {...cell.getCellProps()} key={cellIndex} className=' p-2 text-center align-middle'>
                                            {cell.render("Cell")}
                                        </td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {showPagination && (
                    <div className='flex flex-row justify-center items-center gap-4 p-8'>
                        <button disabled={!canPreviousPage} onClick={previousPage} className=' py-2 px-4 border-none outline-none rounded-lg cursor-pointer bg-dark-green text-white disabled:bg-dark-green disabled:opacity-40 disabled:cursor-not-allowed'>Prev</button>
                        <span>{`${pageIndex + 1} of ${pageCount}`}</span>
                        <button disabled={!canNextPage} onClick={nextPage} className=' py-2 px-4 border-none outline-none rounded-lg cursor-pointer bg-dark-green text-white disabled:bg-dark-green disabled:opacity-40 disabled:cursor-not-allowed'>Next</button>
                    </div>
                )}
            </div>
        )
    }
}


export default TableHOC;
