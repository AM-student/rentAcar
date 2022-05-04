import { makeAutoObservable, runInAction } from "mobx"
import cuagent from "../api/cuagent";
import { Contact } from "../models/contact";
import { Contactce } from "../models/contactce";


export default class ContactStore{

    contactus: Contact[] = [];
    contactsRegistry = new Map<number, Contact>();
    contactsce: Contactce[] = [];
    selectedContactus: Contact | undefined = undefined ;
    selectedContactusce: Contactce | undefined = undefined ;

    editMode = false;
    loading = false;
    loadingInitial=false;

    constructor(){
        makeAutoObservable(this)
    }

    loadContactuss = async () =>{
        this.setLoadingInitial(true);
        try {
            const contactus = await cuagent.Contactus.list();
            contactus.forEach((contact: Contact)=>{
                this.contactus.push(contact);
                this.contactsRegistry.set(contact.cu_id, contact);
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
    selectContactus = (cu_id: number) => {
        this.selectedContactus = this.contactsRegistry.get(cu_id);
    }
    cancelSelectedContactus = () => {
        this.selectedContactus = undefined;
    }
    openForm = (cu_id?: number) => {
        cu_id ? this.selectContactus(cu_id) :this.cancelSelectedContactus();
        this.editMode = true;
    }
    closeForm = () => {
        this.editMode = false;
    }
    createContactus = async(contactce: Contactce) => {
        this.loading = true;
        try {
            await cuagent.Contactus.create(contactce);
            runInAction (() =>
            {
                this.contactsce.push(contactce);
                this.selectedContactusce = contactce;
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
    updateContactus = async(contact: Contact) => {
        this.loading = true;
        try {
            await cuagent.Contactus.update(contact);
            runInAction (() =>
            {
                this.contactsRegistry.set(contact.cu_id, contact);
                this.selectedContactus = contact;
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
    deleteContactus = async(cu_id: number) => {
        this.loading = true;
        try {
            await cuagent.Contactus.delete(cu_id);
            runInAction (() =>
            {
                this.contactsRegistry.delete(cu_id)
                if(this.selectedContactus?.cu_id === cu_id) this.cancelSelectedContactus();
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