// import React, { Component } from 'react'
// import Header from '../Header'
// import StudentService from '../../service/StudentService'
// export default class ViewGrades extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             submission :[]
//         }
//         this.listGrade=this.listGrade.bind(this);
//       }
    
//       listGrade(){
//         this.props.history.push('/')
//       }
      
//       componentDidMount(){
//         StudentService.getGrade().then((res)=>{
//             this.setState({
//               submission : res.data
//             });
//         });
//       }
//   render() {
//     return (
//       <div className='container'>
//         <h2 style={{alignContent:"center",fontFamily:"sans-serif", marginTop:"50px",marginLeft:"450px"}}>GRADES </h2>
//         <div className='container' style={{width:"800px", marginTop:"10px"}}>
         
//         <table className="table table-striped table-bordered" align='center' >
//           <thead >
//             <tr>
//             <td>Id</td>
//             <td>Feedback</td>
//             <td>Grade</td>
//             <td>Student Id</td>
//             <td>Assign Id</td>
//           </tr></thead>
//           <tbody>
//             {
//               this.state.submission.map(
//                 st=>
//                 // console.log(st)
//                 <tr key={st.subId}> 
//                 <td>{st.subId}</td>
//                 <td>{st.feedback}</td>
//                 <td>{st.grade}</td>
//                 <td>{st.studentId.id}</td>
//                <td>{st.assignId.assignId}</td>  
//                 </tr>
//               )
//             }
//           </tbody>
//       </table>
        

//         </div>
//       </div>
//     )
//   }
// }
import React, { Component } from 'react';
import Header from '../Header';
import StudentService from '../../service/StudentService';
import Navbar from '../../Navbar';
import wal from '../Images/wal.png'

export default class ViewGrades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submission: []
    };
    this.listGrade = this.listGrade.bind(this);
  }

  listGrade() {
    this.props.history.push('/');
  }

  componentDidMount() {
    StudentService.getGrade().then((res) => {
      this.setState({
        submission: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
      <div className="container" style={{height:"800px",width:"1200px"}}>
        <h2
          style={{
            textAlign: "left",
            fontFamily: "sans-serif",
            marginTop: "50px",
            marginLeft:"100px"
          }}
        ><u>          GRADES</u>
        </h2>
        <br></br>
        <div
          className="container"
          style={{ width: "900px",color:'white', marginTop: "10px", marginLeft: "auto", marginRight: "auto", boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}
        >
          <table className="table table-striped " align="center" style={{width:"850px"}} >
            <thead>
              <tr>
                <th>Id</th>
                <th>Feedback</th>
                <th>Grade</th>
                <th>Student Id</th>
                <th>Assign Id</th>
              </tr>
            </thead>
            <tbody>
              {this.state.submission.map((st) => (
                <tr key={st.subId}>
                  <td>{st.subId}</td>
                  <td>{st.feedback}</td>
                  <td>{st.grade}</td>
                  <td>{st.studentId.id}</td>
                  <td>{st.assignId.assignId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div></div>
    );
  }
}
