import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

import { app } from "../firebase";
import { getStorage, ref, deleteObject } from "firebase/storage";

const useDeleteDraw = () => {
  const deleteDraw = async (imageName, url) => {
    const result = await Swal.fire({
      title: "Bu cizimi silmek istedigine emin misin ?",
      text: "Bu islemin geri donusu yok !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Evet, sil!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axios.delete(`${url}`);
        const data = res.data;

        if (data.success === false) {
          throw new Error(data.errorMessage);
        }

        const storage = getStorage(app);
        const desertRef = ref(storage, `/${imageName}`);

        deleteObject(desertRef)
          .then(() => {
            console.log("File deleted from storage successfully");
          })
          .catch((error) => {
            console.log("while file deleting, an error occurred", error);
          });

        Swal.fire({
          title: "Silindi!",
          text: "Resim bu listeden silindi.",
          icon: "success",
        });
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.errorMessage
        ) {
          toast.error(error.response.data.errorMessage);
        } else {
          toast.error(error.message);
        }
        Swal.fire({
          title: "Hata !",
          text: "Silinirken hata olustu.",
          icon: "error",
        });
      }
    }
  };

  return { deleteDraw };
};

export default useDeleteDraw;
