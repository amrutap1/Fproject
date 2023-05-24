import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div >
          <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"black"}}>
            <a class="navbar-brand" href="../TeacherApp" style={{color:"white",paddingLeft:"30px" }}><b>L  M  S</b></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="../StudentApp" style={{color:"white",paddingRight:"50px"}}><b>Home</b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../ViewCourse" style={{color:"white",paddingRight:"50px"}}><b>Course</b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../viewGrade" style={{color:"white",paddingRight:"50px"}}><b>Grade</b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../viewAssignStud" style={{color:"white",paddingRight:"50px"}}><b>Assignments</b></a>
                </li>
                </ul>
            </div>
            </nav>
      </div>
    )
  }
}
