import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'
import Logo from './Logo'

function SignIn({redirect, onClickSignUp}) {

    const navigate = useNavigate()
    const onClickReturn =() => navigate(redirect)

    return(
    <div onClick={onClickReturn} className='h-screen w-screen bg-slate-50 z-0 flex flex-col items-center justify-center py-2 text-center'>
        <div className='z-10 bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
            <div className='w-3/5 p-5'>
                <div>
                    <Logo />
                </div>
                <div className ='py-10'>
                    <h2 className='text-3xl font-semibold mb-2'>Sign In</h2>
                    <div className='h-0.5 w-10 bg-red-700 inline-block mb-2'></div>
                    <div className='flex justify-center mt-2 mb-4'>
                        <a href='#' className ='border-2 border-slate-200 rounded-full p-3 mx-1'><FaFacebookF className='text-sm'/></a>
                        <a href='#' className ='border-2 border-slate-200 rounded-full p-3 mx-1'><FaLinkedinIn className='text-sm'/></a>
                        <a href='#' className ='border-2 border-slate-200 rounded-full p-3 mx-1'><FaGoogle className='text-sm'/></a>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='bg-slate-200 w-64 p-2 my-2 flex items-center mb-3'>
                            <FaRegEnvelope className='text-slate-500 m-2'/>
                            <input type='email' name='email' placeholder="Email" className='bg-slate-200 placeholder:text-slate-500 placeholder:font-semibold outline-none text-sm flex-1'/>
                        </div>
                        <div className='bg-slate-200 w-64 p-2 my-2 flex items-center mb-3'>
                            <MdLockOutline className='text-slate-500 m-2'/>
                            <input type='password' name='password' placeholder="Password" className='bg-slate-200 placeholder:text-slate-500 placeholder:font-semibold outline-none text-sm flex-1'/>
                        </div>
                        <div className='flex w-64 justify-between'>
                            <button onClick={onClickReturn} className='items-center font-semibold'>Cancel</button>
                            <button className='items-center text-white border-red-700 font-semibold bg-red-700 py-1 rounded-md text-lg px-12'>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='w-2/5 bg-red-700 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
                <h2 className='text-3xl font-semibold mb-2'>Sign Up</h2>
                <div className='h-0.5 w-10 bg-white inline-block mb-2'></div>
                <p className='mb-10 font-semibold'>Create your account and find your way!</p>
                <button className='text-white border bg-red-700 border-white hover:bg-white hover:text-red-700 rounded-md py-1 text-lg font-semibold px-12 inline-block' onClick={onClickSignUp}>Sign Up</button>
            </div>
        </div>
    </div>
    )
}

export default SignIn