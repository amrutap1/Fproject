import React, { Component } from 'react'
import wal1 from'./Images/wal1.jpg';
import code from './Images/code.jpg';
import lms from './Images/lms.png';
export default class Header extends Component {
  render() {
    return (
      <div className='container' >
            <div className='container' style={{margin:"0px"}}>
                <div className='container' style={{width:"100%",margin:"0px"}}>
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={lms} class="d-block w-100" alt="..." style={{height:"400px" ,width:"100%"}}/>
                    
                    </div>
                    <div class="carousel-item">
                    <img src={code} class="d-block w-100" alt="..."  style={{height:"400px"}}/>
                    <div class="carousel-caption d-none d-md-block">
                        
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={wal1} class="d-block w-100" alt="..." style={{height:"400px"}}/>
                    {/* <div class="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p> */}
                     
                    <div class="carousel-caption d-none d-md-block">
                        <h2 style={{fontFamily:"fantasy",color:"purple"}}>ENROLL COURSES</h2>
                        <p style={{fontFamily:"serif",color:"purple"}}>“Develop a passion for learning. If you do, you will never cease to grow.” </p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
                </div>
            

            </div>
          
                
        </div>        
      
    )
  }
}
