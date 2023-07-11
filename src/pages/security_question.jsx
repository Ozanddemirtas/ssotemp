import React from "react";
import "../security_question.scss";

export const security_question = () => {
  return (
    <div className="security_question">
      <div className="div">
        <div className="overlap-group">
          <div className="overlap">
            <div className="text-wrapper">DEVAM</div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-2">Soru Seçiniz</div>
            <img className="vector" alt="Vector" src="vector.svg" />
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Cevabınız</div>
          </div>
          <div className="text-wrapper-3">Güvenlik Sorusu Tanımla</div>
          <p className="p">Şifrenizi unutmanız durumunda kullanacağın üvenlik sorusunu belirleytin.</p>
        </div>
        <footer className="footer">
          <h1 className="h-1">0 850 222 8222</h1>
          <div className="text-wrapper-4">7/24 İletişim Merkezi</div>
          <div className="text-wrapper-5">Müşteri Ol</div>
          <div className="text-wrapper-6">Bize Ulaşın</div>
          <img className="line" alt="Line" src="line-1.svg" />
        </footer>
        <header className="header">
          <div className="text-wrapper-7">English</div>
          <img className="group" alt="Group" src="group.png" />
        </header>
      </div>
    </div>
  );
};
