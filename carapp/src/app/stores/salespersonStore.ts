import  { makeAutoObservable, runInAction } from "mobx"
import spagent from "../api/spagent";
import { Salesperson } from "../models/salesperson";
import { Salespersonce } from "../models/salespersonce";


export default class SalespersonStore{

    salespeople: Salesperson[] = [];
    salespersonsRegistry = new Map<number, Salesperson>();
    salespersonsce: Salespersonce[] = [];
    selectedSalespeople: Salesperson | undefined = undefined ;
    selectedSalespeoplece: Salespersonce | undefined = undefined ;

    editMode = false;
    loading = false;
    loadingInitial=false;

    constructor(){
        makeAutoObservable(this)
    }

    loadSalespeoples = async () =>{
        this.setLoadingInitial(true);
        try {
            const salespeople = await spagent.Salespeople.list();
            salespeople.forEach((salesperson: Salesperson)=>{
                this.salespeople.push(salesperson);
                this.salespersonsRegistry.set(salesperson.sp_id, salesperson);
            })
            this.setLoadingInitial(false);
        }
        catch (error){
            console.log(error);
            this.setLoadingInitial(false);
        }

    }
    setLoadingInitial = (state: boolean) =>{
        this.loadingInitial = state
    }
    selectSalespeople = (sp_id: number) => {
        this.selectedSalespeople = this.salespersonsRegistry.get(sp_id);
    }
    cancelSelectedSalespeople = () => {
        this.selectedSalespeople = undefined;
    }
    openForm = (sp_id?: number) => {
        sp_id ? this.selectSalespeople(sp_id) :this.cancelSelectedSalespeople();
        this.editMode = true;
    }
    closeForm = () => {
        this.editMode = false;
    }
    createSalespeople = async(salespersonce: Salespersonce) => {
        this.loading = true;
        try {
            await spagent.Salespeople.create(salespersonce);
            runInAction (() =>
            {
                this.salespersonsce.push(salespersonce);
                this.selectedSalespeoplece = salespersonce;
                this.editMode=false;
                this.loading=false;
            })
        } catch (error) {
            console.log(error);
            runInAction (() =>
            {
                this.loading=false;
            })
        }
    }
    updateSalespeople = async(salesperson: Salesperson) => {
        this.loading = true;
        try {
            await spagent.Salespeople.update(salesperson);
            runInAction (() =>
            {
                this.salespersonsRegistry.set(salesperson.sp_id, salesperson);
                this.selectedSalespeople = salesperson;
                this.editMode=false;
                this.loading=false;
            })
        } catch (error) {
            console.log(error);
            runInAction (() =>
            {
                this.loading=false;
            })
        }
    }
    deleteSalespeople = async(sp_id: number) => {
        this.loading = true;
        try {
            await spagent.Salespeople.delete(sp_id);
            runInAction (() =>
            {
                this.salespersonsRegistry.delete(sp_id)
                if(this.selectedSalespeople?.sp_id === sp_id) this.cancelSelectedSalespeople();
                this.editMode=false;
                this.loading=false;
            })
        } catch (error) {
            console.log(error);
            runInAction (() =>
            {
                this.loading=false;
            })
        }
    }

}