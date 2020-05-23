import React from 'react';
import Login from './Components/authentication/Login';
import {useHistory} from 'react-router-dom';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import firebaseDb from './firebase';
import Dashboard from './Components/dashboard/Dashboard';
import Register from './Components/authentication/Register';
import { AuthProvider } from './Auth';
class App extends React.Component {
  constructor(props){
    super(props);
  }
  changeUser = (user)=>{
    this.setState({user:user});
  }
  render(){

      return <Router>
      <Route exact path="/login" render={props=> <Login {...props} changeUser={this.changeUser}/>}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/" component={Dashboard}></Route>
    </Router>
    

  }
  componentDidMount(){
 
  }
 
}

export default App;
