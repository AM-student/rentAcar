import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useMStore } from "../../../app/stores/mstore";



export default observer(function ManagerForm(){

    const {ManagerStore} = useMStore();
    const {selectedManagers, selectedManagersce, updateManagers, createManagers, loading,closeForm } = ManagerStore;

    const initialState = selectedManagers ?? {
        manager_id: 0,
        personal_id:  0,
        atk_id:  0,
        bankaccount:  0,
        firstname:  '',
        lastname:  '',
        address:  '',
        zip:  0,
        title:  '',
        managertype: ''
    }

    const initialStatece = selectedManagersce ?? {
        personal_id:  0,
        atk_id:  0,
        bankaccount:  0,
        firstname:  '',
        lastname:  '',
        address:  '',
        zip:  0,
        title:  '',
        managertype: ''
    }

    const [manager, setManager] = useState(initialState);
    const [managerce, setManagerce] = useState(initialStatece);

    function handleSubmit() {
        manager.manager_id ? updateManagers(manager) : createManagers(managerce);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setManager({...manager, [name]:value })
        setManagerce({...manager, [name]:value })

    }

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input placeholder='Personal Id' value={manager.personal_id} name='personal_id' onChange={handleInputChange} />
                <Form.Input placeholder='ATK Id' value={manager.atk_id} name='atk_id' onChange={handleInputChange}/>
                <Form.Input placeholder='Bank Account' value={manager.bankaccount} name='bankaccount' onChange={handleInputChange}/>
                <Form.Input placeholder='First Name' value={manager.firstname} name='firstname' onChange={handleInputChange}/>
                <Form.Input placeholder='Last Name' value={manager.lastname} name='lastname' onChange={handleInputChange}/>
                <Form.Input placeholder='Address' value={manager.address} name='address' onChange={handleInputChange}/>
                <Form.Input placeholder='Zip' value={manager.zip} name='zip' onChange={handleInputChange}/>
                <Form.Input placeholder='Title' value={manager.title} name='title' onChange={handleInputChange}/>
                <Form.Input placeholder='Manager Type' value={manager.managertype} name='managertype' onChange={handleInputChange}/>

                <Button loading={loading}floated="right" positive type="submit" content='Add' value={manager.personal_id} name='personal_id' onChange={handleInputChange} />
                <Button onClick={closeForm} floated="right" negative type="button" content='Cancel'/>
            </Form>
        </Segment>
    )
})