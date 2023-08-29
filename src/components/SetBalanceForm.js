import React, { useState } from 'react';
import { postBalance } from '../api/SimpleStorageApi';
import '../App.css';

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
            console.error(error);
        } finally {
            setIsLoading(false); // Set loading state back to false
        }
    };

    return (
        <div>
            <h2 className="h3 mb-3 fw-normal">Set new balance</h2>
            <div>
                <input
                    type="text"
                    placeholder="Enter output value"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
            <br/>
            <button onClick={handleButtonClick}>Submit</button>
            {isLoading ? (
                <p>Updating balance...</p> // Display loading indicator while isLoading is true
            ) : (
                output && <p>Output: {output}</p>
            )}
        </div>
    );
};

export default BalanceForm;
