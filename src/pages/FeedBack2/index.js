import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import './style.css'



function index() {
    return (
        <>
            <div className='pai'>
                <h1 className='IntecFeed'>INTEC FEEDBACK</h1>
                <div className='containerFeed'>
                    <header className='FormHeader'>
                        <Form.Label className='Material'>Material:</Form.Label>
                        <Link to='/Feedback1'>
                            <Button className='btnCancelar'> Cancelar </Button>
                        </Link>
                        <Button className='btnEnviar'> Enviar </Button>
                    </header>
                    <body className='bodyForm'>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Nome:</InputGroup.Text>
                            <Form.Control aria-label="First name" />
                        </InputGroup>
                        <InputGroup className="mb-3" >
                            <InputGroup.Text>Email Institucional:</InputGroup.Text>
                            <Form.Control aria-label="Last name" />
                        </InputGroup>
                        <p>Avalie o Material de aula em:</p>
                        <select className='selectfeed'>
                            <option></option>
                            <option>Insatisfatorio</option>
                            <option>Satisfatorio</option>
                        </select>
                        <p>Descreva a avaliação:</p>
                        <textarea className='textfeedback'></textarea>
                    </body>
                </div>
            </div>
        </>
    )
}

export default index

