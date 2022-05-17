import VersionCard from './VersionCard'
import {BsPlusCircleDotted } from 'react-icons/bs'

function SideNavigation({router, versions, character, setVersions, setActiveVersion, activeVersion}) {

    const onClickCreateNewVersion = ()=> {
        console.log(character)
        fetch( '/versions',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                character_id: character
            }),
        })
        .then((r) => {
            if (r.ok) {
                r.json()
                .then(versionObj => {
                    setVersions([...versions, versionObj])
                    setActiveVersion(versionObj)
                })
            } else {
                console.log(r)
            }
        })
    }

    if(router === "characterList"){
        return (
            <div className='left-0 top-12 w-64 z-5 h-full bg-slate-50 flex flex-col p-4'>
                <button className='h-12 items-center text-white hover:text-red-700 border-2 border-red-700 font-semibold bg-red-700 hover:bg-white py-1 rounded-md text-lg px-2'>Create Character</button>
            </div>
        )
    } else if (router === "character") {
        console.log("SideBar versions: ", versions)
        if (!versions) {
            return(
                <div className='left-0 top-12 w-64 z-5 h-full bg-slate-50 flex flex-col p-4'>
                    <ul className='items-center h-12 bg-slate-200 rounded-md border-2 border-red-700 mb-2'></ul>
                </div>
            )
        } else {
            return (
                <div className='left-0 top-12 w-64 z-5 h-full bg-slate-50 flex flex-col p-4'>
                    <h2 className='items-center text-center font-semibold mb-2 border-b-2 border-red-700'>Versions</h2>
                    <div className="bg-green-600 border-2 border-slate-50 h-12 rounded-md flex mb-2">
                        <button onClick={onClickCreateNewVersion} className="font-semibold h-full inline-flex items-center align-middle flex-grow justify-center">
                            <BsPlusCircleDotted className="text-white text-3xl mr-2"/>
                            <span className="text-white font-semibold text-xl">New Version</span>
                        </button>
                    </div>
                    <ul className='items-center bg-slate-300 h-fit rounded-md border-2 border-red-700 mb-2 p-2'>
                        {versions.map(versionObj => <VersionCard key={versionObj.id} versionObj={versionObj} setActiveVersion={setActiveVersion} activeVersion={activeVersion}/>)}
                    </ul>
                </div>
        )}
    } else if (router === "games") {
        return (
            <div className='left-0 top-12 w-64 z-5 h-full bg-slate-50 flex flex-col p-4'>
                
            </div>
        )
    } else {
        return (
            <div className='left-0 top-12 w-64 z-5 h-full bg-slate-50 flex flex-col p-4'>
                No Route
            </div>
        )
    }
}

export default SideNavigation