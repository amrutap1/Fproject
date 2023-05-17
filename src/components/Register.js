import React, { Component } from 'react';
import axios from 'axios';
export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
    //   id: '',
      username:'',
      password: '',
      role:''
    };
    this.hello=this.hello.bind(this);
    // this.handleInputChange=this.handleInputChange.bind(this);
    // this.handleLogin=this.handleLogin.bind(this);
  }
  handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/user/addUser', {
        // id: this.state.id,
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
    alert("Registered Successfully");
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  hello=(e)=>{
      this.props.history.push('./viewCourse');  
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='container'>
        <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <h1 class="text-center mb-5">Register Here</h1>
            <form class="container" id="formLogin" onSubmit={this.handleLogin}>
            
            {/* <div class="mb-3">
          <label>Id:</label>
          <input
            type="number"
            name="id"
            className="form-control"
            value={this.state.id}
            onChange={this.handleInputChange}
            required
            placeholder='Enter Id'
          /><br></br></div> */}
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
          />
            </div>
        <button type="submit" style={{background:"purple",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}} >Register</button>
        </form>
       <br></br> 
       <a href='./login'><button onChange={this.hello}  style={{background:"purple",color:"whitesmoke" ,height:"50px" ,width:"210px" ,marginLeft:"10px", borderRadius:"40px"}}>login</button></a>
      </div>
      </div></div></div>
    );
  }
}