import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import StudentApp from './StudentApp';
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
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
        <button type="submit" style={{"background-color":"Black","color":"white"}} >Register</button>
        </a>
        </form>
        <a href='./viewCourse'><button onChange={this.hello}>login</button></a>
      </div>
      </div></div></div>
    );
  }
}



// import React, { useState } from 'react'
// import axios from 'axios';

// export default function Login() {

//   const [userName,setUsername]=useState("");
//   const [id,setId]=useState("");
//   const[role,setRole]=useState("");
//   const [password,setPassword]=useState("");


//   const login=()=>{
//     axios.post('http://localhost:8000/user/addUser', {
//         id:id,
//         userName:userName,
//         password: password,
//         role:role
//       }).then((response)=>{
//         console.log(response);
//       });
//     };
//   return (
//     <div>

//   <div class="container">
//   <label for="uname"><b>id</b></label>
//     <input type="number" placeholder="Enter id" onChange={(e)=>{
//       setId(e.target.value)
//     }} name="uname" required/>

//     <label for="uname"><b>Username</b></label>
//     <input type="text" placeholder="Enter Username" onChange={(e)=>{
//       setUsername(e.target.value)
//     }} name="uname" required/>

//     <label for="psw"><b>Password</b></label>
//     <input type="password" placeholder="Enter Password" onChange={(e)=>{
//       setPassword(e.target.value)
//     }} name="psw" required/>

//     <label for="uname"><b>role</b></label>
//     <input type="text" placeholder="Enter role" name="role" onChange={(e)=>{
//       setRole(e.target.value)
//     }} required/>

//     <button onClick={login}>Login</button>
  
// </div>
//     </div>
//   )
// }

