import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {

    cardTitle = 'BMI Calculator';  //Non reactive private property All are reactive in Nature! as per salesforce It's still is required for array and object properties.
    weight;
    height;

    @track bmi;

    changePrivatePropertyVal() {

        this.cardTitle = "Value Changed!";
        console.log('Value is ' +this.cardTitle);
    }

    onWeightChange(event){

        this.weight = parseFloat(event.target.value);
    }

    onHeightChange(event) {

        this.height = parseFloat(event.target.value);

    }

    getBMI() {
        this.bmi = this.weight/(this.height* this.height);
        //return this.bmi;

    }
}