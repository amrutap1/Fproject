import React, { Component } from 'react'
import StudentService from '../../service/StudentService';

import './ViewsCourse.css';
import Header from '../Header';
import ViewFeedback from '../Feedback/ViewFeedback';
import ViewAssign from '../assignment/ViewAssign';

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
     
      edit(){
        this.props.history.push('/viewAssign');
    }
   
  
  render() {
    return (
        <div className='container'>
          <Header></Header>
         
         <div className='cont1' style={{width:"50%"}}>
          <table >
       
          <tbody>
        
          <div className="row row-cols-1 row-cols-md-3 g-4" style={{width:"1100px"}}>
                {this.state.course.map(st => (
                <tr key={st.courseId}>
                <td>
               
                <div className="col">
                <div className="card" style={{width:"350px"}}>
                <div className="card-body">
                <h2 className="card-title"> {st.courseId}</h2>
                <h4 className="card-title">Course Name:{st.courseName}</h4>
                <p className="card-text">Start Date: {st.startDate}</p>
                <p className="card-text">End Date: {st.endDate}</p>
                <p className="card-text">Teacher Id: {st.user.id}</p>
                <button style={{background:"#DDA0DD",color:"black" ,height:"50px" ,width:"210px" , borderRadius:"40px",border:"none"}} onClick={() => this.edit()} >ENROLL HERE</button>
                
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

    
       )
  }
}
