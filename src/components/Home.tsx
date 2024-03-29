import React from 'react';
import About from './About';
import Project from './Project';
import Contact from './Contact';


const Home = () => {
    return (
        <>
        <section id='about' className='border border-primary'>
            <About />
        </section>


        <section className='border border-primary'>
            <Project />
        </section>


        <section className='border border-primary'>
            <Contact />
        </section>
        </>
    );
}

export default Home;