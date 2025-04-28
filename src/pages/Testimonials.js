import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const PageContainer = styled.div`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #2a2a72, #009ffd);
    margin: 20px auto 0;
    border-radius: 2px;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  &:before {
    content: '"';
    font-size: 5rem;
    color: rgba(42, 42, 114, 0.05);
    position: absolute;
    top: -10px;
    left: 20px;
    font-family: serif;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 25px;
  font-style: italic;
  position: relative;
  z-index: 1;
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 20px;
`;

const ClientImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-right: 15px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ClientName = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 5px;
`;

const ClientTitle = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const ShareContainer = styled.div`
  margin-top: 60px;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 10px;
  text-align: center;
`;

const ShareTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const ShareSubtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 25px;
  color: #555;
`;

const SocialGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  color: white;
  transition: transform 0.3s ease, opacity 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    opacity: 0.9;
  }
`;

const CallToAction = styled.div`
  text-align: center;
  margin-top: 60px;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: #ff6b6b;
  color: white;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #ff5252;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(255, 107, 107, 0.4);
  }
`;

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      text: "24-7 Press Release helped us secure coverage in major industry publications we'd been trying to reach for months. The distribution was fast and the results were impressive.",
      name: "Jessica Rodriguez",
      title: "Marketing Director, TechFusion Inc.",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      text: "After using the press release distribution service, we saw a 40% increase in website traffic and several media inquiries. Definitely worth the investment.",
      name: "Michael Chen",
      title: "CEO, GrowthSpectrum LLC",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "The analytics provided after our press release distribution gave us valuable insights into our reach. We could clearly see which outlets picked up our story.",
      name: "Sarah Johnson",
      title: "PR Manager, GlobalBrands",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      text: "Our product launch announcement reached twice as many media outlets as our previous efforts. The SEO benefits were an added bonus we didn't expect.",
      name: "David Williams",
      title: "Product Manager, InnovateNow",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      text: "As a small business owner, I was skeptical about PR services. But the press release distribution helped us get local media coverage that directly led to new clients.",
      name: "Emma Thompson",
      title: "Owner, Creative Solutions Studio",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      text: "The targeted distribution options allowed us to reach our niche industry effectively. We received inquiries from exactly the kind of partners we were hoping to attract.",
      name: "Robert Garcia",
      title: "Business Development, SpectrumTech",
      image: "https://randomuser.me/api/portraits/men/62.jpg"
    }
  ];
  
  // Social sharing data with colors
  const socialPlatforms = [
    { name: "Facebook", icon: "fab fa-facebook-f", color: "#3b5998", link: "https://www.facebook.com/sharer/sharer.php?u=https://your-domain.com&quote=" },
    { name: "Twitter", icon: "fab fa-twitter", color: "#1da1f2", link: "https://twitter.com/intent/tweet?text=" },
    { name: "LinkedIn", icon: "fab fa-linkedin-in", color: "#0077b5", link: "https://www.linkedin.com/shareArticle?mini=true&url=https://your-domain.com&title=" },
    { name: "Pinterest", icon: "fab fa-pinterest-p", color: "#bd081c", link: "https://pinterest.com/pin/create/button/?url=https://your-domain.com&media=&description=" },
    { name: "Reddit", icon: "fab fa-reddit-alien", color: "#ff4500", link: "https://reddit.com/submit?url=https://your-domain.com&title=" },
    { name: "Tumblr", icon: "fab fa-tumblr", color: "#35465c", link: "https://www.tumblr.com/share/link?url=https://your-domain.com&name=" },
    { name: "WhatsApp", icon: "fab fa-whatsapp", color: "#25d366", link: "https://api.whatsapp.com/send?text=" },
    { name: "Telegram", icon: "fab fa-telegram-plane", color: "#0088cc", link: "https://t.me/share/url?url=https://your-domain.com&text=" },
    { name: "Email", icon: "fas fa-envelope", color: "#dd4b39", link: "mailto:?subject=Check%20out%20this%20Press%20Release%20Service&body=" },
    { name: "SMS", icon: "fas fa-sms", color: "#6ab04c", link: "sms:?body=" }
  ];
  
  // Marketing message for social sharing
  const marketingMessage = encodeURIComponent("Boost your brand visibility with professional press release distribution! Check out this service:");
  
  return (
    <>
      <SEO 
        title="Client Success Stories & Testimonials"
        description="See what our clients say about our press release distribution services. Real results from real businesses."
        keywords="press release testimonials, PR service reviews, press release success stories, media coverage results"
        url="/testimonials"
      />
      
      <PageContainer>
        <PageTitle>What Our Clients Say</PageTitle>
        
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <ClientInfo>
                <ClientImage>
                  <img src={testimonial.image} alt={testimonial.name} />
                </ClientImage>
                <div>
                  <ClientName>{testimonial.name}</ClientName>
                  <ClientTitle>{testimonial.title}</ClientTitle>
                </div>
              </ClientInfo>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
        
        <ShareContainer>
          <ShareTitle>Share with Your Network</ShareTitle>
          <ShareSubtitle>Help others discover the power of professional press release distribution</ShareSubtitle>
          
          <SocialGrid>
            {socialPlatforms.map((platform, index) => (
              <SocialButton 
                key={index}
                href={platform.link + marketingMessage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share on ${platform.name}`}
                style={{ backgroundColor: platform.color }}
              >
                <i className={platform.icon}></i>
              </SocialButton>
            ))}
          </SocialGrid>
        </ShareContainer>
        
        <CallToAction>
          <CTAButton 
            href="https://www.dpbolvw.net/click-9083409-10754746" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Get Started with Press Release Distribution
          </CTAButton>
        </CallToAction>
      </PageContainer>
    </>
  );
};

export default Testimonials;