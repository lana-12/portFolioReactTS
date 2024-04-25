 import React, { useState } from 'react';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Training from './Training';
import CustomOffcanvas from './utils/CustomOffcanvas';
import Button from 'react-bootstrap/Button';
import SoftSkills from './SoftSkills';
import Stack from './Stack';



const Home = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showTraining, setShowTraining] = useState(false);
  const [showSoftSkills, setShowSoftSkills] = useState(false);
  const [showStack, setShowStack] = useState(false);

  const handleCloseAbout = () => setShowAbout(false);
  const handleCloseTraining = () => setShowTraining(false);
  const handleCloseSoftSkills = () => setShowSoftSkills(false);
  const handleCloseStack = () => setShowStack(false);


  
  return (
    <>
    <section className='boxBtn container '>

    {/* Section About */}
      <section className='customOffCanvasAbout ' >
        <div className="d-grid gap-2 btn">
          <Button 
          className='btnCustomLink'
            // variant="secondary" 
            size="lg" 
            onClick={() => setShowAbout(true)}>Qui suis-je ?
          </Button>
          <CustomOffcanvas 
            title="Qui suis-je ?" 
            content={<About />} 
            show={showAbout} 
            handleClose={handleCloseAbout} 
          />
        </div>
      </section>

    {/* Section Mes Atouts */}
      <section className='my-4 '>
        <div className="d-grid gap-2 btn">
        <Button  size="lg" className='btnCustomLink' onClick={() => setShowSoftSkills(true)} >Mes atouts</Button>
        <CustomOffcanvas 
            title="Mes atouts" 
            content={<SoftSkills />} 
            show={showSoftSkills} 
            handleClose={handleCloseSoftSkills} 
          />
        </div>
      </section>
    
    {/* Section Stacks */}
      <section className=' my-4' >
        <div className="d-grid gap-2 btn">
          <Button 
          className='btnCustomLink'
            // variant="secondary" 
            size="lg" 
            onClick={() => setShowStack(true)}>Iconographies Techniques
          </Button>
          <CustomOffcanvas 
            title="Iconographies Techniques" 
            content={<Stack/>} 
            show={showStack} 
            handleClose={handleCloseStack} 
          />
        </div>
      </section>


    {/* Section Training */}
      <section className='my-4 customOffCanvasTraining'>
        <div className="d-grid gap-2 btn">
        <Button  size="lg" className='btnCustomLink' onClick={() => setShowTraining(true)} >Formations</Button>
        <CustomOffcanvas 
            title="Formations" 
            content={<Training />} 
            show={showTraining} 
            handleClose={handleCloseTraining} 
          />
        </div>
      </section>
      

    {/* Section Contact */}
      <section className='my-4'>
        <div className="d-grid gap-2 btn">
          <Button  size="lg" className='btnCustomLink'><a href="#contact" style={{ color: 'white' }}>Contact</a></Button>
        </div>
      </section>

      {/* Section Projets */}
      <section className='' >
        <div className="d-grid gap-2 btn">
          <Button 
            className='btnCustomLink'
            size="lg" 
            >
              <a href="#project" style={{ color: 'white' }}>Projets</a>
          </Button>
        </div>
      </section>

    </section>


    {/* Section Display Project */}
      <section className="boxProject mt-5 py-4 container-fluid-lg" id="project">
        <Project />
      </section>

    {/* Section Display Contact */}
      <section className="contact" id="contact">
        <Contact />      
      </section>
      


    </>
  );
}

export default Home;
