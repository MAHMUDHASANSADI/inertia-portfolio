import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import RecentWork from './components/RecentWork';
import Footer from './components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <About />
            <Skills />
            <RecentWork />
            <div className=' pb-5'><Contact /></div>
            <Footer />

        </div>
    );
};

export default Home;
