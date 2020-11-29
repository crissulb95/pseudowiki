import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginPage = () => {

    const prevPath = localStorage.getItem('prevPath') || '/';

    const history = useHistory();

    const { dispatch } = useContext(AuthContext);
    const myUser = {
        name: 'Cristian'
    }

    const login = {
        type : types.login,
        payload : myUser
    }

    const handleLogin = () => {
        //history.push('/');
        dispatch( login );
        history.replace(prevPath);
    }

    return (
        <div className='container mt-5'>
            <h3>Inicio de sesión</h3>
            <hr />

            <button 
                className='btn btn-outline-info'
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
