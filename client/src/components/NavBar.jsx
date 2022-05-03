import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import AuthButton from "./AuthButton"
import AuthMenu from "./AuthMenu"
import Logo from './Logo'

function NavBar({user, setRedirect, onClickSignIn, onClickSignUp, onClickSignOut}) {
    const [navMenu,setNavMenu] = useState(false)
    const handleMenuClick = () => setNavMenu(!navMenu)

    //warning: cannot update a component ('app') while rendering a different component ('navbar')
    setRedirect(useLocation().pathname)

    return (
        <div className='w-screen h-12 z-10 bg-zinc-50 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <Link className='text-2xl font-bold mr-4 border-r-0 px-4 sm:text-2xl sm:border-r-2' to='/'>
                        <Logo />
                    </Link>
                    <ul className='hidden sm:flex text-md font-semibold'>
                        <li>
                            <Link to='users/:username/characters'>Characters</Link>
                        </li>
                        <li>
                            <Link to='games'>Find a Game</Link>
                        </li>
                    </ul>
                </div>
                <AuthButton user={user} onClickSignIn={onClickSignIn} onClickSignUp={onClickSignUp}/>
                <div className='sm:hidden' onClick={handleMenuClick}>
                    {!navMenu ? <button><FiMenu className ='w-8'/></button> : <button><AiOutlineClose className='w-8'/></button>}
                </div>
            </div>
            <ul className={!navMenu ? 'hidden' : 'absolute right-0 bg-zinc-50 w-64 px-8 text-center z-10 shadow-md'}>
                <li className='border-b-2'>
                    <Link to='users/:username/characters'>Characters</Link>
                </li>
                <li className='border-b-2 border-zinc-200'>
                    <Link to='games'>Find a Game</Link>
                </li>
                <AuthMenu user={user} onClickSignIn={onClickSignIn} onClickSignUp={onClickSignUp}/>
            </ul>
        </div>
    )
}

export default NavBar