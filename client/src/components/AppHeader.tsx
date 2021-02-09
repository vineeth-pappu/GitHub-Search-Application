import React from 'react';
import logo from '../assets/github.svg';

function AppHeader() {
  return (
    <div>
        <header>
            <div className="logo-wrapper">
                <img src={logo} alt="logo" />
            </div>
            <div className="app-title">
                <h1>GitHub Searcher</h1>
                <h6>Search Users or Repositories below</h6>
            </div>
        </header>
    </div>
  );
}

export default AppHeader;
