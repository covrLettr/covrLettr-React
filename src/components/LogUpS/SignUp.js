import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LogUpS.css';


const LogIn = () => (
    <form class="auth-form standard">
        <label for="name">Name: <input name="name" required></label>
        <label for="email">Email: <input type="email" name="email" required></label>      
        <label for="password">Password: <input type="password" name="password" required>
        </label>
        <button class="signin-button">Sign Up</button>
        <p class="go-back-link"><a href="../index.html">Go Back</a></p>
    </form>
);

export default LogIn;

