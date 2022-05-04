import React, { useEffect, useState } from 'react';
import './styles.css';
import { Container, Button } from 'semantic-ui-react';
import NavBar from './NavBar';
import UsersDashboard from '../../features/users/dashboard/UsersDashboard';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import Homepage from '../../features/home/homepage';
import UserForm from '../../features/users/form/UserForm';
import ContactForm from '../../features/contactus/form/ContactForm';
import ContactusDashboard from '../../features/contactus/dashboard/ContactusDashboard';
import AppWorkers from './AppWorkers';

function App() {

  return (
    <>
      <NavBar/>
      <Container style={{marginTop:'7em'}}>
          <Route path='/' component={Homepage} />
          <Route path='/workers' component={AppWorkers} />

          <Route path='/users' component={UsersDashboard} />
          <Route path='/createUser' component={UserForm} />
 
          <Route path='/contactus' component={ContactusDashboard} />
          <Route path='/createContactusForm' component={ContactForm} />
        </Container>
      </>
  );
}

export default observer(App);
