import { LightningElement, api } from 'lwc';

export default class CurrentDateTime extends LightningElement {


    @api TodayDate;
    TodayDate = new Date().toDateString();
}