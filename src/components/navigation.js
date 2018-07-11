import React from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Glyphicon} from 'react-bootstrap';
 const Navigation = ()=>{

  return(
    <Navbar  bsStyle='inverse' fluid='true'>
      <Nav pullRight >
      <NavItem>
      <Glyphicon  glyph="user" />
      </NavItem>
      <NavItem>
      <Glyphicon  glyph="cog" />
      </NavItem>
      <NavItem>
      <Glyphicon  glyph="envelope" />
      </NavItem>
      <NavItem>
      <Glyphicon  glyph="volume-up" />
      </NavItem>
      <NavItem>
      <Glyphicon  glyph="signal" />
      </NavItem>
      <NavItem className='test' eventKey={3} >
      <Glyphicon  glyph="off" />
      </NavItem>
      </Nav>
   </Navbar>
  );
}

export default Navigation;
