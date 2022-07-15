import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useRRStore } from "../../../app/stores/rrstore";

export default function RollsRoycesDetails(){
  
  const {RollsRoyceStore} = useRRStore();
  const {selectedRollsRoyces: rollsroyces, openForm, cancelSelectedRollsRoyces, deleteRollsRoyces} = RollsRoyceStore;

  if(!rollsroyces) return <LoadingComponent />;

    return(

        <Card fluid>
        <Image src={rollsroyces.rr_image} />
        <Card.Content>
          <Card.Header>RollsRoyces ID: {rollsroyces.rr_id}</Card.Header>
          <Card.Meta>
              <span>
                  {rollsroyces.rr_name} {rollsroyces.rr_type}
              </span>
          </Card.Meta>
          <Card.Description>
                Year: {rollsroyces.rr_year}<br/>
                VIN: {rollsroyces.rr_vin}<br/>
                Price when bought: {rollsroyces.rr_price}<br/>
                Description: {rollsroyces.description_rr}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths='3'>
              <Button onClick={() => openForm(rollsroyces.rr_id)}basic color="green" content="Edit"/>          
              <Button onClick={cancelSelectedRollsRoyces} basic color="yellow" content="Cancel"/>          
              <Button onClick={() =>deleteRollsRoyces(rollsroyces.rr_id)}basic color="red" content="Delete"/>
          </Button.Group>
        </Card.Content>
      </Card>

    )
}