import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useCUStore } from "../../../app/stores/custore";



export default observer(function ContactForm(){

    const {contactStore} = useCUStore();
    const {selectedContactus, selectedContactusce, updateContactus, createContactus, loading,closeForm } = contactStore;

    const initialState = selectedContactus ?? {
        cu_id: 0,
        email: '',
        name: '',
        cutext: '',
    }

    const initialStatece = selectedContactusce ?? {
        email: '',
        name: '',
        cutext: '',
    }

    const [contact, setContact] = useState(initialState);
    const [contactce, setContactce] = useState(initialStatece);

    function handleSubmit() {
        contact.cu_id ? updateContactus(contact) : createContactus(contactce);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setContact({...contact, [name]:value })
        setContactce({...contact, [name]:value })

    }

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input placeholder='Email' value={contact.email} name='email' onChange={handleInputChange} />
                <Form.Input placeholder='Name' value={contact.name} name='name' onChange={handleInputChange}/>
                <Form.Input placeholder='Issue' value={contact.cutext} name='cutext' onChange={handleInputChange}/>
         
                <Button loading={loading}floated="right" positive type="submit" content='Add' value={contact.email} name='email' onChange={handleInputChange} />
                <Button onClick={closeForm} floated="right" negative type="button" content='Cancel'/>
            </Form>
        </Segment>
    )
})