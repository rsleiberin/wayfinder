import { useState, useEffect } from "react";
import {Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home'

function App() {
    console.log("setters")
    const [user,setUser] = useState({})
    const [redirect, setRedirect] = useState(useLocation().pathname)

    console.log("auth nav")
    const navigate = useNavigate()
    //callback navigation links
    const onClickSignIn = (e) =>{
        e.stopPropagation()
        navigate('/sign-in')
    }
    const onClickSignUp = (e) =>{
        e.stopPropagation()
        navigate('/sign-up')
    }
    const onClickSignOut = (e) =>{
        e.stopPropagation()
        console.log("Signing Out")
    }

    
    console.log("routing")
    return(
        <div>
            <Routes>
                <Route path='sign-in' element={<SignIn redirect={redirect} onClickSignUp={onClickSignUp}/>}/>
                <Route path='sign-up' element={<SignUp redirect={redirect} onClickSignIn={onClickSignIn}/>}/>
                <Route path='/*' element={<Home setRedirect={setRedirect} onClickSignIn={onClickSignIn} onClickSignUp={onClickSignUp} onClickSignOut={onClickSignOut}/>}>
                </Route>
            </Routes>
        </div>
    )
}

export default App