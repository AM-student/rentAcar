import { makeAutoObservable, runInAction } from "mobx"
import rollsroyceagent from "../api/rollsroyceagent";
import { RollsRoyce } from "../models/rollsroyce";
import { RollsRoyceSe } from "../models/rollsroycese";


export default class RRStore{

    rollsroyces: RollsRoyce[] = [];
    rollsroycesRegistry = new Map<number, RollsRoyce>();
    rollsroycesse: RollsRoyceSe[] = [];
    selectedRollsRoyces: RollsRoyce | undefined = undefined ;
    selectedRollsRoycesce: RollsRoyceSe | undefined = undefined ;

    editMode = false;
    loading = false;
    loadingInitial=false;

    constructor(){
        makeAutoObservable(this)
    }

    loadRollsRoyces = async () =>{
        this.setLoadingInitial(true);
        try {
            const rollsroyces = await rollsroyceagent.RollsRoyces.list();
            rollsroyces.forEach((rollsroyce: RollsRoyce)=>{
                this.rollsroyces.push(rollsroyce);
                this.rollsroycesRegistry.set(rollsroyce.rr_id, rollsroyce);
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
    selectRollsRoyces = (rr_id: number) => {
        this.selectedRollsRoyces = this.rollsroycesRegistry.get(rr_id);
    }
    cancelSelectedRollsRoyces = () => {
        this.selectedRollsRoyces = undefined;
    }
    openForm = (rr_id?: number) => {
        rr_id ? this.selectRollsRoyces(rr_id) :this.cancelSelectedRollsRoyces();
        this.editMode = true;
    }
    closeForm = () => {
        this.editMode = false;
    }
    createRollsRoyces = async(rollsroycece: RollsRoyceSe) => {
        this.loading = true;
        try {
            await rollsroyceagent.RollsRoyces.create(rollsroycece);
            runInAction (() =>
            {
                this.rollsroycesse.push(rollsroycece);
                this.selectedRollsRoycesce = rollsroycece;
                this.editMode=false;
                this.loading=false;
            })
        } catch (erollsroyceor) {
            console.log(erollsroyceor);
            runInAction (() =>
            {
                this.loading=false;
            })
        }
    }
    updateRollsRoyces = async(rollsroyce: RollsRoyce) => {
        this.loading = true;
        try {
            await rollsroyceagent.RollsRoyces.update(rollsroyce);
            runInAction (() =>
            {
                this.rollsroycesRegistry.set(rollsroyce.rr_id, rollsroyce);
                this.selectedRollsRoyces = rollsroyce;
                this.editMode=false;
                this.loading=false;
            })
        } catch (erollsroyceor) {
            console.log(erollsroyceor);
            runInAction (() =>
            {
                this.loading=false;
            })
        }
    }
    deleteRollsRoyces = async(rollsroyce_id: number) => {
        this.loading = true;
        try {
            await rollsroyceagent.RollsRoyces.delete(rollsroyce_id);
            runInAction (() =>
            {
                this.rollsroycesRegistry.delete(rollsroyce_id)
                if(this.selectedRollsRoyces?.rr_id === rollsroyce_id) this.cancelSelectedRollsRoyces();
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