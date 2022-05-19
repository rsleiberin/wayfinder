import {useEffect, useState} from 'react'
import SideNavigationCharacterList from './SideNavigationCharacterList'
import CharacterCard from './CharacterCard'
function CharacterList( {user, setCharacter}) {

    const [characters, setCharacters] = useState(null)

    useEffect( ()=> {
        fetch('/characters')
        .then( r => {
            if(r.ok){
                r.json()
                .then(charactersArray => {
                    setCharacters(charactersArray)
                })
            } else {
                console.log(r)
            }
        })
    },[])

    const onClickCreateCharacter = ()=> {
        fetch( '/characters',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: user.id,
            }),
        })
        .then((r) => {
            if (r.ok) {
                r.json()
                .then(character => {
                    setCharacter(character)
                    setCharacters([...characters, character])
                })
            } else {
                console.log(r)
            }
        })
    }

    if(characters){
        return (
            <div className='bg-slate-200 flex flex-grow'>
                <SideNavigationCharacterList onClickCreateCharacter={onClickCreateCharacter}/>
                <div className='flex-grow p-4'>
                    <CharacterCard characterObj={null} onClickCreateCharacter={onClickCreateCharacter}/>
                    {characters.map(characterObj => <CharacterCard key={characterObj.id} user={user} characterObj={characterObj} setCharacter={setCharacter}/>)}
                </div>
            </div>
        )
    }
}

export default CharacterList