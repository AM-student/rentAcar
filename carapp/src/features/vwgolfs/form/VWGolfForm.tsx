import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useVWGStore } from "../../../app/stores/vwgstore";
import { observer } from "mobx-react-lite";

export default observer(function VWGolfsForm(){

    const {VWGolfStore} = useVWGStore();
    const {selectedVWGolfs, selectedVWGolfsce,closeForm, createVWGolfs, updateVWGolfs, loading } = VWGolfStore;

    const initialStatece = selectedVWGolfsce ?? {
        vwg_image: '',
        vwg_name: '',
        vwg_type: '',
        vwg_year: 0,
        vwg_vin: 0,
        vwg_price: 0,
        description_vwg: '',
    }
    const initialState = selectedVWGolfs ?? {
        vwg_id: '',
        vwg_image: '',
        vwg_name: '',
        vwg_type: '',
        vwg_year: 0,
        vwg_vin: 0,
        vwg_price: 0,
        description_vwg: '',
    }

    const [vwg, setVWGolfs] = useState(initialState);
    const [vwgce, setVWGolfsce] = useState(initialStatece);

    function handleSubmit() {
        vwg.vwg_id ? updateVWGolfs(vwg) : createVWGolfs(vwgce);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setVWGolfs({...vwg, [name]:value })
        setVWGolfsce({...vwgce, [name]:value })

    }

    return(
        <Segment clearing onSubmit={handleSubmit}>
            <Form>
                <Form.Input placeholder='ID of VW Golf' value={vwg.vwg_id} name='vwg_id' onChange={handleInputChange} />
                <Form.Input placeholder='Name of VW Golf' value={vwg.vwg_name} name='vwg_name' onChange={handleInputChange} />
                <Form.Input placeholder='Image of VW Golf' value={vwg.vwg_image} name='vwg_image' onChange={handleInputChange}/>
                <Form.Input placeholder='Type of VW Golf' value={vwg.vwg_type} name='wg_type' onChange={handleInputChange}/>
                <Form.Input placeholder='Year of VW Golf ' value={vwg.vwg_year} name='wg_year' onChange={handleInputChange}/>
                <Form.Input placeholder='VIN of VW Golf ' value={vwg.vwg_vin} name='wg_vin' onChange={handleInputChange}/>
                <Form.Input placeholder='Price of VW Golf' value={vwg.vwg_price} name='wg_price' onChange={handleInputChange}/>
                <Form.Input placeholder='Description of VW Golf' value={vwg.description_vwg} name='description_vwg' onChange={handleInputChange}/>

                <Button loading={loading} floated="right" positive type="submit" content='Add' value={vwg.vwg_name} name='vwg_name' onChange={handleInputChange} />
                <Button onClick={closeForm} floated="right" negative type="button" content='Cancel'/>
            </Form>
        </Segment>
    )
})