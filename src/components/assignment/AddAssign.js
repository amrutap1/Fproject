import React, { Component } from 'react'
import axios from 'axios';

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
        alert("Assignment Added SuccessFully")
        try {
         const response = await axios.post("http://localhost:8000/user/addAssign",
                   assignment);
       
      console.log(response.data);
     
//   this.props.history.push('./studentApp');

} catch (error) {
  console.log(error); // Handle error
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
      <div className='container'>
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
            <label>assignName</label><br></br>
            <input type='text'
             name="assignName"
             className="form-control"
             value={this.state.assignName}
             onChange={this.changeassigname}
             required
             placeholder='Enter name' >
            </input><br></br>
            <label>dueDate</label><br></br>
            <input type='text'
             name="dueDate"
             className="form-control"
             value={this.state.dueDate}
             onChange={this.changeduadate}
             required
            >
            </input><br></br>
            <label>course_id</label><br></br>
            <input type='text'
             name="courseId"
             className="form-control"
             value={this.state.courseId}
             onChange={this.changecourseid}
             required
            >
            </input><br></br>

            {/* <button onClick={this.save}><a href='./viewAssign'>save</a></button> */}
            <button type="submit" onClick={this.save} style={{background:"purple",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>save</button>
        </form>
        <br></br>
        <a href='./viewAssign'>< button style={{background:"purple",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>View Assignment</button></a>

      </div>
    )
  }
}
