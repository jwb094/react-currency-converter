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
import axios from  'axios';
//function App() {
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          converted_amount: '',
          desired_currency:''
      };
      this.getConvertedValue = this.getConvertedValue.bind(this);
      }

      getConvertedValue(){
       
        this.setState({
          desired_currency:document.getElementById('desired_currency').value,
          converted_amount:document.getElementById('amount').value
        });
        
        axios.get(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_KEY}/pair/GBP/${this.state.desired_currency}/${this.state.converted_amount}`)
            .then(function (response) {
              // handle success
              
              console.log(response.data.conversion_rate);
              console.log(response.data.conversion_result);
            })
            .catch(function (error) {
              console.log(error);
            })
      }
      handleChange = (event) => {
        event.preventDefault();
        // console.log(event);
        this.setState({ current_currency: event.target.value });
        // console.log(this.state);
      }

     
  render (){
    
    return(
        <Container>
 
 <Row>
   <Col md={{ span: 6, offset: 4 }}>
   <Card border="primary" style={{ width: '18rem' }}>
   <Card.Header>Converter</Card.Header>
   <Card.Body>
   <Form.Group>
   <Form.Label>Enter desired amount</Form.Label>
   <Form.Control type="text" placeholder="100"  id="amount"/>
 </Form.Group>
     <Card.Text>
     {/* <Form.Group >
     <Form.Label>Select Current Currency</Form.Label>
         <Form.Control as="select" id="current_currency" onChange={this.handleChange}>
           <option value="GBP">GBP</option>
           <option value="EUR">EUR</option>
           <option value="USD">USD</option>
           <option value="JPY">JPY</option>
           <option value="HKD">HKD</option>
         </Form.Control>
       </Form.Group> */}
       <Form.Group >
      <Form.Label>Select Desired Currency</Form.Label>
         <Form.Control as="select" id="desired_currency" onChange={this.handleChange}>
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
