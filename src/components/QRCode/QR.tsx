import React from "react";
import './QR.css'
import { QRCodeSVG } from "qrcode.react";

interface QRCodeProps {
  url: string;
  primaryText: string;
  secondaryText: string;
}

const QR: React.FC<QRCodeProps> = ({ url, primaryText, secondaryText }: QRCodeProps) => {
  return <article className="qr-code-container">
    <div className="qr-div">
      <QRCodeSVG 
        value={url} 
        bgColor="#3c87fb"
        fgColor="#fbfbfb"
        height={"12em"}
        width={"auto"}
      />
    </div>
    <div className="texts-div">
      <p className="primary-text">{primaryText}</p>
      <p className="secondary-text">{secondaryText}</p>
    </div>
  </article>;
};

export default QR;
