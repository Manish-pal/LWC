import { api, LightningElement, wire } from 'lwc';

import {fireEvent} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class MeetingRoom extends LightningElement {


    //api Decorators are used to define public properties in your component. 
    //Values of theses properties can be supplied by parent component

    //no longer using this as we will get the markup from parent component 
    @api meetingRoomInfo = {roomName:'A1', roomCapacity: '12'};   //uncomment this if you are not using slots.

    @api showRoomInfo = false;

    //this property will hold the actual page reference of our meeting room component
    @wire(CurrentPageReference) pageReference; 

    tileClickHandler(){
        // we will fire an event from the LWC using the dispatch method
        //declaration of the event.
        
        const tileClicked = new CustomEvent('tileclick', {detail:this.meetingRoomInfo, bubbles:true});

        // when you are calling the handler programatically (not via markup event) use below to create customer event
        //const tileClicked = new CustomEvent('tileclick', {details:this.meetingRoomInfo, bubbles:true} );
        // setting bubbles property to true to allow our event to bubble up to parent component


        this.dispatchEvent(tileClicked);
        // this event will be handled in parent component i.e Meetingrooms

        // fired the event from this meetingRoom component which is handled in selectedMeetingRoom comp.
        fireEvent(this.pageReference, 'pubsubtileclick', this.meetingRoomInfo);

    }
}