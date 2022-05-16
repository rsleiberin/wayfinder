import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Landing from './Landing'
import Users from './Users'
import Games from './Games'

function Home( { user, setRedirect, onClickSignIn, onClickSignUp, setUser }) {
    console.log("Home")
    return (
    <div className='bg-slate-400 w-screen h-screen flex pt-12'>
        <NavBar user={user} setUser={setUser} setRedirect={setRedirect} onClickSignIn={onClickSignIn} onClickSignUp={onClickSignUp}/>
        <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='users/*' element={<Users user={user}/>}/>
            <Route path='games/*' element={<Games />}/>
        </Routes>
    </div>
    )
}

export default Home