import React from 'react';
import logoImg from '../assets/logo.png';

const Logo = ({ className }) => (
  <img 
    src={logoImg} 
    alt="Abrams Logo" 
    className={className} 
    style={{ height: '75px', objectFit: 'contain', display: 'block' }} 
  />
);

export default Logo;
