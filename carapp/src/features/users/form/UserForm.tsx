import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { User } from "../../../app/models/user";

interface Props {
    user: User  |undefined;
    closeForm: () => void;
    createOrEdit:  (user: User) => void
}

export default function UserForm({user: selectedUser, closeForm, createOrEdit}: Props){

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

    function handleSubmit() {
        createOrEdit(user);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setUser({...user, [name]:value })
    }

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input placeholder='Username' value={user.username} name='username' onChange={handleInputChange} />
                <Form.Input placeholder='Email' value={user.email} name='email' onChange={handleInputChange}/>
                <Form.Input placeholder='Password' value={user.password} name='password' onChange={handleInputChange}/>
                <Form.Input placeholder='First Name' value={user.firstname} name='firstname' onChange={handleInputChange}/>
                <Form.Input placeholder='Last Name' value={user.lastname} name='lastname' onChange={handleInputChange}/>
                <Form.Input placeholder='Address' value={user.address} name='address' onChange={handleInputChange}/>
                <Form.Input placeholder='Zip' value={user.zip} name='zip' onChange={handleInputChange}/>
                <Form.Input placeholder='User Type' value={user.usertype} name='usertype' onChange={handleInputChange}/>

                <Button floated="right" positive type="submit" content='Add' value={user.username} name='username' onChange={handleInputChange} />
                <Button onClick={closeForm} floated="right" negative type="button" content='Cancel'/>
            </Form>
        </Segment>
    )
}