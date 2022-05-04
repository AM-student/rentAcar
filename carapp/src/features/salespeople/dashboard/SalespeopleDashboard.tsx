import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useSPStore } from "../../../app/stores/spstore";
import SalespersonDetails from "../details/SalespersonDetails";
import SalespersonForm from "../form/SalespersonForm";
import SalespeopleList from "./SalespeopleList";

export default observer(function SalespeopleDashboard() {

    const {salespersonStore} = useSPStore();
    const {selectedSalespeople, editMode } = salespersonStore;

    useEffect(() => {
        salespersonStore.loadSalespeoples();
    }, [salespersonStore])
    
    if (salespersonStore.loadingInitial) return <LoadingComponent content='Loading APP'/>
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <SalespeopleList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedSalespeople && !editMode &&
                <SalespersonDetails /> }
                {editMode &&
                <SalespersonForm />}
            </Grid.Column>
        </Grid>
    )
})