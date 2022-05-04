import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Button, Item, ItemContent, Segment } from "semantic-ui-react";
import { useCUStore } from "../../../app/stores/custore";

export default observer(function ContactusList(){

    const {contactStore} = useCUStore();
    const [target, setTarget] =useState('');

    const { deleteContactus, loading, contactus } = contactStore;


    function handleSalespersonDelete(e: SyntheticEvent<HTMLButtonElement>, cu_id: number){
        setTarget(e.currentTarget.name);
        deleteContactus(cu_id);
    }

    return(
        <Segment>
            <Item.Group divided>
            {
                 contactus.map((contact) => (
                  <Item key={contact.cu_id}>
                      <Item.Content>
                        <Item.Header as='a'>Contactus form ID: {contact.cu_id}</Item.Header>
                        <Item.Meta>Email of of: {contact.email}</Item.Meta>
                        <Item.Description>
                            <div>
                                 Name: {contact.name}, <br></br>
                                 Their Issue: {contact.cutext}, <br></br>
                            </div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={() => contactStore.selectContactus(contact.cu_id)} floated='right' content='View' color="blue"/>
                            <Button 
                                name={contact.cu_id}
                                loading={loading} 
                                onClick={(e) => handleSalespersonDelete(e, contact.cu_id)} 
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