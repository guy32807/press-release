import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 60px 0 30px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  padding: 0 20px;
`;

const FooterColumn = styled.div`
  margin-bottom: 30px;
`;

const FooterHeading = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterLink = styled(Link)`
  color: #bbb;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff6b6b;
  }
`;

const ExternalLink = styled.a`
  color: #bbb;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff6b6b;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const SocialShareSection = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 25px;
  margin-top: 30px;
`;

const ShareHeading = styled.h4`
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 15px;
`;

const ShareSubheading = styled.p`
  color: #bbb;
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

const SocialShareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ShareButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    opacity: 0.9;
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 30px;
  padding-top: 20px;
  text-align: center;
  font-size: 0.9rem;
  color: #999;
`;

const AffiliateDisclaimer = styled.p`
  font-size: 0.8rem;
  color: #777;
  margin-top: 10px;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Social sharing data with colors
  const socialPlatforms = [
    { name: "Facebook", icon: "fab fa-facebook-f", color: "#3b5998", link: "https://www.facebook.com/sharer/sharer.php?u=" },
    { name: "Twitter", icon: "fab fa-twitter", color: "#1da1f2", link: "https://twitter.com/intent/tweet?text=" },
    { name: "LinkedIn", icon: "fab fa-linkedin-in", color: "#0077b5", link: "https://www.linkedin.com/shareArticle?mini=true&url=" },
    { name: "Pinterest", icon: "fab fa-pinterest-p", color: "#bd081c", link: "https://pinterest.com/pin/create/button/?url=" },
    { name: "Reddit", icon: "fab fa-reddit-alien", color: "#ff4500", link: "https://reddit.com/submit?url=" },
    { name: "Tumblr", icon: "fab fa-tumblr", color: "#35465c", link: "https://www.tumblr.com/share/link?url=" },
    { name: "WhatsApp", icon: "fab fa-whatsapp", color: "#25d366", link: "https://api.whatsapp.com/send?text=" },
    { name: "Telegram", icon: "fab fa-telegram-plane", color: "#0088cc", link: "https://t.me/share/url?url=" },
    { name: "Email", icon: "fas fa-envelope", color: "#dd4b39", link: "mailto:?subject=Check%20out%20this%20Press%20Release%20Service&body=" },
    { name: "SMS", icon: "fas fa-sms", color: "#6ab04c", link: "sms:?body=" }
  ];
  
  // Marketing message for social sharing
  const websiteUrl = "https://your-domain.com";
  const marketingMessage = encodeURIComponent("Boost your brand visibility with professional press release distribution service! Check out: ");
  const fullShareUrl = websiteUrl + "?utm_source=social&utm_medium=share&utm_campaign=footer";
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterHeading>About Us</FooterHeading>
          <p style={{ color: '#bbb', marginBottom: '20px' }}>
            We help businesses amplify their message through professional press release distribution services.
          </p>
          <SocialLinks>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ backgroundColor: "#3b5998" }}>
              <i className="fab fa-facebook-f"></i>
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ backgroundColor: "#1da1f2" }}>
              <i className="fab fa-twitter"></i>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ backgroundColor: "#0077b5" }}>
              <i className="fab fa-linkedin-in"></i>
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ backgroundColor: "#e1306c" }}>
              <i className="fab fa-instagram"></i>
            </SocialIcon>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/testimonials">Testimonials</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Services</FooterHeading>
          <ExternalLink href="https://www.dpbolvw.net/click-9083409-10754746" target="_blank" rel="noopener noreferrer">
            Standard Press Release
          </ExternalLink>
          <ExternalLink href="https://www.dpbolvw.net/click-9083409-10754746" target="_blank" rel="noopener noreferrer">
            Premium Distribution
          </ExternalLink>
          <ExternalLink href="https://www.dpbolvw.net/click-9083409-10754746" target="_blank" rel="noopener noreferrer">
            Global Distribution
          </ExternalLink>
          <ExternalLink href="https://www.dpbolvw.net/click-9083409-10754746" target="_blank" rel="noopener noreferrer">
            PR Writing Services
          </ExternalLink>
          <ExternalLink href="https://www.dpbolvw.net/click-9083409-10754746" target="_blank" rel="noopener noreferrer">
            Media Outreach
          </ExternalLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Share With Your Network</FooterHeading>
          <SocialShareSection>
            <ShareSubheading>Help others discover the power of professional press release distribution</ShareSubheading>
            <SocialShareGrid>
              {socialPlatforms.map((platform, index) => (
                <ShareButton 
                  key={index}
                  href={platform.link + marketingMessage + fullShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share on ${platform.name}`}
                  style={{ backgroundColor: platform.color }}
                  title={`Share on ${platform.name}`}
                >
                  <i className={platform.icon}></i>
                </ShareButton>
              ))}
            </SocialShareGrid>
          </SocialShareSection>
        </FooterColumn>
      </FooterContent>
      
      <BottomBar>
        <p>© {currentYear} Your Press Release Service. All rights reserved.</p>
        <AffiliateDisclaimer>
          This site contains affiliate links to 24-7PressRelease.com. We may receive a commission for purchases made through these links.
        </AffiliateDisclaimer>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;