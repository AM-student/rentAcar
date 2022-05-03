import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Salesperson } from "../../../app/models/salesperson";

interface Props {
    salesperson: Salesperson  |undefined;
    closeForm: () => void;
    createOrEdit:  (salesperson: Salesperson) => void
    submitting: boolean;
}

export default function SalespersonForm({salesperson: selectedUser, closeForm, createOrEdit, submitting}: Props){

    const initialState = selectedUser ?? {
        sp_id: 0,
        personal_id:  0,
        atk_id:  0,
        bankaccount:  0,
        firstname:  '',
        lastname:  '',
        address:  '',
        zip:  0,
    }

    const [salesperson, setUser] = useState(initialState);

    function handleSubmit() {
        createOrEdit(salesperson);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setUser({...salesperson, [name]:value })
    }

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input placeholder='Personal Id' value={salesperson.personal_id} name='personal_id' onChange={handleInputChange} />
                <Form.Input placeholder='ATK Id' value={salesperson.atk_id} name='atk_id' onChange={handleInputChange}/>
                <Form.Input placeholder='Bank Account' value={salesperson.bankaccount} name='bankaccount' onChange={handleInputChange}/>
                <Form.Input placeholder='First Name' value={salesperson.firstname} name='firstname' onChange={handleInputChange}/>
                <Form.Input placeholder='Last Name' value={salesperson.lastname} name='lastname' onChange={handleInputChange}/>
                <Form.Input placeholder='Address' value={salesperson.address} name='address' onChange={handleInputChange}/>
                <Form.Input placeholder='Zip' value={salesperson.zip} name='zip' onChange={handleInputChange}/>

                <Button loading={submitting}floated="right" positive type="submit" content='Add' value={salesperson.personal_id} name='personal_id' onChange={handleInputChange} />
                <Button onClick={closeForm} floated="right" negative type="button" content='Cancel'/>
            </Form>
        </Segment>
    )
}