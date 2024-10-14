import {
  getPaginationRowModel,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";

const Table = ({ data, columns }) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting: sorting, globalFilter: filtering },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div>
      <div className="flex justify-center mb-2">
        <input
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          placeholder="Tabloda arama yap..."
          className="p-2 outline-none active:outline rounded-lg w-1/2 mx-auto"
        />
      </div>

      <table className="w-full ">
        <thead>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <tr
              key={index}
              className="border border-slate-600 text-slate-600   "
            >
              {headerGroup.headers.map((header, index) => (
                <th
                  key={index}
                  className="p-1"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {
                    { asc: " 🔼", desc: " 🔽" }[
                      header.column.getIsSorted() ?? null
                    ]
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr
              key={index}
              className="border border-slate-600 text-slate-600   "
            >
              {row.getVisibleCells().map((cell, index) => (
                <td key={index} className="text-center ">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex mt-2 justify-center items-center">
        <div className=" flex gap-4">
          <button
            className="border border-gray-600 bg-gray-600 hover:bg-transparent text-slate-200 hover:text-gray-600 transition-all ease-in-out duration-300 rounded-lg p-2"
            onClick={() => table.setPageIndex(0)}
          >
            Ilk Sayfa
          </button>
          <button
            className="border border-gray-600 bg-gray-600 hover:bg-transparent text-slate-200 hover:text-gray-600 transition-all ease-in-out duration-300 rounded-lg p-2 disabled:bg-slate-400 disabled:text-gray-600 "
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Bir Onceki Sayfa
          </button>
          <button
            className="border border-gray-600 bg-gray-600 hover:bg-transparent text-slate-200 hover:text-gray-600 transition-all ease-in-out duration-300 rounded-lg p-2 disabled:bg-slate-400  disabled:text-gray-600 "
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Bir Sonraki Sayfa
          </button>
          <button
            className="border border-gray-600 bg-gray-600 hover:bg-transparent text-slate-200 hover:text-gray-600 transition-all ease-in-out duration-300 rounded-lg p-2"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            Son Sayfa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
