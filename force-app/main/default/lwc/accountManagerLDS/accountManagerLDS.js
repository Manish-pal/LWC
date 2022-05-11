import { LightningElement, track, wire } from 'lwc';
import {createRecord, getRecord} from 'lightning/uiRecordApi';

//getRecord is a wireadaptor which reterives a record from salesforce without the need of server-side controller

const fieldArray = ['Account.Name', 'Account.Phone', 'Account.Website'];  // values we want to retrieve
export default class AccountManagerLDS extends LightningElement {

    @track accountName;
    @track accountPhone;
    @track accountWebsite;
    
    //preoperty to hold the record Id
    @track recordId;

    // the $ symbol means that the value is passed dynamically. when the values changes it can be rerendered
    @wire(getRecord, {recordId:'$recordId', fields:fieldArray})
    accountRecord;  // response returned from the wire service will be stored in accountRecord

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
        const recordInput = {apiName:'Account', fields};  //js object to map these fields

        //making the call to createRecord method from LDS which will take the recordInput as a parameter 
        //and will create a record in backend without the server side controller (it returns a promise)

        createRecord(recordInput).then(response => {

            console.log('Account has been created ', response.id);
            this.recordId = response.id;
        }).catch(error =>{
            console.error('Error in creating accounnt ', error.body.message);
        })
    }

    //using get properties

    get retAccountName(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Name.value;
        }else{
            return undefined;
        }
    }
    get retAccountPhone(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Phone.value;
        }else{
            return undefined;
        }
    }
    get retAccountWebsite(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Website.value;
        }else{
            return undefined;
        }
    }
}
