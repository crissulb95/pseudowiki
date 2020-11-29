const { authReducer } = require("../../auth/authReducer");
const { types } = require("../../types/types");

describe('Pruebas en authReducer', () => {
    
    test('Debe retornar el estado por defecto', () => {
        const state = authReducer({ isLogged: false }, {} );
        //console.log(state);
        expect(state).toEqual({ isLogged: false });
    })
    
    test('Debe autenticar y cargar el name del usuario', () => {

        const action = {
            type : types.login,
            payload: {
                name: 'Cristian'
            }
        }
        
        const state = authReducer({ isLogged: false }, action );
        //console.log(state);
        expect(state).toEqual({ name: 'Cristian', isLogged: true });
    })

    test('Debe borrar el name del usuario y cambiar el isLogged a false', () => {
        
        const action = {
            type : types.logout,
            payload: {
                name: 'Cristian'
            }
        }
        
        const state = authReducer({ name: 'Cristian', isLogged: true }, action );
        console.log(state);
        expect(state).toEqual({ isLogged: false });
    })
})
