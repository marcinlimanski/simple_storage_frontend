import React, { useState } from 'react';
import { getBalance } from '../api/SimpleStorageApi';
import '../App.css';

function GetBalance() {
    const [balance, setBalance] = useState(null);

    const handleGetBalanceClick = async () => {
        try {
            const current_balance = await getBalance();
            setBalance(current_balance);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <header className="GetBalance-header">
                <h2 className="h3 mb-3 fw-normal">Storage Balance</h2>
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