import React from 'react';
import MagpieLogo from '../../icons/magpie_logo.png';

export default function NavBar() {
  return (
    <>
      <nav className="navbar sticky-top">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img
              src={MagpieLogo}
              alt="Magpie Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Magpie
          </div>
        </div>
      </nav>
    </>
  );
}
