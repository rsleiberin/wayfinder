import { Routes, Route } from 'react-router-dom'
import SideNavigation from '../../../components/SideNavigation'
import GameList from './gamelist/GameList'
import Game from './game/Game'

function Games() {
    console.log("Games")
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