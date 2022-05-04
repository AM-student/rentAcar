import { makeAutoObservable, runInAction } from "mobx"
import magent from "../api/magent";
import { Manager } from "../models/manager";
import { Managerce } from "../models/managerce";


export default class ManagerStore{

    managers: Manager[] = [];
    managersRegistry = new Map<number, Manager>();
    managersce: Managerce[] = [];
    selectedManagers: Manager | undefined = undefined ;
    selectedManagersce: Managerce | undefined = undefined ;

    editMode = false;
    loading = false;
    loadingInitial=false;

    constructor(){
        makeAutoObservable(this)
    }

    loadManagers = async () =>{
        this.setLoadingInitial(true);
        try {
            const managers = await magent.Managers.list();
            managers.forEach((manager: Manager)=>{
                this.managers.push(manager);
                this.managersRegistry.set(manager.manager_id, manager);
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
    selectManagers = (manager_id: number) => {
        this.selectedManagers = this.managersRegistry.get(manager_id);
    }
    cancelSelectedManagers = () => {
        this.selectedManagers = undefined;
    }
    openForm = (manager_id?: number) => {
        manager_id ? this.selectManagers(manager_id) :this.cancelSelectedManagers();
        this.editMode = true;
    }
    closeForm = () => {
        this.editMode = false;
    }
    createManagers = async(managerce: Managerce) => {
        this.loading = true;
        try {
            await magent.Managers.create(managerce);
            runInAction (() =>
            {
                this.managersce.push(managerce);
                this.selectedManagersce = managerce;
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
    updateManagers = async(manager: Manager) => {
        this.loading = true;
        try {
            await magent.Managers.update(manager);
            runInAction (() =>
            {
                this.managersRegistry.set(manager.manager_id, manager);
                this.selectedManagers = manager;
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
    deleteManagers = async(manager_id: number) => {
        this.loading = true;
        try {
            await magent.Managers.delete(manager_id);
            runInAction (() =>
            {
                this.managersRegistry.delete(manager_id)
                if(this.selectedManagers?.manager_id === manager_id) this.cancelSelectedManagers();
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