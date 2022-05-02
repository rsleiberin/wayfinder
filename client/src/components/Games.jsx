import { Routes, Route } from 'react-router-dom'
import SideNavigation from './SideNavigation'
import GameList from './GameList'
import Game from './Game'

function Games() {

    return(
        <>
            <SideNavigation router="games" />
            <Routes>
                <Route path='/' element={<GameList />}/>
                <Route path=':id' element={<Game />}/>
            </Routes>
        </>
    )
}

export default Games