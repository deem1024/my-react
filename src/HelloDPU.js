import React from 'react';
import './HelloDPU.css';
import dpuLogo from './dpuLogo.png';


function HelloDPU() {
  return (
    <div className="HelloDPU">
        <h1>Hello DPU</h1>
        <img src={dpuLogo} alt="DPU logo" />
    </div>
  );
}

export default HelloDPU;
