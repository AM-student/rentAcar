import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useVWPStore } from "../../../app/stores/vwpstore";
import { observer } from "mobx-react-lite";

export default observer(function VWPassatForm(){

    const {VWPassatStore} = useVWPStore();
    const {selectedVWPassats, selectedVWPassatsce,closeForm, createVWPassats, updateVWPassats, loading } = VWPassatStore;

    const initialStatece = selectedVWPassatsce ?? {
        vwp_targa:'',
        vwp_image: '',
        vwp_name: '',
        vwp_type: '',
        vwp_year: 0,
        vwp_vin: 0,
        vwp_price: 0,
        description_vwp: '',
    }
    const initialState = selectedVWPassats ?? {
        vwp_id: 0,
        vwp_targa:'',
        vwp_image: '',
        vwp_name: '',
        vwp_type: '',
        vwp_year: 0,
        vwp_vin: 0,
        vwp_price: 0,
        description_vwp: '',
    }

    const [vwpassat, setVWPassats] = useState(initialState);
    const [vwpassatce, setVWPassatsce] = useState(initialStatece);

    function handleSubmit() {
        vwpassat  ? updateVWPassats(vwpassat) : createVWPassats(vwpassat);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setVWPassats({...vwpassat, [name]:value })
        setVWPassatsce({...vwpassatce, [name]:value })

    }

    return(
        <Segment clearing onSubmit={handleSubmit}>
            <Form>
                <Form.Input placeholder='ID of VW Passat' value={vwpassat.vwp_targa} name='vwp_id' onChange={handleInputChange} />
                <Form.Input placeholder='Name of VW Passat' value={vwpassat.vwp_name} name='vwp_name' onChange={handleInputChange} />
                <Form.Input placeholder='Image of VW Passat' value={vwpassat.vwp_image} name='vwp_image' onChange={handleInputChange}/>
                <Form.Input placeholder='Type of VW Passat' value={vwpassat.vwp_type} name='vwp_type' onChange={handleInputChange}/>
                <Form.Input placeholder='Year of VW Passat ' value={vwpassat.vwp_year} name='vwp_year' onChange={handleInputChange}/>
                <Form.Input placeholder='VIN of VW Passat ' value={vwpassat.vwp_vin} name='vwp_vin' onChange={handleInputChange}/>
                <Form.Input placeholder='Price of VW Passat' value={vwpassat.vwp_price} name='vwp_price' onChange={handleInputChange}/>
                <Form.Input placeholder='Description of VW Passat' value={vwpassat.description_vwp} name='description_vwp' onChange={handleInputChange}/>

                <Button loading={loading} floated="right" positive type="submit" content='Add' value={vwpassat.vwp_id} name='vwp_name' onChange={handleInputChange} />
                <Button onClick={closeForm} floated="right" negative type="button" content='Cancel'/>
            </Form>
        </Segment>
    )
})