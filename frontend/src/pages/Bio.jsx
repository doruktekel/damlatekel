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
      </div>
    </div>
  );
};

export default Bio;
