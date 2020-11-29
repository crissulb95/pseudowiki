import React from 'react'
import { HeroIndex } from '../details/HeroIndex'

export const MarvelPage = () => {
    return (
        <div>
            <h2>Marvel Page</h2>
            <hr />

            <HeroIndex publisher='Marvel Comics' />
        </div>
    )
}
