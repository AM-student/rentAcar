import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useAAStore } from "../../../app/stores/aastore";

export default function AudiAsDetails(){
  
  const {AudiAStore} = useAAStore();
  const {selectedAudiAs: audias, openForm, cancelSelectedAudiAs, deleteAudiAs} = AudiAStore;

  if(!audias) return <LoadingComponent />;

    return(

        <Card fluid>
        <Image src={audias.aa_image} />
        <Card.Content>
          <Card.Header>AudiAs ID: {audias.aa_id}</Card.Header>
          <Card.Meta>
              <span>
                  {audias.aa_name} {audias.aa_type}
              </span>
          </Card.Meta>
          <Card.Description>
                Year: {audias.aa_year}<br/>
                VIN: {audias.aa_vin}<br/>
                Price when bought: {audias.aa_price}<br/>
                Description: {audias.description_aa}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths='3'>
              <Button onClick={() => openForm(audias.aa_id)}basic color="green" content="Edit"/>          
              <Button onClick={cancelSelectedAudiAs} basic color="yellow" content="Cancel"/>          
              <Button onClick={() =>deleteAudiAs(audias.aa_id)}basic color="red" content="Delete"/>
          </Button.Group>
        </Card.Content>
      </Card>

    )
}