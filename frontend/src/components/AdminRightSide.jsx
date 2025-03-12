import { useMemo, useState } from "react";
import CardsInfo from "./CardsInfo";
import Table from "./Table";
import useGetAllWorks from "../hooks/useGetAllWorks";

const AdminRightSide = () => {
  const { loading, datas } = useGetAllWorks();
  const data = useMemo(() => datas, [datas]);

  const columns = [
    {
      header: "Resimler",
      accessorKey: "imageUrl",
      cell: ({ getValue }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={getValue()}
            alt="Resim"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
            }}
          />
        </div>
      ),
    },
    {
      header: "İsim",
      accessorKey: "title",
      cell: ({ getValue }) => {
        const title = getValue();
        return title.length > 20 ? title.slice(0, 20) + "..." : title;
      },
    },
    {
      header: "Kategori",
      accessorKey: "category",
    },
    {
      header: "Oluşturulma Tarihi",
      accessorKey: "createdAt",
      cell: ({ getValue }) => {
        const date = new Date(getValue());
        return date.toLocaleDateString("tr-TR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
      },
    },
  ];
  return (
    <div className="pt-32 pb-40 pl-80 pr-20 bg-gray-300 text-slate-700 h-full flex flex-col gap-10 min-h-lvh">
      <CardsInfo />
      <Table data={data} columns={columns} />
    </div>
  );
};

export default AdminRightSide;
