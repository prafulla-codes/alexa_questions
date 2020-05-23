import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
class Register extends React.Component{
    render(){
        return <Router>
                <Switch>
                <Route path="/">
                        <div id="register">
                        <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <img id="logo" src={process.env.PUBLIC_URL+"/alexa.png"} alt="(Alexa Logo)"></img>
                        <h1 className="display-4 text-center">Register</h1>
                        <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>

                        <Button id="registerButton" variant="primary" type="submit">
                            Register
                        </Button>
               
                        </Form>
                        </div>
                        </div>
                        </div>
                    </Route>
                </Switch>
        </Router>
    }
}
export default Register;