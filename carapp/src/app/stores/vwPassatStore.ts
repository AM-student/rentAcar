import { makeAutoObservable, runInAction } from "mobx"
import vwpagent from "../api/vwpagent";
import { VWPassat } from "../models/vwpassat";
import { VWPassatce } from "../models/vwpassatce";


export default class VWPassatStore{

    vwpassats: VWPassat[] = [];
    vwpassatsRegistry = new Map<string, VWPassat>();
    vwpassatsce: VWPassatce[] = [];
    selectedVWPassats: VWPassat | undefined = undefined ;
    selectedVWPassatsce: VWPassatce | undefined = undefined ;

    editMode = false;
    loading = false;
    loadingInitial=false;

    constructor(){
        makeAutoObservable(this)
    }

    loadVWPassats = async () =>{
        this.setLoadingInitial(true);
        try {
            const vwpassats = await vwpagent.VWPassats.list();
            vwpassats.forEach((vwpassat: VWPassat)=>{
                this.vwpassats.push(vwpassat);
                this.vwpassatsRegistry.set(vwpassat.vwp_id, vwpassat);
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
    selectVWPassats = (vwp_id: string) => {
        this.selectedVWPassats = this.vwpassatsRegistry.get(vwp_id);
    }
    cancelSelectedVWPassats = () => {
        this.selectedVWPassats = undefined;
    }
    openForm = (vwp_id?: string) => {
        vwp_id ? this.selectVWPassats(vwp_id) :this.cancelSelectedVWPassats();
        this.editMode = true;
    }
    closeForm = () => {
        this.editMode = false;
    }
    createVWPassats = async(vwpassatce: VWPassatce) => {
        this.loading = true;
        try {
            await vwpagent.VWPassats.create(vwpassatce);
            runInAction (() =>
            {
                this.vwpassatsce.push(vwpassatce);
                this.selectedVWPassatsce = vwpassatce;
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
    updateVWPassats = async(vwpassat: VWPassat) => {
        this.loading = true;
        try {
            await vwpagent.VWPassats.update(vwpassat);
            runInAction (() =>
            {
                this.vwpassatsRegistry.set(vwpassat.vwp_id, vwpassat);
                this.selectedVWPassats = vwpassat;
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
    deleteVWPassats = async(vwp_id: string) => {
        this.loading = true;
        try {
            await vwpagent.VWPassats.delete(vwp_id);
            runInAction (() =>
            {
                this.vwpassatsRegistry.delete(vwp_id)
                if(this.selectedVWPassats?.vwp_id === vwp_id) this.cancelSelectedVWPassats();
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