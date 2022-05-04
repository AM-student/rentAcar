import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useMStore } from "../../../app/stores/mstore";



export default observer(function SalespersonDetails(){

  const {ManagerStore} = useMStore();

  const { cancelSelectedManagers, openForm, selectedManagers: managers } = ManagerStore;

  if(!managers) return <LoadingComponent />;


    return(

        <Card fluid>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>Salesperson ID: {managers.manager_id}</Card.Header>
          <Card.Meta>
              <span>
                Title: {managers.title}, <br/>
                {managers.firstname} {managers.lastname}
              </span>
          </Card.Meta>
          <Card.Description>
                ATK ID: {managers.atk_id}<br/>
                Bank Account: {managers.bankaccount}<br/>
                Address and Zip: {managers.address} - {managers.zip}<br/>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths='3'>
              <Button onClick={() => openForm(managers.manager_id)}basic color="green" content="Edit"/>          
              <Button onClick={cancelSelectedManagers} basic color="yellow" content="Cancel"/>          
              <Button basic color="red" content="Delete"/>
          </Button.Group>
        </Card.Content>
      </Card>

    )
})