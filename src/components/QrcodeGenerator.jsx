import React from 'react'
import { useState } from 'react';

function QrcodeGenerator() {
    let [value,setValue]=useState('');
    let [url,setUrl]=useState('')
    function changeValue(e)
    {
        e.preventDefault();
        setValue(e.target.value);
    }
   
   const generateQR=()=>{
        let url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+value;
        setUrl(url);
   }
   const downloadQRCode = () => {
    // Create an anchor tag dynamically to trigger the download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qrcode.png'; // Set the default download filename
    link.click();
};
  return (
    <div>
        <h1>Qr Generator</h1>
        <input type="text" className='border border-black' onChange={changeValue}/>
        <button className='border' onClick={generateQR}>Generate</button>
        <img src={url} alt="No image" className='' />
        <button className='border' onClick={downloadQRCode}>Download</button>
    </div>
  )
}

export default QrcodeGenerator