const { shallow, mount } = require("enzyme")
const { MemoryRouter } = require("react-router-dom")
const { PrivateRouter } = require("../../routers/PrivateRouter")

describe('Pruebas en el enrutador privado', () => {

    const aux = {
        location: {
            pathname : '/dc'
        }
    }

    Storage.prototype.setItem = jest.fn();
    
    test('Debe mostrar el componente si el usuario está autenticado y se guarda en el localstorage', () => {
        const wrapper = mount(//No me va a funcionar hasta que apliquen el nuevo parche a enzyme para react 17 
            //mount para cuando se necesite renderizar un higher order component vvvv
            <MemoryRouter>
                <PrivateRouter 
                    component={ () => ( <p>Prueba</p> ) } 
                    isAuth={ true }
                    { ...aux }
                /> 
            </MemoryRouter>
        )

        expect( wrapper.find('p').exists() ).toBe( true );
        expect( localStorage.setItem ).toHaveBeenCalledWith('prevPath', '/dc' );
    });

    test('Debe bloquear el componente si no está autenticado', () => {
        
        const wrapper = mount(//No me va a funcionar hasta que apliquen el nuevo parche a enzyme para react 17 
            //mount para cuando se necesite renderizar un higher order component vvvv
            <MemoryRouter>
                <PrivateRouter 
                    component={ () => ( <p>Prueba</p> ) } 
                    isAuth={ false }
                    { ...aux }
                /> 
            </MemoryRouter>
        )

        expect( wrapper.find('p').exists() ).toBe( false );
        expect( localStorage.setItem ).toHaveBeenCalledWith('prevPath', '/dc' );

    })
    
    

})
