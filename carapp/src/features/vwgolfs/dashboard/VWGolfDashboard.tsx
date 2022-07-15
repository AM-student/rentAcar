import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useVWGStore } from "../../../app/stores/vwgstore";
import VWGolfsDetails from "../details/VWGolfDetails";
import VWGolfsForm from "../form/VWGolfForm";
import VWGolfsList from "./VWGolfList";

export default observer(function VWGolfsDashboard() {

    const {VWGolfStore} = useVWGStore();
    const {selectedVWGolfs, editMode } = VWGolfStore;

    useEffect(() => {
        VWGolfStore.loadVWGolfs();
    }, [VWGolfStore])
    
    if (VWGolfStore.loadingInitial) return <LoadingComponent content='Loading APP'/>
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <VWGolfsList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedVWGolfs && !editMode &&
                <VWGolfsDetails /> }
                {editMode &&
                <VWGolfsForm />}
            </Grid.Column>
        </Grid>
    )
})