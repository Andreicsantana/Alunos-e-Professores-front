import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingTextareaExample() {
  return (
    <>
   
      
        
     
      <FloatingLabel controlId="floatingTextarea2" label="Descrição">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
    </>
  );
}

export default FormFloatingTextareaExample;