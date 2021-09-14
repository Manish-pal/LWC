import { wire, LightningElement, track } from 'lwc';

// here the fired events will be handled so we will be importing the registerListner method and unregisterallListeners method
import {registerListener, unregisterAllListeners} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class SelectedMeetingRoom extends LightningElement {

    @track selectedMeetingRoom = {};
    @wire(CurrentPageReference) pageRef;


    connectedCallback(){

        registerListener('pubsubtileclick', this.onMeetingRoomSelectHandler, this);
    }

    disconnectedCallback(){

        unregisterAllListeners(this);
    }

    // to assign te value to our property  -> selectedMeetingRoom
    onMeetingRoomSelectHandler(payload){

        this.selectedMeetingRoom = payload;
    }

}