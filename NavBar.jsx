import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AdjustmentsHorizontalIcon  , XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsSmallScreen(true);
            } else {
                setIsSmallScreen(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex justify-between py-3'>
            <div className="logo-part">
                <h1 className='text-4xl font-semibold btn btn-ghost'>Ti-Food</h1>
            </div>
            {isSmallScreen ? (
                <div className="menu-part">
                    <div className="md:hidden flex items-center">
                        <h1 onClick={toggleMenu} className='btn btn-ghost'>
                            {isOpen ? <XMarkIcon className='h-8 w-8' /> : <AdjustmentsHorizontalIcon className='h-8 w-8' />}
                        </h1>
                    </div>
                    {isOpen && (
                        <ul className="md:hidden flex flex-col gap-5">
                            <li className='text-[18px] font-semibold'><NavLink to='/' onClick={toggleMenu}>Home</NavLink></li>
                            <li className='text-[18px] font-semibold'><NavLink to='/about' onClick={toggleMenu}>About Us</NavLink></li>
                            <li className='text-[18px] font-semibold'><NavLink to='/food' onClick={toggleMenu}>View Food</NavLink></li>
                            <li className='text-[18px] font-semibold'><NavLink to='/offer' onClick={toggleMenu}>Today Offer</NavLink></li>
                            <li className='btn btn-secondary'><NavLink to='/login' onClick={toggleMenu}>Join Now</NavLink></li>
                        </ul>
                    )}
                </div>
            ) : (
                <div className="menu-part">
                    <ul className="md:flex hidden items-center gap-5">
                        <li className='text-[18px] font-semibold'><NavLink to='/'>Home</NavLink></li>
                        <li className='text-[18px] font-semibold'><NavLink to='/about'>About Us</NavLink></li>
                        <li className='text-[18px] font-semibold'><NavLink to='/food'>View Food</NavLink></li>
                        <li className='text-[18px] font-semibold'><NavLink to='/offer'>Today Offer</NavLink></li>
                        <li className='btn btn-secondary'><NavLink to='/login'>Join Now</NavLink></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavBar;
