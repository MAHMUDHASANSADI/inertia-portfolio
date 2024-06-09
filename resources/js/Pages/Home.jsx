import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import About from './components/About';
import Skills from './components/Achievment';
import Contact from './components/Contact';
import RecentWork from './components/RecentWork';
import Footer from './components/Footer';
import Activities from './components/RecentWork';
import Achievment from './components/Achievment';
import Topnav from './components/Topnav';

const Home = () => {
    return (
        <div>
            <Topnav />
            <Navbar />
            <Slider />
            <About />
            <Achievment />
            <Activities />
            <div className=' pb-5'><Contact /></div>
            <Footer />

        </div>
    );
};

export default Home;
