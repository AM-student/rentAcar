import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useVWPStore } from "../../../app/stores/vwpstore";

export default function VWPassatsDetails(){
  
  const {VWPassatStore} = useVWPStore();
  const {selectedVWPassats: vwpassat, openForm, cancelSelectedVWPassats, deleteVWPassats} = VWPassatStore;

  if(!vwpassat) return <LoadingComponent />;

    return(

        <Card fluid>
        <Image src={vwpassat.vwp_image} />
        <Card.Content>
          <Card.Header>VWPassats ID: {vwpassat.vwp_id}</Card.Header>
          <Card.Meta>
              <span>
                  {vwpassat.vwp_name} {vwpassat.vwp_type}
              </span>
          </Card.Meta>
          <Card.Description>
                Year: {vwpassat.vwp_year}<br/>
                VIN: {vwpassat.vwp_vin}<br/>
                Price when bought: {vwpassat.vwp_price}<br/>
                Description: {vwpassat.description_vwp}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths='3'>
              <Button onClick={() => openForm(vwpassat.vwp_id)}basic color="green" content="Edit"/>          
              <Button onClick={cancelSelectedVWPassats} basic color="yellow" content="Cancel"/>          
              <Button onClick={() =>deleteVWPassats(vwpassat.vwp_id)}basic color="red" content="Delete"/>
          </Button.Group>
        </Card.Content>
      </Card>

    )
}