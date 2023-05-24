// import React, { Component } from 'react';
// import axios from 'axios';
// import wal from '../Images/wal.png';

// class EnrolledStudent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       enrollment: [],
//       courseId: ''
//     };
//   }

//   handleInputChange = (event) => {
//     this.setState({ courseId: event.target.value });
//   }

//   fetchEnrolledStudents = () => {
//     const { courseId } = this.state;
//     axios.get(`http://localhost:8000/teacher/${courseId}/enrollments`)
//       .then(response => {
//         this.setState({ enrollment: response.data });
//       })
//       .catch(error => {
//         console.error('Error fetching enrolled students:', error);
//       });
//   }

//   render() {
//     const { enrollment, courseId } = this.state;
//     return (
//       <div className='container' style={{backgroundImage:`url(${wal})` ,height:'800px'}}>
//         <div className='container'>

//             <br></br>

//         <h2 style={{padding:'30px' ,color:'white'}} >ENROLLED STUDENTS</h2>
//         <table>
//         <div>
//             <tr >
//                 <td>
//                  <h3 htmlFor="courseId"  style={{color:'white', marginLeft:'30px'}}>Course ID </h3></td>
//             </tr>
        
//             <tr ><td style={{padding:'30px' ,color:'white' }} ><input 
//             type="text"
//             id="courseId"
//             className="form-control"
//             value={courseId}
//             onChange={this.handleInputChange}
//             placeholder='Enter CourseId'
            
//           /></td></tr>
//          <tr><td style={{color:'white' }} > <button onClick={this.fetchEnrolledStudents} style={{marginLeft:'30px',background:"black",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}} >Fetch STUDENTS</button><br></br></td></tr>
//         </div>
//         <tr>
//           {enrollment.map(student => (
    
//             <div  key={student.id} > 
//             <h3><td style={{padding:'20px' ,color:'white' ,marginLeft:'20px'}} >ENROLL ID: {student.enrollId}</td>
//            <td style={{padding:'30px' ,color:'white'}} >STUDENT ID: {student.user.id}</td>
//            <td style={{padding:'30px' ,color:'white' }} >STUDENT NAME: {student.user.userName}</td></h3>
           
//         </div>
//           ))}
//           </tr>
//         </table>
//         </div>
//       </div>
//     );
//   }
// }

// export default EnrolledStudent;
import React, { Component } from 'react';
import axios from 'axios';
import wal from '../Images/imag.jpg';
import '../style.css';
import Navbar from '../../Navbar';

class EnrolledStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enrollment: [],
      courseId: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ courseId: event.target.value });
  }

  fetchEnrolledStudents = () => {
    const { courseId } = this.state;
    axios.get(`http://localhost:8000/teacher/${courseId}/enrollments`)
      .then(response => {
        this.setState({ enrollment: response.data });
      })
      .catch(error => {
        console.error('Error fetching enrolled students:', error);
      });
  }

  render() {
    const { enrollment, courseId } = this.state;
    return (
      <div>
        <Navbar></Navbar>
      <div className="container  backimg" style={{ height: '800px'   }}>
        <div className="container" style={{}}>
          <br></br>
          <h2 className="mt-5 ">ENROLLED STUDENTS</h2>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="form-group">
                <h5 htmlFor="courseId" >Course ID</h5>
                <input
                  type="text"
                  id="courseId"
                  className="form-control"
                  value={courseId}
                  onChange={this.handleInputChange}
                  placeholder="Enter Course ID"
                />
              </div>
              <br></br>
              <button
                className="btn btn-dark btn-block"
                onClick={this.fetchEnrolledStudents}
              >
                Fetch STUDENTS
              </button>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <table className="table table-bordered"cellPadding='10' align="center" style={{textAlign:'center',width:'800px' }} >
                <thead className="thead-dark">
                  <tr>
                    <th >ENROLL ID</th>
                    <th>STUDENT ID</th>
                    <th>STUDENT NAME</th>
                  </tr>
                </thead>
                <tbody>
                  {enrollment.map(student => (
                    <tr key={student.id}>
                      <td>{student.enrollId}</td>
                      <td>{student.user.id}</td>
                      <td>{student.user.userName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div></div>
    );
  }
}

export default EnrolledStudent;
