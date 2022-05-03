import { useState, useEffect } from "react";
import {Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home'

function App() {
    //setters
    const [user,setUser] = useState(false)
    const [redirect, setRedirect] = useState('/')

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
    const onClickReturn =(e) => {
        console.log("returning")
        navigate(redirect)
    }

    //useEffects
    //auto-login
    useEffect( ()=> {
        fetch('/auth')
        .then( r => {
            if(r.ok){
                r.json()
                .then(userObj => setUser(userObj))
            }
        })
    },[])
    console.log(user)
    return(
        <div>
            <Routes>
                <Route path='sign-in' element={<SignIn redirect={redirect} setUser={setUser} onClickSignUp={onClickSignUp} onClickReturn={onClickReturn}/>}/>
                <Route path='sign-up' element={<SignUp redirect={redirect} setUser={setUser} onClickSignIn={onClickSignIn} onClickReturn={onClickReturn}/>}/>
                <Route path='/*' element={<Home setRedirect={setRedirect} onClickSignIn={onClickSignIn} onClickSignUp={onClickSignUp} user={user} setUser={setUser}/>}>
                </Route>
            </Routes>
        </div>
    )
}

export default App