import React, { Component } from 'react'
import Header from './Header';
import icourse from './Images/course.jpg';
import iassign from './Images/assign.jpg';
import igrade from './Images/grades.jpg';
import istud from './Images/stud.jpg';
import imsg from './Images/msg.jpg';
import Footer from './Footer';

export default class TeacherApp extends Component {
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
      <div style={{height:'1000px'}}>
        <Header></Header>
        <div className='container'>
        <div class="row row-cols-1 row-cols-md-3 g-4">
                  <div class="col">
                    <div class="card">
                    <img src={icourse} class="card-img-top" alt="..." style={{height:"200px"}}/>
                      <div class="card-body">
                        <h5 class="card-title"> <a href='./viewCourse'>< button style={{background:"black",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>View Courses</button></a><br></br>
                        </h5>
                        </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                    <img src={igrade} class="card-img-top" alt="..." style={{height:"200px"}}/>
                      <div class="card-body">
                        <h5 class="card-title"> <a href='./viewGrade'>< button style={{background:"black",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>View Grades</button></a><br></br>
                          </h5>
                     </div>
                    </div>
                   </div>
                  <div class="col">
                    <div class="card">
                    <img src={iassign} class="card-img-top" alt="..." style={{height:"200px"}}/>
                      <div class="card-body">
                        <h5 class="card-title"><a href='./addAssign'>< button style={{background:"black",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>Add Assignments Here</button></a><br></br>
                         </h5>
                      </div>
                    </div>
                  </div> 
                  
                  <div class="col">
                    <div class="card">
                        
                   <img src={istud} class="card-img-top" alt="..." style={{height:"200px"}}/>
                      <div class="card-body">
                        <h5 class="card-title"><a href='./enrollStud'>< button style={{background:"black",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>View Enroll-Students</button></a><br></br>
                         </h5>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card"> 
                   <img src={iassign} class="card-img-top" alt="..." style={{height:"200px"}}/>
                      <div class="card-body">
                        <h5 class="card-title"><a href='./viewAssign'>< button style={{background:"black",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>View Assignment</button></a><br></br>
                         </h5>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card"> 
                   <img src={imsg} class="card-img-top" alt="..." style={{height:"200px"}}/>
                      <div class="card-body">
                        <h5 class="card-title"><a href='./addMsg'>< button style={{background:"black",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}> Add Messages </button></a><br></br>
                         </h5>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card"> 
                   <img src={icourse} class="card-img-top" alt="..." style={{height:"200px"}}/>
                      <div class="card-body">
                        <h5 class="card-title"><a href='./addCourse'>< button style={{background:"black",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}> Add Courses</button></a><br></br>
                         </h5>
                      </div>
                    </div>
                  </div>
                </div>
      
      </div>

        </div>
        
    )
  }
}
