import React from 'react'
import { Container,Form, Button} from 'react-bootstrap';
import "../styles/SignIn.css";
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignIn = () => {
const[formData, setFormData] =useState({
        email : "",
        password: ""
})
const handleChange=()=>{}

  return (
    <Container>
    <h1>Login Form</h1>
    <Form>
      <Form.Group>         {/*Email*/}
        <Form.Label>Email</Form.Label>
        <Form.Control 
            type="email" 
            name="email"
            value={formData.email} 
            onChange={handleChange} 
            required/>
      </Form.Group>
      <Form.Group>        {/*password*/}
         <Form.Label>Password</Form.Label>
        <Form.Control 
            type="password" 
            name="password"
            value={formData.password} 
            onChange={handleChange} 
            required/>
      </Form.Group>
      <Form.Group>
        <Button varient="primary" type="submit">Login</Button>
        {/*<p>Already have an account?</p><Link to="/login">Login</Link>*/}
      </Form.Group>
    </Form>
  </Container>
    
  )
}

export default SignIn
