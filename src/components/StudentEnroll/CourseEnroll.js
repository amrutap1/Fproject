import React, { Component } from 'react'
import Header from '../Header';
import axios from 'axios';
import Navbar from '../../Navbar';
export default class CourseEnroll extends Component {
  constructor(props){
    super(props);
    this.state={  
        courseId:'',
        studentId:''
    };
    
    this.changecourseid=this.changecourseid.bind(this);
    this.changestudentid=this.changestudentid.bind(this);
    this.saveOrupdate=this.saveOrupdate.bind(this);
}

saveOrupdate=async (e)=>{
        let enrollment={
     
            courseId:this.state.courseId,
            studentId:this.state.studentId
            
        }
        try {
         const response = await axios.post("http://localhost:8000/user/addEnroll",
                   enrollment);
       alert("Enrolled Successfully");
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
changestudentid=(e)=>{
    this.setState({studentId:e.target.value});
}

render() {
return (
    <div >
      <Navbar></Navbar>
    <div className='container' style={{height:"800px"}}>
    <div class="container my-5"  style={{width:"500px" ,marginTop:'50px',height:'500px'  ,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
    <div class="row justify-content-center">
      <div class="col-md-6"><br></br>
        <h2 >ENROLL HERE</h2>
        <form >
      <div class="mb-3">
       <label>COURSE ID</label>
       <input
        type="number"
        className="form-control"
        name="courseId"
        value={this.state.courseId}
        onChange={this.changecourseid}
        required
        placeholder="Enter course"
      />
        </div>
        <div class="mb-3">
      <label>STUDENT ID</label>
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
    <button style={{background:"black",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}} onClick={this.saveOrupdate}>ENROLL</button>
    </form>
  </div>
 </div> </div></div></div>
  )
}
}