const { mount } = require("enzyme");
const { AuthContext } = require("../../auth/AuthContext");
const { LoginPage } = require("../../components/login/LoginPage");
const { types } = require("../../types/types");


describe('Pruebas en el login', () => {

    const history = {
        replace: jest.fn()
    }
/**
    const contexto = {
        dispatch: jest.fn(),
        user: {
            isLogged: true,
            user:{
                name: 'Momoy'
            }
        }
    } */

    
    const contexto = {
        dispatch: jest.fn(),
        user: {
            isLogged: false,
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contexto}>
            <LoginPage 
                history={history}
            />
        </AuthContext.Provider>
    );
    
    test('Debe corresponder al snapshot ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe realizar dispatch y la navegación', () => {
        const handleClick = wrapper.find('button').prop('onClick');

        handleClick();

        expect( contexto.dispatch ).toHaveBeenCalledTimes(1);

        expect( contexto.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Cristian'
            }
        });

        expect( history.replace).toHaveBeenCalledWith('/');
        
        localStorage.setItem('prevPath', '/marvel');
        handleClick();
        
        expect( history.replace).toHaveBeenCalledWith('/marvel');
    })
    

})
