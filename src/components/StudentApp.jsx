import React, { Component } from 'react'
import Header from './Header';
import icourse from './Images/course.jpg';
import iassign from './Images/assign.jpg';
import igrade from './Images/grades.jpg';
import imsg from './Images/msg.jpg';
import wal1 from './Images/wal1.jpg';
import iclass from './Images/class.png';
export default class StudentApp extends Component {

    constructor(props){
        super(props);
        this.listStudent=this.listStudent.bind(this);
        this.viewCourse=this.viewCourse.bind(this);
        this.viewGrade=this.viewGrade.bind(this);
        this.viewAssign=this.viewAssign.bind(this);
        this.enrollStudent=this.enrollStudent.bind(this);
    }
enrollStudent(){
  this.props.history.push('/enrollStudent');
}
    viewAssign(){
      this.props.history.push('/viewAssign');
    }
    viewGrade(){
      this.props.history.push('/viewGrade');
    }
    viewCourse(){
        this.props.history.push('/viewCourse');
    }

    listStudent(){
        this.props.history.push('/listStudent');
    }
    
  render() {
    return (
      <div className='container'>
        <Header></Header>
        <div className='container'>
        <div class="row row-cols-1 row-cols-md-3 g-4">
                  <div class="col">
                    <div class="card">
                    <img src={icourse} class="card-img-top" alt="..." style={{height:"200px"}}/>
                      <div class="card-body">
                        <h5 class="card-title"> <a href='./viewCourse'>< button style={{background:"purple",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>View Courses</button></a><br></br>
                        </h5>
                        </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                    <img src={igrade} class="card-img-top" alt="..." style={{height:"200px"}}/>
                      <div class="card-body">
                        <h5 class="card-title"> <a href='./viewGrade'>< button style={{background:"purple",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>View Grades</button></a><br></br>
                          </h5>
                     </div>
                    </div>
                   </div>
                  {/* <div class="col">
                    <div class="card">

                      <div class="card-body">
                        <h5 class="card-title"><a href='./viewFeedback'>< button style={{background:"purple",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>View Feedback</button></a><br></br>
                         </h5>
                      </div>
                    </div>
                  </div> */} 
                  <div class="col">
                    <div class="card">
                    <img src={iassign} class="card-img-top" alt="..." style={{height:"200px"}}/>
                      <div class="card-body">
                        <h5 class="card-title"><a href='./viewAssignStud'>< button style={{background:"purple",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>View Assignment</button></a><br></br>
                         </h5>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      
                    <img src={wal1} class="card-img-top" alt="..." style={{height:"200px"}}/>
                      <div class="card-body">
                        <h5 class="card-title"><a href='./courseEnroll'>< button style={{background:"purple",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}> Enroll Here</button></a><br></br>
                         </h5>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card"> 
                   <img src={imsg} class="card-img-top" alt="..." style={{height:"200px"}}/>
                      <div class="card-body">
                        <h5 class="card-title"><a href='./addMsg'>< button style={{background:"purple",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}> Add Messages </button></a><br></br>
                         </h5>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card"> 
                   <img src={iclass} class="card-img-top" alt="..." style={{height:"200px"}}/>
                      <div class="card-body">
                        <h5 class="card-title"><a href='./viewClassStud'>< button style={{background:"purple",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}> View Classes </button></a><br></br>
                         </h5>
                      </div>
                    </div>
                  </div>
                </div>
      
      </div>
        {/* <a href='./listStudent'>< button className='btn btn-block btn-primary'>List Student</button></a><br></br> */}
      {/* its views Grades ByStudentid  */}
      {/* <a href='./viewFeedback'>< button className='btn btn-block btn-primary'>View Feedback</button></a><br></br>
        
        <a href='./viewAssign'>< button className='btn btn-block btn-primary'>View Assignments</button></a><br></br>
        <a href='./enrollStudent'>< button className='btn btn-block btn-primary'>enrollStudent</button></a><br></br> */}
      </div>
    )
  }
}
