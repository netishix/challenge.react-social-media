import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="spark-digital-logo" width="100px" className="mr-2" />
            <span className="small font-italic">blog</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
