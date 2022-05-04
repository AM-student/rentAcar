import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useSStore } from "../../../app/stores/sstore";
import SecurityDetails from "../details/SecurityDetails";
import SecurityForm from "../form/SecurityForm";
import SecuritysList from "./SecuritysList";

export default observer(function SecuritysDashboard() {

    const {SecurityStore} = useSStore();
    const {selectedSecuritys, editMode } = SecurityStore;

    useEffect(() => {
        SecurityStore.loadSecuritys();
    }, [SecurityStore])
    
    if (SecurityStore.loadingInitial) return <LoadingComponent content='Loading APP'/>
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <SecuritysList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedSecuritys && !editMode &&
                <SecurityDetails /> }
                {editMode &&
                <SecurityForm />}
            </Grid.Column>
        </Grid>
    )
})