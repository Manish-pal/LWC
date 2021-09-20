import { LightningElement, track, wire } from 'lwc';
//importing aura enabled method from @salesforce/apex/<className>/<methodName>
import getAllAccounts from '@salesforce/apex/accountManager.getAccount';

//for showing the toast message on LWC
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AccountManageApex extends LightningElement {

    /*
    @wire(getAllAccounts)
    accounts;
*/
    get responseReceived(){

        if(this.accounts){
            return true;
        }else{
            return false;
        }

    } 

    @track numberOfRecords;
    @track accounts;
    numberOfAccountChangeHandler(event) {

        this.numberOfRecords = event.target.value;
    }

    getAccounts() {
        getAllAccounts({numOfRecords :this.numberOfRecords}).then(response =>{

          this.accounts = response;  
          const toastEvent = new ShowToastEvent({

            title:'Accounts Loaded',
            message:this.numberOfRecords + ' Account Fetched from Server',
            variant:'success'
          });
          this.dispatchEvent(toastEvent);

        }).catch(error => {

            console.log('Error in getting the accounts ', error.body.message);
            const toastEvent = new ShowToastEvent({

                title:'-- ERROR --',
                message:error.body.message,
                variant:'error'
              });
              this.dispatchEvent(toastEvent);
        })

    }
}