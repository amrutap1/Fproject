import React, { Component } from 'react'
import axios from 'axios';
import Navbar from '../../Navbar';


export default class AddClasses extends Component {

    constructor(props){
        super(props);
        this.state={
            courseId:'',
            teacherId:'',
            startTime:'',
            endTime:''
        };
        this.changecourseid=this.changecourseid.bind(this);
        this.changestartTime=this.changestartTime.bind(this);
        this.changeteacherId=this.changeteacherId.bind(this);
        this.changeendTime=this.changeendTime.bind(this);
        this.save=this.save.bind(this);
       
    }

    save=async (e)=>{
        let classes={
            courseId:this.state.courseId,
            teacherId:this.state.teacherId,
            startTime:this.state.startTime,
            endTime:this.state.endTime
        }
        // alert("Assignment Added SuccessFully")
        try {
         const response = await axios.post("http://localhost:8000/user/addClass",
                   classes);
       
      console.log(response.data);
     
//   this.props.history.push('./studentApp');
            alert("class Added");
} catch (error) {
  console.log(error); // Handle error
  alert("Enter Proper details");
}
};

changecourseid=(e)=>{
    this.setState({courseId:e.target.value});
}


changeteacherId=(e)=>{
    this.setState({teacherId:e.target.value});
}

changestartTime=(e)=>{
    this.setState({startTime:e.target.value});
}

changeendTime=(e)=>{
    this.setState({endTime:e.target.value});
}
  render() {
    return (
      <div style={{  height:'900px' }}>
       <Navbar></Navbar>
        <div className='container' style={{width:"800px" ,height:"700px",marginTop:'30px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
        <h3 style={{paddingBlock:"20px"}}>ADD CLASS</h3>
        <form>
            <label> Course Id</label><br></br>
            <input type='number'
             name="courseId"
             className="form-control"
             value={this.state.courseId}
             onChange={this.changecourseid}
             required
             placeholder='Enter course id' >
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
            <label>Start Time</label><br></br>
            <input type='text'
             name="startTime"
             className="form-control"
             value={this.state.startTime}
             onChange={this.changestartTime}
             required
             placeholder='Enter Start time `02:00:00`'
            >
            </input><br></br>
            <label>End Time</label><br></br>
            <input type='text'
             name="endTime"
             className="form-control"
             value={this.state.endTime}
             onChange={this.changeendTime}
             required
             placeholder='Enter End time `04:00:00`'
            >
            </input><br></br>

            {/* <button onClick={this.save}><a href='./viewAssign'>save</a></button> */}
            <button type="submit" onClick={this.save} style={{background:"black",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>save</button>
        </form>
        <br></br>
        <a href='./viewClass'>< button style={{background:"black",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>View CLASSES</button></a>
              </div>
      </div>
    )
  }
}
