import React from 'react';
import styled from 'styled-components';

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 50px 0;
`;

const FeatureCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #009ffd;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const Features = () => {
  const featuresList = [
    {
      icon: "🌐",
      title: "Wide Distribution Network",
      description: "Reach thousands of media outlets, journalists, and news sites with our extensive distribution network."
    },
    {
      icon: "📊",
      title: "Detailed Analytics",
      description: "Track the performance of your press releases with comprehensive analytics and reporting."
    },
    {
      icon: "🔍",
      title: "SEO Optimization",
      description: "Every press release is optimized for search engines to maximize your online visibility."
    },
    {
      icon: "🎯",
      title: "Targeted Distribution",
      description: "Reach your specific industry or geographic audience with targeted distribution options."
    },
    {
      icon: "📱",
      title: "Social Media Integration",
      description: "Automatically share your press releases across major social media platforms."
    },
    {
      icon: "💼",
      title: "Professional Writing Services",
      description: "Get expert help with crafting compelling press releases that get noticed."
    }
  ];

  return (
    <FeatureGrid>
      {featuresList.map((feature, index) => (
        <FeatureCard key={index}>
          <FeatureIcon>{feature.icon}</FeatureIcon>
          <FeatureTitle>{feature.title}</FeatureTitle>
          <p>{feature.description}</p>
        </FeatureCard>
      ))}
    </FeatureGrid>
  );
};

export default Features;