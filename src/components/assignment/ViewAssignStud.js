import React, { Component } from 'react'
import StudentService from '../../service/StudentService';
import Header from '../Header';
// import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
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
      <div className='container'>
         <Header></Header>
         <h2 style={{alignContent:"center",fontFamily:"sans-serif", marginTop:"50px",marginLeft:"450px"}}>ASSIGNMENTS </h2>
       
         <div className='container' style={{width:"800px", marginTop:"10px"}}>
        <table className="table table-striped table-bordered" >
          <thead>
            <tr>
            <td>Id</td>
            <td>Course Id</td>
            <td>Name</td>
            <td>Due Date</td>
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
  