import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useVWPStore } from "../../../app/stores/vwpstore";
import VWPassatsDetails from "../details/VWPassatDetails";
import VWPassatsForm from "../form/VWPassatForm";
import VWPassatsList from "./VWPassatList";

export default observer(function VWPassatsDashboard() {

    const {VWPassatStore} = useVWPStore();
    const {selectedVWPassats, editMode } = VWPassatStore;

    useEffect(() => {
        VWPassatStore.loadVWPassats();
    }, [VWPassatStore])
    
    if (VWPassatStore.loadingInitial) return <LoadingComponent content='Loading APP'/>
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <VWPassatsList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedVWPassats && !editMode &&
                <VWPassatsDetails /> }
                {editMode &&
                <VWPassatsForm />}
            </Grid.Column>
        </Grid>
    )
})