import  { makeAutoObservable, runInAction } from "mobx"
import sagent from "../api/sagent";
import { Security } from "../models/security";
import { Securityce } from "../models/securityce";


export default class SecurityStore{

    securitys: Security[] = [];
    securitysRegistry = new Map<number, Security>();
    securitysce: Securityce[] = [];
    selectedSecuritys: Security | undefined = undefined ;
    selectedSecuritysce: Securityce | undefined = undefined ;

    editMode = false;
    loading = false;
    loadingInitial=false;

    constructor(){
        makeAutoObservable(this)
    }

    loadSecuritys = async () =>{
        this.setLoadingInitial(true);
        try {
            const securitys = await sagent.Securitys.list();
            securitys.forEach((security: Security)=>{
                this.securitys.push(security);
                this.securitysRegistry.set(security.security_id, security);
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
    selectSecuritys = (security_id: number) => {
        this.selectedSecuritys = this.securitysRegistry.get(security_id);
    }
    cancelSelectedSecuritys = () => {
        this.selectedSecuritys = undefined;
    }
    openForm = (security_id?: number) => {
        security_id ? this.selectSecuritys(security_id) :this.cancelSelectedSecuritys();
        this.editMode = true;
    }
    closeForm = () => {
        this.editMode = false;
    }
    createSecuritys = async(securityce: Securityce) => {
        this.loading = true;
        try {
            await sagent.Securitys.create(securityce);
            runInAction (() =>
            {
                this.securitysce.push(securityce);
                this.selectedSecuritysce = securityce;
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
    updateSecuritys = async(security: Security) => {
        this.loading = true;
        try {
            await sagent.Securitys.update(security);
            runInAction (() =>
            {
                this.securitysRegistry.set(security.security_id, security);
                this.selectedSecuritys = security;
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
    deleteSecuritys = async(security_id: number) => {
        this.loading = true;
        try {
            await sagent.Securitys.delete(security_id);
            runInAction (() =>
            {
                this.securitysRegistry.delete(security_id)
                if(this.selectedSecuritys?.security_id === security_id) this.cancelSelectedSecuritys();
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