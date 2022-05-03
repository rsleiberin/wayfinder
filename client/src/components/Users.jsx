import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Characters from './Characters'
function Users() {
    return(
        <>
        <Routes>
            <Route path='/:id' element={<Dashboard />}/>
            <Route path='characters/*' element={<Characters />}/>
        </Routes>
        </>
    )
}

export default Users