import React from 'react';
import './styles.css';
import { Container, Button } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import FeedbackForm from '../../features/feedback/form/FeedbackForm';
import FeedbackDashboard from '../../features/feedback/dashboard/FeedbackDashboard';
import ContactusDashboard from '../../features/contactus/dashboard/ContactusDashboard';
import ContactForm from '../../features/contactus/form/ContactForm';
import NavBarCostumerService from './NavBarCostumerService';


function AppCostumerService() {

  return (
    <>
      <NavBarCostumerService />
      <Container style={{marginTop:'7em'}}>
          <Route path='/costumerservice/feedback' component={FeedbackDashboard} />
          <Route path='/costumerservice/createFeedbackForm' component={FeedbackForm} />
          <Route path='/costumerservice/contactus' component={ContactusDashboard} />
          <Route path='/costumerservice/createContactusForm' component={ContactForm} />
         
        </Container>
      </>
  );
}

export default observer(AppCostumerService);
