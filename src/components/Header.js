import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='container'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">LMS</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="../StudentApp">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../ViewCourse">Course</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../viewGrade">Grade</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Feedback</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../viewAssign">Assignments</a>
                </li>
                </ul>
            </div>
            </nav>
            {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src="..." alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="./Images/logo192.png" alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Third slide"/>
                    </div>
                </div>
                </div> */}
                
</div>        
      
    )
  }
}
