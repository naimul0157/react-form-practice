import React, { useContext } from 'react';
import { AssetsContext } from './FamilyTree';

const Special = () => {
    const assets = useContext(AssetsContext)
    return (
        <div className='border'>
            <h1>Special</h1>
            <h1>Asset:{assets}</h1>
        </div>
    );
};

export default Special;