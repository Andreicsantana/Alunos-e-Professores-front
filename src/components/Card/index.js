import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsFillEyeFill, BsFillHandThumbsUpFill, BsFillFileEarmarkCheckFill } from 'react-icons/bs'
import '../../StyleComponents/Card.css'


function index() {
  return (
    <>
      <CardGroup className='CardG'>


        <Card className='ItemCard1'>
          <Link to='/Avaliação' className='CardLink'>
            <Card.Body className='body'>
              <BsFillFileEarmarkCheckFill size={'4em'} />
              <Card.Title>Avaliação do TCC</Card.Title>
            </Card.Body>
          </Link>
        </Card>



        <Card className='ItemCard1'>
          <Link to='/Feedback1' className='CardLink'>
            <Card.Body className='body'>
              <BsFillHandThumbsUpFill size={'4em'} />
              <Card.Title>Feedback</Card.Title>
            </Card.Body>
          </Link>
        </Card>



        <Card className='ItemCard1'>
          <Link to='/Observatorio' className='CardLink'>
            <Card.Body className='body'>
              <BsFillEyeFill size={'4em'} />
              <Card.Title>Observatório</Card.Title>
            </Card.Body>
          </Link>
        </Card>


      </CardGroup>
    </>
  )
}

export default index