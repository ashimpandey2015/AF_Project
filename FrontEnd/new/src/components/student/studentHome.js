import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from  'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import studentDetails from '../student/viewStudent';
import viewCourses from '../student/courses';

export class studentHome extends Component{
   
    StudentDetails = e => {
    e.preventDefault();
    this.props.history.push(`/studentDetails`);
    }

    viewCourses = e => {
        e.preventDefault();
        this.props.history.push(`/viewCourses`);
        }

    render(){
        
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Welcome to Student Home Page"/>
            <br/>
            <br/>
             
            <RaisedButton 
            label="Student Details"
            primary={true}
            styles = {styles.button}
            onClick={this.StudentDetails}
            />
             <br/>
             <br/>
             <br/>

             <RaisedButton 
            label="View Courses"
            primary={true}
            styles = {styles.button}
            onClick={this.viewCourses}
            />

          </React.Fragment>
        </MuiThemeProvider>
      )  
    }
}


const styles = {
    button: {
        margin: 15
    }   
}

export default studentHome