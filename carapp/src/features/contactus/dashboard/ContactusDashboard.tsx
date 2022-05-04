import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useCUStore } from "../../../app/stores/custore";
import ContactDetails from "../details/ContactDetails";
import ContactForm from "../form/ContactForm";
import ContactusList from "./ContactusList";

export default observer(function ContactusDashboard() {

    const {contactStore} = useCUStore();
    const {selectedContactus, editMode } = contactStore;

    useEffect(() => {
        contactStore.loadContactuss();
    }, [contactStore])
    
    if (contactStore.loadingInitial) return <LoadingComponent content='Loading APP'/>
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <ContactusList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedContactus && !editMode &&
                <ContactDetails /> }
                {editMode &&
                <ContactForm />}
            </Grid.Column>
        </Grid>
    )
})