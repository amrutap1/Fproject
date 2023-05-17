import React, { Component } from 'react'
import axios from 'axios';
export default class Login extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: ""
     
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { userName, password } = this.state;

    axios
      .post(
        "http://localhost:8000/user/addUser",
        {
          user: {
            userName: userName,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
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

