import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="relative h-screen w-full flex justify-center items-center bg-neutral-900">
            {/* Ensure the background blur does not interfere with the input fields */}
            <div className="absolute inset-0 bg-fuchsia-400 bg-opacity-20 blur-[100px] pointer-events-none"></div>
            <div className="relative z-10 bg-white p-6 rounded w-80">
                <h2 className="text-2xl font-bold mb-3 text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5 flex flex-col">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="rounded-sm cursor-pointer px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-sm px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded-sm px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                        Register
                    </button>
                    <p className="mt-3 font-semibold">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
