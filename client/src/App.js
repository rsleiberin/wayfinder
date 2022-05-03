import { useState, useEffect } from "react";
import {Route, Routes, useLocation } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home'

function App() {
    console.log(useLocation().pathname)
    const [user,setUser] = useState({})
    const [redirect, setRedirect] = useState(useLocation().pathname)
    
    return(
        <div className="bg-red-900 w-full h-screen">
            <Routes>
                <Route path='sign-in' element={<SignIn redirect={redirect}/>}/>
                <Route path='sign-up' element={<SignUp redirect={redirect}/>}/>
                <Route path='/*' element={<Home setRedirect={setRedirect}/>}>
                </Route>
            </Routes>
        </div>
    )
}

export default App