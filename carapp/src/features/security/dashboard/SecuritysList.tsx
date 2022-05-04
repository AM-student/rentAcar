import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Button, Item, ItemContent, Segment } from "semantic-ui-react";
import { useSStore } from "../../../app/stores/sstore";

export default observer(function SecuritysList(){

    const {SecurityStore} = useSStore();
    const [target, setTarget] =useState('');

    const { deleteSecuritys, loading, securitys } = SecurityStore;


    function handleSecurityDelete(e: SyntheticEvent<HTMLButtonElement>, security_id: number){
        setTarget(e.currentTarget.name);
        deleteSecuritys(security_id);
    }

    return(
        <Segment>
            <Item.Group divided>
            {
                 securitys.map((security) => (
                  <Item key={security.security_id}>
                      <Item.Content>
                        <Item.Header as='a'>Security ID: {security.security_id}</Item.Header>
                        <Item.Meta>Title: {security.securitytype}</Item.Meta>
                        <Item.Description>
                            <div>
                                Atk ID: {security.atk_id}, <br></br>
                                Bank Account: {security.bankaccount}, <br></br>
                                First Name: {security.firstname}, <br></br>
                                Last Name: {security.lastname}, <br></br>
                            </div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={() => SecurityStore.selectSecuritys(security.security_id)} floated='right' content='View' color="blue"/>
                            <Button 
                                name={security.security_id}
                                loading={loading} 
                                onClick={(e) => handleSecurityDelete(e, security.security_id)} 
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