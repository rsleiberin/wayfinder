import { useState, useEffect } from "react";
import {Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Landing from './components/Landing'
import Users from './components/Users'
import Games from './components/Games'

function App() {
    const{user,setUser} = useState({})
    
    return(
        <div className="bg-red-900 w-full h-screen">
            <Routes>
                <Route path='sign-in' element={<SignIn />}/>
                <Route path='sign-up' element={<SignUp />}/>
                <Route path='/*'>
                    <Routes>
                        <NavBar user={user}/>
                        <Route path='/' element={<Landing />}/>
                        <Route path='users/*' element={<Users />}/>
                        <Route path='games/*' element={<Games />}/>
                    </Routes>
                </Route>
            </Routes>
        </div>
    )
}

export default App