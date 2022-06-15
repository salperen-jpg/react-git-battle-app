import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PopularContextProvider } from './context/popular_repos_context';
import { BattleProvider } from './context/battle_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PopularContextProvider>
      <BattleProvider>
        <App />
      </BattleProvider>
    </PopularContextProvider>
  </React.StrictMode>
);
