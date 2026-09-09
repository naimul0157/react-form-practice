import React, { useRef } from 'react';

const Uncontrolled = () => {
    const uncontrolledEmail  = useRef('');
    const uncontrolledPassword = useRef('');

    const handleinput = (e) => {
        e.preventDefault();
        console.log(uncontrolledEmail.current.value)
    }
    const onchangePassword = e =>{
        console.log(e.target.value)
        
    }
    return (
        <div>
            <form onSubmit={handleinput} className='text-center'>
                <input ref={uncontrolledEmail} type="email" name="email" placeholder='Your email' className='border'/><br />
                <input onChange={onchangePassword} type="password" name="password" placeholder='Your Password' className='border'/><br />
                <input type="submit" value="Sumit" />
            </form>
        </div>
    );
};

export default Uncontrolled;