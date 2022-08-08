import React from 'react';
import {Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Adicoes from '../../components/ObservatorioDetalhes/index.js';
import {adicoes} from './Adicoes.js';

import './style.css'


function index()  {
    return (
      <div className='linha'>
        <main>
        <header>
            <Button variant="outline-secondary" >
                Adicionar documento
            </Button>
        </header>
        <Container fluid >
        <Row xs={1} md={4} >
        {adicoes.map(item => {
         return (
           <Adicoes
           src = {item.src}
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

export default index;