import React, { useState, createRef } from 'react';
import { useScreenshot } from 'use-react-screenshot'
import QRCode from "react-qr-code";



function Test() {
  const [qrCodeText, setQRCodeText] = useState('');
  var url = "https://www.freecodecamp.org/news/async-await-javascript-tutorial/"
  
  const generateQRCode = () => {
    console.log("qrlink", url)
    
    setQRCodeText(url);
  }
  return (
    <div>
      <button onClick={generateQRCode}>link</button>
      <QRCode
        size={100}
        value={qrCodeText}
      />
    </div>

  )
} export default Test