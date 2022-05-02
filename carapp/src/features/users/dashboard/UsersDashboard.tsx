import React from "react";
import { Grid, List } from "semantic-ui-react";
import { User } from "../../../app/models/user";
import UserDetails from "../details/UserDetails";
import UserForm from "../form/UserForm";
import UserList from "./UserList";

interface Props {
    users: User[];
    selectedUser: User | undefined;
    selectUser: (user_id: number) => void;
    cancelSelectUser: () => void;
    editMode: boolean;
    openForm: (user_id: number) => void;
    closeForm: () => void;
    createOrEdit:  (user: User) => void
    deleteUser: (user_id: number) => void;
}

export default function UsersDashboard({users, selectedUser, selectUser, cancelSelectUser,
                                        editMode, openForm, closeForm,
                                        createOrEdit, deleteUser}: Props) {

    return (
        <Grid>
            <Grid.Column width='10'>
                <UserList 
                users={users}
                selectUser = {selectUser}
                deleteUser = {deleteUser}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedUser && !editMode &&
                <UserDetails users={selectedUser}
                    cancelSelectUser = {cancelSelectUser}
                    openForm = {openForm}
                />
                }
                {
                    editMode &&
                <UserForm 
                    closeForm={closeForm} 
                    user={selectedUser}
                    createOrEdit = {createOrEdit}
                    />
                }
            </Grid.Column>
        </Grid>
    )
}