import { useContext, useState } from "react";
import contactPicture from "../assets/d2.webp";
import { ThemeContext } from "../context/ThemeContext";
import useSendMail from "../hooks/useSendMail";
import { motion } from "motion/react";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const { loading, sendEmail } = useSendMail();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { value, id } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendEmail(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  console.log(formData);

  return (
    <div className="max-w-5xl mx-auto py-8 gap-4 flex flex-col items-center  sm:flex-row sm:justify-between  ">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
        className="flex-1 flex flex-col gap-4 p-4  "
      >
        <p>
          Benimle sosyal medya platformları dışında iletişime geçmek için mail
          atabilirsiniz. <br />
          <br />
          Aşşağıdaki formu doldurarakda bana otomatik mail atabilirsiniz :){" "}
          <br />
          <br />
          E-posta: hannahsun1110@gmail.com{" "}
        </p>

        <form
          className={` border-2 border-dashed rounded-xl  p-10 flex flex-col gap-10 ${
            theme === "light" ? "border-blue-400" : "border-orange-300"
          }  `}
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center">
            <p className="text-xl">İletişime Geç</p>
          </div>
          <div className="flex gap-2  flex-wrap flex-col">
            <label htmlFor="name">Ad :</label>
            <input
              type="text"
              className="w-full p-1 bg-transparent border-b-2 focus:outline-none "
              id="name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="flex gap-2 flex-wrap flex-col">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              className="w-full p-1 bg-transparent border-b-2 focus:outline-none "
              id="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="flex flex-wrap flex-col gap-2 ">
            <label htmlFor="message">Mesaj :</label>
            <textarea
              className="w-full p-1 bg-transparent border-b-2 focus:outline-none  "
              id="message"
              onChange={handleChange}
              value={formData.message}
            />
          </div>
          <button
            type="submit"
            className={` self-center max-w-28 shadow-xl ease-in-out duration-300 px-5 py-1 flex justify-between items-center gap-2 rounded-full bg-opacity-90 border border-gray-200 ${
              theme === "light"
                ? " bg-gray-200 text-gray-500 hover:bg-blue-400 hover:text-gray-200 "
                : "bg-gray-50 text-gray-800  hover:bg-transparent  hover:text-gray-200 "
            } `}
            disabled={loading}
          >
            {loading ? "Loading..." : <span>Gönder</span>}
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
        className="flex-1 p-4  "
      >
        <img
          src={contactPicture}
          alt="contactPicture"
          className=" max-h-[700px] object-cover rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default Contact;
