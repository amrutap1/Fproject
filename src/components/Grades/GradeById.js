// import React, { Component } from 'react';
// import axios from 'axios';


// class GradeById extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       studentId: '',     // Student ID input field value
//       submission: []
//     };
//   }

//   handleChange = event => {
//     this.setState({ studentId: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { studentId } = this.state;
//     this.fetchGrades(studentId);
//   };

//   fetchGrades = studentId => {
//     axios.get(`http://localhost:8000/user/${studentId}/grades`)
//       .then(response => {
//         this.setState({ submission: response.data });
//       })
//       .catch(error => {
//         console.error('Error fetching grades:', error);
//       });
//   };

//   render() {
//     const { studentId, submission } = this.state;

//     return (
//       <div className='container' style={{height:}} >
//       <div className='container'>
//         <h1 style={{padding:'30px' ,color:'black'}}>Grades and Feedback</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label  style={{color:'black', marginLeft:'30px'}}>
//             Student ID:
//             <input type="text" value={studentId} onChange={this.handleChange} />
//           </label>
//           <button type="submit" style={{marginLeft:'30px',background:"black",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>Fetch Grades</button>
//         </form>
//         {submission.length > 0 ? (
//           submission.map(grade => (
//             <div key={grade.id}>
//               <p>Grade: {grade.grade}</p>
//               <p>Feedback: {grade.feedback}</p>
//             </div>
//           ))
//         ) : (
//           <p>No grades found for the specified student ID.</p>
//         )}
//       </div>
//       </div>
//     );
//   }
// }

// export default GradeById;
import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar';

class GradeById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: '', // Student ID input field value
      submission: []
    };
  }

  handleChange = (event) => {
    this.setState({ studentId: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { studentId } = this.state;
    this.fetchGrades(studentId);
  };

  fetchGrades = (studentId) => {
    axios
      .get(`http://localhost:8000/user/${studentId}/grades`)
      .then((response) => {
        this.setState({ submission: response.data });
      })
      .catch((error) => {
        console.error('Error fetching grades:', error);
      });
  };

  render() {
    const { studentId, submission } = this.state;

    return (
      <div>
        <Navbar></Navbar>
      {/* <div className="container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
        {/* <div className="container" style={{ textAlign: 'center', color: 'black' , width:'500px' }}>
          <h1 style={{ padding: '30px' }}>Grades and Feedback</h1>
          <form onSubmit={this.handleSubmit} style={{ marginBottom: '20px' }}>
            <h4 style={{ color: 'black' ,paddingRight:"300px"}}>
              STUDENT ID  </h4>
              <input type="text" value={studentId} 
              onChange={this.handleChange} 
              style={{ marginLeft: '10px' }} 
              className="form-control"
              required
              placeholder='Enter Id'/>
          
            <br></br>
            <button
              type="submit"
              style={{
                marginLeft: '30px',
                background: 'black',
                color: 'whitesmoke',
                height: '50px',
                width: '210px',
                borderRadius: '40px',
                border: 'none'
              }}
            >
              Fetch Grades
            </button>
          </form>
          {submission.length > 0 ? (
            <table className="table table-striped table-bordered" style={{ margin: 'auto', width: '80%' }}>
              <thead>
                <tr>
                  <th>Grade</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {submission.map((grade) => (
                  <tr key={grade.id}>
                    <td>{grade.grade}</td>
                    <td>{grade.feedback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No grades found for the specified student ID.</p>
          )}
        </div>
      </div> */}
      <div className="container  backimg" style={{ height: '800px'   }}>
        <div className="container" style={{}}>
          <br></br>
          <h2 className="mt-5 ">Grades and Feedback</h2>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="form-group">
                <h5 htmlFor="courseId" >STUDENT ID</h5>
                <input
                  type="text"
                  id="studentId"
                  className="form-control"
                  value={studentId} 
                  onChange={this.handleChange} 
                  required
                  placeholder='Enter Id'
                />
              </div>
              <br></br>
              <button
                className="btn btn-dark btn-block"
                onClick={this.handleSubmit} 
              >
               Fetch Grades
              </button>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <table className="table table-bordered"cellPadding='10' align="center" style={{textAlign:'center',width:'800px' }} >
                <thead className="thead-dark">
                  <tr>
                    <th>AssignId</th>
                  <th>Grade</th>
                  <th>Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {submission.map(grade => (
                     <tr key={grade.id}>
                       <td>{grade.assignId.assignId}</td>
                     <td>{grade.grade}</td>
                    
                     <td>{grade.feedback}</td>
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

export default GradeById;
