import React from 'react';
const { mount } = require("enzyme");
const { AuthContext } = require("../../auth/AuthContext");
const { AppRouter } = require("../../routers/AppRouter");

describe('Pruebas en el AppRouter', () => {
    
    const contexto = {
        dispatch: jest.fn(),
        user: {
            isLogged: false,
        }
    }

    test('Debe mostrar login si no está autenticado', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={ contexto }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe mostrar DCPage si está autenticado', () => {
        

        const contexto = {
            dispatch: jest.fn(),
            user: {
                isLogged: true,
                user:{
                    name: 'Momoy'
                }
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contexto }>
                <AppRouter />
            </AuthContext.Provider>
        );


        expect(wrapper.find('.navbar').exists()).toBe(true)
    })
    

})
