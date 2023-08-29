import React, { useState, useEffect } from 'react';
import { getBalance } from '../api/SimpleStorageApi';
import '../App.css';

function GetBalance() {
    const [balance, setBalance] = useState(null);

    const handleGetBalanceClick = async () => {
        const current_balance = await getBalance();
        setBalance(current_balance);
    };

    return (
        <div>
            <header className="GetBalance-header">
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

export default GetBalance;