import {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import CharacterList from './CharacterList/CharacterList'
import Character from './character/Character'


function Characters( {user} ) {

    const [character, setCharacter] = useState(null)

    return (
        <Routes>
            <Route path='/' element={<CharacterList user={user} setCharacter={setCharacter}/>}/>
            <Route path=':id/*' element ={<Character character={character}/>}/>
        </Routes>
    )
}

export default Characters