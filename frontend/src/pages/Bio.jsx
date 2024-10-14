import bioPicture from "../assets/d1.webp";

const Bio = () => {
  return (
    <div className="w-8/12 mx-auto flex flex-wrap  justify-center py-8 gap-10 ">
      <img
        src={bioPicture}
        className="w-80 rounded-lg md:min-w-60 md:object-cover flex-1"
        alt="bio"
      />
      <div className="flex flex-col gap-4 text-gray-500 sm:w-3/6 flex-1 ">
        <p>
          Ekim 1987 yılında Samsun’da doğdu.NEU Sağlık Bilimleri Fakültesi
          Hemşirelik Bölümünden mezun oldu.Uzun süredir kurumsal hayatta
          çalışıyor. <br />
          <br /> Oğlunun doğumuyla birlikte çocuk kitapları dünyasına adım
          attı.Hem yazıp hem resimlemek istediği bırcok hikâyesi bulunan Damla
          Tekel Kıvrak, eşi ve oğlu ile Kıbrıs’ta yaşıyor.Gördüğü bütün çocuk
          kitaplarını oğluyla birlikte okumayı çok seviyor. <br /> <br />
          Hayatı rengarenk boyamanın her şeyi değiştireceğine ve hayal gücünün
          dünyayı kurtaracağına inanıyor.
        </p>
      </div>
    </div>
  );
};

export default Bio;
