import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import { Navbar } from '../../components/ui/Navbar';
import { types } from '../../types/types';
import '@testing-library/jest-dom';

const { mount } = require("enzyme");
const { AuthContext } = require("../../auth/AuthContext");

describe('Pruebas en el navbar', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }
    
    const contexto = {
        dispatch: jest.fn(),
        user: {
            isLogged: true,
            name:'Alice'
        }
    }

    
    const wrapper = mount(
        <AuthContext.Provider  value={ contexto }>
            <MemoryRouter>
                <Router history={ historyMock }>
                    <Navbar/>
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach( () => {
        jest.clearAllMocks();
    } );

    test('Debe mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-muted').text().trim()).toBe('Alice');

    })

    test('Debe hacer el logout y usar el history', () => {
        
        wrapper.find('button').prop('onClick')();

        expect( contexto.dispatch ).toHaveBeenCalledWith({
            type : types.logout,
        });

        expect( historyMock.replace ).toHaveBeenCalledWith('/login');   

    })
    
    

})
