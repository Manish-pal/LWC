import { api, LightningElement } from 'lwc';

export default class MeetingRoom extends LightningElement {


    //api Decorators are used to define public properties in your component. 
    //Values of theses properties can be supplied by parent component

    //no longer using this as we will get the markup from parent component 
    @api meetingRoomInfo;  //{roomName:'A1', roomCapacity: '12'}  //uncomment this if you are not using slots.

    @api showRoomInfo = false;

    tileClickHandler(){
        // we will fire an event from the LWC using the dispatch method
        //declaration of the event.
        
        const tileClicked = new CustomEvent('tileclick', {detail:this.meetingRoomInfo});

        // when you are calling the handler programatically (not via markup event) use below to create customer event
        //const tileClicked = new CustomEvent('tileclick', {details:this.meetingRoomInfo, bubbles:true} );
        // setting bubbles property to true to allow our event to bubble up to parent component


        this.dispatchEvent(tileClicked);

        // this event will be handled in parent component i.e Meetingrooms

    }
}