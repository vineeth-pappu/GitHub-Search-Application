import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import GithubSearchFilter from './containers/GithubSearchFilter';

function App() {
  return (
    <div className="app-wrapper">
        <AppHeader />

        <GithubSearchFilter />
    </div>
  );
}

export default App;
