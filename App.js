import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ContentSection from './components/ContentSection/ContentSection';
import ClientCarousel from './components/ClientCarousel/ClientCarousel';
import Footer from './components/Footer/Footer';

function App() {
  const clientsData = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1673002094173-b16f2b946780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      name: 'a',
      description: 'Accenture is a global professional services company with leading capabilities in digital, cloud and security.',
      link: 'https://www.accenture.com/'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1673002094173-b16f2b946780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      name: 'b',
      description: 'Accenture is a global professional services company with leading capabilities in digital, cloud and security.',
      link: 'https://www.accenture.com/'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1673002094173-b16f2b946780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      name: 'c',
      description: 'Accenture is a global professional services company with leading capabilities in digital, cloud and security.',
      link: 'https://www.accenture.com/'
    }
  ];
  return (
    <div className="App">
      <Header />
      <Hero />
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <ContentSection />
          </Col>
          <Col xs={6} md={4}>
          <ClientCarousel clients={clientsData} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
