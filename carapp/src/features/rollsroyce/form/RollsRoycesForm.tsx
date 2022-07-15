import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useRRStore } from "../../../app/stores/rrstore";
import { observer } from "mobx-react-lite";

export default observer(function RollsRoycesForm(){

    const {RollsRoyceStore} = useRRStore();
    const {selectedRollsRoyces, selectedRollsRoycesce,closeForm, createRollsRoyces, updateRollsRoyces, loading } = RollsRoyceStore;

    const initialStatece = selectedRollsRoyces ?? {
        rr_image: '',
        rr_name: '',
        rr_type: '',
        rr_year: 0,
        rr_vin: 0,
        rr_price: 0,
        description_rr: '',
        rr_fuel: '',
        rr_engine: 0,
    }
    const initialState = selectedRollsRoyces ?? {
        rr_id: '',
        rr_image: '',
        rr_name: '',
        rr_type: '',
        rr_year: 0,
        rr_vin: 0,
        rr_price: 0,
        description_rr: '',
        rr_fuel: '',
        rr_engine: 0,
    }

    const [rr, setRollsRoyces] = useState(initialState);
    const [rrce, setRollsRoycesce] = useState(initialStatece);

    function handleSubmit() {
        rr.rr_id ? updateRollsRoyces(rr) : createRollsRoyces(rrce);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setRollsRoyces({...rr, [name]:value })
        setRollsRoycesce({...rrce, [name]:value })

    }

    return(
        <Segment clearing onSubmit={handleSubmit}>
            <Form>
                <Form.Input placeholder='ID of Rolls Royce' value={rr.rr_id} name='rr_id' onChange={handleInputChange} />
                <Form.Input placeholder='Name of Rolls Royce' value={rr.rr_name} name='rr_name' onChange={handleInputChange} />
                <Form.Input placeholder='Image of Rolls Royce' value={rr.rr_image} name='rr_image' onChange={handleInputChange}/>
                <Form.Input placeholder='Type of Rolls Royce' value={rr.rr_type} name='rr_type' onChange={handleInputChange}/>
                <Form.Input placeholder='Year of Rolls Royce ' value={rr.rr_year} name='rr_year' onChange={handleInputChange}/>
                <Form.Input placeholder='VIN of Rolls Royce ' value={rr.rr_vin} name='rr_vin' onChange={handleInputChange}/>
                <Form.Input placeholder='Price of Rolls Royce' value={rr.rr_price} name='rr_price' onChange={handleInputChange}/>
                <Form.Input placeholder='Description of Rolls Royce' value={rr.description_rr} name='description_rr' onChange={handleInputChange}/>
                <Form.Input placeholder='Engine of Rolls Royce' value={rr.rr_engine} name='rr_engine' onChange={handleInputChange}/>
                <Form.Input placeholder='Fuel Type of Rolls Royce' value={rr.rr_fuel} name='rr_fuel' onChange={handleInputChange}/>
                <Button loading={loading} floated="right" positive type="submit" content='Add' value={rr.rr_name} name='rr_name' onChange={handleInputChange} />
                <Button onClick={closeForm} floated="right" negative type="button" content='Cancel'/>
            </Form>
        </Segment>
    )
})