import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                navigate('/home');
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="relative h-screen w-full flex justify-center items-center bg-neutral-900">
            <div className="absolute inset-0 bg-fuchsia-400 bg-opacity-20 blur-[100px] pointer-events-none"></div>
            <div className='relative z-10 bg-white p-6 rounded w-80'>
                <h2 className='text-3xl font-semibold mb-3'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3 flex flex-col'>
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder='Enter email'
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='rounded-sm px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500'
                            required
                        />
                    </div>
                    <div className='mb-3 flex flex-col'>
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter password'
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='rounded-sm px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500'
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                        Login
                    </button>
                    <p className='mt-3 font-semibold'>Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
