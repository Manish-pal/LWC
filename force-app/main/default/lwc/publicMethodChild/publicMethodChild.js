import { api, LightningElement, track } from 'lwc';

export default class PublicMethodChild extends LightningElement {

    @track value = ['Red'];
/*
    get options() {
        return [
            { label: 'RedMarker', value: 'Red' },
            { label: 'BlueMarker', value: 'Blue' },
            { label: 'GreenMarker', value: 'Green' },
            { label: 'BlackMarker', value: 'Black' },
        ];
    }
*/
    options = [

        { label: 'Red Marker', value: 'Red' },
        { label: 'Blue Marker', value: 'Blue' },
        { label: 'Green Marker', value: 'Green' },
        { label: 'Black Marker', value: 'Black' },
    ]

    // handleChange(e) {
    //     this.value = e.detail.value;
    // }  

    @api 
    selectCheckbox(checkboxValue){

        const selectedCheckbox = this.options.find(checkbox =>{

            return checkboxValue === checkbox.value;
        })

        if(selectedCheckbox){
            this.value = selectedCheckbox.value;
            return "Successfully Checked!"
        } 
            return "No checkBox Found"
        
    }
}