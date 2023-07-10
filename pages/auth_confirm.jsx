import React from "react";
import { SecurityUser } from "./SecurityUser";
import "../auth_confirm.scss";

export const auth_confirm = () => {
  return (
    <div className="auth_confirm">
      <div className="div">
        <div className="overlap-group">
          <img className="line" alt="Line" src="line-2.svg" />
          <div className="overlap">
            <div className="text-wrapper">DEVAM</div>
          </div>
          <div className="text-wrapper-2">Cevabı Hatırlamıyorum</div>
          <img className="img" alt="Line" src="line-5.svg" />
          <div className="text-wrapper-3">Güvenlik Bilgileri Doğrulama</div>
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
              <span className="text-wrapper-4">Daha detaylı bilgi almak için tıklayın...</span>
            </a>
          </p>
          <div className="text-wrapper-5">İnternet Bankacılığı Güvenlik</div>
          <SecurityUser className="vuesax-bold-security" />
          <div className="overlap-2">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="element-karakter">
              <span className="text-wrapper-6">1</span>
              <span className="text-wrapper-7">.karakter</span>
            </div>
          </div>
          <div className="overlap-3">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="element-karakter">
              <span className="text-wrapper-6">4</span>
              <span className="text-wrapper-7">.karakter</span>
            </div>
          </div>
          <div className="text-wrapper-8">İlk evcil hayvanınızın adı</div>
          <p className="p">Güvenlik sorunuz için yanıtınızın 1. ve 3. karakterini giriniz.</p>
        </div>
        <footer className="footer">
          <h1 className="h-1">0 850 222 8222</h1>
          <div className="text-wrapper-9">7/24 İletişim Merkezi</div>
          <div className="text-wrapper-10">Müşteri Ol</div>
          <div className="text-wrapper-11">Bize Ulaşın</div>
          <img className="line-2" alt="Line" src="line-1.svg" />
        </footer>
        <header className="header">
          <div className="text-wrapper-12">English</div>
          <img className="group" alt="Group" src="group.png" />
        </header>
      </div>
    </div>
  );
};
