import React, { Component } from 'react'

import axios from 'axios';
export default class CourseEnroll extends Component {
    constructor(props){
        super(props);
        this.state={
            enroll_id:'',
            course_id:'',
            student_id:''
        };
    }

    handleAdd = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:8000/user/addEnroll", {
            enroll_id:this.state.enroll_id,
            course_id:this.state.course_id,
            student_id:this.state.student_id
          })

          console.log(response.data); // Handle successful Enroll
    //   this.props.history.push('./studentApp');
    } catch (error) {
            console.error(error); // Handle error
            }
        };

        handleInput = (e) => {
            this.setState({ [e.target.name]: e.target.value });
        };

  render() {
    return (
      <div className='container' >
        <div className='container' align='center' style={{width:"500"}}>
            <form class="container" id="formLogin" >
            <div class="mb-3">
          <label>Id:</label>
          <input
            type="number"
            name="EnrollId"
            className="form-control"
            onChange={this.handleInput}
            required
            placeholder='Enter Id'
          /><br></br></div>

               <div class="mb-3">
          <label>Course Id:</label>
          <input
            type="text"
            name="courseId"
            className="form-control"
            value={this.state.course_id}
            onChange={this.handleInput}
            required
            placeholder='Enter course'
          /><br></br></div>

            <div class="mb-3">
          <label>Id:</label>
          <input
            type="number"
            name="studentID"
            className="form-control"
            onChange={this.handleInput}
            required
            placeholder='Enter Student Id'
          /><br></br></div>
 
        <button  style={{"background-color":"Black","color":"white"}} onClick={this.handleAdd} >ENROLL</button>
            </form>

        </div>
        
      </div>
    )
  }
}
