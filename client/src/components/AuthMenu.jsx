function AuthMenu({user, onClickSignIn, onClickSignUp, onClickSignOut}) {
    if (!user) {
        return(
            <div className='flex flex-col my-2'>
                <button onClick={onClickSignIn} className='border border-slate-700 bg-transparent text-slate-700 rounded-md px-4 py-1 my-1 hover:border-red-700 hover:text-red-700 font-semibold'>Sign In</button>
                <button onClick={onClickSignOut} className ='text-white border bg-red-700 border-red-700 hover:bg-red-900 hover:border-red-900 rounded-md px-4 py-1 my-1 font-semibold'>Sign Up</button>
            </div>
        )
    } else {
        return(
            <div className='flex flex-col my-2'>
                <button onClick={onClickSignOut} className='border border-slate-700 bg-transparent text-slate-700 rounded-md px-4 py-1 my-1 hover:border-red-700 hover:text-white hover:bg-red-700 font-semibold'>Sign Out</button>
            </div>
        )
    }
}

export default AuthMenu