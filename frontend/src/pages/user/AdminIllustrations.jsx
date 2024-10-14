import { useMemo } from "react";
import Table from "../../components/Table";
import useDeleteDraw from "../../hooks/useDeleteDraw";
import useGetAllDraws from "../../hooks/useGetAllDraws";

const AdminIllustrations = () => {
  const { loading, datas } = useGetAllDraws(
    "/api/work/illustrations/all-illustrations"
  );
  const data = useMemo(() => datas, [datas]);
  const { deleteDraw } = useDeleteDraw();

  const handleDelete = (row) => {
    deleteDraw(row.imageName, `/api/work/illustrations/${row._id}`);
  };
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
      header: "Isim",
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
      header: "Olusturulma Tarihi",
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
    {
      header: "İşlemler",
      cell: ({ row }) => (
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => handleEdit(row.original)}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Düzenle
          </button>
          <button
            onClick={() => handleDelete(row.original)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Sil
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="pt-32 pb-32 pl-80 pr-20 bg-gray-300 text-slate-700 min-h-screen flex flex-col gap-10">
      <p className="font-bold text-xl text-center">- Illustrasyonlar -</p>

      <Table data={data} columns={columns} />
    </div>
  );
};

export default AdminIllustrations;
