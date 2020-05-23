import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import './Login.css';
import Register from './Register';
class Login extends React.Component{
    render(){
        return <Router>
                <Switch>
                    <Route path="/register" strict>
                        <Register />
                    </Route>
                    <Route path="/">
                            <div id="login">
                        <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <img id="logo" src={process.env.PUBLIC_URL+"/alexa.png"} alt="(Alexa Logo)"></img>
                        <h1 className="display-4 text-center">Alexa Questions</h1>
                        <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button id="loginButton" variant="primary" type="submit">
                            Login
                        </Button>
                        <Link to="/register">
                        <Button id="signUpButton" variant="success" type="submit">
                            Sign up
                        </Button>
                        </Link>
                        </Form>
                        </div>
                        </div>
                        </div>
                    </Route>
                </Switch>
                </Router>;
    }
}

export default Login;