import React from "react";

const Secrets = () => {
  return (
    <div className="w-8/12 mx-auto flex flex-col flex-wrap  justify-center py-8 gap-10  ">
      <p>
        İnternet sitenizde illüstrasyonlarınızı korumak ve ziyaretçilerin bu
        eserlerin kullanımına ilişkin kuralları net bir şekilde anlamasını
        sağlamak için{" "}
        <span className="font-bold">
          {" "}
          gizlilik politikası ve kullanım şartları
        </span>{" "}
        bölümleri hazırlamanız gerekir. Bu metinler hukuki bir bağlayıcılık
        taşıyabilir, bu nedenle gerekirse bir uzmandan yardım almanız önerilir.
        Ancak temel bir taslak şöyle olabilir:
      </p>
      <p className="font-bold">Gizlilik Politikası ve Telif Hakları</p>
      <p className="font-bold">1. Telif Hakkı Beyanı</p>
      <p>
        Bu sitede bulunan tüm içerik (illüstrasyonlar, tasarımlar, metinler,
        vb.) tamamen [www.damlaillustration.com]’na aittir ve ulusal ve
        uluslararası telif hakkı yasaları ile korunmaktadır. Hiçbir içerik,
        önceden yazılı izin alınmaksızın kopyalanamaz, çoğaltılamaz, dağıtılamaz
        veya herhangi bir ticari amaçla kullanılamaz.
      </p>
      <p className="font-bold">2. Kullanım Kısıtlamaları</p>
      <ul>
        <li>
          Sitedeki illüstrasyonların ekran görüntüsü alınması, indirilmesi veya
          başka bir platformda paylaşılması yasaktır.
        </li>
        <li>
          Kişisel veya ticari kullanım için eser talebinde bulunmak isteyenler,
          iletişim formu veya e-posta yoluyla izin almalıdır.
        </li>
        <li>İhlal durumunda, yasal işlem başlatma hakkımız saklıdır.</li>
      </ul>
      <p className="font-bold">3. Görsel Koruma Önlemleri</p>
      <ul>
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
      </ul>
      <p className="font-bold">4. Kişisel Verilerin Gizliliği </p>{" "}
      <p>
        {" "}
        Ziyaretçilerimizin gizliliğini önemsiyoruz. Bu site, IP adresleri ve
        trafik bilgilerini yalnızca analitik amaçlar için toplar. Elde edilen
        bilgiler üçüncü taraflarla paylaşılmaz.
      </p>
    </div>
  );
};

export default Secrets;
