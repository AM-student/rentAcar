import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useFBStore } from "../../../app/stores/fbstore";



export default observer(function FeedbackDetails(){

  const {feedbackStore} = useFBStore();

  const { cancelSelectedFeedback, openForm, selectedFeedback: feedback } = feedbackStore;

  if(!feedback) return <LoadingComponent />;


    return(

        <Card fluid>
        <Image src= {feedback.fb_image} />
        <Card.Content>
          <Card.Header>Feedback Us Form ID: {feedback.fb_id}</Card.Header>
          <Card.Meta>
              <span>
                  {feedback.email_fb}
              </span>
          </Card.Meta>
          <Card.Description>
                Name: {feedback.name_fb}<br/>
                Issue: {feedback.text_fb}<br/>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths='3'>
              <Button onClick={() => openForm(feedback.fb_id)}basic color="green" content="Edit"/>          
              <Button onClick={cancelSelectedFeedback} basic color="yellow" content="Cancel"/>          
              <Button basic color="red" content="Delete"/>
          </Button.Group>
        </Card.Content>
      </Card>

    )
})