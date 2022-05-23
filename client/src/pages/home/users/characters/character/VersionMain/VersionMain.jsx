import { useEffect, useState } from "react"

function VersionMain({ activeVersion, setActiveVersion }) {
    //grab version s
    const [updated, setUpdated] = useState([])
    const [version, setVersion] = useState(null)
    const [temp, setTemp] = useState(null)
    console.log("TEMP", temp)
    useEffect(()=>{
        if(activeVersion){
            fetch(`/versions/${activeVersion.id}`,{
                method: 'GET'
            }).then((r) => {
                if (r.ok) {
                    r.json()
                    .then(versionObj => {
                        console.log(r)
                        setVersion(versionObj)
                        setTemp(versionObj)
                        setFormState(versionObj)
                    })
                } else {
                    console.log(r)
                }
            })
        }
    },[activeVersion])


    useEffect(()=>{
        if(version != temp){
            fetch(`/versions/${activeVersion.id}`,{
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    deity_id: version.deity.id,
                    background_id: version.background.id,
                    character_class_id: version.character_class.id,
                    ancestry_id: version.ancestry.id,
                    heritage_id: version.heritage.id,
                    name: version.name,
                    character_name: version.character_name
                }),
            })
            .then((r) =>{
                if (r.ok) {
                    r.json()
                    .then((r)=>{
                        console.log(r)
                        setTemp(r)
                        setUpdated([...updated.slice(0,-1)])
                    })
                } else {
                    console.log(r)
                }
            })
        }
    },[version])

    const [library, setLibrary] = useState(null)

    useEffect(()=>{
        fetch(`/library`,{
            method: 'GET'
        })
        .then((r) => {
            if (r.ok) {
                r.json()
                .then(array => {
                    setLibrary(array)
                })
            } else {
                console.log(r)
            }
        })
    },[])
    //Alignments
    const alignments = ["LG", "G", "CG", "L", "N", "C", "LE", "E", "CE"]

    const initialFormState = {version}
    const [formState, setFormState] = useState(initialFormState)

    const handleSlotInput = (e) => {
        e.stopPropagation()
        const { name, value, slot } = e.target;
        console.log("VALUE: ", value)
        setFormState(formState => ({...formState, [slot]: {...library[name][value-1]}}))
        setVersion(formState => ({...formState, [slot]: {...library[name][value-1]}}))
        setUpdated([...updated,0])
    }
    const handleTextInput = (e) => {
        e.stopPropagation()
        const { name, value} = e.target;
        console.log("VALUE: ", value)
        setFormState(formState => ({...formState, [name]:value}))
        setVersion(formState => ({...formState, [name]:value}))
        setUpdated([...updated,0])
    }


    if (version && library) {
        console.log("Library: ", library)
        console.log("FORMSTATE: ",formState)
        console.log("VERSION: ", version)
        console.log("TEMP : ", temp)
        return (
            <div className="px-4">
            <h1 className="text-xl mb-2 font-semibold w-full text-slate-500 border-b-2 border-slate-500 pl-6">Version Information</h1>
                <div className="flex min-h-min">
                    <div className="h-full w-1/4 bg-slate-50 p-4">
                        <div className="h-full w-full aspect-square bg-slate-500 rounded-md">
                        </div>
                    </div>
                    <div className="h-full w-3/4 p-4 bg-slate-100">
                        <div className='bg-slate-50 w-full p-2 mb-2 items-center border-b-2 border-slate-200 rounded-md'>
                            <input onChange={handleTextInput} type='text' name='name' placeholder="Enter version name..." value={formState.name} className='bg-slate-50 placeholder:text-slate-500 placeholder:font-semibold outline-none text-sm flex-1 w-full'/>
                        </div>
                        <div className='bg-slate-50 w-full p-2 mb-2 items-center border-b-2 border-slate-200 rounded-md'>
                            <input onChange={handleTextInput} type='text' name='character_name' placeholder="Enter character name..." value={formState.character_name} className='bg-slate-50 placeholder:text-slate-500 placeholder:font-semibold outline-none text-sm flex-1 w-full'/>
                        </div>
                        <div className="flex">
                            <div className='bg-slate-50 w-full p-2 mb-2 mr-4 items-center border-b-2 border-slate-200 rounded-md'>
                                <label>Ancestry</label>
                                <select onChange={handleSlotInput}type='text' name='ancestries' slot='ancestry' value={formState.ancestry.id} className='bg-slate-50 placeholder:text-slate-500 placeholder:font-semibold outline-none text-sm flex-1 w-full'>
                                    if(library) {
                                        library.ancestries.map(ancestry => {
                                            return (
                                                <option value={ancestry.id} key={ancestry.id}>{ancestry.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='bg-slate-50 w-full p-2 mb-2 items-center border-b-2 border-slate-200 rounded-md'>
                                <label>Heritage</label>
                                <select onChange={handleSlotInput} type='text' name='heritages' slot="heritage" value={formState.heritage.id} className='bg-slate-50 placeholder:text-slate-500 placeholder:font-semibold outline-none text-sm flex-1 w-full'>
                                </select>
                            </div>
                        </div>
                        <div className="flex">
                            <div className='bg-slate-50 w-full p-2 mb-2 mr-4 items-center border-b-2 border-slate-200 rounded-md'>
                                <label>Class</label>
                                <select onChange={handleSlotInput} type='text' name='characterClasses' slot="character_class" value={formState.character_class.id} className='bg-slate-50 placeholder:text-slate-500 placeholder:font-semibold outline-none text-sm flex-1 w-full'>
                                    if(library) {
                                        library.characterClasses.map(characterClass => {
                                            return (
                                                <option value={characterClass.id} key={characterClass.id}>{characterClass.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='bg-slate-50 w-full p-2 mb-2 items-center border-b-2 border-slate-200 rounded-md'>
                                <label>Background</label>
                                <select onChange={handleSlotInput} type='text' name='backgrounds' slot="background" value={formState.background.id} className='bg-slate-50 placeholder:text-slate-500 placeholder:font-semibold outline-none text-sm flex-1 w-full'>
                                    if(library) {
                                        library.backgrounds.map(background => {
                                            return (
                                                <option value={background.id} key={background.id}>{background.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="flex">
                            <div className='bg-slate-50 w-full p-2 mb-2 mr-4 items-center border-b-2 border-slate-200 rounded-md'>
                                <label>Diety</label>
                                <select onChange={handleSlotInput} type='text' name='deities' slot="deity" value={formState.deity.id} className='bg-slate-50 placeholder:text-slate-500 placeholder:font-semibold outline-none text-sm flex-1 w-full'>
                                    if(library) {
                                        library.deities.map(deity => {
                                            return (
                                                <option value={deity.id} key={deity.id}>{deity.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='bg-slate-50 w-full p-2 mb-2 items-center border-b-2 border-slate-200 rounded-md'>
                                <label>Alignment</label>
                                <select onChange={handleTextInput} type='text' name='alignment' value={formState.alignment} className='bg-slate-50 placeholder:text-slate-500 placeholder:font-semibold outline-none text-sm flex-1 w-full'>
                                    if(library) {
                                        alignments.map((alignment,index) => {
                                            return (
                                                <option value={alignment} key={index}>{alignment}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VersionMain