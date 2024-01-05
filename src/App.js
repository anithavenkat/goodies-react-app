import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://ev7ciigrvg.execute-api.ap-south-1.amazonaws.com/default/userAuthentication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, password }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data && data.body === 'true') {
          console.log('Login successful');
          alert('Login successful');
          // Redirect to the next page after successful login
          window.location.href = 'distributegoodie.html';
        } else {
          console.log('Login failed');
          alert('Login Failed');
        }
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="login-box">
      <h2>Login Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          id="phone"
          placeholder="PHONE NUMBER"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <a className="register-link" href="registration.html">
        New Users Click Here!
      </a>
    </div>
  );
};

export default LoginForm;
