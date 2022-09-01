import React from 'react'
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import '../../styles/feedback1.css'



function index() {
    return (
        <>
            <div className='pai'>
                <h1 className='IntecFeed'>INTEC FEEDBACK</h1>
                <div className='containerFeed'>
                    <header className='FormHeader'>
                        <Form.Label className='alunofeed'>Aluno: Andrei Lindo</Form.Label>
                        <Form.Label className='turmafeed'>Turma: 3º DSN</Form.Label>
                    </header>
                    <body className='bodyForm1'>
                        <div className='divTurmas'>
                            <p className='texto-divturma'>Professor</p>
                            <p className='texto-divturma'>PW III</p>
                            <p className='texto-divturma'>Node.js</p>
                            <Link to='/Feedback2'>
                                <Button className='btnAvancar'>Avançar</Button>
                            </Link>
                        </div>
                    </body>
                </div>
            </div>
        </>
    )
}

export default index

