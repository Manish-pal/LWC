import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigationExample extends NavigationMixin(LightningElement) {


    // we need to apply the NavigationMixin method to our Lightning Element In order to use this service

    openAppleDotCom() {

        this[NavigationMixin.Navigate]({

            // we need to pass the page reference

            type : 'standard__webPage',
            attributes:{

                url:'https://www.apple.com/in/'
            }

        })
    }
}