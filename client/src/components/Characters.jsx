import { Routes, Route } from 'react-router-dom'
import CharacterList from './CharacterList'
import Character from './Character'

function Characters() {
    return (
        <>
            <Routes>
                <Route path='/' element={<CharacterList characterObj='' />}/>
                <Route path=':id/*' element ={<Character />}/>
            </Routes>
        </>
    )
}

export default Characters