import { RiCompassDiscoverLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

function Logo(){
    console.log("Logo")
    const navigate = useNavigate()
    const onClickHome= () => navigate('/')
    return(
        <button onClick={onClickHome} className='flex text-left font-bold'>
            <RiCompassDiscoverLine className='text-red-700 mx-0.5'/>
            Wayfinder
        </button>
    )
}

export default Logo