import React from 'react';
import firebaseDb from '../../firebase';
class Dashboard extends React.Component{
    render(){
        if(firebaseDb.auth().currentUser==null){
            this.props.history.push("/login");
        }
        return      <div id="dashboard">
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <img id="logo" src={process.env.PUBLIC_URL+"/alexa.png"} alt="(Alexa Logo)"></img>
        <h4 className="display-4 text-center">Alexa Questions</h4>
        </div>
        </div>
        </div>
    }
}
export default Dashboard;