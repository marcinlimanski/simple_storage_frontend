const BASE_URL = 'http://172.233.196.238:3001';

export const getBalance = async () => {
    try {
        const response = await fetch(`${BASE_URL}/balance`);
        const data = await response.json();
        const balanceOutput = data.balance.output;
        console.log("DEBUG: "+balanceOutput)
        return balanceOutput;
    } catch (error) {
        console.error('Error fetching roll number:', error);
        return null;
    }
};

export const postBalance = async (outputValue) => {
    try {
        const response = await fetch(`${BASE_URL}/setBalance`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                x : outputValue
            }),
        });
        if (response.ok) {
            const data = await response.json();
            return data.balance.output;
        } else {
            throw new Error('POST request failed');
        }
    } catch (error) {
        console.error('Error making POST request:', error);
        throw error;
    }
};