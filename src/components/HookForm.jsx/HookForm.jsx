import React from 'react';
import useInputhooks from '../../Hooks/useInputhooks';

const HookForm = () => {


    const [name, nameOnchange] = useInputhooks('');
    const handleSubmit  = (e) =>{
        e.preventDefault()
        console.log(name);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='text-center'>
                <input onChange={nameOnchange} defaultValue={name} type="text" placeholder='Your Name' name='name'/><br />
                <input className='btn' type="submit" value="Submit" />
            </form> 
        </div>
    );
};

export default HookForm;