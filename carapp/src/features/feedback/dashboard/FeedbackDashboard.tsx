import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useFBStore } from "../../../app/stores/fbstore";
import FeedbackDetails from "../details/FeedbackDetails";
import FeedbackForm from "../form/FeedbackForm";
import FeedbackList from "./FeedbackList";

export default observer(function FeedbackDashboard() {

    const {feedbackStore} = useFBStore();
    const {selectedFeedback, editMode } = feedbackStore;

    useEffect(() => {
        feedbackStore.loadFeedbacks();
    }, [feedbackStore])
    
    if (feedbackStore.loadingInitial) return <LoadingComponent content='Loading APP'/>
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <FeedbackList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedFeedback && !editMode &&
                <FeedbackDetails /> }
                {editMode &&
                <FeedbackForm />}
            </Grid.Column>
        </Grid>
    )
})