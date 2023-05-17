import React, { Component } from 'react'

// import StudentService from '../../service/StudentService';
import axios from 'axios';
export default class EnrollStudent extends Component {

    constructor(props){
        super(props);
        this.state={
          enrollId:'',
            courseId:'',
            studentId:''
        };
        this.changeid=this.changeid.bind(this);
        this.changecourseid=this.changecourseid.bind(this);
        this.changestudentid=this.changestudentid.bind(this);
        this.saveOrupdate=this.saveOrupdate.bind(this);
    }

    saveOrupdate=async (e)=>{
            let enrollment={
                enrollId:this.state.enrollId,
                courseId:this.state.courseId,
                studentId:this.state.studentId
                
            }
            try {
             const response = await axios.post("http://localhost:8000/user/addEnroll1",
                       enrollment);
           
          console.log(response.data); // Handle successful login
    //   this.props.history.push('./studentApp');
    } catch (error) {
      console.log(error); // Handle error
    }
  };
  //   }
  //   handleAdd = async (e) => {
  //       e.preventDefault();
  //       try {
  //         const response = await axios.post("http://localhost:8000/user/addEnroll", {
  //           enrollId:this.state.enrollId,
  //           course_id:this.state.course_id,
  //           student_id:this.state.student_id
  //         })

  //         console.log(response.data); // Handle successful login
  //   //   this.props.history.push('./studentApp');
  //   } catch (error) {
  //     console.error(error); // Handle error
  //   }
  // };

    
    changecourseid=(e)=>{
        this.setState({courseId:e.target.value});
    }

    changeid=(e)=>{
        this.setState({enrollId:e.target.value});
    }

    changestudentid=(e)=>{
        this.setState({studentId:e.target.value});
    }

  render() {
    return (
        <div className='container'>
        <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <form >
            
            <div class="mb-3">
          <label>Id:</label>
          <input
            type="number"
            name="enrollId"
            className="form-control"
            value={this.state.enrollId}
            onChange={this.changeid}
            required
            placeholder='Enter Id'
          /><br></br></div>
          <div class="mb-3">
           <label>course_id:</label>
           <input
            type="number"
            className="form-control"
            name="courseId"
            value={this.state.courseId}
            onChange={this.changecourseid}
            required
            placeholder="Enter course"
          /><br></br>
            </div>
            <div class="mb-3">
          <label>student_id:</label>
          <input
            type="number"
            className="form-control"
            name="studentId"
            value={this.state.studentId}
            onChange={this.changestudentid}
            required
            placeholder="Enter student"
          /><br></br>
          
            </div>
            {/* <a href='./studentApp' style={{"text-decoration":"none","color":"white"}}> */}
        <button style={{"background-color":"Black","color":"white"}} onClick={this.saveOrupdate}>Save</button>
        </form>
      </div>
      </div></div></div>
      )
  }
}
