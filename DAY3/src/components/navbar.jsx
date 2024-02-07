import React from 'react';
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import "../assets/css/nav.css"
import { Link } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
function NavigationBar() {
  return (
    <div className='N' style={{color:'black'}}>
  <div >
      <Navbar className='N' style={{backgroundColor:'ButtonShadow'}}>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Nav>
          <button ><Nav.Item icon={<HomeIcon />}><Link to='/home'>HOME</Link ></Nav.Item></button>
         <button><Nav.Item><Link to='/register'>SIGN IN</Link></Nav.Item></button>
         <button><Nav.Item><Link to='/login'>LOG IN</Link></Nav.Item></button>
          {/* <Nav.Menu title="ABOUT" >
            <Nav.Item>Company</Nav.Item>
            <Nav.Item>Team</Nav.Item>
            <Nav.Menu title="Contact">
              <Nav.Item>Via email</Nav.Item>
              <Nav.Item>Via telephone</Nav.Item>
            </Nav.Menu>
          </Nav.Menu> */}
        </Nav>
        <Nav pullRight>
        <button><Nav.Item ><Link to='/dash'>DASHBOARD</Link></Nav.Item></button>
          <button><Nav.Item >LOGOUT</Nav.Item></button>
        </Nav>
      </Navbar>
      </div>
      </div>
    );
    
  
}

export default NavigationBar;
