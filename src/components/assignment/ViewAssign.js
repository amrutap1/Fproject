import React, { Component } from 'react'
import StudentService from '../../service/StudentService';
import Header from '../Header';
// import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Navbar from '../../Navbar';
export default class ViewAssign extends Component {
    constructor(props){
        super(props)
        this.state={
            assignment :[]
        }
        this.listAssign=this.listAssign.bind(this);
        this.deleteAssign = this.deleteAssign.bind(this);
      }

      listAssign(){
        this.props.history.push('/')
      }

      
      deleteAssign = async (assignId) => {
        axios
          .delete(`http://localhost:8000/teacher/deleteAssign?assignId=${assignId}`)
          .then((response) => {
            console.log('Row deleted successfully');
            alert("Deleted Successfully");
            window.location.reload();
          })
          .catch((error) => {
            console.error('Error deleting row', error);
            alert("can't delete ");
          });
      };

       
      componentDidMount(){
        StudentService.getAssign().then((res)=>{
            this.setState({
              assignment : res.data
            });
        });
      }
  render() {
    return (
      <div style={{height:'800px'}}>
        <Navbar></Navbar>
         <h2 style={{alignContent:"center",fontFamily:"sans-serif", marginTop:"50px",marginLeft:"100px"}}>ASSIGNMENTS </h2>
       <br></br>
         <div className='container' style={{ width: "1000px",color:'white',marginTop: "10px", marginLeft: "auto", marginRight: "auto", boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}
       >
        <table className="table table-striped " >
          <thead>
            <tr>
            <th>Id</th>
            <th>Course Id</th>
            <th>Name</th>
            <th>Due Date</th>
            <th>Action</th>
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
               <td> <Button onClick={() => this.deleteAssign(st.assignId)}  style={{background:"black",color:"whitesmoke" ,height:"40px" ,width:"100px" , borderRadius:"40px",border:"none"}}>Delete</Button></td>
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
  