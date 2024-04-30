import React, { useState } from 'react'
import { useForm } from './useForm';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    /* const [userName, setUserName] = useState('');
    const [password, setPassword] = useState(''); */

    const navigate = useNavigate();

    const { name, password, onInputChange, onResetForm } = useForm({
        name: '',
        password: '',
    });

    /* const handleSubmit = (event) => {
        event.preventDefault()
        console.log({
            name: userName,
            password: password
        });
    } */

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate('/home', {
            repalce: true,
            state:{
                logged:true, /* propiedad personalixada */
                name,
            },
        });
        onResetForm();
    }

    return (
        <div className='wrapper'>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    name='name'
                    id='name'
                    placeholder='name'
                    /* onChange={({ target }) => setUserName(target.value)} */
                    onChange={onInputChange}
                    required
                    autoComplete='off'
                />
                <input
                    type="password"
                    value={password}
                    name='password'
                    id='password'
                    placeholder='password'
                    /* onChange={({ target }) => setPassword(target.value)} */
                    onChange={onInputChange}
                    required
                    autoComplete='off'
                />
                <button>Login</button>
                <p>Iniciar sesión</p>
            </form>
        </div>
    )
}

export default Login
