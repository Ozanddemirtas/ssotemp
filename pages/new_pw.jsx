import React from "react";
import { Lock } from "./Lock";
import "./style.css";

export const MacbookPro = () => {
  return (
    <div className="macbook-pro">
      <div className="div">
        <div className="overlap-group">
          <div className="overlap">
            <div className="text-wrapper">DEVAM</div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-2">Yeni Şifre</div>
            <img className="line" alt="Line" src="line-3.svg" />
            <Lock className="vuesax-bold-lock" />
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-2">Yeni Şifre Tekrar</div>
            <img className="line" alt="Line" src="line-4.svg" />
            <Lock className="lock-instance" />
          </div>
          <div className="text-wrapper-3">Yeni Şifre Oluştur</div>
          <div className="navbar">
            <div className="text">
              <span className="span">
                Şifreniz 6 karakter olmalıdır.
                <br />
              </span>
            </div>
            <div className="text">
              <span className="span">
                Şifreniz numaralardan oluşmalıdır.
                <br />
              </span>
            </div>
            <div className="text">
              <span className="span">
                Daha önceki 5 şifrenizden farklı olmalıdır.
                <br />
              </span>
            </div>
            <div className="span-wrapper">
              <span className="span">Şifreniz ardışık ve tekrar rakamlardan oluşmamalıdır</span>
            </div>
          </div>
          <div className="ellipse" />
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="ellipse-4" />
        </div>
        <footer className="footer">
          <h1 className="h-1">0 850 222 8222</h1>
          <div className="text-wrapper-4">7/24 İletişim Merkezi</div>
          <div className="text-wrapper-5">Müşteri Ol</div>
          <div className="text-wrapper-6">Bize Ulaşın</div>
          <img className="img" alt="Line" src="line-1.svg" />
        </footer>
        <header className="header">
          <div className="text-wrapper-7">English</div>
          <img className="group" alt="Group" src="group.png" />
        </header>
      </div>
    </div>
  );
};
