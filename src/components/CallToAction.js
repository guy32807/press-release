import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CTAContainer = styled.div`
  margin-top: 40px;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #ff6b6b;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  
  &:hover {
    background-color: #ff5252;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(255, 107, 107, 0.4);
  }
`;

const SecondaryLink = styled.a`
  display: inline-block;
  margin-left: 20px;
  color: white;
  font-weight: 500;
  text-decoration: underline;
  
  &:hover {
    color: #ff6b6b;
  }
`;

const CallToAction = () => {
  return (
    <CTAContainer>
      <CTAButton to="/pricing">Get Started Today</CTAButton>
      <SecondaryLink href="https://www.anrdoezrs.net/click-9083409-10754734" target="_blank" rel="noopener noreferrer">
        Learn More
      </SecondaryLink>
    </CTAContainer>
  );
};

export default CallToAction;