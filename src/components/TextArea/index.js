import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingTextareaExample() {
  return (
    <>
   
      
        
     
      <FloatingLabel controlId="floatingTextarea2" >
        <Form.Control
          as="textarea"
          style={{ height: '20rem' }}
        />
      </FloatingLabel>
    </>
  );
}

export default FormFloatingTextareaExample;