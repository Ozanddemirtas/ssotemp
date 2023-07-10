import React from "react";
import "../notification.scss";

export const MacbookPro = () => {
  return (
    <div className="macbook-pro">
      <div className="div">
        <div className="overlap-group">
          <img className="line" alt="Line" src="line-2.svg" />
          <div className="text-wrapper">Mobil Bildirim ile Doğrulama</div>
          <p className="burgan-mobil">
            <span className="span">
              Burgan Mobil uygulamanıza iletilen bildirim zaman aşımına uğramıştır. <br />
              <br />
              Yeniden bildirim almak için ‘
            </span>
            <span className="text-wrapper-2">BİLDİRİM GÖNDER</span>
            <span className="span">
              ’ butonuna tıklayabilirsiniz. Burgan Mobil uygulamanıza erişimde sorun yaşıyorsanız, mobil cihaz
              aktivasyonunuzu kaldırarak SMS şifresi ile giriş yapmak için &#34;
            </span>
            <span className="text-wrapper-2">SMS GÖNDER</span>
            <span className="span">&#34; butonuna tıklayabilirsiniz.</span>
          </p>
          <img className="ww" alt="Ww" src="ww-1.png" />
          <div className="overlap">
            <div className="text-wrapper-3">BİLDİRİM GÖNDER</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-4">SMS GÖNDER</div>
          </div>
        </div>
        <footer className="footer">
          <h1 className="h-1">0 850 222 8222</h1>
          <div className="text-wrapper-5">7/24 İletişim Merkezi</div>
          <div className="text-wrapper-6">Müşteri Ol</div>
          <div className="text-wrapper-7">Bize Ulaşın</div>
          <img className="img" alt="Line" src="line-1.svg" />
        </footer>
        <header className="header">
          <div className="text-wrapper-8">English</div>
          <img className="group" alt="Group" src="group.png" />
        </header>
      </div>
    </div>
  );
};
