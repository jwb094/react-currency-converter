import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
//function App() {
  class App extends Component {
    

  render (){
    return(
        <Container>
 
 <Row>
   <Col md={{ span: 6, offset: 4 }}>{`md={{ span: 6, offset: 3 }}`}
   <Card border="primary" style={{ width: '18rem' }}>
   <Card.Header>Converter</Card.Header>
   <Card.Body>
   <Form.Group controlId="exampleForm.ControlInput1">
   <Form.Label>Enter desired amount</Form.Label>
   <Form.Control type="email" placeholder="100" />
 </Form.Group>
     <Card.Text>
     <Form.Group controlId="exampleForm.ControlSelect1">
     <Form.Label>Select Currency</Form.Label>
         <Form.Control as="select">
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
         </Form.Control>
       </Form.Group>
       Some quick example text to build on the card title and make up the bulk
       of the card's content.
     </Card.Text>
   </Card.Body>
 </Card>
   </Col>
 </Row>
</Container>
    )

  }

  
}

export default App;
