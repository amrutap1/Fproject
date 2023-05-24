import React, { Component } from 'react';
import StudentService from '../service/StudentService';
import axios from 'axios';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      role: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    const { userName, password, role } = this.state;
    const user = {
      userName,
      password,
      role,
    };
    try {
      const response = await axios.post("http://localhost:8000/admin/login", user);
      console.log(response.data);
      if (response.data === 'success') {
        if(role== 'STUDENT'){
  
        window.location.replace('/StudentApp');
        }else{
          window.location.replace('/TeacherApp');
        }

      } else {
        alert('Wrong Credentials');
        console.log(response.data)
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred during login');
    }
  };

  render() {
    const { userName, password, role } = this.state;

    return (
      <div className='container-fluid' >
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="./home">L M S</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      
          
      <form class="d-flex" role="search">
      
     <a href='./addCourse'><button class="btn " style={{marginLeft:"1150px", background:'black',color:"white"}}  >Home</button></a>
      </form>
    </div>
  </div>
</nav>
      <div className='container outer'>
        <div className='container inner loginForm' >      
        <br></br> 
         <h1 style={{textAlign:'center'}}>LOG IN</h1>
        <form onSubmit={this.handleLoginFormSubmit}>
          <label className='loginLabel'>
            Username
            
          </label><br></br>
          <input
              type="text"
              name="userName"
              value={userName}
              onChange={this.handleInputChange}
              className="form-control loginInput"
              required
              placeholder='Enter Username'
            />
         
          <label>
            Password
           
          </label><br></br>
          <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={this.handleInputChange}
              required
              placeholder='Enter Password'
            />
         
          <label>
            Role
           
          </label><br></br>
          <input
              type="text"
              name="role"
              className="form-control"
              value={role}
              onChange={this.handleInputChange}
              required
              placeholder='Enter Role'
            /><br></br>
      
          <button  class="loginButtom" type="submit">Login</button>
         
        </form>
      </div>
      </div>
      </div>
    );
  }
}

export default Login;

