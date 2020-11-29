import React, { useMemo } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import { heroes } from '../data/heroesInfo'
import { HeroCard } from '../details/HeroCard';
import { getHeroByName } from '../selectors/getHeroBy';

export const SearchPage = ({history}) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );
    /**QueryString separa el query de la url en key values, por lo que se puede extraer
     * solo lo que necesitemos desde el query, en este caso solo utilizaremos "q"
     */

    
    const [ value, handleInputChange, reset ] = useForm({
        search: q
    });
    
    const heroesFiltered = useMemo(() => getHeroByName( q ), [q]);
    
    const handleSearch = e => {
        e.preventDefault();
        history.push(`?q=${value.search}`);
    }

    return (
        <div>
            <h2>Searching</h2>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h3>Formulario de búsqueda</h3>
                    <hr />

                    <form
                        onSubmit={ handleSearch }
                    >
                        <input 
                            autoComplete='off'
                            type='text'
                            placeholder='Busca tu súperheroe'
                            className='form-control'
                            name='search'
                            value={value.search}
                            onChange={handleInputChange}
                        />

                        <button
                            type='submit'
                            className='btn mt-4 btn-block btn-outline-success'
                        >
                            ¡Buscar!
                        </button>
                    </form>
                </div>
                <div className='col-7'>
                    <h3>Resultados: </h3>
                    <hr />

                    {
                        q === '' && <div className='alert alert-info text-center'>
                                        Ingresa el nombre de un súper
                                    </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) 
                        && <div className='alert alert-warning text-center'>
                                No existe el heroe con el súper-nombre {q} :C
                            </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
