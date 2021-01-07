import {LightningElement, api, wire } from 'lwc';

import getOpportunities from '@salesforce/apex/opportunityData.getOpportunities';
import OpportunityAmount from '@salesforce/label/c.OpportunityAmount';


import OpportunityName from '@salesforce/label/c.OpportunityName';
export default class OpportunityDynamic extends LightningElement {

    @api recordId;  //it tracks the change in property
    @api amount;

    handleChange(event) {
        this.amount = event.target.value;
    }
    @wire (getOpportunities, {accId: '$recordId', amt: '$amount'}) 
    opportunities;
    //@wire service read data from one of the wire adapters in the lightning/ui*Apimodules and also to call the apex controller server-side methods using wire services

    label = { 
        OpportunityAmount,
        OpportunityName
    };

    
}