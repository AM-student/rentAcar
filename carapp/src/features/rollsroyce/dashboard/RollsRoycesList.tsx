import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Button, Item, ItemContent, Segment } from "semantic-ui-react";
import { useRRStore } from "../../../app/stores/rrstore";

export default observer(function RollsRoyceList(){
    
    const {RollsRoyceStore} = useRRStore();
    const [target, setTarget] =useState('');

    const { deleteRollsRoyces, loading, rollsroyces } = RollsRoyceStore;

    function handleRollsRoyceDelete(e: SyntheticEvent<HTMLButtonElement>, rr_id: number){
        setTarget(e.currentTarget.name);
        deleteRollsRoyces(rr_id);
    }

    return(
        <Segment>
            <Item.Group divided>
            {
                 rollsroyces.map((rollsroyces) => (
                  <Item key={rollsroyces.rr_id}>
                      <Item.Content>
                        <Item.Header as='a'>RollsRoyce ID: {rollsroyces.rr_id}</Item.Header>
                        <Item.Meta>Name:{rollsroyces.rr_name}</Item.Meta>
                        <Item.Description>
                            <div>
                                Year: {rollsroyces.rr_year}<br/>
                                VIN: {rollsroyces.rr_vin}<br/>
                                Price when bought: {rollsroyces.rr_price}<br/>
                                Description: {rollsroyces.description_rr}
                            </div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={() => RollsRoyceStore.selectRollsRoyces(rollsroyces.rr_id)} floated='right' content='View' color="blue"/>
                            <Button 
                                name={rollsroyces.rr_id}
                                loading={loading} 
                                onClick={(e) => handleRollsRoyceDelete(e, rollsroyces.rr_id)} 
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