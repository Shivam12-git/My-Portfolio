import { Navbar,Container,Nav } from "react-bootstrap";
import React from 'react';
import { useState,useEffect } from "react";
import logo from '../assets/name_logo.svg';
import {Outlet, NavLink } from "react-router-dom";

  // window.onscroll = () => {
  //   var current = "";

  //   sections.forEach((section) =>{
  //     const SectionTop = sectionimport { Navbar,Container,Nav } from "react-bootstrap";
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled,setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
    
    window.addEventListener("scroll",onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  },[])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);

  // window.onscroll = () => {
  //   var current = "";

  //   sections.forEach((section) =>{
  //     const SectionTop = section.offsetTop;
  //     if (pageYoffset >= sectionTop){
  //       current = section.getAttribute("id");
  //     }
  //   });

  //   Nav.Link.forEach((li) => {
  //     Nav.Link.classList.remove("active");
  //     if (Nav.Link.classList.contains(current)) {
  //       Nav.Link.classList.add("active");
  //     }
  //   });
  // }

  }
    return (
<>
            <Navbar expand="lg" className={scrolled ? "scrolled": ""}>  
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />  
              <Navbar.Collapse id="basic-navbar-nav">  
                <Nav className="me-auto">
                  <a href="#"><img src={logo} alt="logo"/></a>
                  {/* <Link to="/home" activeStyle id="name-logo" className = {activeLink === 'home' ? 'active navbar-link-noline' : 'navbar-link-noline'} onClick={() => onUpdateActiveLink('home')}><img src={logo} alt="logo"/>
                  </Link> */}
                  <Container className = "right-nav">
                    <ul>
                      <li>
                  <NavLink to="/work" >Work  
                  </NavLink>
                      </li>
                  <li><NavLink to="/about" >About    
                  </NavLink></li>
                  <li><NavLink to="/resume" className = {activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume    
                  </NavLink></li>
                    </ul>
                  </Container>    
                </Nav>  
              </Navbar.Collapse>  
            </Container>  
          </Navbar>  
          </>
          );  
        }  
  //     if (pageYoffset >= sectionTop){
  //       current = section.getAttribute("id");
  //     }
  //   });

  //   Nav.Link.forEach((li) => {
  //     Nav.Link.classList.remove("active");
  //     if (Nav.Link.classList.contains(current)) {
  //       Nav.Link.classList.add("active");
  //     }
  //   });
  // }

