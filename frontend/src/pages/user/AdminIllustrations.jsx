import { useEffect, useMemo, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Table from "../../components/Table";
import useDeleteDraw from "../../hooks/useDeleteDraw";
import useGetAllDraws from "../../hooks/useGetAllDraws";
import useGetAllCategories from "../../hooks/useGetAllCategories";
import useEditWork from "../../hooks/useEditWork";

const AdminIllustrations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [categories, setCategories] = useState([]);

  const { loading, datas, refetch } = useGetAllDraws(
    "/api/work/illustrations/all-illustrations"
  );

  const { allCategories } = useGetAllCategories();
  const { editWork } = useEditWork();
  const data = useMemo(() => datas, [datas]);
  const { deleteDraw } = useDeleteDraw();

  useEffect(() => {
    setCategories(allCategories);
  }, [allCategories]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editWork(formData);
    setIsModalOpen(false);
    refetch();
  };

  const handleEdit = async (row) => {
    setIsModalOpen(true);
    setFormData({
      _id: row._id,
      title: row.title,
      category: row.category,
      description: row.description,
    });
  };

  const handleChange = (e) => {
    const { value, id } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleDelete = async (row) => {
    await deleteDraw(row.imageName, `/api/work/illustrations/${row._id}`);
    refetch();
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
    <div className="pt-24 pb-32 pl-80 pr-20 bg-gray-300 text-slate-700 min-h-screen flex flex-col gap-5">
      <p className="font-bold text-xl text-center">- Illustrasyonlar -</p>
      <hr />

      <Table data={data} columns={columns} />
      {isModalOpen && (
        <div className="fixed  inset-0 z-50 flex items-center justify-center">
          {/* Arka planı soluklaştırma */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal içeriği */}

          <div className="bg-white p-8 rounded shadow-lg z-10 w-1/3 relative flex flex-col text-center">
            <FaXmark
              onClick={() => setIsModalOpen(false)}
              className="absolute right-3 top-3 cursor-pointer text-2xl text-red-500"
            />

            <h2 className="text-xl font-bold mb-4 text-slate-500">
              Illustrasyon DÜzenleme
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="flex items-center gap-2 justify-between">
                <label
                  htmlFor="title"
                  className="font-semibold text-gray-500 flex"
                >
                  <span className="text-red-600"> * </span> Başlık :
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="p-1 rounded-md border w-72 "
                  onChange={handleChange}
                  value={formData.title}
                />
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label
                  htmlFor="category"
                  className="font-semibold text-gray-500 flex"
                >
                  <span className="text-red-600"> * </span>Kategori :
                </label>
                <select
                  name="category"
                  id="category"
                  className="p-1.5 rounded-md border w-72 "
                  value={formData.category}
                  onChange={handleChange}
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category.toLowerCase()}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-start gap-2 justify-between">
                <label
                  htmlFor="description"
                  className="font-semibold text-gray-500 flex"
                >
                  Açıklama :
                </label>
                <textarea
                  type="textarea"
                  name="description"
                  id="description"
                  className="p-1.5 rounded-md border w-72 "
                  onChange={handleChange}
                  value={formData.description}
                />
              </div>
              <div className="mt-4 flex gap-2 justify-center">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white  border-gray-500 border-2  px-4 py-2 rounded hover:bg-transparent hover:text-gray-500 shadow-xl ease-in-out duration-300 "
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white  border-blue-500 border-2  px-4 py-2 rounded hover:bg-transparent hover:text-blue-500 shadow-xl ease-in-out duration-300 "
                >
                  Kaydet
                </button>
              </div>
            </form>

            {/* Düzenleme Formu Buraya Gelecek */}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminIllustrations;
