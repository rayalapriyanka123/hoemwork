import React , {Component} from 'react';

Class ContactInfo extends Component{
    render(){
        return(
         <div>
            <div class="form-group">
            <label for="mobile">Employee contact No :  </label>
            <input type="text" class="form-control" id="mobile">
                <span id="mobile_error"></span>
            </div>
            <div class="form-group">
            <label for="mobileEer">Emergency contact No :  </label>
            <input type="text" class="form-control" id="mobileEmer">
                <span id="mobileEmer_error"></span>
            </div>
         <div>
        )
    }
}

export default ContactInfo;


