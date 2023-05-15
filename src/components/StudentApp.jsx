import React, { Component } from 'react'
import Header from './Header';

export default class StudentApp extends Component {

    constructor(props){
        super(props);
        this.listStudent=this.listStudent.bind(this);
        this.viewCourse=this.viewCourse.bind(this);
        this.viewGrade=this.viewGrade.bind(this);
        this.viewAssign=this.viewAssign.bind(this);
    }

    viewAssign(){
      this.props.history.push('/viewAssign');
    }
    viewGrade(){
      this.props.history.push('/viewGrade');
    }
    viewCourse(){
        this.props.history.push('/viewCourse');
    }

    listStudent(){
        this.props.history.push('/listStudent');
    }
    
  render() {
    return (
      <div className='container'>
        <Header></Header>
      
        {/* <a href='./listStudent'>< button className='btn btn-block btn-primary'>List Student</button></a><br></br> */}
        <a href='./viewCourse'>< button className='btn btn-block btn-primary'>View Courses</button></a><br></br>
        <a href='./viewGrade'>< button className='btn btn-block btn-primary'>View Grades</button></a><br></br>
        {/* its views Grades ByStudentid  */}
        <a href='./viewFeedback'>< button className='btn btn-block btn-primary'>View Feedback</button></a><br></br>
        
        <a href='./viewAssign'>< button className='btn btn-block btn-primary'>View Assignments</button></a><br></br>
      </div>
    )
  }
}
