import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import axios from 'axios';

const Students = props => (
    <tr>
        <td>{props.assign.courseName}</td>
        <td>{props.assign.lecturerInCharge}</td>
        <td>{props.assign.courseHours}</td>
        <td>
            <Link to={"/edit/"+props.assign._id}>Edit</Link>
            
        </td>
        <td>
            <Link to={"/delete/"+props.assign._id}>Delete</Link>
        </td>
    </tr>
)

export default class viewAssignments extends Component {

    constructor(props){
        super(props);
        this.state = {Courses: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4001/courseWeb/')
            .then(response => {
                this.setState({Courses: response.data});
            }).catch(function (error) {
            console.log(error);
        })
    }


    courseList(){
        return this.state.Courses.map(function (current, i) {
            return <Students assign = {current} key={i} />
        })
    }

    render(){
        return(
            <div>
                <h3>Students</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                   <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>NIC</th>
                        <th>Course Following</th>
                    </tr>
                   </thead>
                    <tbody>
                        {this.courseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}