import React, { Component } from 'react'
import axios from 'axios';
import Header from '../Header';

import eimg from '../Images/zd.jpg'
import Navbar from '../../Navbar';


export default class AddAssign extends Component {

    constructor(props){
        super(props);
        this.state={
           
            assignName:'',
            dueDate:'',
            courseId:''
        };
        this.changecourseid=this.changecourseid.bind(this);
        this.changeassigname=this.changeassigname.bind(this);
        this.changeduadate=this.changeduadate.bind(this);
        this.save=this.save.bind(this);
       
    }

    save=async (e)=>{
        let assignment={
            assignName:this.state.assignName,
            dueDate:this.state.dueDate,
            courseId:this.state.courseId
        }
        // alert("Assignment Added SuccessFully")
        try {
         const response = await axios.post("http://localhost:8000/user/addAssign",
                   assignment);
       
      console.log(response.data);
      alert("Assignment Added Successfully");
     
//   this.props.history.push('./studentApp');
            alert("Assignment Added");
} catch (error) {
  console.log(error); // Handle error
  alert("Enter Proper CourseId details");
}
};

changecourseid=(e)=>{
    this.setState({courseId:e.target.value});
}


changeassigname=(e)=>{
    this.setState({assignName:e.target.value});
}

changeduadate=(e)=>{
    this.setState({dueDate:e.target.value});
}
  render() {
    return (
      <div >
        <Navbar></Navbar>
        <div className='container'  style={{width:'1100px', height:'850px' }}>
        <div className='container' style={{width:"800px",height:"700px" ,marginTop:'30px',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
        <h3 style={{paddingBlock:"20px" }}>ADD ASSIGNMENT</h3>
        <form>
            {/* <label>assignId</label><br></br>
            <input type='number'
             name="assignId"
             className="form-control"
             value={this.state.assignId}
             onChange={this.changeid}
             required
             placeholder='Enter Id' >
            </input><br></br> */}
            <label>ASSIGNMENT NAME</label><br></br>
            <input type='text'
             name="assignName"
             className="form-control"
             value={this.state.assignName}
             onChange={this.changeassigname}
             required
             placeholder='Enter Assignment Name' >
            </input><br></br>
            <label>DUE DATE</label><br></br>
            <input type='text'
             name="dueDate"
             className="form-control"
             value={this.state.dueDate}
             onChange={this.changeduadate}
             required
             placeholder='Enter DueDate `2020-02-2-01`'
            >
            </input><br></br>
            <label>COURSE ID</label><br></br>
            <input type='text'
             name="courseId"
             className="form-control"
             value={this.state.courseId}
             onChange={this.changecourseid}
             required
             placeholder='Enter CourseId'
            >
            </input><br></br>

            {/* <button onClick={this.save}><a href='./viewAssign'>save</a></button> */}
            <button type="submit" onClick={this.save} style={{background:"black",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>save</button>
        </form>
        <br></br>
        <a href='./viewAssign'>< button style={{background:"black",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>View Assignment</button></a>
              </div>
      </div>
      </div>
    )
  }
}
