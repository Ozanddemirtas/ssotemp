import React from "react";
import "../auth.scss";

export const MacbookPro = () => {
  return (
    <div className="macbook-pro">
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
          <img className="guvenlik" alt="Guvenlik" src="guvenlik-02-1.png" />
          <div className="text-wrapper-2">Mobil Bildirim ile Doğrulama</div>
          <div className="overlap-2">
            <div className="component">
              <img className="icon-tik" alt="Icon tik" src="icon-tik-1.svg" />
            </div>
            <div className="ellipse" />
            <p className="nternet-bankac-l-na">
              İnternet Bankacılığına giriş yapmak için Burgan Mobil Uygulamanıza anlık bildirim ile iletilen doğrulama
              kodunuzu onaylamanız gerekmektedir. <br /> <br />
              Telefonunuzun “Ayarlar” menüsünden Burgan Mobil Uygulamamıza izin vererek bildirimlerinizi
              görüntüleyebilir, uygulama içindeki ‘Bekleyen Onaylarım’ menüsünden onaylayabilirsiniz. <br /> <br />
              Bildirim ile doğrulama yapmakta sorun yaşıyorsanız, kayıtlı telefonunuza gönderilecek SMS ile giriş yapmak
              için 180 saniye sonra SMS GÖNDER butonuna tıklayarak eşleşmiş cihazınızı otomatik olarak kaldırarak giriş
              yapabilirsiniz.
            </p>
            <img className="icon-info" alt="Icon info" src="icon-info-02-2.svg" />
          </div>
          <p className="g-venlik-resminizi">
            <span className="span">Güvenlik resminizi kontrol edip, Burgan Mobil Uygulamanıza iletilen </span>
            <span className="text-wrapper-3">039648</span>
            <span className="span"> referans numaralı bildirimi onaylayarak giriş yapabilirsiniz.</span>
          </p>
          <img className="ww" alt="Ww" src="ww-1.png" />
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
          <img className="group-2" alt="Group" src="group.png" />
        </header>
      </div>
    </div>
  );
};
