import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useRRStore } from "../../../app/stores/rrstore";
import RollsRoycesDetails from "../details/RollsRoycesDetails";
import RollsRoycesForm from "../form/RollsRoycesForm";
import RollsRoycesList from "./RollsRoycesList";

export default observer(function RollsRoycesDashboard() {

    const {RollsRoyceStore} = useRRStore();
    const {selectedRollsRoyces, editMode } = RollsRoyceStore;

    useEffect(() => {
        RollsRoyceStore.loadRollsRoyces();
    }, [RollsRoyceStore])
    
    if (RollsRoyceStore.loadingInitial) return <LoadingComponent content='Loading APP'/>
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <RollsRoycesList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedRollsRoyces && !editMode &&
                <RollsRoycesDetails /> }
                {editMode &&
                <RollsRoycesForm />}
            </Grid.Column>
        </Grid>
    )
})