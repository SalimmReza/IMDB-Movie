import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Componenets/Footer/Footer';
import Header from '../Componenets/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;