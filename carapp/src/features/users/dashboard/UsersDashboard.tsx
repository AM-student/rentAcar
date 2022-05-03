import { observer } from "mobx-react-lite";
import React from "react";
import { Grid, List } from "semantic-ui-react";
import { User } from "../../../app/models/user";
import { useUStore } from "../../../app/stores/ustore";
import UserDetails from "../details/UserDetails";
import UserForm from "../form/UserForm";
import UserList from "./UserList";


interface Props {
    users: User[];
    submitting: boolean;
}

export default observer(function UsersDashboard() {

    const {userStore} = useUStore();
    const {selectedUser, editMode } = userStore;

    return (
        <Grid>
            <Grid.Column width='10'>
                <UserList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedUser && !editMode &&
                <UserDetails /> }
                {editMode &&
                <UserForm />}
            </Grid.Column>
        </Grid>
    )
})