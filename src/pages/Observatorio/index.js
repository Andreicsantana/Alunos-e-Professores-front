import React from 'react';
import Pesquisa from '../../components/Pesquisa/index.js';
import ItemObs from '../../components/ItemObesrvatorio/index.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {items} from './items.js';
import './style.css';



function index()  {
  console.log(items)
  return (
    <div className='linha'>
      <main>
      <header>
        <Pesquisa/>
      </header>
      <Container fluid>
      <Row xs={1} md={4} >
       {items.map(item => {
        return (
          <ItemObs
          src = {item.src}
          title = {item.title}
          text = {item.text}
        />
        );
       })}
      </Row>
      </Container>
      </main>
    </div>
  ) 
}

export default index
