import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useSStore } from "../../../app/stores/sstore";



export default observer(function SecurityDetails(){

  const {SecurityStore} = useSStore();

  const { cancelSelectedSecuritys, openForm, selectedSecuritys: securitys } = SecurityStore;

  if(!securitys) return <LoadingComponent />;


    return(

        <Card fluid>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>Salesperson ID: {securitys.security_id}</Card.Header>
          <Card.Meta>
              <span>
                Title: {securitys.securitytype}, <br/>
                {securitys.firstname} {securitys.lastname}
              </span>
          </Card.Meta>
          <Card.Description>
                ATK ID: {securitys.atk_id}<br/>
                Bank Account: {securitys.bankaccount}<br/>
                Address and Zip: {securitys.address} - {securitys.zip}<br/>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths='3'>
              <Button onClick={() => openForm(securitys.security_id)}basic color="green" content="Edit"/>          
              <Button onClick={cancelSelectedSecuritys} basic color="yellow" content="Cancel"/>          
              <Button basic color="red" content="Delete"/>
          </Button.Group>
        </Card.Content>
      </Card>

    )
})