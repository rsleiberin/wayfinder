import { BsGripVertical } from 'react-icons/bs'
import {Draggable } from 'react-beautiful-dnd'

function VersionCard({versionObj, activeVersion, setActiveVersion, index}) {
    const onClickSetActiveVersion = ()=> setActiveVersion(versionObj)
    if(versionObj.id === activeVersion.id) {
        return(
            <Draggable key={`version-${versionObj.id}`} draggableId={`version-${versionObj.id}`} index={index}>
                {(provided) => {
                    return(
                        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className="bg-green-500 border-2 border-slate-50 h-12 rounded-md flex items-center mb-2">
                            <BsGripVertical className="text-3xl text-white w-6 h-full border-r-2 border-slate-50 mr-2"/>
                            <button className="font-semibold h-full inline-block align-middle flex-grow text-white">
                                <span className="text-xl">Version {versionObj.id}</span>
                            </button>
                        </div>
                    )
                    }}
            </Draggable>
        )
    } else {
        return (
            <Draggable key={`version-${versionObj.id}`} draggableId={`version-${versionObj.id}`} index={index}>
                {(provided) => {
                    return(
                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} onClick={onClickSetActiveVersion} className="bg-slate-50 border-2 border-slate-200 h-12 rounded-md flex items-center mb-2">
                                <BsGripVertical className="text-3xl w-6 h-full border-r-2 border-slate-200 mr-2"/>
                                <button className="font-semibold h-full inline-block align-middle flex-grow text-xl">Version {versionObj.id}</button>
                            </div>
                    )
                }}
            </Draggable>
    )
    }
}

export default VersionCard