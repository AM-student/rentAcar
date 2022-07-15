import { makeAutoObservable, runInAction } from "mobx"
import aaagent from "../api/audiaagent";
import { AudiA } from "../models/audia";
import { AudiAce } from "../models/audiace";


export default class AAStore{

    audias: AudiA[] = [];
    audiasRegistry = new Map<string, AudiA>();
    audiasce: AudiAce[] = [];
    selectedAudiAs: AudiA | undefined = undefined ;
    selectedAudiAsce: AudiAce | undefined = undefined ;

    editMode = false;
    loading = false;
    loadingInitial=false;

    constructor(){
        makeAutoObservable(this)
    }

    loadAudiAs = async () =>{
        this.setLoadingInitial(true);
        try {
            const audias = await aaagent.AudiAs.list();
            audias.forEach((audia: AudiA)=>{
                this.audias.push(audia);
                this.audiasRegistry.set(audia.aa_id, audia);
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
    selectAudiAs = (aa_id: string) => {
        this.selectedAudiAs = this.audiasRegistry.get(aa_id);
    }
    cancelSelectedAudiAs = () => {
        this.selectedAudiAs = undefined;
    }
    openForm = (aa_id?: string) => {
        aa_id ? this.selectAudiAs(aa_id) :this.cancelSelectedAudiAs();
        this.editMode = true;
    }
    closeForm = () => {
        this.editMode = false;
    }
    createAudiAs = async(audiace: AudiAce) => {
        this.loading = true;
        try {
            await aaagent.AudiAs.create(audiace);
            runInAction (() =>
            {
                this.audiasce.push(audiace);
                this.selectedAudiAsce = audiace;
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
    updateAudiAs = async(audia: AudiA) => {
        this.loading = true;
        try {
            await aaagent.AudiAs.update(audia);
            runInAction (() =>
            {
                this.audiasRegistry.set(audia.aa_id, audia);
                this.selectedAudiAs = audia;
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
    deleteAudiAs = async(aa_id: string) => {
        this.loading = true;
        try {
            await aaagent.AudiAs.delete(aa_id);
            runInAction (() =>
            {
                this.audiasRegistry.delete(aa_id)
                if(this.selectedAudiAs?.aa_id === aa_id) this.cancelSelectedAudiAs();
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