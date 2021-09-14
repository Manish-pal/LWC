import { LightningElement, track,api } from 'lwc';

export default class MeetingRoom2_HandlingEvent_bubbles extends LightningElement {

    @track selectedMeetingRoomInfo;

    @track selectedMeetingRoom;
    @api meetingRoomInfo; 

    @api showRoomInfo = false;

    meetingRoomsInfo = [
        {roomName:'A1-01', roomCapacity: '12'},
        {roomName:'B1-01', roomCapacity: '16'},
        {roomName:'A2-02', roomCapacity: '10'},
        {roomName:'A3-03', roomCapacity: '6'},
        {roomName:'C2-02', roomCapacity: '18'},
        {roomName:'c1-01', roomCapacity: '20'}
    ];

    // this is a js method which was supposed to be fired on event "ontileclick" 
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