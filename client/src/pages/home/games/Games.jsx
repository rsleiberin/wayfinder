import { Routes, Route } from 'react-router-dom'
import SideNavigationGames from './SideNavigationGames.jsx'
import GameList from './gamelist/GameList'
import Game from './game/Game'

function Games() {
    console.log("Games")
    return(
        <>
            <SideNavigationGames router="games" />
            <Routes>
                <Route path='/' element={<GameList />}/>
                <Route path=':id' element={<Game />}/>
            </Routes>
        </>
    )
}

export default Games