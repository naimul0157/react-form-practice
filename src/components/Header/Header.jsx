import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <nav className='flex flex-row justify-center gap-5'>
                <NavLink className='btn hover:bg-green-400' to={'/'}>Home</NavLink>
                <NavLink className='btn hover:bg-green-400' to={'children'}>Children</NavLink>
                <NavLink className={'btn hover:bg-green-400'} to={'teacher'}>Teachers Panel</NavLink>
            </nav>
        </div>
    );
};

export default Header;