import { LightningElement, track } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';

export default class AccountManagerLDS extends LightningElement {

    @track accountName;
    @track accountPhone;
    @track accountWebsite;
    

    accountNameChangeHandler(event){
        this.accountName = event.target.value;
    }

    accountPhoneChangeHandler(event) {

        this.accountPhone = event.target.value;
    }

    accountWebsiteChangeHandler(event){

        this.accountWebsite = event.target.value;

    }

    createAccount() {

        const fields = {'Name' : this.accountName, 'Phone' : this.accountPhone, 'Website' : this.accountWebsite};
        const recordInput = {apiName:'Account', fields};

        //making the call to createRecord method from LDS which will take the recordInput as a parameter 
        //and will create a record in backend without the server side controller (it returns a promise)

        createRecord(recordInput).then(response => {

            console.log('Account has been created ', response.id);
        }).catch(error =>{
            console.error('Error in creating accounnt ', error.body.message);
        })
    }
}