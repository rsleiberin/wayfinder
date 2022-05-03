import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Landing from './Landing'
import Users from './Users'
import Games from './Games'

function Home( { user, setRedirect, onClickSignIn, onClickSignUp, setUser }) {
    return (
    <div>
        <NavBar user={user} setUser={setUser} setRedirect={setRedirect} onClickSignIn={onClickSignIn} onClickSignUp={onClickSignUp}/>
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