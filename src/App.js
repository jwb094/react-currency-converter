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
import Alert from 'react-bootstrap/Alert';
import axios from  'axios';
//function App() {
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        converted_amount: '',
          desired_currency:'',
          new_amount:'',
          value: ''
      };
      this.getConvertedValue = this.getConvertedValue.bind(this);
      }
      handleChanging = (event)=> {  
        event.preventDefault();  
        this.setState({value: event.target.value}); 
        console.log(this.state); 
      }

      handleChange = (event) => {
        event.preventDefault();
        // console.log(event);
        this.setState({ desired_currency: event.target.value });
        // console.log(this.state);
      }
      getConvertedValue(){
       
        this.setState({
          desired_currency:document.getElementById('desired_currency').value,
          converted_amount:document.getElementById('amount').value
        });
        console.log(this.state);
        axios.get(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_KEY}/pair/GBP/${this.state.desired_currency}/${this.state.converted_amount}`)
              .then(result => {
                console.log(result)
                this.setState({new_amount:result.data})
              });
              console.log(this.state); 
      }
 

     
  render (){

     const isLoggedIn = this.state.new_amount;
     let outcome;
     console.log(isLoggedIn);
     if (isLoggedIn) {     
        outcome =    <Alert variant="success">
              <p> Your new Amount is {this.state.desired_currency} : {isLoggedIn.conversion_result}</p>
          </Alert>;  
        } else {    
          outcome = <Alert variant="danger">
                      <p> No conversion can be made at this time</p>
                    </Alert>; 
      }
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

       <Form.Group >
       <input type="text" value={this.state.value} onChange={this.handleChanging} />
      <Form.Label>Select Desired Currency</Form.Label>
         <Form.Control as="select" id="desired_currency" onChange={this.handleChange}>
           <option value="EUR">EUR</option>
           <option value="USD">USD</option>
           <option value="JPY">JPY</option>
           <option value="HKD">HKD</option>
         </Form.Control>
       </Form.Group>
       {outcome}       

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
