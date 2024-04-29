import React, { useState } from 'react'


const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Submit login');
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userName}
                    name='Username'
                    placeholder='Username'
                    onChange={({ target }) => setUserName(target.value)}
                />
                <input
                    type="password"
                    value={password}
                    name='Password'
                    placeholder='Password'
                    onChange={({ target }) => setPassword(target.value)}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
