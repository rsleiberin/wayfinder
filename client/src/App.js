import { useState, useEffect } from "react";
import {Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home'

function App() {
    console.log("App")
    //setters
    const [user,setUser] = useState(null)
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
                .then(userObj => setUser({...userObj, characters: ["HI"]}))
            }
        })
    },[])
    console.log(user)
    if(!user) {
        return(
            <Routes>
                <Route path='/*' element={<SignIn redirect={redirect} setUser={setUser} onClickSignUp={onClickSignUp} onClickReturn={onClickReturn}/>}/>
                <Route path='sign-up' element={<SignUp redirect={redirect} setUser={setUser} onClickSignIn={onClickSignIn} onClickReturn={onClickReturn}/>}/>
            </Routes>
        )
    } else {    
        return(
            <Routes>
                <Route path='/*' element={<Home setRedirect={setRedirect} onClickSignIn={onClickSignIn} onClickSignUp={onClickSignUp} user={user} setUser={setUser}/>}>
                </Route>
            </Routes>
        )
    }
}

export default App