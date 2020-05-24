import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import firebaseDb from '../../firebase';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import './QuestionList.css';
class QuestionsList extends React.Component{
    render(){
        if(this.props.user!=null)
        {
            return  <div className="jumbotron jumbotron-fluid">
                <button id="logoutButton" class="btn btn-primary">Logout</button>
                        <div className="container">
                        <h4 className="text-center">Welcome {this.props.user.email.split('@')[0]} </h4>
                       

                        <Link to="/" target="_parent">
                            <h4> Add Question</h4>
                        </Link>
 
                    <h2> Questions </h2>
                    <div id="questions_container">

                    </div>
                </div>
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
                localStorage.removeItem("auth");
                this.props.changeUser(null);
            })
            let userData = firebaseDb.firestore().collection('data').doc(`${this.props.user.email}`);
            userData.get().then((querySnapshot)=>{
                let data = querySnapshot.data();
                console.log(data);
                data.questions.forEach(question=>{
                    let q = document.createElement('div');
                    q.setAttribute('class','card');
                    q.innerHTML=`
                    <div class="card-body">
                    <h5 class="card-title">${question.text}</h5>
                    <p class="${0==Number(question.answer)-1 ? 'correct' :''}"> ${question.options[0]} </p>
                    <p class="${1==Number(question.answer)-1 ? 'correct' :''}"> ${question.options[1]} </p>
                    <p class="${2==Number(question.answer)-1 ? 'correct' :''}"> ${question.options[2]} </p>
                    <p class="${3==Number(question.answer)-1 ? 'correct' :''}"> ${question.options[3]} </p>
                  </div>
                    `
                    document.getElementById("questions_container").appendChild(q)
                })
            }).catch(err=>console.log(err))
        }
  
    }
}
export default QuestionsList;