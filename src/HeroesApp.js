import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

/**estado inicial al entrar a la aplicación
 * si no encuentra nada el el localstorage con el key user,
 * retorna un objeto con el key value isLogged: false
 */
const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { isLogged: false };
}



export const HeroesApp = () => {
    
    const [ user, dispatch ] = useReducer( authReducer, {}, init )

    useEffect(() => {
        localStorage.setItem('user',JSON.stringify( user ));
    }, [ user ])

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}