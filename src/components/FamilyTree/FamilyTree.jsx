// this is learning context api


import { createContext, useState } from 'react';
import Grandfather from './Grandfather';

export const AssetsContext = createContext('');
export const MoneyContext = createContext('');
const FamilyTree = () => {
    const [money, setmoney] = useState(0);
    const asset = 'diamond'
    return (
        <div className='text-center border-2 pt-5 w-4/5 mx-auto'>
            This is family
            <h1>Total Familly Asset: {money}</h1>
            <MoneyContext.Provider value={[money, setmoney]}>
                <AssetsContext.Provider value={asset}>
                    <Grandfather></Grandfather>
                </AssetsContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default FamilyTree;