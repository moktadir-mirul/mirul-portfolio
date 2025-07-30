import React from 'react';
import NavBar from '../../Component/NavBar/NavBar';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;