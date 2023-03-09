import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
    const navigate = useNavigate()
    const ref = useRef()

    console.log(ref)
    const applyClassName = () => {


        ref.current.classList.add('all')
        console.log(ref)
    }


    return (
        <main>
            <p ref={ref} className='my button'>Oops! Page Not Found</p>
            <button onClick={() => navigate('/')}>Back to Homepage</button>
            <button onClick={applyClassName}>Apply Class Name</button>
        </main>
    );
}

export default Error404;