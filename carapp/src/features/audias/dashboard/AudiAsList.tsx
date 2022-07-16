import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Button, Item, ItemContent, Segment } from "semantic-ui-react";
import { useAAStore } from "../../../app/stores/aastore";

export default observer(function AudiAList(){
    
    const {AudiAStore} = useAAStore();
    const [target, setTarget] =useState('');

    const { deleteAudiAs, loading, audias } = AudiAStore;

    function handleAudiADelete(e: SyntheticEvent<HTMLButtonElement>, aa_id: number){
        setTarget(e.currentTarget.name);
        deleteAudiAs(aa_id);
    }

    return(
        <Segment>
            <Item.Group divided>
            {
                 audias.map((audias) => (
                  <Item key={audias.aa_id}>
                      <Item.Content>
                        <Item.Header as='a'>AudiA ID: {audias.aa_id}</Item.Header>
                        <Item.Meta>Name:{audias.aa_name}</Item.Meta>
                        <Item.Description>
                            <div>
                                Year: {audias.aa_year}<br/>
                                VIN: {audias.aa_vin}<br/>
                                Price when bought: {audias.aa_price}<br/>
                                Description: {audias.description_aa}
                            </div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={() => AudiAStore.selectAudiAs(audias.aa_id)} floated='right' content='View' color="blue"/>
                            <Button 
                                name={audias.aa_id}
                                loading={loading} 
                                onClick={(e) => handleAudiADelete(e, audias.aa_id)} 
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