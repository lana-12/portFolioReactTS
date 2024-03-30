import React from 'react';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Training from './Training';


const Home = () => {
    return (
        <>
        <section id='about' className='border border-success my-3'>
            <About />
        </section>

        <section className='border border-primary'>
            <Project />
        </section>

        <section className='border border-warning my-3'>
            <Training />
        </section>

        <section className='border border-primary'>
            <Contact />
        </section>
        </>
    );
}

export default Home;