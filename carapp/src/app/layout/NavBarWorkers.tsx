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
                <Menu.Item as={NavLink} to='/workers/salespeople'name='Salespeople'/>
                <Menu.Item>
                    <Button as={NavLink} to='/workers/createSalesperson' positive content='Create Salesperson'/>
                </Menu.Item>
                <Menu.Item as={NavLink} to='/workers/managers'name='Managers'/>
                <Menu.Item>
                    <Button as={NavLink} to='/workers/createManager' positive content='Create Manager'/>
                </Menu.Item>
                <Menu.Item as={NavLink} to='/workers/securitys'name='Securitys'/>
                <Menu.Item>
                    <Button as={NavLink} to='/workers/createSecurity' positive content='Create Security'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}