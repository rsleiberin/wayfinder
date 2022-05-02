import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import AuthButton from "./AuthButton"
import AuthMenu from "./AuthMenu"

function NavBar({user}) {
    const [navMenu,setNavMenu] = useState(false)
    const handleMenuClick = () => setNavMenu(!navMenu)


    return (
        <div className='w-screen h-12 z-10 bg-zinc-50 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <Link className='text-2xl font-bold mr-4 border-r-0 px-4 sm:text-2xl sm:border-r-2' to='/'>
                        Pathmaster
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
                <AuthButton user={user}/>
                <div className='sm:hidden' onClick={handleMenuClick}>
                    {!navMenu ? <button><MenuIcon className ='w-8'/></button> : <button><XIcon className='w-8'/></button>}
                </div>
            </div>
            <ul className={!navMenu ? 'hidden' : 'absolute right-0 bg-zinc-50 w-64 px-8 text-center z-10 shadow-md'}>
                <li className='border-b-2'>
                    <Link to='users/:username/characters'>Characters</Link>
                </li>
                <li className='border-b-2 border-zinc-200'>
                    <Link to='games'>Find a Game</Link>
                </li>
                <AuthMenu user={user} />
            </ul>
        </div>
    )
}

export default NavBar