import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import AddContact from './components/addContacts/AddContact';
import AuthContact from './components/authContact/AuthContact';
import ContactsView from './components/contactsView/ContactsView';
import Header from './components/header/Header';
import withContext from './context/withContext';

function App(props) {
  return (
    <div className="container">
      <Header/>
      <hr/>
    <Switch>       
       {props.context.token ? 
       <Route path='/contacts' component={ContactsView}/>:
       <Route path='/auth' component={AuthContact}/>},
       <Route path='/add' component={AddContact} />           
    </Switch>

    </div>
  );
}

export default withContext(App);
