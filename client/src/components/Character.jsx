import { Routes, Route } from 'react-router-dom'
import SideNavigation from './SideNavigation'
import CharacterMain from './CharacterMain'
import CharacterFeats from './CharacterFeats'
import CharacterTrainingAndAttributes from './CharacterTrainingAndAttributes'
import CharacterSpells from './CharacterSpells'

function Character() {

    return(
        <>
            <SideNavigation router="character" />
            <Routes>
                <Route path='/' element={<CharacterMain/>}/>
                <Route path='feats' element={<CharacterFeats characterObj='' />}/>
                <Route path='training-and-attributes' element={<CharacterTrainingAndAttributes characterObj='' />}/>
                <Route path='spells' element={<CharacterSpells/>}/>
            </Routes>
        </>
    )
}

export default Character