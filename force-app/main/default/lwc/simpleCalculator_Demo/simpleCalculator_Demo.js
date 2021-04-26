import { LightningElement, track } from 'lwc';

export default class SimpleCalculator_Demo extends LightningElement {

    @track number1;
    @track number2;

    @track result;

    handleChange(event){

        const currentInputName = event.target.name;
        const currentVal= event.target.value;

        if(currentInputName == 'Number1'){
            this.number1 = currentVal;
        }else {

            this.number2 = currentVal;
        }

    }
    // Addition method for the adding numbers
    doAddition() {

        this.result = parseInt(this.number1) + parseInt(this.number2);
    }

    doSubtraction() {

        this.result = parseInt(this.number1) - parseInt(this.number2);
    }
    doMultiplication() {

        this.result = parseInt(this.number1) * parseInt(this.number2);
    }
    doDivision() {
        if(this.number2 == 0) {

            alert("You can't divide a number by 0!");
        }else{
            this.result = parseInt(this.number1)/ parseInt(this.number2);
        }
        
    }

}