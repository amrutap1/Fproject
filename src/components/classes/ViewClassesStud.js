import React, { Component } from 'react'
import StudentService from '../../service/StudentService';
import Header from '../Header';
import Navbar from '../../Navbar';
// import { Button } from 'bootstrap';

export default class ViewClassesStud extends Component {
    constructor(props){
        super(props)
        this.state={
            classes :[]
        }
        this.listClass=this.listClass.bind(this);
        //  this.deleteClass = this.deleteClass.bind(this);
      }

      listClass(){
        this.props.history.push('/')
      }

    

       
      componentDidMount(){
        StudentService.getClasses().then((res)=>{
            this.setState({
              classes : res.data
            });
        });
      }
  render() {
    return (
      <div>
       <Navbar></Navbar>
       <div className='cotainer' style={{height:"800px"}}>
         <h2 style={{alignContent:"center",fontFamily:"sans-serif", marginTop:"50px",marginLeft:"200px"}}>CLASSES</h2>
       <br></br>
         <div className='container' style={{width:"900px", marginTop:"10px",boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
        <table className="table table-striped" >
          <thead>
            <tr>
            <th>Class Id</th>
            <th>Teacher Id</th>
            <th>Course Id</th>
            <th>Start Time</th>
            <th>End Time</th>
            {/* <td>Action</td> */}
          </tr></thead>
          <tbody>
            {
              this.state.classes.map(
                st=>
                // console.log(st)
                <tr key={st.classId}> 
                <td>{st.classId}</td>
                <td>{st.user.id}</td>
                <td>{st.course.courseId}</td>
                <td>{st.startTime}</td>
                <td>{st.endTime}</td>
               {/* <td> <Button onClick={() => this.deleteClass(st.classId)}  style={{background:"purple",color:"whitesmoke" ,height:"40px" ,width:"100px" , borderRadius:"40px",border:"none"}}>Delete</Button></td> */}
                </tr>
              )
            }
          </tbody>
      </table>
</div>
</div>    </div>
    )
  }

  
    }
  