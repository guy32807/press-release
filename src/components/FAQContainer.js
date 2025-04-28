import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

const FAQContainer = styled.section`
  margin: 80px 0;
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
  
  &:last-child {
    border-bottom: none;
  }
`;

const Question = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #333;
`;

const Answer = styled.div`
  line-height: 1.6;
  color: #555;
`;

const FAQ = () => {
  const faqItems = [
    {
      question: "What is a press release distribution service?",
      answer: "A press release distribution service helps businesses and organizations send their news announcements to journalists, media outlets, news websites, and other relevant platforms to gain publicity and media coverage."
    },
    {
      question: "How can press releases benefit my business?",
      answer: "Press releases can increase your brand visibility, establish credibility, improve SEO, generate media coverage, reach your target audience, and help manage your public image during important announcements or crisis situations."
    },
    {
      question: "How do I know if my news is worthy of a press release?",
      answer: "News that is typically worthy of a press release includes product launches, company milestones, significant partnerships, industry awards, executive appointments, major events, research findings, or responses to industry trends and developments."
    },
    {
      question: "How much does press release distribution cost?",
      answer: "The cost varies depending on your distribution needs. Basic distribution packages typically start around $100, while more comprehensive packages with wider reach and additional features can range from $300 to $1000 or more."
    },
    {
      question: "How long does it take for a press release to be distributed?",
      answer: "Once submitted and approved, most press releases are distributed within 24-48 hours. Some services offer expedited distribution for time-sensitive news."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <FAQContainer>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <h2>Frequently Asked Questions</h2>
      
      {faqItems.map((item, index) => (
        <FAQItem key={index}>
          <Question>{item.question}</Question>
          <Answer>{item.answer}</Answer>
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ;