import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Landing from './Landing'
import Users from './Users'
import Games from './Games'

function Home( { user, setRedirect, onClickSignIn, onClickSignOut, onClickSignUp }) {
    console.log("home")
    return (
    <div>
        <NavBar user={user} setRedirect={setRedirect} onClickSignIn={onClickSignIn} onClickSignUp={onClickSignUp} onClickSignOut={onClickSignOut}/>
        <div>hi</div>
        <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='users/*' element={<Users />}/>
            <Route path='games/*' element={<Games />}/>
        </Routes>
    </div>
    )
}

export default Home