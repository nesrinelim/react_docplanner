import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown,NavItem,MenuItem } from 'react-bootstrap';
// import * asb_b_ from 'react-bootstrap';
const Navbar1 =()=>{return(
<div>
<Navbar  collapseOnSelect style={{position:'fixed', background:'white',width:'100vw', zIndex:'100'} }>
{/* <_b_.Navbar.Brand> */}
  <Navbar.Brand >
      <a href="#home" style={{ width:' 56vw'}}><img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" width="268px" height="30px" /></a>
  </Navbar.Brand>
  <Navbar.Collapse>
  <Nav>
  
    <NavItem eventKey={1} href="#">
      About us
    </NavItem>
    <NavItem eventKey={2} href="#">
      Career
    </NavItem>
    <NavItem eventKey={2} href="#">
      Departments
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Marketing & PR</MenuItem>
      <MenuItem eventKey={3.2}>Custmomer Success & Sales</MenuItem>
      <MenuItem eventKey={3.3}>IT, Product, Design & UX</MenuItem>
      <MenuItem eventKey={3.4}>HR & more</MenuItem>
    </NavDropdown>
  </Nav>
  </Navbar.Collapse>
</Navbar>;

</div>)}

export default Navbar1 ;