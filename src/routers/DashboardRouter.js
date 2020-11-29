import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DCPage } from '../components/DC/DCPage'
import { HeroDetail } from '../components/details/HeroDetail'
import { MarvelPage } from '../components/Marvel/MarvelPage'
import { SearchPage } from '../components/search/SearchPage'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <div className='container pt-5'>
                <Switch>
                        <Route exact path='/dc' component={ DCPage } />
                        <Route exact path='/marvel' component={ MarvelPage } />
                        <Route exact path='/search' component={ SearchPage } />
                        <Route exact path='/hero/:heroeId' component={ HeroDetail } />
                        <Redirect to='/dc' />
                </Switch>
            </div>
        </>
    )
}
