import React, { Component } from 'react'
import StudentService from '../../service/StudentService';

import './ViewsCourse.css';
import Header from '../Header';
import ViewAssign from '../assignment/ViewAssign';
import Navbar from '../../Navbar';

export default class ViewsCourse extends Component {

    constructor(props){
        super(props)
        this.state={
            course :[]
        }
        this.listCourse=this.listCourse.bind(this);

      }
    
      listCourse(){
        this.props.history.push('/')
      }
      
      componentDidMount(){
        StudentService.getCourse().then((res)=>{
            this.setState({
              course : res.data
            });
        });
      }
     
      
  
  render() {
    return (
        <div >
        <Navbar></Navbar>
         <div style={{marginLeft:"150px"}}>
         <div className='cont1' style={{width:"500px"}}>
          <br></br>
         <br></br> <h2  style={{paddingLeft:'10px' ,fontFamily:"serif" ,color:"black" }}>COURSES</h2>
          <table >
       
          <tbody>
        
          <div className="row row-cols-2 row-cols-md-3 g-4" style={{width:"1100px"}}>
                {this.state.course.map(st => (
                <tr key={st.courseId}>
                <td>
               
                <div className="col">
                <div className="card " style={{width:"350px", boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
                <div className="card-body">
                <h2 className="card-title"> {st.courseId}</h2>
                <h4 className="card-title">Course Name:{st.courseName}</h4>
                <p className="card-text">Start Date: {st.startDate}</p>
                <p className="card-text">End Date: {st.endDate}</p>
                <p className="card-text">Teacher Id: {st.user.id}</p>
              <a href='./courseEnroll'>  <button style={{background:"black",color:"white" ,height:"50px" ,width:"210px" , borderRadius:"40px",border:"none"}}  >ENROLL HERE</button>
                </a>
                </div>
                </div></div>
                
                 </td>

                </tr>
                ))}
                </div>
            </tbody>
            
       </table>
    </div>
       </div>
      </div>

    
       )
  }
}
