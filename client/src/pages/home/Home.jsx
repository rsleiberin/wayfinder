import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/navbar/NavBar'
import Landing from './landing/Landing'
import Users from './users/Users'
import Games from './games/Games'

function Home( { user, setRedirect, onClickSignIn, onClickSignUp, setUser }) {
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