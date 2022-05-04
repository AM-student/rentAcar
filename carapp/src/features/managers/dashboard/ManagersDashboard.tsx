import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useMStore } from "../../../app/stores/mstore";
import ManagerDetails from "../details/ManagerDetails";
import ManagerForm from "../form/ManagerForm";
import ManagersList from "./ManagersList";

export default observer(function ManagersDashboard() {

    const {ManagerStore} = useMStore();
    const {selectedManagers, editMode } = ManagerStore;

    useEffect(() => {
        ManagerStore.loadManagers();
    }, [ManagerStore])
    
    if (ManagerStore.loadingInitial) return <LoadingComponent content='Loading APP'/>
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <ManagersList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedManagers && !editMode &&
                <ManagerDetails /> }
                {editMode &&
                <ManagerForm />}
            </Grid.Column>
        </Grid>
    )
})