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
        <div className="p-4">
            <h1 className="text-xl mb-2 font-semibold w-full text-slate-500 border-b-2 border-slate-500 pl-6">Concept Information</h1>
            <div className="flex h-64 w-full min-w-min bg-slate-50 rounded-md">
                <div className="h-full w-1/4 min-w-64 bg-slate-50 rounded-md">
                    <form className='p-4 bg-slate-50 h-full flex flex-col rounded-md'>
                            <div className='bg-slate-50 w-full p-2 mb-2 flex items-center border-b-2 border-slate-200 rounded-md'>
                                <input onChange={handleInput} type='text' name='name' placeholder="Enter a name for your concept..." value={formState.email} className='bg-slate-50 placeholder:text-slate-500 placeholder:font-semibold outline-none text-sm flex-1'/>
                            </div>
                            <div className='bg-slate-100 rounded-md w-full p-2 flex-grow items-center rounded-md'>
                                <textarea onChange={handleInput} type='text' name='concept' placeholder="Write a short descrption of your character's concept..." value={formState.concept} className='bg-slate-100 placeholder:text-slate-500 placeholder:font-semibold outline-none text-sm h-full w-full resize-none'>
                                </textarea>
                            </div>
                    </form>
                </div>
                <div className="h-full w-3/4 bg-slate-50 py-4 pr-4 rounded-md">
                    <div className="bg-slate-100 h-full rounded-md grid place-items-center">
                        <h1 className="text-center text-slate-500 font-semibold" >Character Stats Coming Soon</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CharacterMain