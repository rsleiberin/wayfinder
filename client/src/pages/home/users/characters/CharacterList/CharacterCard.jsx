import {useNavigate} from "react-router-dom"
import dwarf from "../../../../../images/dwarf.jpg"

function CharacterCard( { characterObj, onClickCreateCharacter, setCharacter, user} ) {

    const navigate = useNavigate()
    const onClickSetCharacter = () =>{
        setCharacter(characterObj.id)
        navigate(`/users/${user.id}/characters/${characterObj.id}`)
    }

    if (!characterObj) {
        return (
            <button onClick={onClickCreateCharacter} className='bg-slate-50 h-52 min-w-full max-w-fit border-2 border-red-700 rounded-md mb-4 hover:drop-shadow-lg inline-flex'>
                <h1 className="bg-red-700 w-52 min-w-52 max-w-52 h-full text-9xl font-semibold text-white text-center rounded-l-md">+</h1>
                <h1 className=' ml-4 mr-4 text-4xl font-semibold'>Create a New Character</h1>
            </button>
        )
    } else {
        return (
            <button onClick={onClickSetCharacter} className='bg-slate-50 h-52 min-w-full max-w-fit border-2 border-red-700 rounded-md mb-4 hover:drop-shadow-lg inline-flex'>
                    <img className="bg-red-700 w-52 min-w-52 max-w-52 h-full rounded-l-md border-r-2 border-red-700" src={dwarf}/>
                    <h1 className=' ml-4 mr-4 text-4xl font-semibold'>Create a New Character</h1>
            </button>
        )
    }
}

export default CharacterCard