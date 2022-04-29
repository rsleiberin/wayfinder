import { useState, useEffect } from "react";
import {Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
    
    return(
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='users/:username/*' element={<User />}/>
                <Route path='games/*' element={<Games />}/>
            </Routes>
        </>
    )
}

export default App