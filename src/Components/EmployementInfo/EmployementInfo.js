import React, {Component} from 'react';

Class EmployementInfo extends Component{
    render(){
        return(
        <div>
             <div class="form-group">
            <label for="design">Designation</label>
            <input type="text" id="designation" class="form-control" required>
            <span id="design_error"></span>
         </div>
            <div class="form-group">
            <label for="EmpId">Employee Id :   </label>
            <input type="text" class="form-control" id="code">
            <span id="Id_error"></span>
            </div>
        
            <div class="form-group">
             <label for="date">Date of Employeemnt :   </label>
             <input type="date" class="form-control" id="date">
             <span id="date_error"></span>
            </div>
        
             <div class="form-group">
             <label for="email">Employee Email (virtusa):   </label>
              <input type="email" class="form-control" id="email" placeholder="example@virtusa.com">
              <span id="email_error"></span>
            </div>
             <div class="form-group">
            <label for="reason">Reasons for Issue</label>
            <select id="issue" class="form-control" required>
                <option>New Employee</option>
                <option>Lost</option>
                <option>Defaced</option>
                <option>Conversion</option>
                <option>Designation Change</option>
            </select>
        </div>
        </div>
        )
    }

}

export default EmployementInfo;