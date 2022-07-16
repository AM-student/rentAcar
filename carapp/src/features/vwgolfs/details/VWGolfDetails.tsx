import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useVWGStore } from "../../../app/stores/vwgstore";

export default function VWGolfsDetails(){
  
  const {VWGolfStore} = useVWGStore();
  const {selectedVWGolf: vwgolfs, openForm, cancelSelectedVWGolf, deleteVWGolf} = VWGolfStore;

  if(!vwgolfs) return <LoadingComponent />;

    return(

        <Card fluid>
        <Image src={vwgolfs.vwg_image} />
        <Card.Content>
          <Card.Header>VWGolfs Plate: {vwgolfs.vwg_targa}</Card.Header>
          <Card.Meta>
              <span>
                  {vwgolfs.vwg_name} {vwgolfs.vwg_type}
              </span>
          </Card.Meta>
          <Card.Description>
                Year: {vwgolfs.vwg_year}<br/>
                VIN: {vwgolfs.vwg_vin}<br/>
                Price when bought: {vwgolfs.vwg_price}<br/>
                Description: {vwgolfs.description_vwg}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths='3'>
              <Button onClick={() => openForm(vwgolfs.vwg_id)}basic color="green" content="Edit"/>          
              <Button onClick={cancelSelectedVWGolf} basic color="yellow" content="Cancel"/>          
              <Button onClick={() =>deleteVWGolf(vwgolfs.vwg_id)}basic color="red" content="Delete"/>
          </Button.Group>
        </Card.Content>
      </Card>

    )
}