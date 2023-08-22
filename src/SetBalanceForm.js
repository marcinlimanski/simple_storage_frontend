// src/BalanceForm.js

import React, { useState } from 'react';
import { postBalance } from './api/SimpleStorageApi';

const BalanceForm = () => {
    const [output, setOutput] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = async () => {
        try {
            setIsLoading(true); // Set loading state to true
            const newOutput = await postBalance(inputValue);
            setOutput(newOutput);
        } catch (error) {
            // Handle error if needed
        } finally {
            setIsLoading(false); // Set loading state back to false
        }
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Enter output value"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button onClick={handleButtonClick}>Submit</button>
            </div>
            {isLoading ? (
                <p>Updating balance...</p> // Display loading indicator while isLoading is true
            ) : (
                output && <p>Output: {output}</p>
            )}
        </div>
    );
};

export default BalanceForm;
