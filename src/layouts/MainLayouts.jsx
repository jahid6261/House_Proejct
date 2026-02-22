import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer"
import { Outlet } from 'react-router';
import ContactSection from '../components/ContactSection';
const MainLayouts = () => {
    return (
        <>
        <Navbar/>
        <Outlet></Outlet>
        <ContactSection/>
        <Footer></Footer>

            
        </>
    );
};

export default MainLayouts;