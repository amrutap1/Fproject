import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import StudentApp from './StudentApp';
class Login extends Component {

  constructor(props) {
    super(props);
    this.studentApp=this.studentApp.bind(this);
    this.state = {
      id: '',
      username:'',
      password: '',
      role:''

    };
  }
  studentApp(){
    this.props.history.push('/studentApp')
  }
  handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/user/addUser', {
        id: this.state.id,
        userName:this.state.username,
        password: this.state.password,
        role:this.state.role
      })
    //   .then(data => {
    //     const { role } = data.bd

    //     if(role == 'STUDENT') window.location.href = '../StudentApp'
    //     else  window.location.href = '../viewCourse'
    // } );
      console.log(response.data); // Handle successful login
    //   this.props.history.push('./studentApp');
    } catch (error) {
      console.error(error); // Handle error
    }
  };


  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='container'>
        <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <h1 class="text-center mb-5">Log In</h1>
            <form class="container" id="formLogin" onSubmit={this.handleLogin}>
            
            <div class="mb-3">
          <label>Id:</label>
          <input
            type="number"
            name="id"
            className="form-control"
            value={this.state.id}
            onChange={this.handleInputChange}
            required
            placeholder='Enter Id'
          /><br></br></div>
          <div class="mb-3">
           <label>userName:</label>
           <input
            type="text"
            className="form-control"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            required
            placeholder="Enter username"
          /><br></br>
            </div>
            <div class="mb-3">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
            placeholder="Enter Password"
          /><br></br></div>
          <div class="mb-3">
           <label>Role:</label>
          <input
            type="text"
            className="form-control"
            name="role"
            value={this.state.role}
            onChange={this.handleInputChange}
            required
            placeholder="Enter Role"
          /><br></br>
            </div>
            <a href='./studentApp' style={{"text-decoration":"none","color":"white"}}>
        <button type="submit" style={{"background-color":"Black","color":"white"}} >Login</button>
        </a></form>
      </div>
      </div></div></div>
    );
  }
}

export default Login;
