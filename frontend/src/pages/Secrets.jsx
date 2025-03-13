import { motion } from "motion/react";

const Secrets = () => {
  return (
    <div className="w-8/12 mx-auto flex flex-col flex-wrap  justify-center py-8 gap-10  ">
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
        className="font-bold"
      >
        Gizlilik Politikası ve Telif Hakları
      </motion.p>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
        className="font-bold"
      >
        1. Telif Hakkı Beyanı
      </motion.p>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
        }}
      >
        Bu sitede bulunan tüm içerik (illüstrasyonlar, tasarımlar, metinler,
        vb.) tamamen [www.damlaillustration.com]’na aittir ve ulusal ve
        uluslararası telif hakkı yasaları ile korunmaktadır. Hiçbir içerik,
        önceden yazılı izin alınmaksızın kopyalanamaz, çoğaltılamaz, dağıtılamaz
        veya herhangi bir ticari amaçla kullanılamaz.
      </motion.p>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
        }}
        className="font-bold"
      >
        2. Kullanım Kısıtlamaları
      </motion.p>
      <motion.ul
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
        }}
      >
        <li>
          Sitedeki illüstrasyonların ekran görüntüsü alınması, indirilmesi veya
          başka bir platformda paylaşılması yasaktır.
        </li>
        <li>
          Kişisel veya ticari kullanım için eser talebinde bulunmak isteyenler,
          iletişim formu veya e-posta yoluyla izin almalıdır.
        </li>
        <li>İhlal durumunda, yasal işlem başlatma hakkımız saklıdır.</li>
      </motion.ul>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.6,
        }}
        className="font-bold"
      >
        3. Görsel Koruma Önlemleri
      </motion.p>
      <motion.ul
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
        }}
      >
        <li>
          Sitemizde bulunan illüstrasyonlar, dijital filigranlarla
          korunmaktadır.
        </li>
        <li>
          Web sitesinde görsellerin sağ tıklama ile kaydedilmesi engellenmiştir.
        </li>
        <li>
          Görsellerin düşük çözünürlüklü versiyonları görüntülenmekte olup,
          yüksek çözünürlüklü dosyalar yalnızca lisans veya satış işlemi sonrası
          sağlanmaktadır.
        </li>
      </motion.ul>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.8,
        }}
        className="font-bold"
      >
        4. Kişisel Verilerin Gizliliği{" "}
      </motion.p>{" "}
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.9,
        }}
      >
        {" "}
        Ziyaretçilerimizin gizliliğini önemsiyoruz. Bu site, IP adresleri ve
        trafik bilgilerini yalnızca analitik amaçlar için toplar. Elde edilen
        bilgiler üçüncü taraflarla paylaşılmaz.
      </motion.p>
    </div>
  );
};

export default Secrets;
