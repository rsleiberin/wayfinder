import {useEffect, useState} from 'react'
import VersionCard from './VersionCard'
import {FaPlus, FaTrashAlt } from 'react-icons/fa'
import {DragDropContext, Droppable } from 'react-beautiful-dnd'

function SideNavigationCharacter({versions, character, setVersions, setActiveVersion, activeVersion}) {
    const onClickCreateNewVersion = ()=> {
        fetch( '/versions',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                character_id: character.id
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
    const handleDeleteVersion =(versionObj)=>{}

    const [versionsOrder, setVersionsOrder] = useState(versions)
    
    function handleOnDragEnd(result) {
        console.log("RESULT: ", result.destination.droppableId)
        if(result.destination.droppableId === "trash") {
            let tempOrder = [...versions]
            tempOrder.splice(result.source.index,1)
            setVersions(tempOrder)
            fetch(`/versions/${parseInt(result.draggableId.split('-')[1])}`, {
                method: 'DELETE'
            })
            .then(r => {
                if(r.status === 204) {
                }else (console.log(r))
            })
        } else {
            const items = Array.from(versionsOrder)
            const [reorderedItem] = items.splice(result.source.index, 1)
            items.splice(result.destination.index, 0, reorderedItem)
            setVersions(items)
        }
    }
    useEffect( ()=> {
        if(versions != versionsOrder) {
            setVersionsOrder(versions)
            versions.map((versionObj,index) => {
                fetch( `/versions/${versionObj.id}`,{
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: versionObj.id,
                        rank: index
                    }),
                })
                .then(r => {
                    if(r.ok){
                        r.json()
                    } else{
                        console.log(r)
                    }
                })
            })
        }
    },[versions])

    if (!versionsOrder) {
        return(
            <div className='left-0 top-12 w-64 z-5 h-full bg-slate-50 flex flex-col p-4'>
                <ul className='items-center h-12 bg-slate-200 rounded-md border-2 border-red-700 mb-2'></ul>
            </div>
        )
    } else {
        return (
            <div className='left-0 top-12 w-64 z-5 h-full bg-slate-50 flex flex-col p-4'>
                <h2 className='items-center text-center font-semibold mb-2 border-b-2 border-red-700'>Versions</h2>
                <div className="hover:bg-green-500 hover:text-white border-2 bg-slate-50 border-slate-300 h-12 rounded-md flex mb-2 drop-shadow-md">
                    <button onClick={onClickCreateNewVersion} className="font-semibold h-full inline-flex items-center align-middle flex-grow justify-center">
                        <FaPlus className="text-xl mr-2"/>
                        <span className="font-semibold text-xl">New Version</span>
                    </button>
                </div>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="versions">
                        {(provided) => {
                            return(
                                <ul {...provided.droppableProps} ref={provided.innerRef} className='items-center bg-slate-300 h-fit rounded-md border-2 border-red-700 mb-2 p-2'>
                                    {versionsOrder.map((versionObj,index) => <VersionCard index={index} key={versionObj.id} versionObj={versionObj} setActiveVersion={setActiveVersion} activeVersion={activeVersion}/>)}
                                    {provided.placeholder}
                                </ul>
                            )
                        }}
                    </Droppable>
                    <Droppable droppableId="trash">
                        {(provided) => {
                            return(
                                <div {...provided.droppableProps} ref={provided.innerRef} className='items-center bg-slate-300 h-fit rounded-md border-2 border-red-700 mb-2 p-2 flex justify-center'>
                                    {provided.placeholder}
                                    <FaTrashAlt className=" h-52 text-9xl text-slate-500"/>
                                </div>
                            )
                        }}
                    </Droppable>
                </DragDropContext>
            </div>
        )
    }
}
export default SideNavigationCharacter