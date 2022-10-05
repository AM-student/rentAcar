import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Button, Item, ItemContent, Segment } from "semantic-ui-react";
import { useFBStore } from "../../../app/stores/fbstore";

export default observer(function FeedbackList(){

    const {feedbackStore} = useFBStore();
    const [target, setTarget] =useState('');

    const { deleteFeedback, loading, feedback } = feedbackStore;


    function handleSalespersonDelete(e: SyntheticEvent<HTMLButtonElement>, fb_id: number){
        setTarget(e.currentTarget.name);
        deleteFeedback(fb_id);
    }

    return(
        <Segment>
            <Item.Group divided>
            {
                 feedback.map((feedb) => (
                  <Item key={feedb.fb_id}>
                      <Item.Content>
                        <Item.Header as='a'>Feedback form ID: {feedb.fb_id}</Item.Header>
                        <Item.Meta>Email of of: {feedb.email_fb}</Item.Meta>
                        <Item.Description>
                            <div>
                                 Name: {feedb.name_fb}, <br></br>
                                 Their Issue: {feedb.text_fb}, <br></br>
                                 Their Image attachment: {feedb.fb_image}, <br></br>
                            </div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={() => feedbackStore.selectFeedback(feedb.fb_id)} floated='right' content='View' color="blue"/>
                            <Button 
                                name={feedb.fb_id}
                                loading={loading} 
                                onClick={(e) => handleSalespersonDelete(e, feedb.fb_id)} 
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