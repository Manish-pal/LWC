import { LightningElement, track } from 'lwc';
//giving hard reference so as to check before deleting the 
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class AccountRecordForm extends LightningElement {

    @track recordId;

    //fieldArray = ['Name', 'Phone','Website'];
    fieldArray = [NAME_FIELD, PHONE_FIELD, WEBSITE_FIELD]; 
    //salesforce is aware that we are using these field in LWC which can't be changed or deleted.

    handleSuccess(event) {
        this.recordId = event.detail.id;

    }
}