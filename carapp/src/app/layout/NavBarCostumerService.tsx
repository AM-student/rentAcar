import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() {

    return(

        <Menu inverted fixed='top'>
            <Container>
             <Menu.Item as={NavLink} to ='/' exact header>
                Rent a car
            </Menu.Item >
                <Menu.Item as={NavLink} to='/costumerservice/feedback'name='Feedback'/>
                <Menu.Item>
                    <Button as={NavLink} to='/costumerservice/createFeedbackForm' positive content='Create Feedback'/>
                </Menu.Item>
                <Menu.Item as={NavLink} to='/costumerservice/contactus'name='Contact Us'/>
                <Menu.Item>
                    <Button as={NavLink} to='/costumerservice/createContactusForm' positive content='Create Contact Us'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}