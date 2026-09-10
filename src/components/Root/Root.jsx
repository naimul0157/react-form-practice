import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
            <div className='pt-5'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;