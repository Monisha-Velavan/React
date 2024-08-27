import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Log the user's input data to the console
        console.log('User Data:', { email, password });

        // Reset error message
        setErrorMessage('');

        // Validate email
        if (!email) {
            setErrorMessage('Email is required.');
            return;
        }

        // Validate email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        // Validate password
        if (!password) {
            setErrorMessage('Password is required.');
            return;
        }

        // If validation passes, make the API call
        try {
            const response = await fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            // Print the response in the console
            console.log('API Response:', data);

            if (response.ok) {
                alert('Login successful!');
                // Further actions (e.g., redirect the user) can be handled here
            } else {
                setErrorMessage(data.error || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
