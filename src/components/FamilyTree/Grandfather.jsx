import React from 'react';
import Father from './Father';
import Uncle from './Uncle';

const Grandfather = () => {
    return (
        <div className='border w-4/5 mx-auto'>
            <h1>Grandfather</h1>
            <div className='flex border justify-around'>
                <Father></Father>
                <Uncle></Uncle>
            </div>
        </div>
    );
};

export default Grandfather;