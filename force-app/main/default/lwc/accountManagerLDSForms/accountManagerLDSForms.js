import { LightningElement, track } from 'lwc';

export default class AccountManagerLDSForms extends LightningElement {
    
    // Record Forms do not require Importing uiRecordAPi module

    @track recordId;
    successHandler(event){

        this.recordId = event.detail.id;

    }
}