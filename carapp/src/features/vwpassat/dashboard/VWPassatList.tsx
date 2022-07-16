import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Button, Item, ItemContent, Segment } from "semantic-ui-react";
import { useVWPStore } from "../../../app/stores/vwpstore";

export default observer(function VWPassatList(){
    
    const {VWPassatStore} = useVWPStore();
    const [target, setTarget] =useState('');

    const { deleteVWPassats, loading, vwpassats } = VWPassatStore;

    function handleVWPassatDelete(e: SyntheticEvent<HTMLButtonElement>, vwp_id: number){
        setTarget(e.currentTarget.name);
        deleteVWPassats(vwp_id);
    }

    return(
        <Segment>
            <Item.Group divided>
            {
                 vwpassats.map((vwpassat) => (
                  <Item key={vwpassat.vwp_id}>
                      <Item.Content>
                        <Item.Header as='a'>VWPassat ID: {vwpassat.vwp_id}</Item.Header>
                        <Item.Meta>Name:{vwpassat.vwp_name}</Item.Meta>
                        <Item.Description>
                            <div>
                                Year: {vwpassat.vwp_year}<br/>
                                VIN: {vwpassat.vwp_vin}<br/>
                                Price when bought: {vwpassat.vwp_price}<br/>
                                Description: {vwpassat.description_vwp}
                            </div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={() => VWPassatStore.selectVWPassats(vwpassat.vwp_id)} floated='right' content='View' color="blue"/>
                            <Button 
                                name={vwpassat.vwp_id}
                                loading={loading} 
                                onClick={(e) => handleVWPassatDelete(e, vwpassat.vwp_id)} 
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