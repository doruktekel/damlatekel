import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";
import { useEffect, useState } from "react";
import useGetAllCategories from "../../hooks/useGetAllCategories";
import toast from "react-hot-toast";
import useCreateDraw from "../../hooks/useCreateDraw";

const CreateWork = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    imageName: "",
    category: "",
  });

  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [filePercentage, setFilePercentage] = useState(0);
  const { allCategories } = useGetAllCategories();
  const { loading, createDraw } = useCreateDraw();

  useEffect(() => {
    setCategories(allCategories);
  }, [allCategories]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const convertToWebP = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          canvas.width = img.width;
          canvas.height = img.height;

          ctx.drawImage(img, 0, 0);

          // Görseli webp formatında sıkıştırma işlemi
          canvas.toBlob(
            (blob) => {
              resolve(blob);
            },
            "image/webp",
            0.8 // Sıkıştırma kalitesi (0 ile 1 arasında olabilir)
          );
        };

        img.src = event.target.result;
      };

      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleUploadImage = async (e) => {
    if (!file) {
      toast.error("Lütfen bir dosya seçiniz");
      return;
    }
    setUploading(true);

    try {
      // Görseli webp formatına çeviriyoruz
      const webpFile = await convertToWebP(file);
      // Webp formatına çevrilen dosyayı yükleme işlemi
      const imageUrl = await storeImage(webpFile);
      toast.success("Resim yükleme başarılı :)");
    } catch (error) {
      console.log(error, error.message);
      toast.error("Resim yükleme hatası (maksimum 2 MB).");
    } finally {
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      // const fileName = new Date().getTime() + file.name;
      const fileName = `${new Date().getTime()}`;

      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setFilePercentage(progress);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFormData({
              ...formData,
              imageUrl: downloadURL,
              imageName: fileName,
            });
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDraw(formData);
  };

  return (
    <div className="pt-40 pl-80 pr-60 bg-gray-200 text-slate-700 h-screen  ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <p className="text-center font-semibold pb-4 text-xl">
          Resim Ekleme Formuna Hosgeldiniz
        </p>
        <div className="flex gap-5">
          <div className="leftSide flex-1 flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="font-semibold">
                <span className="text-red-600"> * </span>Başlık
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="p-2 rounded-xl"
                onChange={handleChange}
                value={formData.title}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="font-semibold">
                Açıklama
              </label>
              <textarea
                type="textarea"
                name="description"
                id="description"
                className="p-2 rounded-xl"
                onChange={handleChange}
                value={formData.description}
              />
            </div>
          </div>
          <div className="rightSide flex-1 flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="category" className="font-semibold">
                <span className="text-red-600"> * </span>Kategori
              </label>
              <select
                name="category"
                id="category"
                className="p-2.5  rounded-xl"
                onChange={handleChange}
                value={formData.category}
              >
                <option value="" disabled hidden>
                  Kategori Seçiniz
                </option>
                {categories.map((category, index) => (
                  <option key={index} value={category.toLowerCase()}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="draw" className="font-semibold">
                <span className="text-red-600"> * </span>Çiziminizi Seçiniz
              </label>
              <div className="flex justify-between">
                <input
                  type="file"
                  name="draw"
                  id="draw"
                  className="p-2 rounded-xl max-w-72 "
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  onClick={handleUploadImage}
                  className="flex gap-2 bg-slate-800 text-white hover:text-slate-800 hover:bg-white rounded-lg p-2 items-center hover:shadow-lg transition-all ease-in-out duration-300"
                >
                  Görseli Yükle
                </button>
              </div>
              {filePercentage > 0 && filePercentage < 100 && (
                <span className="text-green-700 font-semibold">{`Yukleniyor %${filePercentage}...`}</span>
              )}
              {formData.imageUrl && (
                <div className="flex justify-between items-center">
                  <img
                    className="w-40 h-40"
                    src={formData.imageUrl}
                    alt={formData.imageUrl}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <button
          className=" self-center border-green-700 border-2  bg-white text-green-700 rounded-lg p-2 items-center hover:shadow-lg transition-all ease-in-out duration-300 hover:bg-green-700 hover:text-white"
          disabled={loading}
        >
          {loading ? "Yükleniyor..." : "Cizimini Ekle"}
        </button>
      </form>
    </div>
  );
};

export default CreateWork;
