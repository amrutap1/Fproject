import React, { Component } from 'react'
import StudentService from '../../service/StudentService';

import './ViewsCourse.css';
import Header from '../Header';

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
        <div className='container'>
          <Header></Header>
         
         <div className='cont1'>
          <table >
       
          <tbody>
          <div className="row row-cols row-cols-md-3 g-4">
         
                {this.state.course.map(st => (
                <tr key={st.courseId}>
                <td>
                <div className="col">
                <div className="card">
                <div className="card-body">
                <h2 className="card-title"> {st.courseId}</h2> 
                <p className="card-text">CourseName:{st.courseName}</p>
                <p className="card-text">Start Date: {st.startDate}</p>
                <p className="card-text">End Date: {st.endDate}</p>
                <p className="card-text">Teacher Id: {st.user.id}</p>
                
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
