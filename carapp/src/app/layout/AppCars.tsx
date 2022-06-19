import React from 'react';
import './styles.css';
import { Container, Button } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import VWGolfDashboard from '../../features/vwgolfs/dashboard/VWGolfDashboard';
import VWGolfsForm from '../../features/vwgolfs/form/VWGolfForm';
import NavBarCars from './NavBarCars';
import VWPassatDashboard from '../../features/vwpassat/dashboard/VWPassatDashboard';
import VWPassatForm from '../../features/vwpassat/form/VWPassatForm';


function AppCars() {

  return (
    <>
      <NavBarCars />
      <Container style={{marginTop:'7em'}}>
          <Route path='/cars/vwgolf' component={VWGolfDashboard} />
          <Route path='/cars/createVWGolf' component={VWGolfsForm} />
          <Route path='/cars/vwpassat' component={VWPassatDashboard} />
          <Route path='/cars/createVWPassat' component={VWPassatForm} />
        </Container>
      </>
  );
}

export default observer(AppCars);
