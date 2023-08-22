import React, { useState, useEffect } from 'react';
import {getBalance} from './SimpleStorageApi';
import './App.css';

function App() {
  const [balance, setBalance] = useState(null);

  const handleGetBalanceClick = async () => {
    const current_balance = await getBalance();
    setBalance(current_balance);
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Storage Balance</h1>
          {balance !== null ? (
              <p>Current storage balance: {balance}</p>
          ) : (
              <p>No balance yet.</p>
          )}
          <button onClick={handleGetBalanceClick}>Get Balance</button>
        </header>
      </div>
  );
}

export default App;