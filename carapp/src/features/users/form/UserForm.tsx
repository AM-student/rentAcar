import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useUStore } from "../../../app/stores/ustore";
import { observer } from "mobx-react-lite";

export default observer(function UserForm(){

    const {userStore} = useUStore();
    const {selectedUser, selectedUserce,closeForm, createUser, updateUser, loading } = userStore;

    const initialStatece = selectedUserce ?? {
        username:  '',
        email:  '',
        password:  '',
        firstname:  '',
        lastname:  '',
        address:  '',
        zip:  0,
        usertype:  '',
    }
    const initialState = selectedUser ?? {
        user_id: 0,
        username:  '',
        email:  '',
        password:  '',
        firstname:  '',
        lastname:  '',
        address:  '',
        zip:  0,
        usertype:  '',
    }

    const [user, setUser] = useState(initialState);
    const [userce, setUserce] = useState(initialStatece);

    function handleSubmit() {
        user.user_id ? updateUser(user) : createUser(userce);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setUser({...user, [name]:value })
        setUserce({...userce, [name]:value })

    }

    return(
        <Segment clearing onSubmit={handleSubmit}>
            <Form>
                <Form.Input placeholder='Username' value={user.username} name='username' onChange={handleInputChange} />
                <Form.Input placeholder='Email' value={user.email} name='email' onChange={handleInputChange}/>
                <Form.Input placeholder='Password' value={user.password} name='password' onChange={handleInputChange}/>
                <Form.Input placeholder='First Name' value={user.firstname} name='firstname' onChange={handleInputChange}/>
                <Form.Input placeholder='Last Name' value={user.lastname} name='lastname' onChange={handleInputChange}/>
                <Form.Input placeholder='Address' value={user.address} name='address' onChange={handleInputChange}/>
                <Form.Input placeholder='Zip' value={user.zip} name='zip' onChange={handleInputChange}/>
                <Form.Input placeholder='User Type' value={user.usertype} name='usertype' onChange={handleInputChange}/>

                <Button loading={loading} floated="right" positive type="submit" content='Add' value={user.username} name='username' onChange={handleInputChange} />
                <Button onClick={closeForm} floated="right" negative type="button" content='Cancel'/>
            </Form>
        </Segment>
    )
})