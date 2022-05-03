import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useUStore } from '../stores/ustore';

interface Props {
    openForm : () => void;
}

export default function NavBar() {

    const {userStore} = useUStore();

    return(

        <Menu inverted fixed='top'>
            <Container>
             <Menu.Item header>
                Rent a car
            </Menu.Item >
                <Menu.Item name='Users'/>
                <Menu.Item>
                    <Button onClick={() =>userStore.openForm()} positive content='Create User'/>
                </Menu.Item>
                <Menu.Item name='Salespeople'/>
                <Menu.Item>
                    <Button positive content='Create Salesperson'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}