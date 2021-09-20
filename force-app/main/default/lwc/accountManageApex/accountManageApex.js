import { LightningElement, track, wire } from 'lwc';
//importing aura enabled method from @salesforce/apex/<className>/<methodName>
import getAllAccounts from '@salesforce/apex/accountManager.getAccount';


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
        }).catch(error => {

            console.log('Error in getting the accounts ', error.body.message);
        })

    }
}