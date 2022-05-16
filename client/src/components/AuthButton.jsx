import { useRef } from "react"


function AuthButton({user, onClickSignIn, onClickSignUp, onClickSignOut}) {
    console.log("AuthButon")
    if (!user) {
        return(
            <div className='hidden sm:flex pr-4'>
                <button onClick={onClickSignIn} className='border-none bg-transparent text-black mr-4 text-md font-semibold'>Sign In</button>
                <button onClick={onClickSignUp} className ='text-white border bg-red-700 border-red-700 hover:bg-red-900 hover:border-red-900 rounded-md px-4 py-1 text-md font-semibold'>Sign Up</button>
            </div>
        )
    } else {
        return(
            <button onClick={onClickSignOut} className='hidden sm:flex pr-4 border-none bg-transparent text-black mr-4 text-lg font-semibold'>Sign Out</button>
        )
    }
}

export default AuthButton