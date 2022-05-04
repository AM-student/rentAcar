import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useCUStore } from "../../../app/stores/custore";



export default observer(function ContactDetails(){

  const {contactStore} = useCUStore();

  const { cancelSelectedContactus, openForm, selectedContactus: contactus } = contactStore;

  if(!contactus) return <LoadingComponent />;


    return(

        <Card fluid>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>Contact Us Form ID: {contactus.cu_id}</Card.Header>
          <Card.Meta>
              <span>
                  {contactus.email}
              </span>
          </Card.Meta>
          <Card.Description>
                Name: {contactus.name}<br/>
                Issue: {contactus.cutext}<br/>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths='3'>
              <Button onClick={() => openForm(contactus.cu_id)}basic color="green" content="Edit"/>          
              <Button onClick={cancelSelectedContactus} basic color="yellow" content="Cancel"/>          
              <Button basic color="red" content="Delete"/>
          </Button.Group>
        </Card.Content>
      </Card>

    )
})