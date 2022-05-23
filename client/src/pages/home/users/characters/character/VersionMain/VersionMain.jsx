import { useEffect, useState } from "react"

function VersionMain({ activeVersion }) {
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
            <div className="flex-grow bg-slate-100 mb-2">
                <div className="h-fit p-4 bg-slate-100">
                    <p> id: {version.id}</p>
                    <p> character_name: {version.name}</p>
                    <p> alignment: {version.alignment} </p>
                </div>
                <div>
                    {(version.levels).map(levelObj => {
                            return(
                            <div key={levelObj.id} className="bg-red-100 mb-2">
                                <p>level_id: {levelObj.id}</p>
                                <p>level_number: {levelObj.level_number}</p>
                            </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default VersionMain