import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Button, Item, ItemContent, Segment } from "semantic-ui-react";
import { useVWGStore } from "../../../app/stores/vwgstore";

export default observer(function VWGolfList(){
    
    const {VWGolfStore} = useVWGStore();
    const [target, setTarget] =useState('');

    const { deleteVWGolf, loading, vwgolfs } = VWGolfStore;

    function handleVWGolfDelete(e: SyntheticEvent<HTMLButtonElement>, vwg_id: number){
        setTarget(e.currentTarget.name);
        deleteVWGolf(vwg_id);
    }

    return(
        <Segment>
            <Item.Group divided>
            {
                 vwgolfs.map((vwgolfs) => (
                  <Item key={vwgolfs.vwg_id}>
                      <Item.Content>
                        <Item.Header as='a'>VWGolf ID: {vwgolfs.vwg_id}</Item.Header>
                        <Item.Meta>Name:{vwgolfs.vwg_name}</Item.Meta>
                        <Item.Description>
                            <div>
                                Year: {vwgolfs.vwg_year}<br/>
                                VIN: {vwgolfs.vwg_vin}<br/>
                                Price when bought: {vwgolfs.vwg_price}<br/>
                                Description: {vwgolfs.description_vwg}
                            </div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={() => VWGolfStore.selectVWGolf(vwgolfs.vwg_id)} floated='right' content='View' color="blue"/>
                            <Button 
                                name={vwgolfs.vwg_id}
                                loading={loading} 
                                onClick={(e) => handleVWGolfDelete(e, vwgolfs.vwg_id)} 
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