import React, { useEffect, useState } from 'react';
import './styles.css';
import { Container, Button } from 'semantic-ui-react';
import { User } from '../models/user';
import { Userce } from '../models/userce';
import NavBar from './NavBar';
import UsersDashboard from '../../features/users/dashboard/UsersDashboard';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import SalespeopleDashboard from '../../features/salespeople/dashboard/SalespeopleDashboard';
import { useUStore } from '../stores/ustore';
import { observer } from 'mobx-react-lite';

function App() {

  const{userStore} = useUStore();
  
  useEffect(() => {
      userStore.loadUsers();
  }, [userStore])
  
  if (userStore.loadingInitial) return <LoadingComponent content='Loading APP'/>

  return (
    <>
      <NavBar/>
      <Container style={{marginTop:'7em'}}>
          <UsersDashboard />
        </Container>
      </>
  );
}

export default observer(App);
