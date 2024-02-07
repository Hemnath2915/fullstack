import React from 'react';
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import "../assets/css/nav.css"
import { Link } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
function NavigationBar2() {
  return (
    
  <div className='N'>
      <Navbar className='N'>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Nav>
          <button><Nav.Item icon={<HomeIcon />}><Link to='/home'>HOME</Link></Nav.Item></button>
    
        </Nav>
        <Nav pullRight>
          <Nav.Item >LOGOUT</Nav.Item>
        </Nav>
      </Navbar>
      </div>
    );
    
  
}

export default NavigationBar2;
