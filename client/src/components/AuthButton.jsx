import { useRef } from "react"


function AuthButton({user}) {
    if (!user) {
        return(
            <div className='hidden sm:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4 text-md font-semibold'>Sign In</button>
                <button className ='text-white border bg-red-700 border-red-700 hover:bg-transparent hover:text-red-700 rounded-md px-4 py-1 text-md font-semibold'>Sign Up</button>
            </div>
        )
    } else {
        return(
            <button className='hidden sm:flex pr-4 border-none bg-transparent text-black mr-4 text-lg font-semibold'>Sign Out</button>
        )
    }
}

export default AuthButton