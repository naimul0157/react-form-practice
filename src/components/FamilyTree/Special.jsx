import React, { use, useContext } from 'react';
import { AssetsContext, MoneyContext } from './FamilyTree';

const Special = () => {
    const assets = useContext(AssetsContext);
    const [money, setmoney] =  useContext(MoneyContext);
    return (
        <div className='border'>
            <h1>Special</h1>
            <h1>Asset:{assets}</h1>
            <button className='btn' onClick={()=> setmoney(money + 1000)}>Add money 1000</button>
        </div>
    );
};

export default Special;