import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Button, Item, ItemContent, Segment } from "semantic-ui-react";
import { useMStore } from "../../../app/stores/mstore";

export default observer(function ManagerList(){

    const {ManagerStore} = useMStore();
    const [target, setTarget] =useState('');

    const { deleteManagers, loading, managers } = ManagerStore;


    function handleManagerDelete(e: SyntheticEvent<HTMLButtonElement>, manager_id: number){
        setTarget(e.currentTarget.name);
        deleteManagers(manager_id);
    }

    return(
        <Segment>
            <Item.Group divided>
            {
                 managers.map((manager) => (
                  <Item key={manager.manager_id}>
                      <Item.Content>
                        <Item.Header as='a'>Manager ID: {manager.manager_id}</Item.Header>
                        <Item.Meta>Title: {manager.title}</Item.Meta>
                        <Item.Description>
                            <div>
                                Atk ID: {manager.atk_id}, <br></br>
                                Bank Account: {manager.bankaccount}, <br></br>
                                First Name: {manager.firstname}, <br></br>
                                Last Name: {manager.lastname}, <br></br>
                            </div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={() => ManagerStore.selectManagers(manager.manager_id)} floated='right' content='View' color="blue"/>
                            <Button 
                                name={manager.manager_id}
                                loading={loading} 
                                onClick={(e) => handleManagerDelete(e, manager.manager_id)} 
                                floated='right' content='Delete' color="red"
                            />
                        </Item.Extra>
                  </Item.Content>
                  </Item>
                ))
              }
            </Item.Group>
        </Segment>
    )
})