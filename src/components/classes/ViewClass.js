import React, { Component } from 'react'
import StudentService from '../../service/StudentService';
import Header from '../Header';
// import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Navbar from '../../Navbar';
export default class ViewClass extends Component {
    constructor(props){
        super(props)
        this.state={
            classes :[]
        }
        this.listClass=this.listClass.bind(this);
         this.deleteClass = this.deleteClass.bind(this);
      }

      listClass(){
        this.props.history.push('/')
      }

      
      deleteClass = async (classId) => {
        axios
          .delete(`http://localhost:8000/teacher/deleteClass?classId=${classId}`)
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
        StudentService.getClasses().then((res)=>{
            this.setState({
              classes : res.data
            });
        });
      }
  render() {
    return (
      <div >
      <Navbar></Navbar>
        <div style={{height:"800px"}}>
         <h2 style={{alignContent:"center",fontFamily:"sans-serif", marginTop:"50px",marginLeft:"190px"}}>CLASSES</h2>
       
         <div className='container' style={{width:"800px", marginTop:"10px"}}><br></br>
        <table className="table table-striped "style={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}} >
          <thead>
            <tr>
            <th>Class Id</th>
            <th>Teacher Id</th>
            <th>Course Id</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Action</th>
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
               <td> <Button onClick={() => this.deleteClass(st.classId)}  style={{background:"black",color:"whitesmoke" ,height:"40px" ,width:"100px" , borderRadius:"20px",border:"none"}}>Delete</Button></td>
                </tr>
              )
            }
          </tbody>
      </table>
        </div>
</div>
      </div>
    )
  }

  
    }
  