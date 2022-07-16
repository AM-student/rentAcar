import { makeAutoObservable, runInAction } from "mobx"
import vwgagent from "../api/vwgagent";
import { VWGolf } from "../models/vwgolf";
import { VWGolfce } from "../models/vwgolfce";


export default class VWGolfStore{

    vwgolfs: VWGolf[] = [];
    vwgolfsRegistry = new Map<string, VWGolf>();
    vwgolfsce: VWGolfce[] = [];
    selectedVWGolfs: VWGolf | undefined = undefined ;
    selectedVWGolfsce: VWGolfce | undefined = undefined ;

    editMode = false;
    loading = false;
    loadingInitial=false;

    constructor(){
        makeAutoObservable(this)
    }

    loadVWGolfs = async () =>{
        this.setLoadingInitial(true);
        try {
            const vwgolfs = await vwgagent.VWGolfs.list();
            vwgolfs.forEach((vwgolf: VWGolf)=>{
                this.vwgolfs.push(vwgolf);
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
    selectVWGolfs = (vwg_id: string) => {
        this.selectedVWGolfs = this.vwgolfsRegistry.get(vwg_id);
    }
    cancelSelectedVWGolfs = () => {
        this.selectedVWGolfs = undefined;
    }
    openForm = (vwg_id?: string) => {
        vwg_id ? this.selectVWGolfs(vwg_id) :this.cancelSelectedVWGolfs();
        this.editMode = true;
    }
    closeForm = () => {
        this.editMode = false;
    }
    createVWGolfs = async(vwgolfce: VWGolfce) => {
        this.loading = true;
        try {
            await vwgagent.VWGolfs.create(vwgolfce);
            runInAction (() =>
            {
                this.vwgolfsce.push(vwgolfce);
                this.selectedVWGolfsce = vwgolfce;
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
    updateVWGolfs = async(vwgolf: VWGolf) => {
        this.loading = true;
        try {
            await vwgagent.VWGolfs.update(vwgolf);
            runInAction (() =>
            {
                this.selectedVWGolfs = vwgolf;
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
    deleteVWGolfs = async(vwg_id: string) => {
        this.loading = true;
        try {
            runInAction (() =>
            {
                this.vwgolfsRegistry.delete(vwg_id)
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