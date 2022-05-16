import SideNavigation from './SideNavigation'
import CharacterCard from './CharacterCard'
function CharacterList( {user, setCharacter}) {
    console.log("CharacterList")
    console.log(user.characters.length)
    if (user.characters.length < 1) {
        return(
            <div className='bg-slate-200 flex flex-grow'>
                <SideNavigation />
                <div className=''>
                    <CharacterCard characterObj={null}/>
                </div>
            </div>
        )
    } else {
        return (
            <div className='bg-slate-200 flex flex-grow'>
                <SideNavigation />
                <div className='flex-grow p-4 grid-cols-1'>
                    {user.characters.map(characterObj => <CharacterCard characterObj={characterObj}/>)}
                </div>
            </div>
        )
    }
}

export default CharacterList