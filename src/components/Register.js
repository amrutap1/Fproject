// import React, { Component } from 'react';
// import axios from 'axios';
// export default class Register extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//     //   id: '',
//       username:'',
//       password: '',
//       role:''
//     };
//     this.hello=this.hello.bind(this);
//     // this.handleInputChange=this.handleInputChange.bind(this);
//     // this.handleLogin=this.handleLogin.bind(this);
//   }
//   handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8000/user/addUser', {
//         // id: this.state.id,
//         userName:this.state.username,
//         password: this.state.password,
//         role:this.state.role
//       })
//     //   .then(data => {
//     //     const { role } = data.bd

//     //     if(role == 'STUDENT') window.location.href = '../StudentApp'
//     //     else  window.location.href = '../viewCourse'
//     // } );
//       console.log(response.data); // Handle successful login
//     //   this.props.history.push('./studentApp');
//     alert("Registered Successfully");
//     } catch (error) {
//       console.error(error); // Handle error
//     }
//   };

//   hello=(e)=>{
//       this.props.history.push('./viewCourse');  
//   }

//   handleInputChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   render() {
//     return (
//       <div className='container'>
//         <div class="container my-5">
//         <div class="row justify-content-center" >
//           <div class="col-md-6"  style={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',height:'600px'}}>
//             <br></br>
//             <h1 class="text-center mb-5">REGISTER HERE</h1>
//             <form class="container" id="formLogin" onSubmit={this.handleLogin}>
//           <div class="mb-3">
//            <label>USERNAME:</label>
//            <input
//             type="text"
//             className="form-control"
//             name="username"
//             value={this.state.username}
//             onChange={this.handleInputChange}
//             required
//             placeholder="Enter username"
//           />
//             </div>
//             <div class="mb-3">
//           <label>PASSWORD:</label>
//           <input
//             type="password"
//             className="form-control"
//             name="password"
//             value={this.state.password}
//             onChange={this.handleInputChange}
//             required
//             placeholder="Enter Password"
//           /></div>
//           <div class="mb-3">
//            <label>ROLE</label>
//           <input
//             type="text"
//             className="form-control"
//             name="role"
//             value={this.state.role}
//             onChange={this.handleInputChange}
//             required
//             placeholder="Enter Role"
//           />
//             </div>
//         <button type="submit" style={{background:"Black",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}} >Register</button>
//         </form>
//        <br></br> 
//        <a href='./login'><button onChange={this.hello}  style={{background:"black",color:"whitesmoke" ,height:"50px" ,width:"210px" ,marginLeft:"10px", borderRadius:"40px"}}>login</button></a>
//       </div>
//       </div></div></div>
//     );
//   }
// }

import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      role: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleLogin = async (e) => {
    e.preventDefault();
    const { password, role } = this.state;

    // Password validation: At least one uppercase letter, one digit, and one special character
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password must contain at least 8 characters including one uppercase letter, one digit, and one special character.');
      return;
    }

    // Role validation: Capital letters only
    const roleRegex = /^[A-Z]+$/;
    if (!roleRegex.test(role)) {
      alert('Role must consist of capital letters only.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/user/addUser', {
        userName: this.state.username,
        password: this.state.password,
        role: this.state.role
      });
      console.log(response.data); // Handle successful login
      alert('Registered Successfully');
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-6" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', height: '600px' }}>
              <br />
              <h1 className="text-center mb-5">REGISTER HERE</h1>
              <form className="container" id="formLogin" onSubmit={this.handleLogin}>
                <div className="mb-3">
                  <label>USERNAME:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    required
                    placeholder="Enter username"
                  />
                </div>
                <div className="mb-3">
                  <label>PASSWORD:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    required
                    placeholder="Enter Password"
                  />
                </div>
                <div className="mb-3">
                  <label>ROLE</label>
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
                <button
                  type="submit"
                  style={{
                    background: 'Black',
                    color: 'whitesmoke',
                    height: '50px',
                    width: '210px',
                    borderRadius: '40px'
                  }}
                >
                  Register
                </button>
              </form>
              <br />
              <a href="./login">
                <button
                  style={{
                    background: 'black',
                    color: 'whitesmoke',
                    height: '50px',
                    width: '210px',
                    marginLeft: '10px',
                    borderRadius: '40px'
                  }}
                >
                  Login
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
