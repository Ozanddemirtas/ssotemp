import React from "react";
import { Frame } from "./Frame";
import { SecurityUser } from "./SecurityUser";
import "./forget_pw.scss";

export const forget_pw = () => {
  return (
    <div className="forget_pw">
      <div className="div">
        <div className="overlap-group">
          <img className="line" alt="Line" src="line-2.svg" />
          <div className="overlap">
            <div className="text-wrapper">DEVAM</div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-2">Kimlik/Vergi Numarası</div>
            <Frame className="vuesax-bold-frame" />
            <img className="img" alt="Line" src="line-3.svg" />
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-3">Telefon Numarası</div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-4">TR +90</div>
            <img className="vector" alt="Vector" src="vector.svg" />
          </div>
          <div className="text-wrapper-5">Şifremi Unuttum</div>
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
              <span className="text-wrapper-6">Daha detaylı bilgi almak için tıklayın...</span>
            </a>
          </p>
          <div className="text-wrapper-7">İnternet Bankacılığı Güvenlik</div>
          <SecurityUser className="vuesax-bold-security" />
        </div>
        <footer className="footer">
          <h1 className="h-1">0 850 222 8222</h1>
          <div className="text-wrapper-8">7/24 İletişim Merkezi</div>
          <div className="text-wrapper-9">Müşteri Ol</div>
          <div className="text-wrapper-10">Bize Ulaşın</div>
          <img className="line-2" alt="Line" src="line-1.svg" />
        </footer>
        <header className="header">
          <div className="text-wrapper-11">English</div>
          <img className="group" alt="Group" src="group.png" />
        </header>
      </div>
    </div>
  );
};
