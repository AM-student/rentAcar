import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useVWGStore } from "../../../app/stores/vwgstore";
import { observer } from "mobx-react-lite";

export default observer(function VWGolfsForm(){

    const {VWGolfStore} = useVWGStore();
    const {selectedVWGolf, selectedVWGolfce,closeForm, createVWGolf, updateVWGolf, loading } = VWGolfStore;

    const initialStatece = selectedVWGolfce ?? {
        vwg_targa:'',
        vwg_image: '',
        vwg_name: '',
        vwg_type: '',
        vwg_year: 0,
        vwg_vin: 0,
        vwg_price: 0,
        description_vwg: '',
    }
    const initialState = selectedVWGolf ?? {
        vwg_id: 0,
        vwg_targa:'',
        vwg_image: '',
        vwg_name: '',
        vwg_type: '',
        vwg_year: 0,
        vwg_vin: 0,
        vwg_price: 0,
        description_vwg: '',
    }

    const [vwgolf, setVWGolfs] = useState(initialState);
    const [vwgolfce, setVWGolfsce] = useState(initialStatece);

    function handleSubmit() {
        vwgolf.vwg_id ? updateVWGolf(vwgolf) : createVWGolf(vwgolfce);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setVWGolfs({...vwgolf, [name]:value })
        setVWGolfsce({...vwgolfce, [name]:value })

    }

    return(
        <Segment clearing onSubmit={handleSubmit}>
            <Form>
                <Form.Input placeholder='Plate of VW Golf' value={vwgolf.vwg_targa} name='vwg_targa' onChange={handleInputChange} />
                <Form.Input placeholder='Name of VW Golf' value={vwgolf.vwg_name} name='vwg_name' onChange={handleInputChange} />
                <Form.Input placeholder='Image of VW Golf' value={vwgolf.vwg_image} name='vwg_image' onChange={handleInputChange}/>
                <Form.Input placeholder='Type of VW Golf' value={vwgolf.vwg_type} name='vwg_type' onChange={handleInputChange}/>
                <Form.Input placeholder='Year of VW Golf ' value={vwgolf.vwg_year} name='vwg_year' onChange={handleInputChange}/>
                <Form.Input placeholder='VIN of VW Golf ' value={vwgolf.vwg_vin} name='vwg_vin' onChange={handleInputChange}/>
                <Form.Input placeholder='Price of VW Golf' value={vwgolf.vwg_price} name='vwg_price' onChange={handleInputChange}/>
                <Form.Input placeholder='Description of VW Golf' value={vwgolf.description_vwg} name='description_vwg' onChange={handleInputChange}/>

                <Button loading={loading} floated="right" positive type="submit" content='Add' value={vwgolf.vwg_id} name='vwg_name' onChange={handleInputChange} />
                <Button onClick={closeForm} floated="right" negative type="button" content='Cancel'/>
            </Form>
        </Segment>
    )
})