import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useGetBio from "../../hooks/useGetBio";
import useUpdateBio from "../../hooks/useUpdateBio";
import RichTextEditor from "../../components/RichTextEditor";

const AdminBio = () => {
  const [formData, setFormData] = useState({
    info: "",
    imageUrl: "",
    imageName: "",
  });

  const { updateBio, loading } = useUpdateBio();
  const { datas } = useGetBio();

  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [filePercentage, setFilePercentage] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Editor için onChange handler
  const handleEditorChange = (content) => {
    setFormData({ ...formData, info: content });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      // Dosya seçildiğinde önizleme oluştur
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
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

          const webpDataUrl = canvas.toDataURL("image/webp", 0.8);
          fetch(webpDataUrl)
            .then((res) => res.blob())
            .then((blob) => resolve(blob))
            .catch(reject);
        };
        img.src = event.target.result;
      };

      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = `${new Date().getTime()}`;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file, {
        contentType: "image/webp",
      });

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setFilePercentage(progress);
        },
        (error) => reject(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve({ url: downloadURL, name: fileName });
          });
        }
      );
    });
  };

  const handleCancelImage = () => {
    setPreviewImage(null);
    setFile(null);
    setFilePercentage(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.info) {
      toast.error("Biyografi bilgisini doldurunuz");
      return;
    }

    if (!file && !formData.imageUrl) {
      toast.error("Lütfen bir görsel seçiniz");
      return;
    }

    try {
      setUploading(true);

      let updatedData = { ...formData };

      // Eğer yeni dosya varsa yükle
      if (file) {
        const webpFile = await convertToWebP(file);
        const { url, name } = await storeImage(webpFile);

        updatedData = {
          ...updatedData,
          imageUrl: url,
          imageName: name,
        };
      }

      // Backend'e gönder
      await updateBio(updatedData);
      toast.success("Biyografi başarıyla güncellendi");
    } catch (error) {
      console.log(error);
      toast.error("İşlem sırasında bir hata oluştu");
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    if (datas) {
      setFormData({
        info: datas.info || "",
        imageUrl: datas.imageUrl || "",
        imageName: datas.imageName || "",
      });
    }
  }, [datas]);

  return (
    <div className="pt-24 pb-32 pl-80 pr-20 bg-gray-300 text-slate-700 min-h-screen flex flex-col gap-5">
      <p className="font-bold text-xl text-center">
        - Yeni Biyografi Oluştur -
      </p>
      <hr />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="info" className="font-semibold">
            <span className="text-red-600"> * </span> Hakkımda
          </label>
          {/* Özel RichTextEditor komponenti kullanımı */}
          <RichTextEditor
            value={formData.info}
            onChange={handleEditorChange}
            placeholder="Biyografi bilgilerinizi giriniz..."
            height="240px"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="image" className="font-semibold">
            <span className="text-red-600"> * </span>Görsel Seç
          </label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              className="p-2 rounded-xl border"
              onChange={handleFileChange}
            />
          </div>
          {filePercentage > 0 && filePercentage < 100 && (
            <span className="text-green-700 font-semibold">{`Yükleniyor %${filePercentage}...`}</span>
          )}

          {/* Önizleme görseli */}
          {previewImage && (
            <div className="mt-2 flex justify-center relative w-40 h-40">
              <img
                src={previewImage}
                alt="Önizleme"
                className="w-40 h-40 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={handleCancelImage}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center shadow hover:bg-red-700 transition"
                title="Görseli İptal Et"
              >
                &times;
              </button>
            </div>
          )}

          {/* Mevcut görsel (eğer yeni bir resim seçilmediyse) */}
          {!previewImage && formData.imageUrl && (
            <div className="mt-2 flex justify-center relative w-40 h-40">
              <img
                src={formData.imageUrl}
                alt="Mevcut Görsel"
                className="w-40 h-40 object-cover rounded-lg"
              />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="self-center border-green-700 border-2 bg-white text-green-700 rounded-lg p-2 w-40 hover:shadow-lg transition-all ease-in-out duration-300 hover:bg-green-700 hover:text-white"
          disabled={loading || uploading}
        >
          {loading || uploading ? "Yükleniyor..." : "Kaydet"}
        </button>
      </form>
    </div>
  );
};

export default AdminBio;
