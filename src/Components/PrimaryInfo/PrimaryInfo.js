import React , {Component} from 'react';

class PrimaryInfo extends Component{
    
    render(){
        return(
        <div>
            <div class="form-group">
            <label for="firstName">First Name :  </label>
            <input type="text" class="form-control" id="firstName" aria-describedby="NameHelp" placeholder="Enter First Name">
            <span id="first_error"></span>
            </div>

          <div class="form-group">
            <label for="lastname">Last Name :   </label>
            <input type="text" class="form-control" id="lastName">
            <span id="last_error"></span>
          </div>
        </div>

        )
    };
}
export default PrimaryInfo ;