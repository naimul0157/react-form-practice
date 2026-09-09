import React, { useState } from 'react';

const Home = () => {
    const [password, setpassword] = useState('');
    const [error, seterror]  = useState('');
    const prevent = (e) =>{
        e.preventDefault();
       
    }
    const handleOnchange = e=>{
        setpassword(e.target.value);

        if(password.length < 5 ){
            seterror('Password Should be more than 6 character');
        }
        else{
            seterror('');
        }
    }
    return (
        <div className='flex w-full justify-center h-[600px] mt-5'>
            <form onSubmit={prevent} className=' text-center px-20 py-40 rounded-xl bg-white flex flex-col md:w-1/3 w-4/5 mx-auto md:h-4/5 h-3/4 justify-start'>
                <h1 className='font-bold text-xl text-blue-800 mb-3'>
                    Login Form
                </h1>
                <h1 className='text-start font-bold text-blue-800'>
                    Your Email
                </h1>
                <input className='border-2 border-blue-400 bg-transparent rounded-md px-10 py-2 text-black'  type="email" name="email" id="" placeholder='Enter Email' required/><br />
                <h1 className='text-blue-800 font-bold text-start'>
                    Your Password
                </h1>
                <input onChange={handleOnchange} className='border-2 border-blue-400 mb-5 text-black bg-transparent px-10 py-2 rounded-md' type="password" name="password" id="" placeholder='Your Password' required defaultValue={password}/>
                <p>
                    <small className='text-red-600'>{error}</small>
                </p>
                <input className='btn bg-blue-600 border-none' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Home;