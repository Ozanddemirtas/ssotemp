import React from "react";
import { SecurityUser } from "./SecurityUser";
import "../password_auth.scss";

export const pw_auth = () => {
  return (
    <div className="pw_auth">
      <div className="div">
        <div className="overlap-group">
          <img className="line" alt="Line" src="line-2.svg" />
          <div className="overlap">
            <img className="rectangle" alt="Rectangle" src="rectangle-3.svg" />
            <div className="group">
              <img className="icon-kum-saat" alt="Icon kum saat" src="icon-kum-saat-1.svg" />
              <div className="text-wrapper">39 saniye</div>
            </div>
          </div>
          <div className="text-wrapper-2">Şifre Doğrulama</div>
          <p className="p">Lütfen, 5** ** 45 ile biten cep telefonunuza gelen doğrulama kodunu giriniz.</p>
          <div className="div-wrapper">
            <div className="text-wrapper-3">Devam</div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-4">SMS Doğrulama Kodu</div>
          </div>
          <p className="burgan-bank-nternet">
            <span className="span">
              Burgan Bank İnternet Bankacılığı ortamında donanım, yazılım, network ve erişim platformları günümüz
              teknolojisine uygun olarak kurulmuş olup güncel tutulmaktadır.
              <br />
              <br />
              İnternet Bankacılığı giriş sayfasında cep telefon numarası, marka ve model bilgisi istenmemektedir
              <br />
              <br />
              Cep telefonunuza dijital/mobil sertifika için gönderilen linkleri açmayınız, bu linklerden yükleme
              yapmayınız.
              <br />
              <br />
              Adres çubuğunda görselinin bulunduğu ve tıklandığında açılan sertifikada Burgan Bank yazdığını kontrol
              ediniz.
              <br />
              <br />
            </span>
            <a
              href="https://www.burgan.com.tr/birikim-yonetimi/bireysel/diger-hizmetlerimiz/internet-bankaciligi/guvenlik"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-wrapper-5">Daha detaylı bilgi almak için tıklayın...</span>
            </a>
          </p>
          <div className="text-wrapper-6">İnternet Bankacılığı Güvenlik</div>
          <SecurityUser className="vuesax-bold-security" />
        </div>
        <footer className="footer">
          <h1 className="h-1">0 850 222 8222</h1>
          <div className="text-wrapper-7">7/24 İletişim Merkezi</div>
          <div className="text-wrapper-8">Müşteri Ol</div>
          <div className="text-wrapper-9">Bize Ulaşın</div>
          <img className="img" alt="Line" src="line-1.svg" />
        </footer>
        <header className="header">
          <div className="text-wrapper-10">English</div>
          <img className="group-2" alt="Group" src="group.png" />
        </header>
      </div>
    </div>
  );
};
