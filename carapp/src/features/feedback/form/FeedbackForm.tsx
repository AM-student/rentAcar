import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useFBStore } from "../../../app/stores/fbstore";



export default observer(function FeedbackForm(){

    const {feedbackStore} = useFBStore();
    const {selectedFeedback, selectedFeedbackce, updateFeedback, createFeedback, loading,closeForm } = feedbackStore;

    const initialState = selectedFeedback ?? {
        fb_id: 0,
        fb_image:'',
        email_fb: '',
        name_fb: '',
        text_fb: '',
    }

    const initialStatece = selectedFeedbackce ?? {
        fb_image:'',
        email_fb: '',
        name_fb: '',
        text_fb: '',
    }

    const [feedb, setFeedback] = useState(initialState);
    const [feedbce, setFeedbackce] = useState(initialStatece);

    function handleSubmit() {
        feedb.fb_id ? updateFeedback(feedb) : createFeedback(feedbce);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setFeedback({...feedb, [name]:value })
        setFeedbackce({...feedb, [name]:value })

    }

    return(
        <Segment clearing onSubmit={handleSubmit}>
            <Form>
                <Form.Input placeholder='Email' value={feedb.email_fb} name='email_fb' onChange={handleInputChange} />
                <Form.Input placeholder='Name' value={feedb.name_fb} name='name_fb' onChange={handleInputChange}/>
                <Form.Input placeholder='Issue' value={feedb.text_fb} name='text_fb' onChange={handleInputChange}/>
                <Form.Input placeholder='Image' value={feedb.fb_image} name='fb_image' onChange={handleInputChange}/>

                <Button loading={loading} floated="right" positive type="submit" content='Add' value={feedb.name_fb} name='name_fb' onChange={handleInputChange} />
                <Button onClick={closeForm} floated="right" negative type="button" content='Cancel'/>
            </Form>
        </Segment>
    )
})