import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Options from './options';
import Technology from './Technology/Technology/Technology';
import Showcase from './Technology/Showcase/Showcase';
import setAuthToken from './utils/setAuthToken';
import Tech1_form from './Forms/Tech/Tech1_form';
import Tech1_preview from './Forms/Tech/Tech1_preview';
import Tech2_form from './Forms/Tech/Tech2_form';
import Tech2_preview from './Forms/Tech/Tech2_preview';
import Tech3_form from './Forms/Tech/Tech3_form';
import Tech3_preview from './Forms/Tech/Tech3_preview';
import Deployed from './Deployed/Deployed';
import Profile from './Profile/Profile';
import EditMatcher from './EditMatcher/EditMatcher';
import { Provider } from 'react-redux';
import store from './store';
import Home from './Home/Home';
import PrivateRoute from './common/private';

import Login from './auth/Login';
import jwt_decode from 'jwt-decode';
import Register from './auth/Register';
import './App.css';
import {  setCurrentUser, logoutUser} from './actions/authActions';
import { decode } from 'querystring';


///let decode;
//check for token
if(localStorage.jwtToken){
  //set auth token header auth
    setAuthToken(localStorage.jwtToken);
    //decode the token and tget user info and exp
    const decoded = jwt_decode(localStorage.jwtToken)
    //set user and isauthenticated
    store.dispatch(setCurrentUser(decoded))

    //check for expiring token
    const currentTime = Date.now()/1000
    if(decode.exp < currentTime){
           //logout 
           store.dispatch(logoutUser())


           //dispatch clear current profile
         //  store.dispatch(clearCurrentProfile())

           //todo: clear current Profile
           //redirect to login
           window.location.href = '/login'
    }
}




function App() {
  return (
    <Provider store = {store}>
    <Router>
    <div className="App">
    <Route exact path="/" component={Home} />
    
    <Switch>  
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <PrivateRoute exact path="/options" component={Options} />
   
    <Route exact path="/technology" component={Technology} />
    <Route exact path="/showcase" component={Showcase} />
    <Route exact path="/technology/tech1_form" component={Tech1_form} />
    <Route exact path="/technology/tech2_form" component={Tech2_form} />
    <Route exact path="/showcase/tech3_form" component={Tech3_form} />
    
    <Route exact path="/technology/tech1_preview" component={Tech1_preview} />
    <Route exact path="/technology/tech2_preview" component={Tech2_preview} />
    <Route exact path="/showcase/tech3_preview" component={Tech3_preview} />

    <Route exact path="/profile" component={Profile} />
    <Route exact path="/website/editform/:id/:template" component={EditMatcher} />

    <Route exact path="/:id" component={Deployed} />

    </Switch>
 
    </div>
    </Router> 
    </Provider>
    );
}

export default App;
