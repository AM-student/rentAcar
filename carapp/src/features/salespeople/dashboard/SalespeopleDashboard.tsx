import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Salesperson } from "../../../app/models/salesperson";
import SalespersonDetails from "../details/SalespersonDetails";
import SalespersonForm from "../form/SalespersonForm";
import SalespersonList from "./SalespeopleList";

interface Props {
    salespeople: Salesperson[];
    selectedSalesperson: Salesperson | undefined;
    selectSalesperson: (sp_id: number) => void;
    cancelSelectSalesperson: () => void;
    editMode: boolean;
    openForm: (sp_id: number) => void;
    closeForm: () => void;
    createOrEdit:  (user: Salesperson) => void
    deleteSalesperson: (sp_id: number) => void;
    submitting: boolean;
}

export default function SalespeopleDashboard({salespeople, selectedSalesperson, selectSalesperson, cancelSelectSalesperson,
                                        editMode, openForm, closeForm,
                                        createOrEdit, deleteSalesperson, submitting}: Props) {

    return (
        <Grid>
            <Grid.Column width='10'>
                <SalespersonList 
                salespeople={salespeople}
                selectSalesperson = {selectSalesperson}
                deleteSalesperson = {deleteSalesperson}
                submitting = {submitting}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedSalesperson && !editMode &&
                <SalespersonDetails salespeople={selectedSalesperson}
                    cancelSelectSalesperson = {cancelSelectSalesperson}
                    openForm = {openForm}
                />
                }
                {
                    editMode &&
                <SalespersonForm 
                    closeForm={closeForm} 
                    salesperson={selectedSalesperson}
                    createOrEdit = {createOrEdit}
                    submitting = {submitting}
                    />
                }
            </Grid.Column>
        </Grid>
    )
}