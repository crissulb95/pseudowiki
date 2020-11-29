import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../selectors/getHeroBy';

export const HeroDetail = ({history}) => {

    const { heroeId } = useParams();
    const [ hero ] =  useMemo(() => getHeroById( heroeId ), [ heroeId ]) ;

    if(!hero) {
        return <Redirect to='/' />
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    const handleClick = () => {

        if( history.length <= 2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img 
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt={ superhero }
                    className='img-thumbnail  animate__animated animate__fadeInLeft'
                />
            </div>
            <div className='col-8'>
                <h3>{ superhero }</h3>
                <ul>
                    <li className='list-group-item'> <b>Alter Ego: </b>{ alter_ego }</li>
                    <li className='list-group-item'> <b>Editorial: </b>{ publisher }</li>
                    <li className='list-group-item'> <b>Primera aparición: </b>{ first_appearance }</li>
                </ul>

                <h5>Portadores del manto</h5>
                <p>{ characters }</p>

                <button 
                    className='btn btn-outline-warning'
                    onClick={ handleClick }
                >    
                    Volver
                </button>
            </div>
        </div>
    )
}
