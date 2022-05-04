import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useUStore } from '../stores/ustore';

export default function NavBar() {

    const {userStore} = useUStore();

    return(

        <Menu inverted fixed='top'>
            <Container>
             <Menu.Item as={NavLink} to ='/' exact header>
                Rent a car
            </Menu.Item >
                <Menu.Item as={NavLink} to='/users'name='Users'/>
                <Menu.Item>
                    <Button as={NavLink} to='/createUser' positive content='Create User'/>
                </Menu.Item>
                <Menu.Item as={NavLink} to='/contactus'name='Contactus Forms'/>
                <Menu.Item>
                    <Button as={NavLink} to='/createContactusForm' positive content='Create Contactus'/>
                </Menu.Item>
                <Menu.Item as={NavLink} to='/workers' name='Workers'/>
            </Container>
        </Menu>
    )
}