import React from 'react';
import { mount, shallow } from 'enzyme';
import { HeroDetail } from '../../components/details/HeroDetail';
import { Route } from 'react-router-dom';


describe('Pruebas en HeroDetail', () => {

    const historyMock = {
        length: 14,
        goBack: jest.fn(),
        push: jest.fn()
    }
    
    test('Debe de lanzar redirect si no hay argumento en el url', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroDetail 
                    history={historyMock}
                />
            </MemoryRouter>
            );
    
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Redirect').exists()).toBe(true)
    })
    
    test('Tiene que mostrar un heroe si el parámetro existe y si se encuentra ', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-batman']}>
                <Route path='/hero/:heroeId' component={ HeroDetail } />
            </MemoryRouter>
            );
    
            expect(wrapper.find('row').exists()).toBe(true);

    })
    
    test('Presionando el boton debe llamar al push', () => {
        
        const historyMock = {
            length: 1,
            goBack: jest.fn(),
            push: jest.fn()
        }
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-batman']}>
                <Route path='/hero/:heroeId' component={ () => <HeroDetail history={historyMock} /> } />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        
        expect(historyMock.push).toHaveBeenCalledWith('/');
        expect(historyMock.goBack).not.toHaveBeenCalled();

    })
    
    test('Debe llamar al metodo history.goBack()', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-batman']}>
                <Route path='/hero/:heroeId' component={ () => <HeroDetail history={historyMock} /> } />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        
        expect(historyMock.goBack).toHaveBeenCalled();
        expect(historyMock.push).not.toHaveBeenCalled();
        expect(historyMock.push).toHaveBeenCalledTimes(0);

    })
    
    test('Debe lanzar redirect si el heroe segun el query no existe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-gambit']}>
                <Route path='/hero/:heroeId' component={ () => <HeroDetail history={historyMock} /> } />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        
        expect(wrapper.text()).toBe('');
        expect(wrapper.find('Redirect').exists()).toBe(false);

        


    })
    

})
