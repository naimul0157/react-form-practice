
import { createContext, useContext } from 'react';
import Grandfather from './Grandfather';

export const AssetsContext = createContext('');
const FamilyTree = () => {
    const asset =  'diamond'
    return (
        <div className='text-center border-2 pt-5 w-4/5 mx-auto'>
            This is family
            <AssetsContext.Provider value={asset}>
                <Grandfather></Grandfather>
            </AssetsContext.Provider>
        </div>
    );
};

export default FamilyTree;