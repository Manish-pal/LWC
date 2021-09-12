import { LightningElement, track,api } from 'lwc';

export default class MeetingRoom2_HandlingEvent_bubbles extends LightningElement {

    @track selectedMeetingRoomInfo;
    @track selectedMeetingRoom;
    @api meetingRoomInfo; 

    //@api showRoomInfo = false;

    onTileSelectHandler(event) {

        const meetingRoomInfo =  event.detail;
        this.selectedMeetingRoom = meetingRoomInfo.roomName;


    }

    //As we need to define the handler at the time of component creation itself so using constructor

    constructor() {
        super();

        // we are attaching the listner on this template 1st parameter is eventNAme, 2nd we need to bind the... 
        // event handler
        this.template.addEventListener('tileclick', this.onTileSelectHandler.bind(this));

    }
}