import React from 'react';
import {Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Adicoes from '../../components/ObservatorioDetalhes/index.js';
import Modal from '../../components/Modal/index.js';
import ItemObs from '../../components/ItemObesrvatorio/index.js';
import {adicoes} from './Adicoes.js';
import {items} from '../Observatorio/items.js';


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
                />
              );
            })}
          </Row>
        </Container>
        <textarea className='descricao'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</textarea>
        </main>
      </div>
    ) 
  }

export default index;