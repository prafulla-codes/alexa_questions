import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as firebase from 'firebase';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import QuestionsList from './QuestionsList';
import firebaseDb from '../../firebase';
class AddQuestion extends React.Component{
    render(){
        if(this.props.user!=null)
        {
            return   <div id="addQuestion" class="container">
                <Router>
                    <Switch>
                    <Link to="/questionslist" target="_self">
                        <div class="container">
                        <h4> Questions List</h4>
                        <br></br>
                        <br></br>
                        </div>
                    </Link>
                    </Switch>
                </Router>
            <Form>
            <h4>Add A Question</h4>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Question </Form.Label>
                <Form.Control id="question" type="text" />
            </Form.Group>
    
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Option 1</Form.Label>
                <Form.Control id="option1" type="text" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Option 2</Form.Label>
                <Form.Control id="option2" type="text" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Option 3</Form.Label>
                <Form.Control id="option3" type="text" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Option 4</Form.Label>
                <Form.Control id="option4" type="text" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Answer</Form.Label>
                <Form.Control id="answer" type="number" min="1" max="4" />
            </Form.Group>
            <Button id="addQuestion" variant="primary" autoSave={false}>
                Add Question
            </Button>
         
            </Form>
            </div>
        }
        else
        {
            return null;
        }
    
    }
    componentDidMount(){
        if(this.props.user!=null)
        {
            document.getElementById("logoutButton").addEventListener('click',()=>{
                this.props.changeUser(null);
                localStorage.removeItem("auth");
                document.location.href="/";
                
            })

            document.getElementById("addQuestion").addEventListener("click",(e)=>{
                e.preventDefault();
                let question = document.getElementById("question").value;
                let option1 = document.getElementById("option1").value;
                let option2 = document.getElementById("option2").value;
                let option3 = document.getElementById("option3").value;
                let option4 = document.getElementById("option4").value;
                let answer = document.getElementById("answer").value;
                if(question=='' || option1=='' || option2=='' || option3=='' || option4=='' || answer=='')
                {
                    console.log('null values');
                    return;
                }
                else{
                    let q = {
                        text:question,
                        options:[option1,option2,option3,option4],
                        answer:answer
                    }
                    firebaseDb.firestore().collection('data').doc(`${this.props.user.email}`).update({
                        questions:firebase.firestore.FieldValue.arrayUnion(q)
                    }).then(()=>{
                        alert("Question Added");
                        document.location.href="/";
                    }).catch(err=>alert(err.message))
                }
            })
        }
  
    }
}
export default AddQuestion;