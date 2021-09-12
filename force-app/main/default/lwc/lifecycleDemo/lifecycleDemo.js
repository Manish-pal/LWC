import { LightningElement } from 'lwc';

export default class LifecycleDemo extends LightningElement {

    constructor() {

        super();
        console.log('Constructor called');
    }

    connectedCallback(){
        console.log('Component Connected CallBack is called');
    }

    renderedCallback(){

        console.log('Component Rendered Callback is Called');
    }

    disconnectedCallback() {

        console.log('Component disconnected Callback is Called');
    }
}