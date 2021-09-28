import { LightningElement, api } from 'lwc';

export default class CustomRecordForm extends LightningElement {


    // the framework can pass the values to objectApiName and recordId property will work on Record page only
    @api recordId
    @api objectApiName

    handleSuccess(event){

        this.recordId = event.detail.value;

    }
}