import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../selectors/getHeroBy'
import { HeroCard } from './HeroCard';

export const HeroIndex = ({ publisher }) => {
    
    const heroes = useMemo(() => getHeroByPublisher( publisher ), [ publisher ])

    return (
        <div className='card-columns animate__animated animate__fadeInRight'>
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        {...hero}
                    />
                ) )
            }
        </div>
    )
}
