import { Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Characters from './characters/Characters'
function Users({user}) {
    return(
        <Routes>
            <Route path='/:id' element={<Dashboard />}/>
            <Route path='/:id/characters/*' element={<Characters user={user}/>}/>
        </Routes>
    )
}

export default Users