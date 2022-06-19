import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Button, Item, ItemContent, Segment } from "semantic-ui-react";
import { useVWPStore } from "../../../app/stores/vwpstore";

export default observer(function VWPassatList(){
    
    const {VWPassatStore} = useVWPStore();
    const [target, setTarget] =useState('');

    const { deleteVWPassats, loading, vwpassats } = VWPassatStore;

    function handleVWPassatDelete(e: SyntheticEvent<HTMLButtonElement>, vwp_id: string){
        setTarget(e.currentTarget.name);
        deleteVWPassats(vwp_id);
    }

    return(
        <Segment>
            <Item.Group divided>
            {
                 vwpassats.map((vwpassats) => (
                  <Item key={vwpassats.vwp_id}>
                      <Item.Content>
                        <Item.Header as='a'>VWPassat ID: {vwpassats.vwp_id}</Item.Header>
                        <Item.Meta>Name:{vwpassats.vwp_name}</Item.Meta>
                        <Item.Description>
                            <div>
                                Year: {vwpassats.vwp_year}<br/>
                                VIN: {vwpassats.vwp_vin}<br/>
                                Price when bought: {vwpassats.vwp_price}<br/>
                                Description: {vwpassats.description_vwp}
                            </div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={() => VWPassatStore.selectVWPassats(vwpassats.vwp_id)} floated='right' content='View' color="blue"/>
                            <Button 
                                name={vwpassats.vwp_id}
                                loading={loading} 
                                onClick={(e) => handleVWPassatDelete(e, vwpassats.vwp_id)} 
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