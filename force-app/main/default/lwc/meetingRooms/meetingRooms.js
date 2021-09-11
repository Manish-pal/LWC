import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {

    meetingRoomsInfo = [
        {roomName:'A1', roomCapacity: '12'},
        {roomName:'B1', roomCapacity: '16'},
        {roomName:'A2', roomCapacity: '10'},
        {roomName:'A3', roomCapacity: '6'},
        {roomName:'C2', roomCapacity: '18'},
        {roomName:'c1', roomCapacity: '20'}
    ];
}