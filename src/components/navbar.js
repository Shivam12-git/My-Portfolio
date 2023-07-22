import { Navbar,Container,Nav } from "react-bootstrap";
import React from 'react';
import { useState,useEffect } from "react";
import logo from '../assets/name_logo.svg';
import { Layout } from '../layout';
import { About } from './about';
import { Journey } from './journey';
import { Work } from './work';
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
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

  }
    return (
        <BrowserRouter>
          <div>

            <Navbar expand="lg" className={scrolled ? "scrolled": ""}>  
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />  
              <Navbar.Collapse id="basic-navbar-nav">  
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/"} activeStyle id="name-logo" href="#home" className = {activeLink === 'home' ? 'active navbar-link-noline' : 'navbar-link-noline'} onClick={() => onUpdateActiveLink('home')}><img src={logo} alt="logo"/></Nav.Link>
                  <Container className = "right-nav">
                  <Nav.Link as={Link} to={"/work"} className = {activeLink === 'work' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('work')}>Work</Nav.Link>  
                  <Nav.Link as={Link} to={"/journey"} className = {activeLink === 'journey' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('journey')}>Journey</Nav.Link>    
                    <Nav.Link as={Link} to={"/about"} className = {activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>    
                  </Container>    
                </Nav>  
              </Navbar.Collapse>  
            </Container>  
          </Navbar>  
                    </div>
                    <div>
          <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Layout />} />
          <Route path="/work" element={<Work />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/about" element={<About />} />
          </Routes> 
          </div>
        </BrowserRouter>
          );  
        }  
