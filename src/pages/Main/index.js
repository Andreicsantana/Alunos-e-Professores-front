import React from 'react'
import Carousel from '../../components/Carousel';
import CardGroup from '../../components/Card/index.js';
import Logo from '../../components/Logo/index.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './style.css';



function index()  {
  return (
    <div className='linha'>
      <main>
        <Container fluid >
          <Row>
            <header>
              <Carousel />
              <Logo  />
            </header>
            <CardGroup />
          </Row>
        </Container>
      </main>
    </div>
  ) 
}

export default index

