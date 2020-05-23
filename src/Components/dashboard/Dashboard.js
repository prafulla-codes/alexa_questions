import React from 'react';
import firebaseDb from '../../firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Dashboard.css';
class Dashboard extends React.Component{
    render(){
        if(this.props.user==null){
            this.props.history.push("/login");
        }
        return      <div id="dashboard">
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <h4 className="text-center">Welcome {this.props.user.email.split('@')[0]}</h4>
        <Form>
        <h4>Add A Question</h4>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Question </Form.Label>
            <Form.Control id="question" type="text" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Option 1</Form.Label>
            <Form.Control id="question1" type="text" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Option 2</Form.Label>
            <Form.Control id="question2" type="text" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Option 3</Form.Label>
            <Form.Control id="question3" type="text" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Option 4</Form.Label>
            <Form.Control id="question4" type="text" />
        </Form.Group>
        <Button id="loginButton" variant="primary">
            Login
        </Button>
     
        </Form>

        </div>
        </div>
        </div>
    }
}
export default Dashboard;