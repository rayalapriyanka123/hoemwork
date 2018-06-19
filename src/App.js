import React , {Component} from 'react';

import './App.css';
import PrimaryInfo from './Components/PrimaryInfo/PrimaryInfo';
import EmployementInfo from './Components/EmployementInfo/EmployementInfo';
import PersonalInfo from './Components/PersonalInfo/PersonalInfo';
import ContactInfo from './Components/ContactInfo/ContactInfo';

class App extends Component{
    render(){
        return(
          <div>
          <h3 class="text-center">Employee ID Card Form</h3>
          <div class="container">
                <PrimaryInfo />
                  <br>
                  <br>
              <EmployementInfo />
              <br>
              <br>
              <br>
              <PersonalInfo />
              <br>
              <br>
              <ContactInfo />  
              <br>
              <br>  
                  <button id="submit" class="btn btn-success">Submit</button>
                </div>
        );
      }
    }
    
    export default App;
        