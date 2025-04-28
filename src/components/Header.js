import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #2a2a72;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  span {
    color: #ff6b6b;
  }
  
  img {
    height: 40px;
    margin-right: 10px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: ${({ $isOpen }) => ($isOpen ? 'column' : 'row')};
    width: 100%;
    max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #ff6b6b;
    transition: width 0.3s ease;
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
  
  &.active {
    color: #ff6b6b;
  }
  
  @media (max-width: 768px) {
    margin: 0.5rem 0;
    width: 100%;
    text-align: center;
  }
`;

const CTAButton = styled(Link)`
  background-color: #ff6b6b;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-left: 1rem;
  
  &:hover {
    background-color: #ff5252;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(255, 107, 107, 0.3);
  }
  
  @media (max-width: 768px) {
    margin: 1rem 0 0 0;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const AffiliateNotice = styled.div`
  background-color: #2a2a72;
  color: white;
  text-align: center;
  padding: 0.5rem;
  font-size: 0.9rem;
  
  a {
    color: white;
    text-decoration: underline;
    
    &:hover {
      color: #ff6b6b;
    }
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      <AffiliateNotice>
        Boost your brand visibility with <a href="https://www.anrdoezrs.net/click-9083409-10754734" target="_blank" rel="noopener noreferrer">24-7 Press Release</a> distribution services!
      </AffiliateNotice>
      
      <HeaderContainer style={{ 
        boxShadow: scrolled ? '0 4px 15px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease'
      }}>
        <NavContainer>
          <Logo to="/">
            <img src="/logo.png" alt="Press Release Logo" />
            Press<span>Release</span>
          </Logo>
          
          <MobileMenuButton onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
          
          <NavLinks $isOpen={isMenuOpen}>
            <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </NavLink>
            <NavLink to="/testimonials" className={location.pathname === '/testimonials' ? 'active' : ''}>
              Testimonials
            </NavLink>
            <NavLink to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
              Blog
            </NavLink>
            <CTAButton as="a" href="https://www.dpbolvw.net/click-9083409-10754746" target="_blank" rel="noopener noreferrer">
              Get Started
            </CTAButton>
          </NavLinks>
        </NavContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;