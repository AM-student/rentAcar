import { makeAutoObservable, runInAction } from "mobx"
import fbagent from "../api/fbagent";
import { Feedback } from "../models/feedback";
import { Feedbackce } from "../models/feedbackce";


export default class FeedbackStore{

    feedback: Feedback[] = [];
    feedbsRegistry = new Map<number, Feedback>();
    feedbsce: Feedbackce[] = [];
    selectedFeedback: Feedback | undefined = undefined ;
    selectedFeedbackce: Feedbackce | undefined = undefined ;

    editMode = false;
    loading = false;
    loadingInitial=false;

    constructor(){
        makeAutoObservable(this)
    }

    loadFeedbacks = async () =>{
        this.setLoadingInitial(true);
        try {
            const feedback = await fbagent.Feedbacks.list();
            

            feedback.forEach((feedb: Feedback)=>{
                this.feedback.push(feedb);
                this.feedbsRegistry.set(feedb.fb_id, feedb);
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
    selectFeedback = (fb_id: number) => {
        this.selectedFeedback = this.feedbsRegistry.get(fb_id);
    }
    cancelSelectedFeedback = () => {
        this.selectedFeedback = undefined;
    }
    openForm = (fb_id?: number) => {
        fb_id ? this.selectFeedback(fb_id) :this.cancelSelectedFeedback();
        this.editMode = true;
    }
    closeForm = () => {
        this.editMode = false;
    }
    createFeedback = async(feedbce: Feedbackce) => {
        this.loading = true;
        try {
            await fbagent.Feedbacks.create(feedbce);
            runInAction (() =>
            {
                this.feedbsce.push(feedbce);
                this.selectedFeedbackce = feedbce;
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
    updateFeedback = async(feedb: Feedback) => {
        this.loading = true;
        try {
            await fbagent.Feedbacks.update(feedb);
            runInAction (() =>
            {
                this.feedbsRegistry.set(feedb.fb_id, feedb);
                this.selectedFeedback = feedb;
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
    deleteFeedback = async(fb_id: number) => {
        this.loading = true;
        try {
            await fbagent.Feedbacks.delete(fb_id);
            runInAction (() =>
            {
                this.feedbsRegistry.delete(fb_id)
                if(this.selectedFeedback?.fb_id === fb_id) this.cancelSelectedFeedback();
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