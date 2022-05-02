import React from "react";
import { Button, Item, ItemContent, Segment } from "semantic-ui-react";
import { User } from "../../../app/models/user";

interface Props {
    users: User[];
    selectUser: (user_id: number) => void;
    deleteUser: (user_id: number) => void;

}

export default function UserList({users, selectUser, deleteUser}: Props){

    return(
        <Segment>
            <Item.Group divided>
            {
                 users.map((user) => (
                  <Item key={user.user_id}>
                      <Item.Content>
                        <Item.Header as='a'>User ID: {user.username}</Item.Header>
                        <Item.Meta>Email:{user.email}</Item.Meta>
                        <Item.Description>
                            <div>
                                 Password: {user.password}, <br></br>
                                 First Name: {user.firstname}, <br></br>
                                 Last Name: {user.lastname}, <br></br>
                            </div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={() => selectUser(user.user_id)} floated='right' content='View' color="blue"/>
                            <Button onClick={() => deleteUser(user.user_id)} floated='right' content='Delete' color="red"/>
                        </Item.Extra>
                  </Item.Content>
                  </Item>
                ))
              }
            </Item.Group>
        </Segment>
    )
}