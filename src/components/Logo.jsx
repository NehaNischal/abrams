import React from 'react';
import logoImg from '../assets/logo.png';

const Logo = ({ className, style }) => (
  <a 
    href="/" 
    className={className} 
    style={{ display: 'block', ...style, textDecoration: 'none' }}
  >
    <img 
      src={logoImg} 
      alt="Abrams Logo" 
      style={{ height: 'var(--logo-height, 110px)', objectFit: 'contain', display: 'block' }} 
    />
  </a>
);

export default Logo;
