import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import SideNavigationCharacter from './SideNavigationCharacter'
import CharacterMain from './CharacterMain/CharacterMain'
import CharacterFeats from './CharacterFeats/CharacterFeats'
import CharacterTrainingAndAttributes from './CharacterTrainingAndAttributes/CharacterTrainingAndAttributes'
import CharacterSpells from './CharacterSpells/CharacterSpells'

function Character({character}) {
    const [versions, setVersions] = useState(null)
    const [activeVersion, setActiveVersion] = useState(null)
    useEffect( ()=> {
        fetch( `/character_versions/${character.id}`)
        .then((r) => {
            if (r.ok) {
                r.json()
                .then(versionsArray => {
                    setVersions(versionsArray)
                    setActiveVersion(versionsArray[0])
                })
            } else {
                console.log(r)
            }
        })
    },[])

    return(
        <div className='flex'>
            <SideNavigationCharacter router="character" character={character} versions={versions} activeVersion={activeVersion} setActiveVersion={setActiveVersion} setVersions={setVersions}/>
            {/* <Routes>
                <Route path='/' element={<CharacterMain/>}/>
                <Route path='feats' element={<CharacterFeats characterObj='' />}/>
                <Route path='training-and-attributes' element={<CharacterTrainingAndAttributes characterObj='' />}/>
                <Route path='spells' element={<CharacterSpells/>}/>
            </Routes> */}
        </div>
    )
}

export default Character