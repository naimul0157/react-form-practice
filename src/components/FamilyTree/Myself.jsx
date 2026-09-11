import React, { useContext } from 'react';
import Special from './Special';
import { MoneyContext } from './FamilyTree';

const Myself = () => {
    const [money, setmoney] = useContext(MoneyContext)
    return (
        <div className='border'>
            Myself
            <button className='btn' onClick={
                () =>
                    money>0 && setmoney(money - 1000)
            }>Collect money</button>
            <Special></Special>
        </div>
    );
};

export default Myself;