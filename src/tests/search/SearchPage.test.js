import React from 'react';
import { SearchPage } from '../../components/search/SearchPage';
const { mount } = require("enzyme");
const { MemoryRouter, Route } = require("react-router-dom");



describe('Pruebas en la página de búsquedas', () => {
    
    test('Mostrar con valores por defecto ', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path='/search' component={ SearchPage } />
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Ingresa el nombre de un súper')

    })
    
    test('Debe mostrar a Batman y el input con el valor del queryString ', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path='/search' component={ SearchPage } />
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();


    })
    
    test('Debe mostrar un error si no se encuentra el heroe ', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=pacman']}>
                <Route path='/search' component={ SearchPage } />
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('pacman');
        expect(wrapper.find('.alert-warning').text().trim()).toBe(`No existe el heroe con el súper-nombre ${wrapper.find('input').prop('value')} :C`)

    })

    test('Tiene que llamar el push del history', () => {
        
        const history = {
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=pacman']}>
                <Route 
                    path='/search' 
                    component={ () => {<SearchPage history={history} />} } 
                />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change',{
            target:{
                name: 'search',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect( history.push ).toHaveBeenCalledWith(`?q=batman`)

    })
    
    

})
