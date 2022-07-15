import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useAAStore } from "../../../app/stores/aastore";
import AudiAsDetails from "../details/AudiAsDetails";
import AudiAsForm from "../form/AudiAsForm";
import AudiAsList from "./AudiAsList";

export default observer(function AudiAsDashboard() {

    const {AudiAStore} = useAAStore();
    const {selectedAudiAs, editMode } = AudiAStore;

    useEffect(() => {
        AudiAStore.loadAudiAs();
    }, [AudiAStore])
    
    if (AudiAStore.loadingInitial) return <LoadingComponent content='Loading APP'/>
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <AudiAsList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedAudiAs && !editMode &&
                <AudiAsDetails /> }
                {editMode &&
                <AudiAsForm />}
            </Grid.Column>
        </Grid>
    )
})