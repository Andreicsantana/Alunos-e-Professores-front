import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Imagem from '../Imagens/transparente.png'
import { GrBook, GrPersonalComputer, GrMailOption} from "react-icons/gr";
import { AiOutlineTeam } from "react-icons/ai";
import './style.css'

function index() {
  return (
    <Navbar bg="white" expand="lg">
  <Container >
  <img className="HeaderLogo" src={Imagem}/>
    <Navbar.Brand href="#home"><Link to='/' className='HeaderLink'>INTEC</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

    <GrBook className = 'HeaderLogo'/>
    <Nav.Link> <Link to='/' className='HeaderLink'>Biblioteca</Link> </Nav.Link>
    
    <GrPersonalComputer className='HeaderLogo'/>
    <Nav.Link> <Link to='/'className='HeaderLink'>Laboratorio</Link> </Nav.Link>

    <GrMailOption className='HeaderLogo'/>
    <Nav.Link> <Link to='/'className='HeaderLink'>Secretaria</Link> </Nav.Link>
    
    <AiOutlineTeam className='HeaderLogo'/>
    <Nav.Link> <Link to='/'className='HeaderLink'>Alunos e Professores</Link> </Nav.Link>
  
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default index