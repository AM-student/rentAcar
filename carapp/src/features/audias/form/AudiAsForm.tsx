import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useAAStore } from "../../../app/stores/aastore";
import { observer } from "mobx-react-lite";

export default observer(function AudiAsForm(){

    const {AudiAStore} = useAAStore();
    const {selectedAudiAs, selectedAudiAsce,closeForm, createAudiAs, updateAudiAs, loading } = AudiAStore;

    const initialStatece = selectedAudiAsce ?? {
        aa_image: '',
        aa_name: '',
        aa_type: '',
        aa_year: 0,
        aa_vin: 0,
        aa_price: 0,
        description_aa: '',
        aa_fuel: '',
        aa_engine: 0,
    }
    const initialState = selectedAudiAs ?? {
        aa_id: 0,
        aa_image: '',
        aa_name: '',
        aa_type: '',
        aa_year: 0,
        aa_vin: 0,
        aa_price: 0,
        description_aa: '',
        aa_fuel: '',
        aa_engine: 0,
    }

    const [aa, setAudiAs] = useState(initialState);
    const [aace, setAudiAsce] = useState(initialStatece);

    function handleSubmit() {
        aa.aa_id ? updateAudiAs(aa) : createAudiAs(aace);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setAudiAs({...aa, [name]:value })
        setAudiAsce({...aace, [name]:value })

    }

    return(
        <Segment clearing onSubmit={handleSubmit}>
            <Form>
                <Form.Input placeholder='ID of Audi A Serie' value={aa.aa_id} name='aa_id' onChange={handleInputChange} />
                <Form.Input placeholder='Name of Audi A Serie' value={aa.aa_name} name='aa_name' onChange={handleInputChange} />
                <Form.Input placeholder='Image of Audi A Serie' value={aa.aa_image} name='aa_image' onChange={handleInputChange}/>
                <Form.Input placeholder='Type of Audi A Serie' value={aa.aa_type} name='aa_type' onChange={handleInputChange}/>
                <Form.Input placeholder='Year of Audi A Serie ' value={aa.aa_year} name='aa_year' onChange={handleInputChange}/>
                <Form.Input placeholder='VIN of Audi A Serie ' value={aa.aa_vin} name='aa_vin' onChange={handleInputChange}/>
                <Form.Input placeholder='Price of Audi A Serie' value={aa.aa_price} name='aa_price' onChange={handleInputChange}/>
                <Form.Input placeholder='Description of Audi A Serie' value={aa.description_aa} name='description_aa' onChange={handleInputChange}/>
                <Form.Input placeholder='Engine of Audi A Serie' value={aa.aa_engine} name='aa_engine' onChange={handleInputChange}/>
                <Form.Input placeholder='Fuel Type of Audi A Serie' value={aa.aa_fuel} name='aa_fuel' onChange={handleInputChange}/>
                <Button loading={loading} floated="right" positive type="submit" content='Add' value={aa.aa_name} name='aa_name' onChange={handleInputChange} />
                <Button onClick={closeForm} floated="right" negative type="button" content='Cancel'/>
            </Form>
        </Segment>
    )
})