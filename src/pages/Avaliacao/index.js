import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import TextArea from '../../components/TextArea/index.js';
import '../../styles/main.css';
import '../../styles/avaliacao.css';



function index() {
  return (
    <>
      <div className='linha'>
        <div className='doc-pag'>
          <header className='doc-header'>
            <h2 className='doc-name'>FICHA DE AVALIAÇÃO DO TCC </h2>
            <InputGroup className="mb-3">
              <InputGroup.Text>AVALIAÇÃO DO TRABALHO DE CONCLUSÃO DE CURSO – TCC - ANO:</InputGroup.Text>
              <Form.Control  />
            </InputGroup>
            <InputGroup className="mb-3" >
              <InputGroup.Text>Aluno(a):</InputGroup.Text>
              <Form.Control  />
              <InputGroup.Text>Módulo:</InputGroup.Text>
              <Form.Control  />
              <InputGroup.Text>Turma:</InputGroup.Text>
              <Form.Control  />
            </InputGroup>
            <InputGroup className="mb-3" >
              <InputGroup.Text>Habilitação Profissional Técnica de Nível Médio de Técnico em:</InputGroup.Text>
              <Form.Control  />
            </InputGroup>
            <InputGroup className="mb-3" >
              <InputGroup.Text>Professor Responsável:</InputGroup.Text>
              <Form.Control />
            </InputGroup>
            <InputGroup className="mb-3" >
              <InputGroup.Text>Tema do Trabalho:</InputGroup.Text>
              <Form.Control  />
            </InputGroup>
          </header>
          <div>
            <p>Trabalho Escrito (obrigatório) </p>
            <p>Análise (Considerando os critérios adotados):</p>
            <TextArea />
          </div>
        </div>
      </div>

    </>
  )
}

export default index

