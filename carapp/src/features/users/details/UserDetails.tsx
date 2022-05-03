import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { User } from "../../../app/models/user";
import { useUStore } from "../../../app/stores/ustore";


export default function UserDetails(){

  const {userStore} = useUStore();
  const {selectedUser: users, openForm, cancelSelectedUser, deleteUser} = userStore;

  if(!users) return <LoadingComponent />;

    return(

        <Card fluid>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>User ID: {users.user_id}</Card.Header>
          <Card.Meta>
              <span>
                  {users.firstname} {users.lastname}
              </span>
          </Card.Meta>
          <Card.Description>
                Email: {users.email}<br/>
                Password: {users.password}<br/>
                Address and Zip: {users.address} - {users.zip}<br/>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths='3'>
              <Button onClick={() => openForm(users.user_id)}basic color="green" content="Edit"/>          
              <Button onClick={cancelSelectedUser} basic color="yellow" content="Cancel"/>          
              <Button onClick={() =>deleteUser(users.user_id)}basic color="red" content="Delete"/>
          </Button.Group>
        </Card.Content>
      </Card>

    )
}