import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { DashboardRouter } from '../../routers/DashboardRouter';
const { mount } = require("enzyme");
const { AuthContext } = require("../../auth/AuthContext");

describe('Pruebas en enrutador del dashboard', () => {
    
    test('should ', () => {

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
                <MemoryRouter>                
                    <DashboardRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-muted').text().trim()).toBe('Momoy');

    })
    

})
