import React from 'react';
import firebaseDb from '../../firebase';

import './Dashboard.css';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import AddQuestion from './AddQuestion';
import QuestionsList from './QuestionsList';
class Dashboard extends React.Component{
    render(){
        if(this.props.user==null){
            this.props.history.push("/login");
            return null;
        }
        else
        {
            return  <Router>
            <div id="dashboard">
            <button id="logoutButton" class="btn btn-primary">
                    Logout
                </button>
            <div className="jumbotron jumbotron-fluid">
            <div className="container ">
            <h4 className="text-center">Welcome {this.props.user.email.split('@')[0]} </h4>
            </div>
            <Switch>
                <Route path="/" exact>
                <AddQuestion {...this.props} user={this.props.user} changeUser={this.changeUser}/>
                </Route>
                <Route path="/questionslist">
                    <QuestionsList {...this.props} user={this.props.user} changeUser={this.changeUser}/>
                </Route>

            </Switch>
            </div>
            </div>
        </Router>
          

        
        }
       
    }
    componentDidMount(){
        if(this.props.user!=null)
        {
            document.getElementById("logoutButton").addEventListener('click',()=>{
                this.props.changeUser(null);
                localStorage.removeItem("auth");
                
            })
        }
  
    }
}
export default Dashboard;