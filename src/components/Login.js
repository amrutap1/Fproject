import React, { Component } from 'react';
import StudentService from '../service/StudentService';
import axios from 'axios';

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

      if (response.data === 'success') {
        localStorage.setItem('role', role);
        localStorage.setItem('userName', userName);
        this.props.setUserRole(role);
        window.location.replace('/StudentApp');
      } else {
        alert('Wrong Credentials');
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred during login');
    }
  };

  render() {
    const { userName, password, role } = this.state;

    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleLoginFormSubmit}>
          <label>
            userName:
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Role:
            <input
              type="text"
              name="role"
              value={role}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;



// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/admin/logins', {
//         userName,
//         password,
//       });
//       console.log(response.data); // Handle the response data as needed
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Username"
//         value={userName}
//         onChange={(e) => setUserName(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;
