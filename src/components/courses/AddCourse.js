import React, { Component } from 'react'
import axios from 'axios';
import Header from '../Header';

import eimg from '../Images/zd.jpg'


export default class AddCourse extends Component {

    constructor(props){
        super(props);
        this.state={
            courseName:'',
            teacherId:'',
            startDate:'',
            endDate:''
        };
        this.changeCourseName=this.changeCourseName.bind(this);
        this.changeteacherId=this.changeteacherId.bind(this);
        this.changestartDate=this.changestartDate.bind(this);
        this.changeendDate=this.changeendDate.bind(this);
        this.save=this.save.bind(this);
       
    }

    save=async (e)=>{
        let course={
            courseName:this.state.courseName,
            teacherId:this.state.teacherId,
            startDate:this.state.startDate,
            endDate:this.state.endDate
        }
        // alert("Assignment Added SuccessFully")
        try {
         const response = await axios.post("http://localhost:8000/user/addCourse",
                   course);
       
      console.log(response.data);
     
//   this.props.history.push('./studentApp');
            alert("class Added");
} catch (error) {
  console.log(error); // Handle error
  alert("Enter Proper details");
}
};

changeCourseName=(e)=>{
    this.setState({courseName:e.target.value});
}


changeteacherId=(e)=>{
    this.setState({teacherId:e.target.value});
}

changestartDate=(e)=>{
    this.setState({startDate:e.target.value});
}

changeendDate=(e)=>{
    this.setState({endDate:e.target.value});
}
  render() {
    return (
      <div className='container' style={{backgroundImage:`url(${eimg})`  , height:'850px' }}>
      
        <div className='container' style={{width:"800px" ,marginTop:'30px'}}>
        <h3 style={{paddingBlock:"20px"}}>ADD COURSE</h3>
        <form>
            <label> Course Name</label><br></br>
            <input type='text'
             name="courseName"
             className="form-control"
             value={this.state.courseName}
             onChange={this.changeCourseName}
             required
             placeholder='Enter course ' >
            </input><br></br>
            <label> Teacher Id</label><br></br>
            <input type='number'
             name="teacherId"
             className="form-control"
             value={this.state.teacherId}
             onChange={this.changeteacherId}
             required
             placeholder='Enter teacher Id`'
            >
            </input><br></br>
            <label>Start Date</label><br></br>
            <input type='text'
             name="startDate"
             className="form-control"
             value={this.state.startDate}
             onChange={this.changestartDate}
             required
             placeholder='Enter Start date'
            >
            </input><br></br>
            <label>end Date</label><br></br>
            <input type='text'
             name="endDate"
             className="form-control"
             value={this.state.endDate}
             onChange={this.changeendDate}
             required
             placeholder='Enter date'
            >
            </input><br></br>

            {/* <button onClick={this.save}><a href='./viewAssign'>save</a></button> */}
            <button type="submit" onClick={this.save} style={{background:"purple",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>save</button>
        </form>
        <br></br>
        <a href='./viewCourse'>< button style={{background:"purple",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>View courses</button></a>
              </div>
      </div>
    )
  }
}
