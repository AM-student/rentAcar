import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useSPStore } from "../../../app/stores/spstore";



export default observer(function SalespersonDetails(){

  const {salespersonStore} = useSPStore();

  const { cancelSelectedSalespeople, openForm, selectedSalespeople: salespeople } = salespersonStore;

  if(!salespeople) return <LoadingComponent />;


    return(

        <Card fluid>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>Salesperson ID: {salespeople.sp_id}</Card.Header>
          <Card.Meta>
              <span>
                  {salespeople.firstname} {salespeople.lastname}
              </span>
          </Card.Meta>
          <Card.Description>
                ATK ID: {salespeople.atk_id}<br/>
                Bank Account: {salespeople.bankaccount}<br/>
                Address and Zip: {salespeople.address} - {salespeople.zip}<br/>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths='3'>
              <Button onClick={() => openForm(salespeople.sp_id)}basic color="green" content="Edit"/>          
              <Button onClick={cancelSelectedSalespeople} basic color="yellow" content="Cancel"/>          
              <Button basic color="red" content="Delete"/>
          </Button.Group>
        </Card.Content>
      </Card>

    )
})