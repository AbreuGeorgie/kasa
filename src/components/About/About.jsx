import Header from '../Header';
import Footer from '../Footer';
import React from 'react';
import Collapse from './Collapse';

function About() {
    return (
      <div className="About">
        <Header/>
        <Collapse title="Fiabilité">
        <p>@@@@@@</p>
        </Collapse>
        <Collapse title="Respect">
        <p>@@@@@@</p>
        </Collapse>
        <Collapse title="Service">
        <p>@@@@@@</p>
        </Collapse>
        <Collapse title="Sécurité">
        <p>@@@@@@</p>
        </Collapse>
        <Footer/>
        </div>
    );
  }
  
  export default About;