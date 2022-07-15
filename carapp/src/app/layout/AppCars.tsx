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
import AudiAsDashboard from '../../features/audias/dashboard/AudiAsDashboard';
import AudiAsForm from '../../features/audias/form/AudiAsForm';
import RollsRoycesDashboard from '../../features/rollsroyce/dashboard/RollsRoycesDashboard';
import RollsRoycesForm from '../../features/rollsroyce/form/RollsRoycesForm';


function AppCars() {

  return (
    <>
      <NavBarCars />
      <Container style={{marginTop:'7em'}}>
          <Route path='/cars/vwgolf' component={VWGolfDashboard} />
          <Route path='/cars/createVWGolf' component={VWGolfsForm} />
          <Route path='/cars/vwpassat' component={VWPassatDashboard} />
          <Route path='/cars/createVWPassat' component={VWPassatForm} />
          <Route path='/cars/audia' component={AudiAsDashboard} />
          <Route path='/cars/createAudiA' component={AudiAsForm} />
          <Route path='/cars/rollsroyce' component={RollsRoycesDashboard} />
          <Route path='/cars/createRollsRoyce' component={RollsRoycesForm} />
        </Container>
      </>
  );
}

export default observer(AppCars);
