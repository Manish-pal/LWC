import { LightningElement, track, api } from 'lwc';

export default class HelloWorld extends LightningElement {

    //write client side logic/methods etc
    @track dynamicGreeting = 'World';

    greetingChangeHandler(event) {
        //two way data binding
        this.dynamicGreeting = event.target.value;
    }
}