import { api, LightningElement } from 'lwc';

export default class MeetingRoom extends LightningElement {


    //api Decorators are used to define public properties in your component. 
    //Values of theses properties can be supplied by parent component
    @api meetingRoomInfo;  //{roomName:'A1', roomCapacity: '12'}

    @api showRoomInfo = false;
}