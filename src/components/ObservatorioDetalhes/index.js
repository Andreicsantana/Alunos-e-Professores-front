import React from 'react';
import { Card,Button} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import '../../StyleComponents/itemobs.css';


function index({src,text}) {
    return (

    <Col className='coll' >
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={src} />
      <Card.Body >
      </Card.Body>
    </Card>
    </Col>
  
    ) 
  }
  
  export default index