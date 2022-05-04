import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useSStore } from "../../../app/stores/sstore";



export default observer(function SecurityForm(){

    const {SecurityStore} = useSStore();
    const {selectedSecuritys, selectedSecuritysce, updateSecuritys, createSecuritys, loading,closeForm } = SecurityStore;

    const initialState = selectedSecuritys ?? {
        security_id: 0,
        personal_id:  0,
        atk_id:  0,
        bankaccount:  0,
        firstname:  '',
        lastname:  '',
        address:  '',
        zip:  0,
        title:  '',
        securitytype: ''
    }

    const initialStatece = selectedSecuritysce ?? {
        personal_id:  0,
        atk_id:  0,
        bankaccount:  0,
        firstname:  '',
        lastname:  '',
        address:  '',
        zip:  0,
        title:  '',
        securitytype: ''
    }

    const [security, setSecurity] = useState(initialState);
    const [securityce, setSecurityce] = useState(initialStatece);

    function handleSubmit() {
        security.security_id ? updateSecuritys(security) : createSecuritys(securityce);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setSecurity({...security, [name]:value })
        setSecurityce({...security, [name]:value })

    }

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input placeholder='Personal Id' value={security.personal_id} name='personal_id' onChange={handleInputChange} />
                <Form.Input placeholder='ATK Id' value={security.atk_id} name='atk_id' onChange={handleInputChange}/>
                <Form.Input placeholder='Bank Account' value={security.bankaccount} name='bankaccount' onChange={handleInputChange}/>
                <Form.Input placeholder='First Name' value={security.firstname} name='firstname' onChange={handleInputChange}/>
                <Form.Input placeholder='Last Name' value={security.lastname} name='lastname' onChange={handleInputChange}/>
                <Form.Input placeholder='Address' value={security.address} name='address' onChange={handleInputChange}/>
                <Form.Input placeholder='Zip' value={security.zip} name='zip' onChange={handleInputChange}/>
                <Form.Input placeholder='Security Type' value={security.securitytype} name='securitytype' onChange={handleInputChange}/>

                <Button loading={loading}floated="right" positive type="submit" content='Add' value={security.personal_id} name='personal_id' onChange={handleInputChange} />
                <Button onClick={closeForm} floated="right" negative type="button" content='Cancel'/>
            </Form>
        </Segment>
    )
})