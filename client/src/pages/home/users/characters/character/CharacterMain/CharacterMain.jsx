import { useState } from 'react'

function CharacterMain() {
    //handleInput for character concept info
    const initialFormState = { name:"", concept: ""}
    const [formState, setFormState] = useState(initialFormState)

    const handleInput = (e) => {
        e.stopPropagation()
        const { name, value } = e.target;
        setFormState(formState => ({...formState, [name]: value}))
    }

    return (
        <div className="flex h-64 w-full bg-slate-50">
            <div className="h-full w-1/2 bg-slate-50">
                <form className='p-4 bg-slate-50 h-full flex flex-col'>
                        <div className='bg-slate-50 w-full p-2 mb-2 flex items-center border-b-2 border-slate-200 rounded-md'>
                            <input onChange={handleInput} type='text' name='name' placeholder="Enter a name for your concept..." value={formState.email} className='bg-slate-50 placeholder:text-slate-500 placeholder:font-semibold outline-none text-sm flex-1'/>
                        </div>
                        <div className='bg-slate-100 w-full p-2 flex-grow items-center rounded-md'>
                            <textarea onChange={handleInput} type='text' name='concept' placeholder="Write a short descrption of your character's concept..." value={formState.concept} className='bg-slate-100 placeholder:text-slate-500 placeholder:font-semibold outline-none text-sm h-full w-full resize-none'>
                            </textarea>
                        </div>
                </form>
            </div>
            <div className="h-full w-1/2 bg-green-500"></div>
        </div>
    )
}
export default CharacterMain