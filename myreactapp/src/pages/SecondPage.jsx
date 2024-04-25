import { useRef } from 'react';
import SPUser from './SPUser';
import useFetch from './useFetch';
function SecondPage() {
    const [user, setUser] = useFetch(undefined)
    const inputElement = useRef();
    const getUser = () => {
        setUser(inputElement.current.value)
    }

    return (
        <div style={{ height: 400, width:300 }} className='d-flex flex-column gap-3'>
            <div className='d-flex'>
                <input className='form-control br-0' type='text' placeholder='Enter Username' ref={inputElement} />
                <button className='btn btn-success br-0' title='Get User Data' onClick={getUser}>Get</button>
            </div>
            <div>
                {user && <SPUser user={user} />}
            </div>
        </div>
    );
}

export default SecondPage;