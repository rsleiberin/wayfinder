import { Routes, Route } from 'react-router-dom'
import CharacterList from './CharacterList'
import Character from './Character'


function Characters( {user} ) {
    console.log("Characters")
    return (
        <Routes>
            <Route path='/' element={<CharacterList user={user} />}/>
            <Route path=':id/*' element ={<Character />}/>
        </Routes>
    )
}

export default Characters