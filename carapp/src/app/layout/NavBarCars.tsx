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
                <Menu.Item as={NavLink} to='/cars/vwgolf'name='Volkswagen Golf'/>
                <Menu.Item>
                    <Button as={NavLink} to='/cars/createVWGolf' positive content='Create Volkswagen Golf'/>
                </Menu.Item>
                <Menu.Item as={NavLink} to='/cars/vwpassat'name='Volkswagen Passat'/>
                <Menu.Item>
                    <Button as={NavLink} to='/cars/createVWPassat' positive content='Create Volkswagen Passat'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}