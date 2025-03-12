import bioPicture from "../assets/d1.webp";
import { motion } from "motion/react";

const Bio = () => {
  return (
    <div className="w-8/12 mx-auto flex flex-wrap  justify-center py-8 gap-10  ">
      <motion.img
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
        src={bioPicture}
        className="w-80 rounded-lg md:min-w-60 md:object-cover flex-1"
        alt="bio"
      />
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
        className="flex flex-col gap-4  sm:w-3/6 flex-1 "
      >
        <p>
          Ekim 1987 yılında Samsun ’da doğdum.NEU Sağlık Bilimleri Fakültesi
          Hemşirelik Bölümünden mezun oldum.Uzun süredir kurumsal hayatta
          çalışıyorum.Oğlumun doğumuyla birlikte çocuk kitapları dünyasına adım
          attım. <br /> <br /> Hem yazıp hem resimlemek istediğim birçok hikâyem
          bulunuyor. Eşim ve oğlum ile Kıbrıs’ta yaşıyorum. Gördüğüm bütün çocuk
          kitaplarını oğlumla birlikte okumayı çok seviyorum.
          <br />
          <br /> Hayatı rengarenk boyamanın her şeyi değiştireceğine ve hayal
          gücünün dünyayı kurtaracağına inanıyorum.💛🪄✨🕊️
        </p>
      </motion.div>
    </div>
  );
};

export default Bio;
