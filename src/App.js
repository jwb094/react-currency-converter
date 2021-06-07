import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//function App() {
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          current_currency: '',
          desired_currency:''
      };
      this.getConvertedValue = this.getConvertedValue.bind(this);
      }

      getConvertedValue(){
        this.setState({
          current_currency:document.getElementById('current_currency').value,
          desired_currency:document.getElementById('desired_currency').value
        });
     
      }
      handleChange = (event) => {
        event.preventDefault();
        console.log(event);
        this.setState({ current_currency: event.target.value });
        console.log(this.state);
      }


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
     <Form.Group >
     <Form.Label>Select Current Currency</Form.Label>
         <Form.Control as="select" id="current_currency" onChange={this.handleChange}>
           <option value="GBP">GBP</option>
           <option value="EUR">EUR</option>
           <option value="USD">USD</option>
           <option value="JPY">JPY</option>
           <option value="HKD">HKD</option>
         </Form.Control>
       </Form.Group>
       <Form.Group >
      <Form.Label>Select Desired Currency</Form.Label>
         <Form.Control as="select" id="desired_currency">
         <option value="GBP">GBP</option>
           <option value="EUR">EUR</option>
           <option value="USD">USD</option>
           <option value="JPY">JPY</option>
           <option value="HKD">HKD</option>
         </Form.Control>
       </Form.Group>
       

       <Button variant="primary" size="lg" block onClick={this.getConvertedValue}>
  Convert
  </Button>
      
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
