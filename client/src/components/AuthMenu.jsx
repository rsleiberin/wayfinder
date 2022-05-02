function AuthMenu({user}) {
    user = true
    if (!user) {
        return(
            <div className='flex flex-col my-2'>
                <button className='border border-slate-700 bg-transparent text-slate-700 rounded-md px-4 py-1 my-1 hover:border-red-700 hover:text-red-700 font-semibold'>Sign In</button>
                <button className ='text-white border bg-slate-700 border-slate-700 hover:bg-red-700 hover:border-red-700 rounded-md px-4 py-1 my-1 font-semibold'>Sign Up</button>
            </div>
        )
    } else {
        return(
            <div className='flex flex-col my-2'>
                <button className='border border-slate-700 bg-transparent text-slate-700 rounded-md px-4 py-1 my-1 hover:border-red-700 hover:text-white hover:bg-red-700 font-semibold'>Sign Out</button>
            </div>
        )
    }
}

export default AuthMenu