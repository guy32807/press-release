import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #2a2a72 0%, #009ffd 100%);
  color: white;
  padding: 100px 0;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 40px;
`;

const ContentSection = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const AffiliateContainer = styled.div`
  margin: 40px 0;
  text-align: center;
`;

const TestimonialsSection = styled.section`
  background-color: #f9f9f9;
  padding: 80px 20px;
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 50px;
  text-align: center;
`;

const CallToActionButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: #ff6b6b;
  color: white;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  margin-top: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #ff5252;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(255, 107, 107, 0.4);
  }
`;

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Press Release Distribution",
    "provider": {
      "@type": "Organization",
      "name": "Press Release Distribution Services"
    },
    "description": "Professional press release distribution services to boost your brand visibility and media coverage.",
    "offers": {
      "@type": "Offer",
      "price": "49.00",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

const Home = () => {
  return (
    <>
      <SEO 
        title="Professional Press Release Distribution"
        description="Boost your brand visibility with our press release distribution services. Reach thousands of media outlets and journalists."
        keywords="press release distribution, media coverage, PR service, press release service, brand visibility"
        url="/"
      />
      
      <main>
        <HeroSection>
          <div className="container">
            <HeroTitle>Amplify Your News with Professional Press Release Distribution</HeroTitle>
            <HeroSubtitle>Get your story in front of the right audience with 24-7 Press Release's powerful distribution network</HeroSubtitle>
            <CallToActionButton 
              href="https://www.dpbolvw.net/click-9083409-10754746" 
              target="_blank" 
              rel="noopener noreferrer">
              Get Started Today
            </CallToActionButton>
          </div>
        </HeroSection>

        <ContentSection>
          <SectionHeading>Why Choose Our Press Release Services?</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Wide Distribution Network</h3>
              <p>Reach thousands of media outlets, journalists, and news sites with our extensive distribution network.</p>
            </div>
            <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>SEO Optimization</h3>
              <p>Every press release is optimized for search engines to maximize your online visibility.</p>
            </div>
            <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Targeted Distribution</h3>
              <p>Reach your specific industry or geographic audience with targeted distribution options.</p>
            </div>
          </div>
          
          <AffiliateContainer>
            <a href="https://www.dpbolvw.net/click-9083409-10754746" target="_blank" rel="noopener noreferrer">
              <img src="https://www.awltovhc.com/image-9083409-10754734" width="300" height="300" alt="Press Release Distribution 24-7PressRelease.com" border="0"/>
            </a>
          </AffiliateContainer>
        </ContentSection>

        <TestimonialsSection>
          <SectionHeading>What Our Clients Say</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px' }}>
                "The distribution service helped us get coverage in major industry publications. Worth every penny!"
              </p>
              <h4 style={{ fontSize: '1.2rem' }}>Jane Smith</h4>
              <p>Marketing Director, TechStart Inc.</p>
            </div>
            <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px' }}>
                "We saw a significant increase in website traffic after our press release was distributed. Excellent service!"
              </p>
              <h4 style={{ fontSize: '1.2rem' }}>John Davis</h4>
              <p>CEO, GrowthPartners LLC</p>
            </div>
            <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px' }}>
                "The process was seamless and our press release got picked up by several major news outlets."
              </p>
              <h4 style={{ fontSize: '1.2rem' }}>Sarah Johnson</h4>
              <p>PR Manager, GlobalBrands</p>
            </div>
          </div>
          
          <div style={{ marginTop: '40px' }}>
            <CallToActionButton 
              href="https://www.dpbolvw.net/click-9083409-10754746" 
              target="_blank" 
              rel="noopener noreferrer">
              Get Started
            </CallToActionButton>
          </div>
        </TestimonialsSection>
      </main>
      <StructuredData />
    </>
  );
};

export default Home;