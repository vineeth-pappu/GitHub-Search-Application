import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import GithubSearchFilter from './components/GithubSearchFilter';

function App() {
  return (
    <div>
        <AppHeader />

        <GithubSearchFilter />
    </div>
  );
}

export default App;
