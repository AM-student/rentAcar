import React from 'react';
import './styles.css';
import { Container, Button } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import SalespeopleDashboard from '../../features/salespeople/dashboard/SalespeopleDashboard';
import SalespersonForm from '../../features/salespeople/form/SalespersonForm';
import NavBarWorkers from './NavBarWorkers';
import ManagersDashboard from '../../features/managers/dashboard/ManagersDashboard';
import ManagerForm from '../../features/managers/form/ManagerForm';
import SecurityForm from '../../features/security/form/SecurityForm';
import SecuritysDashboard from '../../features/security/dashboard/SecuritysDashboard';

function AppWorkers() {

  return (
    <>
      <NavBarWorkers />
      <Container style={{marginTop:'7em'}}>
          <Route path='/workers/salespeople' component={SalespeopleDashboard} />
          <Route path='/workers/createSalesperson' component={SalespersonForm} />
          <Route path='/workers/managers' component={ManagersDashboard} />
          <Route path='/workers/createManager' component={ManagerForm} />
          <Route path='/workers/securitys' component={SecuritysDashboard} />
          <Route path='/workers/CreateSecurity' component={SecurityForm} />
        </Container>
      </>
  );
}

export default observer(AppWorkers);
