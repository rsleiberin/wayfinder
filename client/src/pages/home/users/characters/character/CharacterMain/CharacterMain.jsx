import { useEffect, useState } from "react"

function CharacterMain({ activeVersion }) {
    const [version, setVersion] = useState(activeVersion)
    useEffect(()=>{
        if(activeVersion){
            fetch(`/versions/${activeVersion.id}`,{
                method: 'GET'
            }).then((r) => {
                if (r.ok) {
                    r.json()
                    .then(versionObj => {
                        setVersion(versionObj)
                    })
                } else {
                    console.log(r)
                }
            })
        }
    },[activeVersion])
    if (version) {
        console.log(version)
        return (
            <div className="CHARACTERMAIN flex-grow p-4 bg-slate-100">
                <p> id: {version.id}</p>
                <p> character_name: {version.character_name}</p>
                <p> alignment: {version.alignment} </p>
                {(version.levels).map(levelObj => {
                    return(
                    <div key={levelObj.id}>
                        <p>level_id: {levelObj.id}</p>
                        <p>level_number: {levelObj.level_number}</p>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default CharacterMain