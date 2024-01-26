'use client'
import React, { useState } from 'react';
import './LoginPage.css'; // Import CSS file for styling

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        // Login logic
    };

    const handleSignUp = () => {
        // Handle sign up action, such as redirecting to sign up page
    };

    return (
        <div className="login-container"> {/* Apply container class */}
            <h2 className='text-center'>Login</h2>
            {error && <div className="error-message">{error}</div>} {/* Apply error message class */}
            <div className="form-group"> {/* Apply form group class */}
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group"> {/* Apply form group class */}
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
           <div className="login-button  text-center py-2"> <button onClick={handleLogin}>Login</button></div> 
           <div className="signup-button text-right"> <button onClick={handleSignUp}> Sign up</button> {/* Add Sign Up button */}</div> 
        </div>
    );
};

export default LoginPage;

