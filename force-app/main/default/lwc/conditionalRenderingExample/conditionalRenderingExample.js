import { LightningElement, track, api } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {

    @track displayDiv = false;

    showDivHandler(event){

        this.displayDiv = event.target.checked;
    }

}