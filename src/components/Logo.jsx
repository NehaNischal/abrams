import React from 'react';
import logoImg from '../assets/logo.png';

const Logo = ({ className, style }) => (
  <img 
    src={logoImg} 
    alt="Abrams Logo" 
    className={className} 
    style={{ height: 'var(--logo-height, 110px)', objectFit: 'contain', display: 'block', ...style }} 
  />
);

export default Logo;
