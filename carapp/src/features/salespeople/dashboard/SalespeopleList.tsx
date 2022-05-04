import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Button, Item, ItemContent, Segment } from "semantic-ui-react";
import { useSPStore } from "../../../app/stores/spstore";

export default observer(function SalespersonList(){

    const {salespersonStore} = useSPStore();
    const [target, setTarget] =useState('');

    const { deleteSalespeople, loading, salespeople } = salespersonStore;


    function handleSalespersonDelete(e: SyntheticEvent<HTMLButtonElement>, sp_id: number){
        setTarget(e.currentTarget.name);
        deleteSalespeople(sp_id);
    }

    return(
        <Segment>
            <Item.Group divided>
            {
                 salespeople.map((salesperson) => (
                  <Item key={salesperson.sp_id}>
                      <Item.Content>
                        <Item.Header as='a'>Salesperson ID: {salesperson.sp_id}</Item.Header>
                        <Item.Meta>ATK ID:{salesperson.atk_id}</Item.Meta>
                        <Item.Description>
                            <div>
                                 Bank Account: {salesperson.bankaccount}, <br></br>
                                 First Name: {salesperson.firstname}, <br></br>
                                 Last Name: {salesperson.lastname}, <br></br>
                            </div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={() => salespersonStore.selectSalespeople(salesperson.sp_id)} floated='right' content='View' color="blue"/>
                            <Button 
                                name={salesperson.sp_id}
                                loading={loading} 
                                onClick={(e) => handleSalespersonDelete(e, salesperson.sp_id)} 
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