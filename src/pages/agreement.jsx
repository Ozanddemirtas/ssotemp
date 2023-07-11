import React from "react";
import "../css/agreement.css";

export const agreement = () => {
  return (
    <div className="agreement">
      <div className="div">
        <div className="overlap-group">
          <div className="overlap">
            <div className="text-wrapper">DEVAM</div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-2">Sözleşme Başlık</div>
            <p className="lorem-ipsum-is">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              typesetting industry. <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry&#39;s standard dummy text ever since the 1500s <br />
              <br />
              Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              leap typesetting industry.
            </p>
          </div>
          <div className="text-wrapper-3">Okudum, kabul ediyorum.</div>
          <div className="ellipse-wrapper">
            <div className="ellipse" />
          </div>
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
        <div className="div-wrapper">
          <div className="ellipse-2" />
        </div>
      </div>
    </div>
  );
};
