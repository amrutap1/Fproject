import React, { Component } from 'react'
import StudentService from '../../service/StudentService';
import Header from '../Header';
// import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Navbar from '../../Navbar';
export default class ViewAssignStud extends Component {
    constructor(props){
        super(props)
        this.state={
            assignment :[]
        }
        this.listAssign=this.listAssign.bind(this);
        // this.deleteAssign = this.deleteAssign.bind(this);
      }

      listAssign(){
        this.props.history.push('/')
      }

       
      componentDidMount(){
        StudentService.getAssign().then((res)=>{
            this.setState({
              assignment : res.data
            });
        });
      }
  render() {
    return (
      <div  style={{height:'800px'}}>
        <Navbar></Navbar>
        <br></br>
         <u><h2 style={{alignContent:"center",fontFamily:"sans-serif", marginTop:"50px",marginLeft:"200px"}}>ASSIGNMENTS </h2></u>
        <br></br>       
         <div className='container' style={{ width: "1000px",color:'white', marginTop: "10px", marginLeft: "auto", marginRight: "auto", boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}
       >
        <table className="table table-striped " >
          <thead>
            <tr>
            <th>Id</th>
            <th>Course Id</th>
            <th>Name</th>
            <th>Due Date</th>
            {/* <td>Action</td> */}
          </tr></thead>
          <tbody>
            {
              this.state.assignment.map(
                st=>
                // console.log(st)
                <tr key={st.assignId}> 
                <td>{st.assignId}</td>
                <td>{st.course.courseId}</td>
                <td>{st.assignName}</td>
                <td>{st.dueDate}</td>
               {/* <td> <Button onClick={() => this.deleteAssign(st.assignId)}  style={{background:"purple",color:"whitesmoke" ,height:"40px" ,width:"100px" , borderRadius:"40px",border:"none"}}>Delete</Button></td> */}
                </tr>
              )
            }
          </tbody>
      </table>
        
</div>
      </div>
    )
  }

  
    }
  